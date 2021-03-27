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
    span: 5,
  },
  wrapperCol: {
    span: 6,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 6,
  },
};

class LoginForm extends React.Component {
  render() {
    const onFinish = (values) => {
      console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

    return (
      <React.Fragment>
        <PageHeader
          className="site-page-header"
          onBack={() => null}
          title="Title"
          subTitle="This is a subtitle"
          ghost={false}
        />
        <div>
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <LoginOutlined />
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
            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginForm;
