"use client";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Flex, Form, Input } from "antd";
import Link from "next/link";

const Login: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Card title={"Login"}  style={{ width: "30%", top: 20, margin: "auto" }}>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item style={{marginBottom:30}}
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            size="large"
          />
        </Form.Item>

        <Form.Item
          
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            size="large"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked"  style={{marginTop:-30}}>
            <p>
              Forgot your Password:{" "}
              <Link
                className="login-form-forgot"
                href=""
                style={{ marginLeft: "35%", textDecoration: "underline" }}
              >
                Reset password
              </Link>{" "}
            </p>
          </Form.Item>
        </Form.Item>
        <Flex justify="center" vertical style={{marginTop:-20}}>
          <Form.Item noStyle>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>

          <p style={{alignSelf:'center', marginTop:3}}>
            {" "}
            Or <Link href="Signup">register now!</Link>
          </p>
        </Flex>
      </Form>
    </Card>
  );
};

export default Login;
