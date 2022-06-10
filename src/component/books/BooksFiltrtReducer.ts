import BooksFilterType, { BooksFilterAction, BooksFilterActionTypes } from "./BooksFilterTypes";





export const initialState: BooksFilterType = {
  page: 1,
  //total: "total",
}

export const BooksFiltrtReducer = (state: BooksFilterType, action: BooksFilterAction): BooksFilterType => {

  switch (action.type) {
    case BooksFilterActionTypes.SET_PAGE_TYPE:
      return { ...state, page: action.payload }
    case BooksFilterActionTypes.SET_TITLE_TYPE:
      return { ...state, title: action.payload }
    case BooksFilterActionTypes.SET_AUTHORS_TYPE:
      return { ...state, authors: action.payload }
    case BooksFilterActionTypes.SET_TOTAL_TYPE:
      return { ...state, total: action.payload, }
    default: {
      return state;
    }
  }
}