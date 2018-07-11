import React from "react";
import "../styles.css";
import { connect } from "react-redux";
import Loading from "./Loading";
import SuperContent from "./SuperContent";
import { userLogin, userLogout } from "../actions/authenticationActions";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <button onClick={this.props.userLogin}>Log In</button>
        <button onClick={this.props.userLogout}>Log Out</button>
        {this.props.requestPending ? <Loading /> : null}
        {this.props.isLoggedIn ? <SuperContent /> : null}
        {this.props.loginRequestFailure ? <div>Failed to Login</div> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    requestPending: state.requestPending,
    isLoggedIn: state.isLoggedIn,
    loginRequestFailure: state.loginRequestFailure
  };
};
export default connect(mapStateToProps, { userLogin, userLogout })(App);
