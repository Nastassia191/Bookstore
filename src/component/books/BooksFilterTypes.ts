
export enum BooksFilterActionTypes {
  SET_AUTHORS_TYPE = "SET_AUTHORS_TYPE",
  SET_TITLE_TYPE = "SET_TITLE_TYPE",

}



export type SetTitleAction = {
  type: BooksFilterActionTypes.SET_TITLE_TYPE,
  payload?: string,
}
export type SetAuthorsAction = {
  type: BooksFilterActionTypes.SET_AUTHORS_TYPE,
  payload?: string,
}

export type BooksFilterAction =
  | SetTitleAction
  | SetAuthorsAction;


type BooksFilterType = {
  title?: string,
  authors?: string,
}

export default BooksFilterType;