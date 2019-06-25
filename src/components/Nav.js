import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

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

  a {
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
`;

class Nav extends React.Component {
  render() {
    return (
      <StyledNav>
        <NavLink to={"/home"} activeClassName="active">
          Home
        </NavLink>

        <NavLink to={"/login"} activeClassName="active">
          Login
        </NavLink>
      </StyledNav>
    );
  }
}

export default Nav;
