const Book = require("../models/bookModel")


const createBook = async (req, res) => {
    try {
        console.log(req.body)
        const { title, description, category, trending, coverImage, oldPrice, newPrice } = req.body
        const newBook = new Book({
            title: title,
            description: description,
            category: category,
            trending: trending,
            coverImage: coverImage,
            oldPrice: oldPrice,
            newPrice: newPrice
        })

        await newBook.save()
        res.status(200).json({ message: "post book succesfully", book: newBook })
    } catch (error) {
        console.error("Creating book errro", error)
        res.status(400).json({ message: "failed to post book" })
    }

}

const allBooks = async (req, res) => {
    try {
        const getAllBooks = await Book.find({})
        res.status(200).send(getAllBooks)

    } catch (error) {
        console.error("Creating book errro", error)
        res.status(400).json({ message: "failed to getAllBooks" })
    }

}

const getSingleBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById({ _id: id })
        if (!book) {
            res.status(200).json({ message: "book not found" })
        } res.status(200).json({ message: "book", book: book })

    } catch (error) {
        console.error("Creating book errro", error)
        res.status(400).json({ message: "failed to get a book" })
    }

}

const updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedBook = await Book.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        )
        if (!updatedBook) {
            res.status(200).json({ message: "failed to update a book" })
        } res.status(200).json({ message: "book updated succesfully" })

    } catch (error) {
        console.error("Creating book errro", error)
        res.status(400).json({ message: "failed to update a book" })
    }

}

const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteddBook = await Book.findByIdAndDelete(id)
        if (!deleteddBook) {
            res.status(200).json({ message: "book not found" })
        }
        res.status(200).json({
            message: "book deleted successfully",
            book: deleteddBook
        })

    } catch (error) {
        console.error("Creating book errro", error)
        res.status(400).json({ message: "failed to delete a book" })
    }

}


module.exports = { createBook, allBooks, getSingleBook, updateBook, deleteBook }