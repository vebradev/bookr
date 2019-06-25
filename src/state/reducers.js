import * as types from "./actionTypes";

const initialState = {
  books: [],
  isKnown: false,
  error: ""
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

    default:
      return state;
  }
};
