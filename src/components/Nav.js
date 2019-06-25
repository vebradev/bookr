import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  padding: 20px;
  background-color: #3f51b5;
  color: #fff;
  font-family: "Roboto Mono", monospace;

  a {
    color: #fff;
    text-decoration: none;
    padding: 10px 15px;
    transition: all 0.3s;

    &:hover {
      background-color: #002984;
    }
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

class Nav extends React.Component {
  render() {
    return (
      <StyledNav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        </ul>
      </StyledNav>
    );
  }
}

export default Nav;
