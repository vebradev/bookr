import React from "react";
import { connect } from "react-redux";
import { login } from "../../state/actionCreators";

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
      <div>
        <input placeholder="Username" type="text" ref={this.username} />
        <input placeholder="Password" type="text" ref={this.password} />
        <button onClick={this.onLogin}>Log in</button>
        <button onClick={() => localStorage.clear()}>Log out</button>
      </div>
    );
  }
}

export default connect(
  state => state,
  { login }
)(Login);
