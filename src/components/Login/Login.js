import React from "react";
import { connect } from "react-redux";
import { login } from "../../state/actionCreators";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 2px;
  max-width: 300px;
  padding: 40px;
  margin: 10vh auto;

  input {
    font-size: 1.5em;
    padding: 10px 15px;
    border: 1px solid #f2f3f3;
    background-color: #f2f3f3;
    border-radius: 2px;
    margin: 0 0 10px 0;

    &:hover {
      background-color: #f2f3f3;
    }

    &:focus {
      background-color: #e5e7e7;
      border: 1px solid #e5e7e7;
    }
  }

  button {
    font-size: 1.5em;
    background-color: #366ed8;
    color: #fff;
    border: 0;
    border-radius: 2px;
    padding: 10px 15px;
    margin: 20px 0 0 0;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: #064acb;
    }
  }
`;

export class Login extends React.Component {
  username = React.createRef();
  password = React.createRef();

  onLogin = () => {
    const username = this.username.current.value;
    const password = this.password.current.value;
    this.props.login(username, password);
  };

  render() {
    return (
      <StyledDiv>
        <input placeholder="Username" type="text" ref={this.username} />
        <input placeholder="Password" type="text" ref={this.password} />
        <button onClick={this.onLogin}>Log in</button>
        {/* <button onClick={() => localStorage.clear()}>Log out</button> */}
      </StyledDiv>
    );
  }
}

export default connect(
  state => state,
  { login }
)(Login);
