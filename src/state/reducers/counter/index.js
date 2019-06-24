import * as types from "../../actions/counter/actionTypes";

export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case types.COUNTER_INCREASE:
      return state + 1;
    case types.COUNTER_DECREASE:
      return state - 1;
    default:
      return state;
  }
};
