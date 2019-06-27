import axios from "axios";
import axiosWithAuth from "../auth/axiosWithAuth";
import * as types from "./actionTypes";

export const register = creds => dispatch => {
  dispatch({ type: types.REGISTER_TRY });

  return axios
    .post("https://lambda-bookr.herokuapp.com/api/auth/register", creds)
    .then(res => {
      localStorage.setItem("username", res.data.username);
      localStorage.setItem("token", res.data.token);
      dispatch({ type: types.REGISTER_SUCCESS, payload: res.data.token });
    })
    .catch(err => {
      dispatch({ type: types.REGISTER_FAIL, payload: err.message });
    });
};

export const login = creds => dispatch => {
  dispatch({ type: types.LOGIN_TRY });
  return axios
    .post("https://lambda-bookr.herokuapp.com/api/auth/login", creds)
    .then(res => {
      localStorage.setItem("id", res.data.id);
      localStorage.setItem("username", res.data.username);
      localStorage.setItem("roles", res.data.roles);
      localStorage.setItem("token", res.data.token);
      dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.token });
    })
    .catch(err => {
      dispatch({ type: types.LOGIN_FAIL, payload: err.message });
      console.log(err.message);
    });
};

export const logout = () => dispatch => {
  dispatch({ type: types.LOGOUT });
};

export const findToken = () => dispatch => {
  dispatch({ type: types.FIND_TOKEN });
};

export const getBooks = () => dispatch => {
  dispatch({ type: types.GET_BOOKS_TRY });
  axiosWithAuth()
    .get("https://lambda-bookr.herokuapp.com/api/books/")
    .then(res => {
      dispatch({ type: types.GET_BOOKS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: types.GET_BOOKS_FAIL, payload: err.message });
    });
};

export const getSingleBook = (id) => dispatch => {
  dispatch({ type: types.GET_SINGLE_TRY });
  axiosWithAuth()
    .get(`https://lambda-bookr.herokuapp.com/api/books/${id}`)
    .then(res => {
      dispatch({ type: types.GET_SINGLE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: types.GET_SINGLE_FAIL, payload: err.message })
    })
}

export const getReviews = () => dispatch => {
  dispatch({ type: types.GET_REVIEWS_TRY });
  console.log("REVIEWS TRY");

  axiosWithAuth()
    .get("https://lambda-bookr.herokuapp.com/api/reviews/")
    .then(res => {
      console.log("REVIEWS SUCCESS");
      dispatch({ type: types.GET_REVIEWS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("REVIEWS FAIL");
      dispatch({ type: types.GET_BOOKS_FAIL, payload: err.message });
    });
};

export const postReview = (reviewObj) => dispatch => {
  dispatch({ type: types.POST_REVIEW_TRY });
  axiosWithAuth()
    .post("https://lambda-bookr.herokuapp.com/api/reviews/", reviewObj)
    .then(res => {
      dispatch({ type: types.POST_REVIEW_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: types.POST_REVIEW_FAIL, payload: err.message });
    })
}