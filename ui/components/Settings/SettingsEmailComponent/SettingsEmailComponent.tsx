'use client'
import { ArrowLeftOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input } from "antd";
import Link from "next/link";
import { useState } from "react";
import { OTPModal } from "@/ui/Modals";

const SettingsEmailComponent: React.FC = () => {
    const [form] = Form.useForm();
    const [open, setOpen] = useState<boolean>(false);

    const showModal = () => {
        setOpen(true);
    };

    const hideModal = () => {
        setOpen(false);
    };

    const onFinish = () => {
        //   message.success('Submit success!');
    };

    const onFinishFailed = () => {
        //   message.error('Submit failed!');
    };

    const onFill = () => {
        form.setFieldsValue({
            url: 'https://taobao.com/',
        });
    };
    return (
        <Card

            style={{ marginTop: 10 }}
            title={<p><Link style={{ color: 'black' }} href="/Settings/SignIn&Security"><ArrowLeftOutlined style={{ paddingRight: 10 }} /></Link> Email Address</p>}
            extra={<MailOutlined />}
        >
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    name="email"
                    label="Edit Email Address"
                    rules={[{ required: true }, { type: 'email' }]}
                >
                    <Input placeholder="Enter Email for Updation" />
                </Form.Item>
                <Form.Item>

                    <Button onClick={showModal} type="primary" htmlType="submit">
                        Edit Email
                    </Button>

                </Form.Item>
            </Form>
            <OTPModal open={open} hideModal={hideModal} />
        </Card>
    )
}

export default SettingsEmailComponent;