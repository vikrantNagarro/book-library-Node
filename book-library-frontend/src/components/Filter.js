import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../Redux/booksSlice';

export default function Filter() {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.books.filter);

  function changeFilter(filterName) {
    dispatch(setFilter(filterName));
  }

  return (
    <div className="btn-group mb-3">
      <button
        className={currentFilter === 'all' ? 'btn btn-secondary' : 'btn btn-outline-secondary'}
        onClick={() => changeFilter('all')}
      >
        All
      </button>

      <button
        className={currentFilter === 'read' ? 'btn btn-secondary' : 'btn btn-outline-secondary'}
        onClick={() => changeFilter('read')}
      >
        Read
      </button>

      <button
        className={currentFilter === 'unread' ? 'btn btn-secondary' : 'btn btn-outline-secondary'}
        onClick={() => changeFilter('unread')}
      >
        Unread
      </button>
    </div>
  );
}
