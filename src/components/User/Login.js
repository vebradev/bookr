import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import { login } from "../../state/actionCreators";

class Login extends React.Component {
  state = {
    creds: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      creds: {
        ...this.state.creds,
        [e.target.name]: e.target.value
      }
    });
  };

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state.creds).then(() => {
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <StyledDiv>
        <h2>Login</h2>
        <form action="" onSubmit={this.handleLogin}>
          <input
            placeholder="Username"
            type="text"
            name="username"
            onChange={this.handleChange}
            value={this.state.creds.username}
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.creds.password}
          />
          <button>
            {this.props.loggingIn ? (
              <Loader type="ThreeDots" color="#fff" height="12" width="26" />
            ) : (
              "Log In"
            )}
          </button>
        </form>
      </StyledDiv>
    );
  }
}

const mapStateToProps = state => ({
  loggingIn: state.mainReducer.loggingIn,
  error: state.mainReducer.error
});

export default connect(
  mapStateToProps,
  { login }
)(Login);

const StyledDiv = styled.div`
  background-color: #fff;
  border-radius: 2px;
  max-width: 300px;
  padding: 40px;
  margin: 10vh auto;

  h2 {
    font-family: "Roboto Mono", monospace;
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
    margin: 0 0 30px 0;
    text-transform: uppercase;
  }

  form {
    display: flex;
    flex-direction: column;
  }

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
