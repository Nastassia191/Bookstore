import { createReducer } from "@reduxjs/toolkit";
import { BooksActionTypes, BooksStateType } from "./types";


const initialState: BooksStateType = {
  data: [],
  loading: false,
  error: false,
  page: 1,
  query: undefined,
  total: 0,
  marked: JSON.parse(localStorage.getItem("marked") || "") as string[],
}

export const booksReducer = createReducer(initialState, {
  [BooksActionTypes.SET_PAGE_TYPE]: (state, action) => {
    state.data = action.payload.books;
    state.page = Number(action.payload.page);
    state.total = Number(action.payload.total);
  },
  [BooksActionTypes.SET_QUERY_TYPE]: (state, action) => {
    state.loading = action.payload;
  },
  [BooksActionTypes.SET_LOADING_TYPE]: (state, action) => {
    state.loading = action.payload;
  },
  [BooksActionTypes.SET_ERROR_TYPE]: (state, action) => {
    state.error = action.payload;
  },
  [BooksActionTypes.SET_MARKED_TYPE]: (state, action) => {
    if (!state.marked.includes(action.payload)) {
      state.marked.push(action.payload);
    } else {
      state.marked = state.marked.filter(isbn13 => isbn13 !== action.payload);
    }
    localStorage.setItem("marked", JSON.stringify(state.marked));
  }
});
