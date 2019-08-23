import React from "react";
import axios from "axios";

// const Login = () => {
// make a post request to retrieve a token from the api
// when you have handled the token, navigate to the BubblePage route
class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();

    console.log("state", this.state.credentials);
    axios
      .post("http://localhost:5000/api/login", this.state.credentials)
      .then(response => {
        console.log("response value: ", response);
        localStorage.setItem("token", response.data.payload);
        this.props.history.push("/friendslist");
      })
      .catch(err => console.log("error: ", err.response));
  };

  render() {
    return (
      <div className="app">
        <h1>Welcome to the Bubble App!</h1>
        <p>Build a login page here</p>
        <div>
          <form onSubmit={this.login}>
            <input
              type="text"
              name="username"
              placeholder="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
            <button type="submit">Log in</button>
          </form>
          <button onClick={() => localStorage.clear()}>Log Out</button>
        </div>
      </div>
    );
  }
}

export default Login;
