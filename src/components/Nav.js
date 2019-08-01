import React from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import styled from "styled-components";

import { findToken, logout } from "../state/actionCreators";

class Nav extends React.Component {
  componentDidMount() {
		if (localStorage.getItem('token')) {
			this.props.findToken();
		}
  }
  
  logout = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    this.props.logout();
    this.props.history.push("/login");
  };

  render() {
    return (
      <StyledNav>
        {!this.props.loggingIn && (
          <div>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </div>
        )}
        {this.props.loggingIn && (
          <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login"
              className={this.props.loggingIn ? "" : "hide"}
              onClick={this.logout}
            >
              Log out
            </NavLink>
          </div>
        )}
      </StyledNav>
    );
  }
}

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  font-size: 1.5em;
  padding: 20px;
  background-color: #064acb;
  border-bottom: 2px solid transparent;
  color: #fff;
  font-family: "Roboto Mono", monospace;

  a,
  .loginOutBtn {
    color: #fff;
    text-decoration: none;
    padding: 10px 15px;
    transition: all 0.3s;

    &.active {
      background-color: #366ed8;
    }

    &:hover {
      background-color: #fff;
      color: #064acb;
    }
  }

  .hide {
    display: none;
  }
`;

const mapStateToProps = state => ({
  loggingIn: state.mainReducer.loggingIn,
  error: state.mainReducer.error
});

export default withRouter(
  connect(
    mapStateToProps,
    { findToken, logout }
  )(Nav)
);
