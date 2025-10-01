import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchBooks } from "./Redux/booksSlice";
import Header from "./components/Header";
import Filter from "./components/Filter";
import BookList from "./components/BookList";
import BookFormModal from "./components/BookFormModal";
import Search from "./components/Search";

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [editingBook, setEditingBook] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleAddClick = () => {
    setEditingBook(null);
    setModalShow(true);
  };

  const handleEditClick = (book) => {
    setEditingBook(book);
    setModalShow(true);
  };

  return (
    <>
      <Header onAddClick={handleAddClick} />
      <Container className="mt-4">
        <div className="d-flex align-items-center mb-3 gap-2">
          <Filter />
          <Search />
        </div>
        <BookList onEdit={handleEditClick} />
      </Container>
      <BookFormModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        editingBook={editingBook}
      />
    </>
  );
}
export default App;
