import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./auth/PrivateRoute";
import Nav from "./components/Nav";
import Register from "./components/User/Register";
import Login from "./components/User/Login";
import Home from "./components/Home";
import SingleBook from "./components/SingleBook";

import "./App.css";

class App extends React.Component {
  render() {
    return (
        <div>
          <Nav />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/book/:id" component={SingleBook} />
        </div>
    );
  }
}

export default App;
