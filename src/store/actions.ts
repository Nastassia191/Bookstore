
import * as bookActions from "./book/actionCreators";
import * as booksActions from "./books/actionCreators";

//import * as newBookActions from "./newBook/actionCreators";




const actions = {
  ...bookActions,
  ...booksActions,
  //...newBookActions,
}


export default actions;