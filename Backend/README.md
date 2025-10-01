# Backend - Book Library API

This is the **backend** for the Book Library App, built using **Node.js + Express**.  
It provides REST APIs to manage books stored in a `books.json` file.  

---

## Features
- Get all books  
- Add a new book  
- Update an existing book  
- Delete a book  
- Data stored in `books.json` (acts as database)  

---

## Folder Structure
```
backend/
│── server.js        # Main server file
│── books.json       # JSON database (book records)
│── package.json     # Dependencies and scripts
│── node_modules/    # Installed packages
```

---

## ⚙️ Installation & Setup

### 1. Navigate to backend folder
```bash
cd backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the server
```bash
npm start
```

By default, the backend runs on:  
```
http://localhost:5000
```

---

## 📡 API Endpoints

### 🔹 Get all books
```http
GET /books
```

### 🔹 Add a new book
```http
POST /books
Content-Type: application/json
{
  "title": "Book Name",
  "author": "Author Name",
  "status": "unread"
}
```

### 🔹 Update a book
```http
PUT /books/:id
PATCH /books/:id
```

### 🔹 Delete a book
```http
DELETE /books/:id
```

---

## 🛠 Tech Stack
- **Node.js**  
- **Express.js**  
- **File System (fs)** for JSON storage  

## 👨Author

Developed by [**Vikrant Khajuria**](https://github.com/vikrantNagarro)

---

## License

This project is open-source and free to use.