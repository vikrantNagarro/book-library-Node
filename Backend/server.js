const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = 5000;

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

const DATA_FILE = path.join(__dirname, 'books.json');

// Helper functions
const readBooks = () => {
    try {
        const data = fs.readFileSync(DATA_FILE, 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
};

const saveBooks = (books) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(books, null, 2));
};

// --- Endpoints ---

// Get all books (with optional filter and search)
app.get('/books', (req, res) => {
    const { filter, search } = req.query; // filter = all/read/unread, search = title/author
    let books = readBooks();

    // Filter by read/unread
    if (filter === 'read') books = books.filter(b => b.isRead);
    if (filter === 'unread') books = books.filter(b => !b.isRead);

    // Search by title or author
    if (search) {
        const term = search.toLowerCase();
        books = books.filter(b => 
            b.title.toLowerCase().includes(term) || b.author.toLowerCase().includes(term)
        );
    }

    res.json(books);
});

// Get a single book
app.get('/books/:id', (req, res) => {
    const books = readBooks();
    const book = books.find(b => b.id === req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
});

// Create a book
app.post('/books', (req, res) => {
    const { title, author, description } = req.body;
    if (!title || !author) return res.status(400).json({ error: 'Title and Author are required' });

    const books = readBooks();
    const newBook = {
        id: uuidv4(),
        title,
        author,
        description: description || '',
        isRead: false,
        date: new Date().toISOString()
    };
    books.push(newBook);
    saveBooks(books);
    res.status(201).json(newBook);
});

// Update book (title, author, description)
app.put('/books/:id', (req, res) => {
    const { title, author, description } = req.body;
    const books = readBooks();
    const index = books.findIndex(b => b.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Book not found' });

    books[index] = { ...books[index], title, author, description };
    saveBooks(books);
    res.json(books[index]);
});

// Toggle read/unread status
app.patch('/books/:id/status', (req, res) => {
    const books = readBooks();
    const book = books.find(b => b.id === req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });

    book.isRead = !book.isRead;
    saveBooks(books);
    res.json(book);
});


// Delete a book
app.delete('/books/:id', (req, res) => {
    let books = readBooks();
    const exists = books.some(b => b.id === req.params.id);
    if (!exists) return res.status(404).json({ error: 'Book not found' });

    books = books.filter(b => b.id !== req.params.id);
    saveBooks(books);
    res.json({ message: 'Book deleted' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});