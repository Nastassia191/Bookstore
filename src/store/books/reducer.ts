import { BooksActionType, BooksActionTypes, BooksStateType } from "./types";

const initialState: BooksStateType = {
  data: undefined,
  loading: false,
  error: false,
  page: 1,
  title: undefined,
  authors: undefined,
  total: undefined,
}


export const booksReducer = (state = initialState, action: BooksActionType): BooksStateType => {
  switch (action.type) {
    case BooksActionTypes.SET_DATA_TYPE: {
      return {
        ...state,
        data: action.payload,
      }
    }
    case BooksActionTypes.SET_PAGE_TYPE: {
      return {
        ...state,
        page: action.payload,
      }
    }
    case BooksActionTypes.SET_AUTHORS_TYPE: {
      return {
        ...state,
        authors: action.payload,
      }
    }
    case BooksActionTypes.SET_TITLE_TYPE: {
      return {
        ...state,
        title: action.payload,
      }
    }
    case BooksActionTypes.SET_TOTAL_TYPE: {
      return {
        ...state,
        total: action.payload,
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