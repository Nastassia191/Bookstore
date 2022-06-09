import { BookActionType, BookActionTypes, BookStateType } from "./types";

const initialState: BookStateType = {
  data: undefined,
  loading: false,
  error: false,
}


export const bookReducer = (state = initialState, action: BookActionType): BookStateType => {
  switch (action.type) {
    case BookActionTypes.SET_DATA: {
      return {
        ...state,
        data: action.payload,
      }
    }

    case BookActionTypes.SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      }
    }

    case BookActionTypes.SET_ERROR: {
      return {
        ...state,
        error: action.payload,
      }
    }
    default: return state;
  }
}