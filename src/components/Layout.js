import React from "react";
import { connect } from "react-redux";
import { ACTIONS } from "../reducers/charts";

import "antd/dist/antd.css";
import "../index.css";

import { Layout, Menu, Breadcrumb, Skeleton, Affix, Spin, Space } from "antd";
import DemoPie from "./DemoPie";
import DateRange from "./DateRange";
import BarChart from "./BarChart";
import TableComp from "./TableComp";

const { Header, Content, Footer } = Layout;
class SiderDemo extends React.Component {
  componentDidMount() {
    const { init } = ACTIONS;
    const { userToken } = this.props;

    userToken && this.props.dispatch(init(userToken));
  }

  render() {
    const {
      pieData,
      dispatch,
      userToken,
      tableData,
      barData,
      logout,
      isLoading,
    } = this.props;

    let tos = true;
    return (
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="2">Sigmoid</Menu.Item>
            <Menu.Item key="3" onClick={dispatch(logout)}>
              Logout
            </Menu.Item>
          </Menu>
        </Header>

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
              {isLoading && (
                <>
                  <Skeleton active />
                  <Skeleton active />
                </>
              )}
              {pieData && !isLoading && <DemoPie pieData={pieData} />}
            </div>
          </Content>
          <Content
            className="site-layout"
            style={{ padding: "0 50px", marginTop: 64 }}
          >
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 380 }}
            >
              {isLoading && (
                <>
                  <Skeleton active />
                  <Skeleton active />
                </>
              )}
              {tableData.length !== 0 && !isLoading && (
                <BarChart tableData={tableData} />
              )}
            </div>
          </Content>
          <Content
            className="site-layout"
            style={{ padding: "0 50px", marginTop: 64 }}
          >
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 380 }}
            >
              {isLoading && (
                <>
                  <Skeleton active />
                  <Skeleton active />
                </>
              )}
              {barData && !isLoading && <TableComp barData={barData} />}
            </div>
          </Content>
        </>
        <Footer style={{ textAlign: "center" }}></Footer>
      </Layout>
    );
  }
}

const mapProps = (state) => {
  return state.charts;
};

export default connect(mapProps)(SiderDemo);
