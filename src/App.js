import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PrivateRoute from "./auth/PrivateRoute";
import Nav from "./components/Nav";
import Login from "./components/Login/Login";
import Home from "./components/Home";
import BookPage from "./components/BookPage";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/book/:id" component={BookPage} />
        </div>
      </Router>
    );
  }
}

export default App;
