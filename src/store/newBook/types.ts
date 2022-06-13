import BookType from "../../types/bookType";



export type NewBookStateType = {
  data: BookType[],
  loading: boolean,
  error?: boolean,
}

export enum NewBookActionTypes {
  SET_NEW_DATA = "SET_NEW_DATA",
  SET_NEW_LOADING = "SET_NEW_LOADING",
  SET_NEW_ERROR = "SET_NEW_ERROR",
}


type setNewDataAction = {
  type: NewBookActionTypes.SET_NEW_DATA,
  payload: BookType[],
}

type setLoadingAction = {
  type: NewBookActionTypes.SET_NEW_LOADING,
  payload: boolean,
}

type setErrorAction = {
  type: NewBookActionTypes.SET_NEW_ERROR,
  payload: boolean,
}

export type NewBookActionType =
  setNewDataAction
  | setLoadingAction
  | setErrorAction;