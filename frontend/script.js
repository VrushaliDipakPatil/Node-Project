const form = document.getElementById("expenseForm");
const amount = document.getElementById("amount");
const description = document.getElementById("description");
const category = document.getElementById("category");
const expenseList = document.getElementById("expenseList");

let editId = null;

// Load Data
window.onload = function () {
    displayExpenses();
};

// Form Submit
form.addEventListener("submit", function (e) {

    e.preventDefault();

    const expense = {
        id: editId ? editId : Date.now(),
        amount: amount.value,
        description: description.value,
        category: category.value
    };

    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

    if (editId) {

        expenses = expenses.map(item =>
            item.id === editId ? expense : item
        );

        editId = null;

    } else {

        expenses.push(expense);

    }

    localStorage.setItem("expenses", JSON.stringify(expenses));

    form.reset();

    displayExpenses();

});


// Display Expenses

function displayExpenses() {

    expenseList.innerHTML = "";

    const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

    expenses.forEach(expense => {

        const li = document.createElement("li");

        li.className = "list-group-item";

        li.innerHTML = `

            <span>
                <strong>₹${expense.amount}</strong>
                -
                ${expense.category}
                -
                ${expense.description}
            </span>

            <div class="action-buttons">

                <button
                    class="btn btn-warning btn-sm"
                    onclick="editExpense(${expense.id})">
                    Edit
                </button>

                <button
                    class="btn btn-danger btn-sm"
                    onclick="deleteExpense(${expense.id})">
                    Delete
                </button>

            </div>

        `;

        expenseList.appendChild(li);

    });

}


// Delete

function deleteExpense(id) {

    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

    expenses = expenses.filter(item => item.id !== id);

    localStorage.setItem("expenses", JSON.stringify(expenses));

    displayExpenses();

}


// Edit

function editExpense(id) {

    const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

    const expense = expenses.find(item => item.id === id);

    amount.value = expense.amount;
    description.value = expense.description;
    category.value = expense.category;

    editId = id;

}