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
    const { userToken } = this.props;
    return (
      <React.Fragment>
        {userToken && <Layout userToken={userToken} />}
        {/* <LoginForm /> */}
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
