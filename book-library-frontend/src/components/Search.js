import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../Redux/booksSlice';

export default function Search() {
  const dispatch = useDispatch();
  const searchTerm = useSelector(state => state.books.searchTerm);

  const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search by Title or Author"
      value={searchTerm}
      onChange={handleChange}
      className="form-control ms-2"
      style={{ maxWidth: '300px', marginBottom:"14px" }}
    />
  );
}
