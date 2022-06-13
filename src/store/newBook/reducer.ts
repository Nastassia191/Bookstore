import { createReducer } from "@reduxjs/toolkit";
import { NewBookActionTypes, NewBookStateType } from "./types";

const initialState: NewBookStateType = {
  data: [],
  loading: false,
  error: false,
}

export const newBookReducer = createReducer(initialState, {
  [NewBookActionTypes.SET_NEW_DATA]: (state, action) => {
    state.data = action.payload;
  },
  [NewBookActionTypes.SET_NEW_LOADING]: (state, action) => {
    state.loading = action.payload;
  },
  [NewBookActionTypes.SET_NEW_ERROR]: (state, action) => {
    state.error = action.payload;
  }
});

