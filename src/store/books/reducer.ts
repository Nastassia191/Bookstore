import { createReducer } from "@reduxjs/toolkit";
import { BooksActionTypes, BooksStateType } from "./types";

const initialState: BooksStateType = {
  data: [],
  loading: false,
  error: false,
  page: 1,
  query: undefined,
  total: 0,
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
  }
});
