import { Card, Form, Input, Button, message } from 'antd';
import { ArrowLeftOutlined, GlobalOutlined, LockOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Rule } from 'antd/lib/form';
import Link from 'next/link';

const SettingsPasswordComponent: React.FC = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        // Logic to handle form submission
        console.log('Received values:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        // Logic to handle form submission failure
        console.log('Failed:', errorInfo);
    };


    const confirmPasswordValidator: Rule = ({ getFieldValue }) => ({
        validator(_, value) {
            if (!value || getFieldValue('newPassword') === value) {
                return Promise.resolve();
            }
            return Promise.reject(new Error('The two passwords that you entered do not match!'));
        },
    });


    return (
        <Card
            style={{ marginTop: 10 }}
            title={<p><Link style={{ color: 'black' }} href="/Settings/SignIn&Security"><ArrowLeftOutlined style={{ paddingRight: 10 }} /></Link> Password</p>}
            extra={<LockOutlined />}
        >
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    name="oldPassword"
                    label="Old Password"
                    rules={[{ required: true, message: 'Please enter your old password' }]}
                >
                    <Input placeholder="Enter Old Password" />
                </Form.Item>
                <Form.Item
                    name="newPassword"
                    label="New Password"
                    rules={[
                        { required: true, message: 'Please enter your new password' },
                        { min: 6, message: 'Password must be at least 6 characters long' },
                    ]}
                >
                    <Input.Password placeholder="Enter New Password" />
                </Form.Item>
                <Form.Item
                    name="confirmPassword"
                    label="Confirm New Password"
                    dependencies={['newPassword']}
                    rules={[
                        { required: true, message: 'Please confirm your new password' },
                        confirmPasswordValidator,
                    ]}
                >
                    <Input.Password placeholder="Confirm New Password" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Change Password
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default SettingsPasswordComponent;
