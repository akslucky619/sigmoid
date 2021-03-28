import React from "react";
import { connect } from "react-redux";
import { ACTIONS } from "../../reducers/user";

import Layout from "../Layout";
import LoginForm from "../LoginForm";

class Interface extends React.Component {
  componentDidMount() {
    const { init } = ACTIONS;
    // console.log(this.props);
    this.props.dispatch(init());
  }
  render() {
    const { login, logout } = ACTIONS;
    const { userToken, dispatch } = this.props;
    return (
      <React.Fragment>
        {userToken && <Layout logout={logout} userToken={userToken} />}
        {!userToken && <LoginForm login={login} dispatch={dispatch} />}
      </React.Fragment>
    );
  }
}

const mapProps = (state) => {
  const user = state.user;
  // console.log(count);
  return user;
};

export default connect(mapProps)(Interface);
