import { combineReducers } from "redux";

import { bookReducer } from "./book/reducer";
import { booksReducer } from "./books/reducer";
//import { newBookReducer } from "./newBook/reducer";


export default combineReducers({
  book: bookReducer,
  books: booksReducer,
  //newBooks: newBookReducer,
});