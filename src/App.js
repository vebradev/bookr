import React from "react";
import { Route, Redirect, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import "./App.css";

const App = () => {
  return (
    <div>
      <nav style={{ textAlign: "center", padding: "20px" }}>
        <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
      </nav>

      <Route
        path="/"
        render={() =>
          localStorage.getItem("token") ? (
            <div>
              <h3>Logged in!</h3>
            </div>
          ) : (
            <Redirect to="/login" />
          )
        }
      />
      <Route
        path="/login"
        render={() =>
          localStorage.getItem("token") ? <Redirect to="/" /> : <Login />
        }
      />
    </div>
  );
};

export default App;
