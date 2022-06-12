import BookPage from "../../types/bookPage";
import BookType from "../../types/bookType";


export type BooksStateType = {
  data: BookType[],
  page: number,
  query?: string,
  total: number,
  loading: boolean,
  error: boolean,
}
export enum BooksActionTypes {
  SET_PAGE_TYPE = "SET_PAGE_TYPE",
  SET_QUERY_TYPE = "SET_QUERY_TYPE",
  SET_LOADING_TYPE = "SET_LOADING_TYPE",
  SET_ERROR_TYPE = "SET_ERROR_TYPE",
}

export type SetPageAction = {
  type: BooksActionTypes.SET_PAGE_TYPE,
  payload: BookPage,
}
export type SetQueryAction = {
  type: BooksActionTypes.SET_QUERY_TYPE,
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
  SetPageAction
  | SetQueryAction
  | setLoadingAction
  | setErrorAction;



