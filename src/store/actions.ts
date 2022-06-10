
import * as bookActions from "./book/actionCreators";
import * as booksActions from "./books/actionCreators";




const actions = {
  ...bookActions,
  ...booksActions,
}


export default actions;