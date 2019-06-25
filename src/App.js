import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./auth/PrivateRoute";
import Nav from "./components/Nav";
import Login from "./components/Login/Login";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <div>
      <Nav />
      <Route path="/login" component={Login} />
      <PrivateRoute exact path="/home" component={Home} />
    </div>
  );
}

export default App;
