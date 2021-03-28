import React from "react";
import "antd/dist/antd.css";
import "../index.css";
import { Form, Input, Button, Checkbox, PageHeader } from "antd";
import { LoginOutlined, StarFilled, StarTwoTone } from "@ant-design/icons";
import { Layout, Menu, Breadcrumb } from "antd";
// import DemoPie from "./DemoPie";
// import user from "../reducers/user";

const { Header, Content, Footer } = Layout;

const layout = {
  labelCol: {
    offset: 2,
    span: 5,
  },
  wrapperCol: {
    offset: 2,
    span: 6,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 9,
    span: 6,
  },
};

class LoginForm extends React.Component {
  render() {
    const { login, dispatch } = this.props;
    console.log(this.props, "-----");

    const onFinish = (values) => {
      const { username, password } = values;
      console.log(username);
      dispatch(login(username, password));
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

    return (
      <React.Fragment>
        <Layout>
          <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
              {/* <Menu.Item key="1">nav 1</Menu.Item> */}
              <Menu.Item key="2">Sigmoid</Menu.Item>
              <Menu.Item key="3"></Menu.Item>
            </Menu>
          </Header>
          {/* {!userToken && ( */}
          <div
            style={{
              paddingTop: "25px",
              width: "50%",
              left: "50",
              position: "relative",
              left: "25%",
            }}
          >
            <Content
              className="site-layout"
              style={{ padding: "0 50px", marginTop: 64 }}
            >
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 380 }}
              >
                <PageHeader
                  className="site-page-header"
                  onBack={() => null}
                  title="Login"
                  backIcon={<LoginOutlined />}
                  // subTitle="This is a subtitle"
                  ghost={false}
                />
                <div style={{ paddingTop: "10px" }}>
                  <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                  >
                    <Form.Item
                      label="Username"
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="Password"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>
                    <Form.Item
                      {...tailLayout}
                      name="remember"
                      valuePropName="checked"
                    >
                      {/* <Checkbox>Remember me</Checkbox> */}
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                      <Button type="primary" htmlType="submit">
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </Content>
          </div>
          {/* )} */}
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </React.Fragment>
    );
  }
}

export default LoginForm;
