// BookList.js
import React from 'react';
import { useSelector } from 'react-redux';
import BookCard from './BookCard';

export default function BookList({ onEdit }) {
  const { list, filter, searchTerm } = useSelector(state => state.books);

  const filtered = list
    .filter(book => filter === 'all' || (filter === 'read' ? book.isRead : !book.isRead))
    .filter(book => 
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="row g-4">
      {filtered.map(book => (
        <div key={book.id} className="col-12 col-md-6 col-lg-4">
          <BookCard book={book} onEdit={onEdit} />
        </div>
      ))}
    </div>
  );
}
