import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import thunk from "redux-thunk";
import logger from "redux-logger";
import * as reducers from "./state/reducers";
import App from "./App";
import "./index.css";

// import { BrowserRouter as Router, Redirect } from "react-router-dom";
// import { LOGIN_SUCCESS } from "./state/actionTypes";
// const middlewareToSaveToken = store => next => action => {
//   if (action.type === LOGIN_SUCCESS) {
//     // console.log("set token-2");
//     // localStorage.setItem("token-2", action.payload);
//     // console.log(localStorage.getItem("token-2"));
//   }
//   next(action);
// };

const store = createStore(
  combineReducers(reducers),
  compose(
    applyMiddleware(thunk, logger)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
