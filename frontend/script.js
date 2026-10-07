const form = document.getElementById("expenseForm");

const amount = document.getElementById("amount");
const description = document.getElementById("description");
const category = document.getElementById("category");

const expenseList = document.getElementById("expenseList");

const submitButton = document.getElementById("submitButton");

const message = document.getElementById("message");


// Backend URL
const API_URL = "http://localhost:3000/expenses";


// Used when editing an expense
let editId = null;


// Load expenses when page opens
document.addEventListener("DOMContentLoaded", function () {

    displayExpenses();

});


// --------------------------------------------------
// FORM SUBMIT
// --------------------------------------------------

form.addEventListener("submit", async function (event) {

    event.preventDefault();


    const expense = {

        amount: Number(amount.value),

        description: description.value,

        category: category.value

    };


    try {

        // EDIT EXPENSE
        if (editId !== null) {

            const response = await fetch(
                `${API_URL}/${editId}`,
                {
                    method: "PUT",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(expense)
                }
            );


            if (!response.ok) {
                throw new Error("Failed to update expense");
            }


            showMessage(
                "Expense updated successfully!",
                "success"
            );


            editId = null;

            submitButton.textContent = "Add Expense";

        }


        // ADD EXPENSE
        else {

            const response = await fetch(
               `${API_URL}/add`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(expense)
                }
            );


            if (!response.ok) {
                throw new Error("Failed to add expense");
            }


            showMessage(
                "Expense added successfully!",
                "success"
            );

        }


        // Clear form
        form.reset();


        // Reload expenses
        displayExpenses();


    } catch (error) {

        console.error(error);

        showMessage(
            "Something went wrong. Please try again.",
            "danger"
        );

    }

});


// --------------------------------------------------
// GET ALL EXPENSES
// --------------------------------------------------

async function displayExpenses() {

    try {

        const response = await fetch(API_URL);


        if (!response.ok) {
            throw new Error("Failed to fetch expenses");
        }


        const expenses = await response.json();


        expenseList.innerHTML = "";


        // If there are no expenses
        if (expenses.length === 0) {

            expenseList.innerHTML = `
                <li class="list-group-item text-center text-muted">
                    No expenses found.
                </li>
            `;

            return;
        }


        // Display every expense
        expenses.forEach(function (expense) {

            const li = document.createElement("li");

            li.className = "list-group-item";


            li.innerHTML = `

                <div class="expense-details">

                    <span class="expense-amount">
                        ₹${expense.amount}
                    </span>

                    <span class="expense-category">
                        ${expense.category}
                    </span>

                    <span class="expense-description">
                        ${expense.description}
                    </span>

                </div>


                <div class="action-buttons">

                    <button
                        class="btn btn-warning btn-sm"
                        onclick="editExpense(${expense.id})"
                    >
                        Edit
                    </button>


                    <button
                        class="btn btn-danger btn-sm"
                        onclick="deleteExpense(${expense.id})"
                    >
                        Delete
                    </button>

                </div>

            `;


            expenseList.appendChild(li);

        });


    } catch (error) {

        console.error(error);

        expenseList.innerHTML = `

            <li class="list-group-item text-center text-danger">

                Unable to load expenses.

                <br>

                Make sure your backend server is running.

            </li>

        `;

    }

}


// --------------------------------------------------
// DELETE EXPENSE
// --------------------------------------------------

async function deleteExpense(id) {

    const confirmDelete = confirm(
        "Are you sure you want to delete this expense?"
    );


    if (!confirmDelete) {
        return;
    }


    try {

        const response = await fetch(
            `${API_URL}/${id}`,
            {
                method: "DELETE"
            }
        );


        if (!response.ok) {
            throw new Error("Failed to delete expense");
        }


        showMessage(
            "Expense deleted successfully!",
            "success"
        );


        displayExpenses();


    } catch (error) {

        console.error(error);

        showMessage(
            "Unable to delete expense.",
            "danger"
        );

    }

}


// --------------------------------------------------
// EDIT EXPENSE
// --------------------------------------------------

async function editExpense(id) {

    try {

        const response = await fetch(
            `${API_URL}/${id}`
        );


        if (!response.ok) {
            throw new Error("Failed to get expense");
        }


        const expense = await response.json();


        // Put existing data into form
        amount.value = expense.amount;

        description.value = expense.description;

        category.value = expense.category;


        // Store ID
        editId = id;


        // Change button text
        submitButton.textContent = "Update Expense";


        // Scroll to form
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });


    } catch (error) {

        console.error(error);

        showMessage(
            "Unable to load expense.",
            "danger"
        );

    }

}


// --------------------------------------------------
// SHOW MESSAGE
// --------------------------------------------------

function showMessage(text, type) {

    message.textContent = text;

    message.className = `alert alert-${type}`;

    
    setTimeout(function () {

        message.className = "alert d-none";

    }, 3000);

}
