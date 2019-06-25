import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import thunk from "redux-thunk";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";

import { LOGIN_SUCCESS } from "./state/actionTypes";
import * as reducers from "./state/reducers";

const middlewareToSaveToken = store => next => action => {
  if (action.type === LOGIN_SUCCESS) {
    localStorage.setItem("token", action.payload);
  }
  next(action);
};

const store = createStore(
  combineReducers(reducers),
  compose(
    applyMiddleware(thunk, middlewareToSaveToken),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
