'use client'
import { UserOutlined, LockOutlined, GoogleOutlined, LoginOutlined } from "@ant-design/icons";
import { Card, Form, Input, Flex, Button, message, Avatar } from "antd";
import Image from "next/image";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import logo from "@/ui/images/icon.png"


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
    const title = <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}><Image
        src={logo}
        width={22}
        height={22}
        alt="Logo" />
        <p>Login</p>
    </div>
    return (
        <Card title={title} extra={<LoginOutlined />} style={{ width: '100%', alignSelf: 'center', marginTop: '-2%' }}>
            <Avatar style={{ marginLeft: '43%' }} size={60} src={'https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png'} />
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                style={{ marginTop: 25 }}
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
                            style={{ width: '100%', alignSelf: 'center' }}
                        >
                            Login
                        </Button>

                        <Button
                            className="login-form-button"
                            onClick={() => signIn('google')}
                            style={{ width: '100%', alignSelf: 'center', marginTop: '5%' }}
                        >
                            <GoogleOutlined /> <span style={{ gap: 10 }}>Sign in with Google</span>
                        </Button>
                    </Form.Item>
                    <p style={{ alignSelf: 'center' }}>Or</p>
                    <Button
                        type="primary"
                        className="login-form-button"
                        style={{ width: '100%', alignSelf: 'center' }}
                        onClick={() => router.push('/Signup')}
                    >
                        Register User
                    </Button>
                </Flex>
            </Form>
        </Card>
    );
}

export default LoginComponent