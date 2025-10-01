import React from 'react';

export default function Header({ onAddClick }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <span className="navbar-brand fw-bold">📚 My Book Library</span>
        <button className="btn btn-light" onClick={onAddClick}>
          + Add Book
        </button>
      </div>
    </nav>
  );
}
