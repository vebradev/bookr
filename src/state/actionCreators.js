import axios from "axios";
import axiosWithAuth from "../auth/axiosWithAuth";
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

export const setToken = token => {
  return { type: types.SET_TOKEN, payload: token };
};

export const getBooks = () => dispatch => {
  dispatch({ type: types.GET_BOOKS_TRY });
  axiosWithAuth()
    .get("https://lambda-bookr.herokuapp.com/api/books/")
    .then(res => {
      dispatch({ type: types.GET_BOOKS_SUCCESS, payload: res.data });
      console.log(res.data);
    })
    .catch(err => {
      dispatch({ type: types.GET_BOOKS_FAIL, payload: err.message });
      console.log(err.message);
    });
};
