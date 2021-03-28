import React from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { ACTIONS } from "../reducers/charts";
import { getAllPieData } from "../selectors/charts";

import "antd/dist/antd.css";
import "../index.css";

import { Layout, Menu, Breadcrumb, Affix } from "antd";
import DemoPie from "./DemoPie";
import DateRange from "./DateRange";
import BarChart from "./BarChart";
import TableComp from "./TableComp";
import LoginForm from "./LoginForm";
// import user from "../reducers/user";

const { Header, Content, Footer } = Layout;
class SiderDemo extends React.Component {
  componentDidMount() {
    const { init } = ACTIONS;
    const { userToken } = this.props;

    // console.log(userToken, "hhhhhhhh");
    userToken && this.props.dispatch(init(userToken));
  }

  render() {
    // console.log(this.props, "-----");
    const {
      pieData,
      startDate,
      endDate,
      dispatch,
      userToken,
      tableData,
      barData,
      login,
    } = this.props;
    console.log(this.props);

    let tos = true;
    return (
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            {/* <Menu.Item key="1">nav 1</Menu.Item> */}
            <Menu.Item key="2">Sigmoid</Menu.Item>
            <Menu.Item key="3"></Menu.Item>
          </Menu>
        </Header>
        {/* {!userToken && (
          <div
            style={{
              paddingTop: "25px",
              width: "50%",
              left: "50",
              position: "relative",
              left: "25%",
            }}
          >
            <LoginForm login={login} dispatch={dispatch} />
          </div>
        )} */}
        {userToken && (
          <>
            <Content
              className="site-layout"
              style={{ padding: "0 50px", marginTop: 64 }}
            >
              <Breadcrumb style={{ margin: "16px 0" }}>
                <DateRange userToken={userToken} ACTIONS={ACTIONS} />
              </Breadcrumb>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 380 }}
              >
                {pieData && <DemoPie pieData={pieData} />}
              </div>
            </Content>
            <Content
              className="site-layout"
              style={{ padding: "0 50px", marginTop: 64 }}
            >
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 380 }}
              >
                {tableData.length !== 0 && <BarChart tableData={tableData} />}
              </div>
            </Content>
            <Content
              className="site-layout"
              style={{ padding: "0 50px", marginTop: 64 }}
            >
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 380 }}
              >
                {/* {tableData.length !== 0 && <BarChart tableData={tableData} />} */}
                {barData && <TableComp barData={barData} />}
              </div>
            </Content>
          </>
        )}
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

const mapProps = (state) => {
  // const user = state.user;
  // console.log(state);
  return state.charts;
};

export default connect(mapProps)(SiderDemo);
