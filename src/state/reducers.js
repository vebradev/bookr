import * as types from "./actionTypes";

const initialState = {
  books: [],
  book: [],
  reviews: [],
  loggingIn: false,
  gettingBooks: false,
  gettingReviews: false,
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
      };

    case types.FIND_TOKEN:
      return {
        ...state,
        loggingIn: true
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
        error: action.payload
      };

    case types.GET_SINGLE_TRY:
      return {
        ...state,
        gettingBooks: true
      };
    case types.GET_SINGLE_SUCCESS:
      return {
        ...state,
        book: action.payload,
        gettingBooks: false
      };
    case types.GET_SINGLE_FAIL:
      return {
        ...state,
        error: action.payload
      };

    case types.GET_REVIEWS_TRY:
      return {
        ...state,
        gettingReviews: true,
        error: ""
      };
    case types.GET_REVIEWS_SUCCESS:
      return {
        ...state,
        gettingReviews: false,
        reviews: action.payload,
        error: ""
      };
    case types.GET_REVIEWS_FAIL:
      return {
        ...state,
        gettingReviews: false,
        error: action.payload
      };

    default:
      return state;
  }
};
