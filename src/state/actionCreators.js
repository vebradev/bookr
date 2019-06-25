import axios from "axios";
import * as types from "./actionTypes";

export const login = (username, password) => dispatch => {
  dispatch({ type: types.LOGIN_TRY });
  axios
    .post("https://lambda-bookr.herokuapp.com/api/auth/login", {
      username,
      password
    })
    .then(res => {
      dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.token });
    })
    .catch(err => {
      dispatch({ type: types.LOGIN_FAIL, payload: err.message });
      console.log(err.message);
    });
};
