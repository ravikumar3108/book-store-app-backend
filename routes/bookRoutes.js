const express = require('express')
const router = express.Router()
const { createBook, allBooks, getSingleBook, updateBook, deleteBook } = require("../controllers/bookControllers")
const verifyAdminToken  = require("../middlewares/verifyAdminToken")


router.post("/createbook", createBook)
router.get("/getallbooks", allBooks)
router.get("/:id", getSingleBook)
router.put("/edit/:id", updateBook)
router.post("/delete/:id", deleteBook)

module.exports = router