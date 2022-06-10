import { combineReducers } from "redux";
import { bookReducer } from "./book/reducer";
import { booksReducer } from "./books/reducer";


export default combineReducers({
  book: bookReducer,
  books: booksReducer,
});