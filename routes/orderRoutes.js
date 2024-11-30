const express = require('express')
const router = express.Router()
const {createOrder,getOrderByEmail}  = require("../controllers/orderControllers")

router.post("/", createOrder);
router.get("/email/:email", getOrderByEmail)


module.exports = router