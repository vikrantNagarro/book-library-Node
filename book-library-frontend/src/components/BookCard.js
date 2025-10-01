import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook, toggleReadStatus } from '../Redux/booksSlice';

export default function BookCard({ book, onEdit }) {
  const dispatch = useDispatch();

  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">
          {book.title}{' '}
          <span className={`badge ${book.isRead ? 'bg-success' : 'bg-warning'}`}>
            {book.isRead ? 'Read' : 'Unread'}
          </span>
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
        <p className="card-text">
          {book.description.length > 20
            ? `${book.description.slice(0, 20)}...`
            : book.description}
        </p>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <button className="btn btn-sm btn-outline-primary" onClick={() => onEdit(book)}>Edit</button>
        <button
          className={`btn btn-sm ${book.isRead ? 'btn-outline-warning' : 'btn-outline-success'}`}
          onClick={() => dispatch(toggleReadStatus(book.id))}
        >
          {book.isRead ? 'Mark Unread' : 'Mark Read'}
        </button>
        <button className="btn btn-sm btn-outline-danger" onClick={() => dispatch(deleteBook(book.id))}>
          Delete
        </button>
      </div>
    </div>
  );
}
