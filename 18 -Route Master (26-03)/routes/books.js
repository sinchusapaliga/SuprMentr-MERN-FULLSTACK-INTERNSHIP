const express = require('express');
const router = express.Router();
const { books } = require('../data');

// GET all books
router.get('/', (req, res) => {
    res.json(books);
});

// GET a specific book
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const book = books.find(b => b.id === parseInt(id));
    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ message: "Book not found" });
    }
});

// POST a new book
router.post('/', (req, res) => {
    const newBook = {
        id: books.length + 1,
        ...req.body
    };
    books.push(newBook);
    res.status(201).json({ message: "Book created successfully", data: newBook });
});

// PUT (update) a book
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const index = books.findIndex(b => b.id === parseInt(id));
    if (index !== -1) {
        books[index] = { ...books[index], ...req.body };
        res.json({ message: `Book with ID: ${id} updated successfully`, data: books[index] });
    } else {
        res.status(404).json({ message: "Book not found" });
    }
});

// DELETE a book
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = books.findIndex(b => b.id === parseInt(id));
    if (index !== -1) {
        const deletedBook = books.splice(index, 1);
        res.json({ message: `Book with ID: ${id} deleted successfully`, data: deletedBook[0] });
    } else {
        res.status(404).json({ message: "Book not found" });
    }
});

module.exports = router;
