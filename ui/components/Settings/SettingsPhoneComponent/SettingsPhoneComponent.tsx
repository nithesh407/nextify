import { UserOutlined, ArrowRightOutlined, LoginOutlined, GlobalOutlined, SunOutlined, MoonOutlined, ArrowLeftOutlined, PhoneOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, Space } from "antd";
import Link from "next/link";


const SettingsPhoneComponent: React.FC = () => {
    const [form] = Form.useForm();

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
            title={<p><Link style={{ color: 'black' }} href="/Settings/SignIn&Security"><ArrowLeftOutlined style={{ paddingRight: 10 }} /></Link> Phone Number</p>}
            extra={<PhoneOutlined />}
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
                    label="Change Phone Number"
                    rules={[{ required: true }, { type: 'number', max: 10 }]}
                >
                    <Input placeholder="Edit Phone Number and Get OTP" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Get OTP
                    </Button>

                </Form.Item>
            </Form>
        </Card>
    )
}

export default SettingsPhoneComponent;