import * as types from "./actionTypes";

const initialState = {
  books: [],
  isKnown: false,
  error: "",
  gettingBooks: false
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_TRY:
      return {
        ...state,
        isKnown: false
      };

    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isKnown: true
      };

    case types.LOGIN_FAIL:
      return {
        ...state,
        isKnown: false
      };

    case types.GET_BOOKS_TRY:
      return {
        ...state,
        gettingBooks: true
      };

    case types.GET_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload,
        gettingBooks: false
      };

    case types.GET_BOOKS_FAIL:
      return {
        ...state,
        gettingBooks: false,
        error: action.payload,
      }

    default:
      return state;
  }
};
