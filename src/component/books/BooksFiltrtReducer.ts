import BooksFilterType, { BooksFilterAction, BooksFilterActionTypes } from "./BooksFilterTypes";





export const initialState: BooksFilterType = {
  page: 1,
}

export const BooksFiltrtReducer = (state: BooksFilterType, action: BooksFilterAction): BooksFilterType => {
  switch (action.type) {
    case BooksFilterActionTypes.SET_PAGE_TYPE:
      return { ...state, page: action.payload }
    case BooksFilterActionTypes.SET_TITLE_TYPE:
      return { ...state, title: action.payload }
    case BooksFilterActionTypes.SET_AUTHORS_TYPE:
      return { ...state, authors: action.payload }
    default: {
      return state;
    }
  }
}