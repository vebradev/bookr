import * as types from "./actionTypes";

const initialState = {
  books: [],
  book: [],
  reviews: [],
  reviewID: "",
  loggingIn: false,
  gettingBooks: false,
  gettingReviews: false,
  postingReview: false,
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
        reviews: action.payload.reviews,
        gettingBooks: false
      };
    case types.GET_SINGLE_FAIL:
      return {
        ...state,
        error: action.payload
      };

    case types.POST_REVIEW_TRY:
      return {
        ...state,
        postingReview: true
      };
    case types.POST_REVIEW_SUCCESS:
      return {
        ...state,
        postingReview: false,
        reviews: [...state.reviews, action.payload]
      };
    case types.POST_REVIEW_FAIL:
      return {
        ...state,
        postingReview: false,
        error: action.payload
      };

    case types.DELETE_REVIEW_TRY:
      return {
        ...state,
        deleteReview: true
      };
    case types.DELETE_REVIEW_SUCCESS:
      return {
        ...state,
        deleteReview: false,
        reviews: [
          ...state.reviews.filter(review => review.id !== action.payload)
        ]
      };
    case types.DELETE_REVIEW_FAIL:
      return {
        ...state,
        error: action.payload
      };

    case types.UPDATE_REVIEW_TRY:
      return {
        ...state,
        updatingReview: true,
        error: ""
      };
    case types.UPDATE_REVIEW_SUCCESS:
      return {
        ...state,
        updatingReview: false,
        reviews: state.reviews.map(rev => rev.id === action.payload.id ? action.payload : rev)
      };
    case types.UPDATE_REVIEW_FAIL:
      return {
        ...state,
        updatingReview: false,
        reviews: [...state.reviews],
        error: action.payload
      };
    default:
      return state;
  }
};
