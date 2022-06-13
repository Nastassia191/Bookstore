import { BookActionType, BookActionTypes, BookStateType } from "./types";
import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions";

const initialState: BookStateType = {
  data: undefined,
  loading: false,
  error: false,
}

// export const bookReducer = createReducer(initialState, {
//   [BookActionTypes.SET_LOADING]: (state, action: BookActionType) => {
//     state.loading = action.payload;
//   }
// });



export const bookReducer = (state = initialState, action: BookActionType): BookStateType => {
  switch (action.type) {
    case BookActionTypes.SET_DATA: {
      return {
        ...state,
        data: action.payload,
      }
    }

    case BookActionTypes.SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      }
    }

    case BookActionTypes.SET_ERROR: {
      return {
        ...state,
        error: action.payload,
      }
    }
    default: return state;
  }
}