const express = require("express");
const router = express.Router();
const storeController = require("../controller/storeController");

router.post("/add", storeController.addStoreItem);
router.get("/items", storeController.fetchStoreItems);
router.put("/update/:id", storeController.updateQuantity);

module.exports = router;