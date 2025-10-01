import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, updateBook } from '../Redux/booksSlice';
import './Modal.css';

export default function BookFormModal({ show, onHide, editingBook }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (editingBook) {
      setTitle(editingBook.title);
      setAuthor(editingBook.author);
      setDescription(editingBook.description);
    } else {
      setTitle('');
      setAuthor('');
      setDescription('');
    }
  }, [editingBook, show]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { title, author, description };
    editingBook
      ? dispatch(updateBook({ id: editingBook.id, ...payload }))
      : dispatch(addBook(payload));
    onHide();
  };

  if (!show) return null;

  return (
    <div className="custom-modal-overlay">
      <div className="custom-modal">
        <form onSubmit={handleSubmit}>
          <div className="modal-header d-flex justify-content-between">
            <h5>{editingBook ? 'Edit Book' : 'Add Book'}</h5>
            <button type="button" className="btn-close" onClick={onHide}></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">Book Title</label>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                maxLength={25}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Author Name</label>
              <input
                type="text"
                className="form-control"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
                maxLength={25}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div className="modal-footer d-flex justify-content-end">
            <button type="button" className="btn btn-secondary me-2" onClick={onHide}>Cancel</button>
            <button type="submit" className="btn btn-primary">
              {editingBook ? 'Save Changes' : 'Add Book'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
