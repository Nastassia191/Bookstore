import BookType from "../../types/bookType";



export type BookStateType = {
  data?: BookType,
  loading: boolean,
  error: boolean,
}

export enum BookActionTypes {
  SET_DATA = "SET_DATA",
  SET_LOADING = "SET_LOADING",
  SET_ERROR = "SET_ERROR",
}


type setDataAction = {
  type: BookActionTypes.SET_DATA,
  payload?: BookType,
}

type setLoadingAction = {
  type: BookActionTypes.SET_LOADING,
  payload: boolean,
}

type setErrorAction = {
  type: BookActionTypes.SET_ERROR,
  payload: boolean,
}

export type BookActionType =
  setDataAction
  | setLoadingAction
  | setErrorAction;