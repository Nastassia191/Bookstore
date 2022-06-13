import { BookActionTypes, BookStateType } from "./types";
import { createReducer } from "@reduxjs/toolkit";

const initialState: BookStateType = {
  data: undefined,
  loading: false,
  error: false,
}

export const bookReducer = createReducer(initialState, {
  [BookActionTypes.SET_DATA]: (state, action) => {
    state.data = action.payload;
  },
  [BookActionTypes.SET_LOADING]: (state, action) => {
    state.loading = action.payload;
  },
  [BookActionTypes.SET_ERROR]: (state, action) => {
    state.error = action.payload;
  }
});


