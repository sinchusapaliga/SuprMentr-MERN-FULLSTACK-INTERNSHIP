const express = require('express');
const router = express.Router();
const { authors } = require('../data');

// GET all authors
router.get('/', (req, res) => {
    res.json(authors);
});

// GET a specific author
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const author = authors.find(a => a.id === parseInt(id));
    if (author) {
        res.json(author);
    } else {
        res.status(404).json({ message: "Author not found" });
    }
});

// POST a new author
router.post('/', (req, res) => {
    const newAuthor = {
        id: authors.length + 1,
        ...req.body
    };
    authors.push(newAuthor);
    res.status(201).json({ message: "Author created successfully", data: newAuthor });
});

// PUT (update) an author
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const index = authors.findIndex(a => a.id === parseInt(id));
    if (index !== -1) {
        authors[index] = { ...authors[index], ...req.body };
        res.json({ message: `Author with ID: ${id} updated successfully`, data: authors[index] });
    } else {
        res.status(404).json({ message: "Author not found" });
    }
});

// DELETE an author
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = authors.findIndex(a => a.id === parseInt(id));
    if (index !== -1) {
        const deletedAuthor = authors.splice(index, 1);
        res.json({ message: `Author with ID: ${id} deleted successfully`, data: deletedAuthor[0] });
    } else {
        res.status(404).json({ message: "Author not found" });
    }
});

module.exports = router;
