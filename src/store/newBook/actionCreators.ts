import BookType from "../../types/bookType";
import axios from "axios";
import actions from "../actions";
import { NewBookActionType, NewBookActionTypes } from "./types"
import { createAction } from "@reduxjs/toolkit";

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

export const setNewBooks = createAction<BookType[]>(NewBookActionTypes.SET_NEW_DATA);
export const setNewBooksLoading = createAction<boolean>(NewBookActionTypes.SET_NEW_LOADING);
export const setNewBooksError = createAction<boolean>(NewBookActionTypes.SET_NEW_ERROR);

