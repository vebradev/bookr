import * as types from "./actionTypes";

const initialState = {
  books: [],
  loggingIn: false,
  gettingBooks: false,
  deletingBooks: false,
  error: ""
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_TRY:
      return {
        ...state,
        error: "",
        loggingIn: false
      };

    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: true,
        error: ""
      };

    case types.LOGIN_FAIL:
      return {
        ...state,
        loggingIn: false
      };

    case types.LOGOUT:
      return {
        ...state,
        loggingIn: false
      }
    
    case types.FIND_TOKEN:
      return {
        ...state,
        loggingIn: true
      }
      
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
        error: action.payload
      };

    case types.DELETE_BOOK_TRY:
      return {
        ...state,
        deletingBooks: true,
        error: action.payload
      };

    case types.DELETE_BOOK_SUCCESS:
      return {
        ...state,
        deletingBooks: false,
        error: ""
      };

    case types.DELETE_BOOK_FAIL:
      return {
        ...state,
        deletingBooks: false,
        error: action.payload
      };
    default:
      return state;
  }
};
