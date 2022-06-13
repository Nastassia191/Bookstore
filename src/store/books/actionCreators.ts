import axios from "axios";
import actions from "../actions";
import { BooksActionType, BooksActionTypes } from "./types"
import BookPage from "../../types/bookPage";

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

export const setBooksPage = (value: BookPage): BooksActionType => ({
  type: BooksActionTypes.SET_PAGE_TYPE,
  payload: value,
})
export const setBooksQuery = (value?: string): BooksActionType => ({
  type: BooksActionTypes.SET_QUERY_TYPE,
  payload: value,
})

export const setBooksLoading = (value: boolean): BooksActionType => ({
  type: BooksActionTypes.SET_LOADING_TYPE,
  payload: value,
})

export const setBooksError = (value: boolean): BooksActionType => ({
  type: BooksActionTypes.SET_ERROR_TYPE,
  payload: value,
})
