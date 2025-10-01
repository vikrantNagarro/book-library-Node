import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/books";

// Async actions
export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const res = await axios.get(API_URL);
  return res.data;
});

export const addBook = createAsyncThunk("books/addBook", async (book) => {
  const res = await axios.post(API_URL, book);
  return res.data;
});

export const updateBook = createAsyncThunk("books/updateBook", async (book) => {
  const res = await axios.put(`${API_URL}/${book.id}`, book);
  return res.data;
});

export const toggleReadStatus = createAsyncThunk(
  "books/toggleReadStatus",
  async (id) => {
    const res = await axios.patch(`${API_URL}/${id}/status`);
    return res.data;
  }
);

export const deleteBook = createAsyncThunk("books/deleteBook", async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

// Slice
const booksSlice = createSlice({
  name: "books",
  initialState: { list: [], filter: "all", status: "idle", searchTerm: "" },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        const index = state.list.findIndex((b) => b.id === action.payload.id);
        if (index !== -1) state.list[index] = action.payload;
      })
      .addCase(toggleReadStatus.fulfilled, (state, action) => {
        const index = state.list.findIndex((b) => b.id === action.payload.id);
        if (index !== -1) state.list[index] = action.payload;
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.list = state.list.filter((b) => b.id !== action.payload);
      });
  },
});

export const { setFilter, setSearchTerm } = booksSlice.actions;
export default booksSlice.reducer;
