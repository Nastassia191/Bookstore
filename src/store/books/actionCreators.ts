import axios from "axios";
import actions from "../actions";
import { BooksActionTypes } from "./types"
import BookPage from "../../types/bookPage";
import { createAction } from "@reduxjs/toolkit";

const URL = "https://api.itbook.store/1.0/search/";

export const fetchBooks = (page: number, query: string) =>
  async (dispatch: any) => {
    dispatch(actions.setBooksLoading(true));
    dispatch(actions.setBooksError(false));

    let url = `${URL}js/${page}`;

    if (query) {
      url = `${URL}${query}/${page}`;
    }

    try {
      const response = await axios.get(url);
      dispatch(actions.setBooksPage(response.data));
    } catch {
      dispatch(actions.setBooksError(true));
    } finally {
      dispatch(actions.setBooksLoading(false));
    }

  }

export const setBooksPage = createAction<BookPage>(BooksActionTypes.SET_PAGE_TYPE);
export const setBooksQuery = createAction<string | undefined>(BooksActionTypes.SET_QUERY_TYPE);
export const setBooksLoading = createAction<boolean>(BooksActionTypes.SET_LOADING_TYPE);
export const setBooksError = createAction<boolean>(BooksActionTypes.SET_ERROR_TYPE);
export const setMarkedBooks = createAction<string>(BooksActionTypes.SET_MARKED_TYPE);


