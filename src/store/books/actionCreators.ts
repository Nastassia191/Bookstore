import BookType from "../../types/bookType";
import axios from "axios";
import actions from "../actions";
import { BooksActionType, BooksActionTypes } from "./types"

const URL = "https://api.itbook.store/1.0/search/";

export const fetchBooks = (page: number, title?: string, authors?: string) =>
  async (dispatch: any) => {
    dispatch(actions.setBooksLoading(true));
    dispatch(actions.setBooks(undefined));
    dispatch(actions.setBooksPage(1));
    dispatch(actions.setBooksAuthors(undefined));
    dispatch(actions.setBooksTitle(undefined));
    dispatch(actions.setBooksTotal(undefined));
    dispatch(actions.setBooksError(false));

    let url = `${URL}js/${page}`;

    if (title) {
      url = `${URL}${title}`;
    }
    if (authors) {
      url = `${URL}${authors}`;
    }

    try {
      const response = await axios.get(url);
      dispatch(actions.setBook(response.data as BookType));
    } catch {
      dispatch(actions.setBookError(true));
    } finally {
      dispatch(actions.setBookLoading(false));
    }

  }

export const setBooks = (value?: BookType): BooksActionType => ({
  type: BooksActionTypes.SET_DATA_TYPE,
  payload: value,
})
export const setBooksPage = (value: number): BooksActionType => ({
  type: BooksActionTypes.SET_PAGE_TYPE,
  payload: value,
})
export const setBooksAuthors = (value?: string): BooksActionType => ({
  type: BooksActionTypes.SET_AUTHORS_TYPE,
  payload: value,
})
export const setBooksTitle = (value?: string): BooksActionType => ({
  type: BooksActionTypes.SET_TITLE_TYPE,
  payload: value,
})
export const setBooksTotal = (value?: string): BooksActionType => ({
  type: BooksActionTypes.SET_TOTAL_TYPE,
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
