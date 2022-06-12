
import * as bookActions from "./book/actionCreators";
import * as booksActions from "./books/actionCreators";

import * as newBooksActions from "./newBook/actionCreators";




const actions = {
  ...bookActions,
  ...booksActions,
  ...newBooksActions,
}


export default actions;