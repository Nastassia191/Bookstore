import { NewBookActionType, NewBookActionTypes, NewBookStateType } from "./types";

const initialState: NewBookStateType = {
  data: [],
  loading: false,
  error: false,
}




export const newBookReducer = (state = initialState, action: NewBookActionType): NewBookStateType => {
  switch (action.type) {
    case NewBookActionTypes.SET_NEW_DATA: {
      return {
        ...state,
        data: action.payload,
      }
    }

    case NewBookActionTypes.SET_NEW_LOADING: {
      return {
        ...state,
        loading: action.payload,
      }
    }

    case NewBookActionTypes.SET_NEW_ERROR: {
      return {
        ...state,
        error: action.payload,
      }
    }
    default: return state;
  }
}