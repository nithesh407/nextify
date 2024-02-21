'use client'
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Card, Form, Input, Flex, Button, message } from "antd";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";


const LoginComponent: React.FC = () => {
    const router = useRouter()
    const onFinish = async (values: any) => {
        const response = await fetch('http://localhost:3000/api/v1/users/Login', {
            method: 'POST',
            body: JSON.stringify(values),
            cache: 'no-cache'
        })
        const res = await response.json();
        if (res.status === 'success') {
            router.push('/Dashboard')
        }
        if (res.status === 'fail') {
            message.error(res.message)
        }
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
                    name="email"
                    rules={[{ required: true, message: "Please input your email!", type: 'email' }]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Email"
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
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            onClick={() => signIn('google')}
                        >
                            Sign in with Google
                        </Button>
                    </Form.Item>

                    <p style={{ alignSelf: 'center', marginTop: 3 }}>
                        {" "}
                        Or <Link href="/Signup">Register Here!</Link>
                    </p>
                </Flex>
            </Form>
        </Card>
    );
}

export default LoginComponent