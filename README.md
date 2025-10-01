# Book Library App

A simple **Book Library App** built with:  
- **Backend** → Node.js + Express (REST API with `books.json` storage)  
- **Frontend** → React + Redux Toolkit for state management  
- **Database** → JSON file

---

## Features
- Add, edit, delete, and search books  
- Filter books by status (Read / Unread)  
- Persist data in backend (`books.json`)  
- Modern UI with React + Redux  

---

## Project Structure
```
book-library-Node/
│
├── backend/           # Node.js + Express backend
│   ├── server.js      # Main server file
│   ├── books.json     # JSON database
│   ├── package.json
│
├── frontend/         
│   ├── src/           
│   ├── public/
│   ├── package.json
│
├── .gitignore         # Ignore node_modules, build files
└── README.md          # Project documentation
```

---

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/vikrantNagarro/book-library-Node.git
cd book-library-Node
```

### 2. Setup Backend
```bash
cd backend
npm install
npm start
```
By default, backend runs on:
```
http://localhost:5000
```

### 3. Setup Frontend
```bash
cd book-library-frontend
npm install
npm run start
```

## API Endpoints (Backend)

### Get all books
```http
GET /books
```

### Add a new book
```http
POST /books
Content-Type: application/json
{
  "title": "Book Name",
  "author": "Author Name",
  "status": "unread"
}
```

### Update a book
```http
PUT /books/:id
PATCH /books/:id/status
```

### Delete a book
```http
DELETE /books/:id
```

---

## Tech Stack
- **Frontend**: React + Redux Toolkit 
- **Backend**: Node.js + Express  
- **Database**: JSON file (books.json)  

---

## 💡 Notes
- Frontend and backend are separate modules and can run independently  
- Frontend communicates with backend through REST API  
- Can be easily extended to use a real database like MongoDB or SQL  
