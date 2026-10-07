const API_URL = "http://localhost:3000/store";


const itemForm = document.getElementById("itemForm");

itemForm.addEventListener("submit", async function (event) {

event.preventDefault();

const name = document.getElementById("name").value;
const description = document.getElementById("description").value;
const price = Number(document.getElementById("price").value);
const quantity = Number(document.getElementById("quantity").value);


const item = {
    name: name,
    description: description,
    price: price,
    quantity: quantity
};


try {

    const response = await fetch(`${API_URL}/add`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(item)

    });


    const data = await response.json();


    if (!response.ok) {

        throw new Error(
            data.message || "Unable to add item"
        );

    }


    alert("Item added successfully!");


    itemForm.reset();


    // Refresh the item list
    loadItems();


} catch (error) {

    console.error(error);

    alert(error.message);

}

});


async function loadItems() {

try {

    const response = await fetch(
        `${API_URL}/items`
    );


    const data = await response.json();


    if (!response.ok) {

        throw new Error(
            data.message || "Unable to fetch items"
        );

    }


    displayItems(data);


} catch (error) {

    console.error(error);


    document.getElementById("itemsContainer").innerHTML = `

        <p class="empty-message">
            Unable to load store items.
        </p>

    `;

}


}


function displayItems(items) {

const container =
    document.getElementById("itemsContainer");


if (!items || items.length === 0) {

    container.innerHTML = `

        <p class="empty-message">
            No items available.
        </p>

    `;

    return;
}


container.innerHTML = "";


items.forEach(function (item) {

    const itemCard =
        document.createElement("div");


    itemCard.className = "item-card";


    itemCard.innerHTML = `

        <div class="item-name">
            ${item.name}
        </div>


        <div class="item-description">
            ${item.description}
        </div>


        <div class="item-details">

            <div class="detail">
                <strong>Price:</strong>
                ₹${item.price}
            </div>


            <div class="detail">
                <strong>Available:</strong>
                ${item.quantity}
            </div>

        </div>


        <div class="buttons">

            <button
                class="buy-btn"
                onclick="buyItem(${item.id}, 1)"
                ${item.quantity < 1 ? "disabled" : ""}
            >
                Buy 1
            </button>


            <button
                class="buy-btn"
                onclick="buyItem(${item.id}, 2)"
                ${item.quantity < 2 ? "disabled" : ""}
            >
                Buy 2
            </button>


            <button
                class="buy-btn"
                onclick="buyItem(${item.id}, 3)"
                ${item.quantity < 3 ? "disabled" : ""}
            >
                Buy 3
            </button>

        </div>

    `;


    container.appendChild(itemCard);

});


}


async function buyItem(id, quantityToBuy) {

try {

    const response = await fetch(
        `${API_URL}/update/${id}`,
        {

            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                quantity: quantityToBuy
            })

        }
    );


    const data = await response.json();


    if (!response.ok) {

        throw new Error(
            data.message || "Unable to buy item"
        );

    }


    alert(
        `Bought ${quantityToBuy} item(s) successfully!`
    );


    // Fetch updated quantity from backend
    loadItems();


} catch (error) {

    console.error(error);

    alert(error.message);

}


}


loadItems();
