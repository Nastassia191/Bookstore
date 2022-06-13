import BookType from "../../types/bookType";
import axios from "axios";
import actions from "../actions";
import { BookActionType, BookActionTypes } from "./types"
import { createAction } from "@reduxjs/toolkit";

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

export const setBook = createAction<BookType | undefined>(BookActionTypes.SET_DATA);
export const setBookLoading = createAction<boolean>(BookActionTypes.SET_LOADING);
export const setBookError = createAction<boolean>(BookActionTypes.SET_ERROR);