import BooksFilterType, { BooksFilterAction, BooksFilterActionTypes } from "./BooksFilterTypes";





// export const initialState: BooksFilterType = {
//   page: 1,
//   total: "361",
// }

export const BooksFiltrtReducer = (state: BooksFilterType, action: BooksFilterAction): BooksFilterType => {

  switch (action.type) {



    case BooksFilterActionTypes.SET_TITLE_TYPE: {
      const value = action.payload;
      if (Number(value)) {
        return state;
      }
      const title = value !== "" ? value : undefined;
      return { ...state, title }
    }

    case BooksFilterActionTypes.SET_AUTHORS_TYPE: {
      const value = action.payload;
      if (Number(value)) {
        return state;
      }
      const authors = value !== "" ? value : undefined;
      return { ...state, authors }
    }


    default: {
      return state;
    }

  }
}