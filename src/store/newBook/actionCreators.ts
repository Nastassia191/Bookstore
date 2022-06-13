import BookType from "../../types/bookType";
import axios from "axios";
import actions from "../actions";
import { NewBookActionType, NewBookActionTypes } from "./types"

const URL = "https://api.itbook.store/1.0/new";

export const fetchNewBooks = () =>
  async (dispatch: any) => {
    dispatch(actions.setNewBooksLoading(true));
    dispatch(actions.setNewBooks([]));
    dispatch(actions.setNewBooksError(false));
    const url = `${URL}`;

    try {
      const response = await axios.get(url);
      dispatch(actions.setNewBooks(response.data.books));
    } catch {
      dispatch(actions.setNewBooksError(true));
    } finally {
      dispatch(actions.setNewBooksLoading(false));
    }

  }

export const setNewBooks = (value: BookType[]): NewBookActionType => ({
  type: NewBookActionTypes.SET_NEW_DATA,
  payload: value,
})

export const setNewBooksLoading = (value: boolean): NewBookActionType => ({
  type: NewBookActionTypes.SET_NEW_LOADING,
  payload: value,
})

export const setNewBooksError = (value: boolean): NewBookActionType => ({
  type: NewBookActionTypes.SET_NEW_ERROR,
  payload: value,
})
