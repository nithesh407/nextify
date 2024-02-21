"use client";

import { GoogleOutlined, LoginOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Flex, Form, Input } from "antd";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import logo from "@/ui/images/icon.png"
import Image from "next/image";

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 9 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 13 },
    },
};


const SignUpComponent: React.FC = () => {
    const [form] = Form.useForm();
    const router = useRouter()

    const onFinish = async (values: any) => {
        const response = await fetch('/api/v1/users/SignUp', {
            method: 'POST',
            body: JSON.stringify(values)
        })
        const res = await response.json()
        if (res.status === 'success') {
            router.push('/Login')
        }
    };
    const title = <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}><Image
        src={logo}
        width={22}
        height={22}
        alt="Logo" />
        <p>Signup</p>
    </div>

    return (
        <Card title={title} extra={<LoginOutlined />} style={{ width: '100%', marginTop: -15 }}>
            <Avatar style={{ marginLeft: '43%' }} size={60} src={'https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png'} />
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                style={{ maxWidth: 600, marginTop: 25 }}
                scrollToFirstError
            >
                <Form.Item
                    {...formItemLayout}
                    label="User Name"
                    name="userName"
                    rules={[{ required: true }]}
                >
                    <Input placeholder='Username' />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: "email",
                            message: "The input is not valid E-mail!",
                        },
                        {
                            required: true,
                            message: "Please input your E-mail!",
                        },
                    ]}
                >
                    <Input placeholder='E-mail' />
                </Form.Item>
                <Form.Item
                    name="profession"
                    label='Profession'
                    rules={[{ required: true, message: "Please input your profession!" }]}
                >
                    <Input
                        placeholder="Profession"
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password placeholder='Password' />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={["password"]}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: "Please confirm your password!",
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue("password") === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(
                                    new Error("The new password that you entered do not match!")
                                );
                            },
                        }),
                    ]}
                >
                    <Input.Password placeholder='Confirm Password' />
                </Form.Item>
                <Flex justify="center" vertical style={{ marginTop: 10 }}>
                    <Form.Item noStyle>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            style={{ width: '75%', alignSelf: 'center' }}
                        >
                            Register User
                        </Button>
                        <p style={{ alignSelf: 'center' }}>Or</p>
                        <Button
                            className="login-form-button"
                            onClick={() => signIn('google')}
                            style={{ width: '75%', alignSelf: 'center' }}
                        >
                            <GoogleOutlined /> <span style={{ gap: 10 }}>Sign Up with Google</span>
                        </Button>
                    </Form.Item>
                </Flex>
            </Form>
        </Card>
    );
};

export default SignUpComponent;
