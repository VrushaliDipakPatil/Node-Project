const Store= require('../models/store');

const addStoreItem = async (req, res) => {
    try {
        const { name, description, price, quantity } = req.body;
        const storeItem = await Store.create({
            name,
            description,
            price,
            quantity
        });
        res.status(200).send({ message: "Store item added successfully", storeItem });
    } catch (error) {
        console.error("Error adding store item:", error);
        res.status(500).send({ message: "Error adding store item" });
    }
};

const fetchStoreItems = async (req, res) => {
    try {
        const storeItems = await Store.findAll();
        res.status(200).send(storeItems);
    } catch (error) {
        console.error("Error fetching store items:", error);
        res.status(500).send({ message: "Error fetching store items" });
    }
};

const updateQuantity = async (req, res) => {
try {

    const { id } = req.params;
    const { quantity } = req.body;

    const storeItem = await Store.findByPk(id);

    if (!storeItem) {
        return res.status(404).send({
            message: "Store item not found"
        });
    }

    // Check whether requested quantity is valid
    if (!quantity || quantity <= 0) {
        return res.status(400).send({
            message: "Quantity must be greater than 0"
        });
    }

    // Check whether enough stock is available
    if (storeItem.quantity < quantity) {
        return res.status(400).send({
            message: "Not enough stock available"
        });
    }

    // Subtract purchased quantity from current quantity
    const newQuantity = storeItem.quantity - quantity;

    await storeItem.update({
        quantity: newQuantity
    });

    res.status(200).send({
        message: "Store item quantity updated successfully",
        storeItem
    });

} catch (error) {

    console.error("Error updating store item quantity:", error);

    res.status(500).send({
        message: "Error updating store item quantity"
    });

}
};


module.exports = {
    addStoreItem,
    fetchStoreItems,
    updateQuantity
};