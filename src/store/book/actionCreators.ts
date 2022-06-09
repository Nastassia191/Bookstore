import BookType from "../../types/bookType";
import axios from "axios";
import actions from "../actions";
import { BookActionType, BookActionTypes } from "./types"

const URL = "https://api.itbook.store/1.0/books/";

export const fetchBook = (isbn13?: string) =>
  async (dispatch: any) => {
    dispatch(actions.setBookLoading(true));
    dispatch(actions.setBook(undefined));
    dispatch(actions.setBookError(false));
    const url = `${URL}/${isbn13}`;

    try {
      const response = await axios.get(url);
      dispatch(actions.setBook(response.data as BookType));
    } catch {
      dispatch(actions.setBookError(true));
    } finally {
      dispatch(actions.setBookLoading(false));
    }

  }

export const setBook = (value?: BookType): BookActionType => ({
  type: BookActionTypes.SET_DATA,
  payload: value,
})

export const setBookLoading = (value: boolean): BookActionType => ({
  type: BookActionTypes.SET_LOADING,
  payload: value,
})

export const setBookError = (value: boolean): BookActionType => ({
  type: BookActionTypes.SET_ERROR,
  payload: value,
})
