# Book Library App

A personal library manager built using **React**, **Redux Toolkit**, and **Bootstrap**. It allows users to add, edit, delete, and manage their books with read/unread status, and filter them accordingly.

---

## Features

- Add new books with title, author, and description  
- Edit existing books via modal form  
- Delete books  
- Mark books as Read or Unread  
- Filter by All, Read, or Unread  
- Search functionality
- Data persistence using `Json`  
- Clean and responsive UI using **Bootstrap**

---

## Tech Stack

- React
- Redux Toolkit
- Bootstrap
- CSS Modules
- Json for data persistence

---

## How to Run Locally

1. **Clone the repository**
   ```bash
   cd book-library-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the application**
   ```bash
   npm start
   ```
---

## Default Demo Book

On first load, the app includes a sample book:

- **Title**: Atomic Habits  
- **Author**: James Clear  
- **Description**: An easy & proven way to build good habits and break bad ones.

---

## Project Structure

```
src/
├── components/
│   ├── BookCard.js
│   ├── BookForm.js
│   ├── BookList.js
│   └── Filter.js
│   └── Modal.css
├── Redux/
│   ├── booksSlice.js
│   └── store.js
├── App.js
├── index.js
└── App.css
```

## 👨Author

Developed by [**Vikrant Khajuria**](https://github.com/vikrantNagarro)

---

## License

This project is open-source and free to use.
