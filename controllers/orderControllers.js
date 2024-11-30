
const Order = require("../models/orderModel")

const createOrder = async (req, res) => {
    try {
        console.log(req.body)
        const newOrder = new Order({
            name: req.body.name,
            email: req.body.email,
            address: {
                city: req.body.address.city,
                country: req.body.address.country,
                state: req.body.address.state,
                zipcode: req.body.address.zipcode,
            },
            phone: req.body.phone,
            totalPrice: req.body.totalPrice,
            productIds: req.body.productIds
        });
        const saveOrder = await newOrder.save();
        res.status(200).json({ message: "Successfull create a order", order: saveOrder })
    } catch (error) {
        console.error("Error in creating a order")
        res.status(500).json({ message: "Failed to create an order" })

    }
}


const getOrderByEmail = async (req, res) => {
    try {
        const { email } = req.params;
        const allorders = await Order.find({ email }).sort({ createdAt: -1 })
        if (!allorders) {
            res.status(200).json({ message: "Orders not found" })
        }
        res.status(200).json(allorders)
    } catch (error) {
        console.error("failed to fetching orders")
        res.status(500).json("failed to fetch orders")
    }
}

module.exports = { createOrder, getOrderByEmail }