import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import styled from "styled-components";

import { login } from "../../state/actionCreators";

class Login extends React.Component {
  componentDidMount() {
    if (localStorage.getItem("token")) {
      console.log("yra");
    }
  }

  username = React.createRef();
  password = React.createRef();

  login = (e) => {
    e.preventDefault();
    const username = this.username.current.value;
    const password = this.password.current.value;
    this.props.login(username, password)
      .then(res => {
        // Put more effort here to figure out why RES is not defined here.
        this.props.history.push('/');
      })
  };

  render() {
    return (
      <StyledDiv>
        <form onSubmit={this.login}>
        <input placeholder="Username" type="text" ref={this.username} />
        <input placeholder="Password" type="password" ref={this.password} />
        <button>
          {this.props.loggingIn ? (
            <Loader type="ThreeDots" color="#fff" height="12" width="26" />
          ) : (
            "Log In"
          )}
        </button>
        {/* <button onClick={() => localStorage.clear()}>Log out</button> */}
        </form>
      </StyledDiv>
    );
  }
}

const mapStateToProps = state => ({
  loggingIn: state.mainReducer.loggingIn,
  error: state.mainReducer.error,
})

export default connect(mapStateToProps,{ login })(Login);

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
