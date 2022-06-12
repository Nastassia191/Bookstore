import BookType from "../../types/bookType";


export type BooksStateType = {
  data?: BookType[],
  page: number,
  title?: string,
  authors?: string,
  total?: string,
  loading: boolean,
  error: boolean,
}
export enum BooksActionTypes {
  SET_DATA_TYPE = "SET_DATA_TYPE",
  SET_PAGE_TYPE = "SET_PAGE_TYPE",
  SET_AUTHORS_TYPE = "SET_AUTHORS_TYPE",
  SET_TITLE_TYPE = "SET_TITLE_TYPE",
  SET_TOTAL_TYPE = "SET_TOTAL_TYPE",
  SET_LOADING_TYPE = "SET_LOADING_TYPE",
  SET_ERROR_TYPE = "SET_ERROR_TYPE",
}

type setDataAction = {
  type: BooksActionTypes.SET_DATA_TYPE,
  payload?: BookType,
}

export type SetPageAction = {
  type: BooksActionTypes.SET_PAGE_TYPE,
  payload: number,
}
export type SetTitleAction = {
  type: BooksActionTypes.SET_TITLE_TYPE,
  payload?: string,
}
export type SetAuthorsAction = {
  type: BooksActionTypes.SET_AUTHORS_TYPE,
  payload?: string,
}
export type SetTotalAction = {
  type: BooksActionTypes.SET_TOTAL_TYPE,
  payload?: string,
}

type setLoadingAction = {
  type: BooksActionTypes.SET_LOADING_TYPE,
  payload: boolean,
}

type setErrorAction = {
  type: BooksActionTypes.SET_ERROR_TYPE,
  payload: boolean,
}
export type BooksActionType =
  setDataAction
  | SetPageAction
  | SetTitleAction
  | SetAuthorsAction
  | SetTotalAction
  | setLoadingAction
  | setErrorAction;



