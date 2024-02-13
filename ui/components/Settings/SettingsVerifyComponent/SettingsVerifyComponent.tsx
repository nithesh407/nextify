'use client'
import { GlobalOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input } from "antd";
import Link from "next/link";
import { useState } from "react";
import { OTPModal } from "@/ui/Modals";


const SettingsVerifyComponent: React.FC = () => {
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
            title={<p><Link style={{ color: 'black' }} href="/Settings/Account"><ArrowLeftOutlined style={{ paddingRight: 10 }} /></Link> Get Verification</p>}
            extra={<GlobalOutlined />}
        >
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    name="phoneNumber"
                    label="Add Phone Number"
                    rules={[{ required: true }]}
                >
                    <Input placeholder="Enter Phone Number For OTP" />
                </Form.Item>
                <Form.Item>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Button onClick={showModal} type="primary" htmlType="submit">
                            Get OTP
                        </Button>
                        <div>
                            <p>Status : {true ? 'Verified ✅' : 'Not Verified ❌'}</p>
                        </div>
                    </div>
                </Form.Item>
            </Form>
            <OTPModal open={open} hideModal={hideModal} />
        </Card>
    )
}

export default SettingsVerifyComponent;