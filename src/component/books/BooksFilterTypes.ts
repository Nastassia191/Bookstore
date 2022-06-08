
export enum BooksFilterActionTypes {
  SET_PAGE_TYPE = "SET_PAGE_TYPE",
  SET_AUTHORS_TYPE = "SET_AUTHORS_TYPE",
  SET_TITLE_TYPE = "SET_TITLE_TYPE",
}


export type SetPageAction = {
  type: BooksFilterActionTypes.SET_PAGE_TYPE,
  payload: number,
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
  SetPageAction
  | SetTitleAction
  | SetAuthorsAction;

type BooksFilterType = {
  page: number,
  title?: string,
  authors?: string,
}

export default BooksFilterType;