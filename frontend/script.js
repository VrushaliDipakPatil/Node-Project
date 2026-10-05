const API_URL = "http://localhost:3000/users";

const appointmentForm = document.getElementById("appointmentForm");
const appointmentList = document.getElementById("appointmentList");
const submitBtn = document.getElementById("submitBtn");

let editingUserId = null;


// GET USERS
async function fetchUsers() {

    try {

        const response = await fetch(API_URL);

        const users = await response.json();

        appointmentList.innerHTML = "";

        users.forEach(user => {

            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.phone}</td>
                <td>${user.email}</td>

                <td>
                    <button
                        class="edit-btn"
                        onclick="editUser(${user.id}, '${user.name}', '${user.phone}', '${user.email}')">
                        Edit
                    </button>

                    <button
                        class="delete-btn"
                        onclick="deleteUser(${user.id})">
                        Delete
                    </button>
                </td>
            `;

            appointmentList.appendChild(row);

        });

    } catch (error) {

        console.error("Error fetching users:", error);

    }
}


// ADD / UPDATE USER
appointmentForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    const userData = {
        name,
        phone,
        email
    };

    try {

        let response;

        if (editingUserId === null) {

            // ADD USER
            response = await fetch(`${API_URL}/add`, {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(userData)

            });

        } else {

            // UPDATE USER
            response = await fetch(`${API_URL}/${editingUserId}`, {

                method: "PUT",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(userData)

            });

        }

        const result = await response.json();

        console.log(result);

        appointmentForm.reset();

        editingUserId = null;

        submitBtn.textContent = "Book Appointment";

        fetchUsers();

    } catch (error) {

        console.error("Error saving user:", error);

    }

});


// EDIT USER
function editUser(id, name, phone, email) {

    document.getElementById("name").value = name;
    document.getElementById("phone").value = phone;
    document.getElementById("email").value = email;

    editingUserId = id;

    submitBtn.textContent = "Update Appointment";

}


// DELETE USER
async function deleteUser(id) {

    const confirmDelete = confirm(
        "Are you sure you want to delete this appointment?"
    );

    if (!confirmDelete) {
        return;
    }

    try {

        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        const result = await response.json();

        console.log(result);

        fetchUsers();

    } catch (error) {

        console.error("Error deleting user:", error);

    }

}


// LOAD USERS WHEN PAGE OPENS
fetchUsers();