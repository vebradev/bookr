import * as types from "../../actions/counter/actionTypes";

export const increaseCounter = () => {
  return { type: types.COUNTER_INCREASE, payload: 1 };
};

export const decreaseCounter = () => {
  return { type: types.COUNTER_DECREASE, payload: -1 };
};