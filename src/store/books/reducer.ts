import { BooksActionType, BooksActionTypes, BooksStateType } from "./types";

const initialState: BooksStateType = {
  data: [],
  loading: false,
  error: false,
  page: 1,
  query: undefined,
  total: 0,
}


export const booksReducer = (state = initialState, action: BooksActionType): BooksStateType => {
  switch (action.type) {
    case BooksActionTypes.SET_PAGE_TYPE: {
      return {
        ...state,
        page: Number(action.payload.page),
        total: Number(action.payload.total),
        data: action.payload.books,
      }
    }
    case BooksActionTypes.SET_QUERY_TYPE: {
      return {
        ...state,
        query: action.payload,
      }
    }
    case BooksActionTypes.SET_LOADING_TYPE: {
      return {
        ...state,
        loading: action.payload,
      }
    }

    case BooksActionTypes.SET_ERROR_TYPE: {
      return {
        ...state,
        error: action.payload,
      }
    }
    default: return state;
  }
}