'use client'
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Card, Form, Input, Flex, Button } from "antd";
import Link from "next/link";


const LoginComponent: React.FC = () => {
    const onFinish = (values: any) => {
        console.log("Received values of form: ", values);
    };
    return (
        <Card title={"Login"} style={{ width: '35%', top: 20, margin: "auto" }}>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item style={{ marginBottom: 30 }}
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
                <Flex style={{ alignItems: 'center', marginBottom: 30, marginTop: -22, justifyContent: 'space-evenly' }}>
                    <p>
                        Forgot your Password:{" "}
                    </p>
                    <Link
                        className="login-form-forgot"
                        href=""
                        style={{ marginLeft: "35%", textDecoration: "underline" }}
                    >
                        Reset password
                    </Link>{" "}

                </Flex>

                <Flex justify="center" vertical style={{ marginTop: -20 }}>
                    <Form.Item noStyle>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                        >
                            Log in
                        </Button>
                    </Form.Item>

                    <p style={{ alignSelf: 'center', marginTop: 3 }}>
                        {" "}
                        Or <Link href="Signup">register now!</Link>
                    </p>
                </Flex>
            </Form>
        </Card>
    );
}

export default LoginComponent