import { BooksFilterAction, BooksFilterActionTypes } from "./BooksFilterTypes";

export const setPage = (value: number): BooksFilterAction => ({
  type: BooksFilterActionTypes.SET_PAGE_TYPE,
  payload: value,
})

export const setAuthors = (value: string): BooksFilterAction => ({
  type: BooksFilterActionTypes.SET_AUTHORS_TYPE,
  payload: value,
})
export const setTitle = (value: string): BooksFilterAction => ({
  type: BooksFilterActionTypes.SET_TITLE_TYPE,
  payload: value,
})
export const setTotal = (value: string): BooksFilterAction => ({
  type: BooksFilterActionTypes.SET_TOTAL_TYPE,
  payload: value,
})