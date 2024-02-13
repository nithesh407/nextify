'use client'
import { UserOutlined, ArrowRightOutlined, LoginOutlined, GlobalOutlined, SunOutlined, MoonOutlined, ArrowLeftOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import { Button, Card, Flex, Form, Input, List, Space, Radio } from "antd";
import type { RadioChangeEvent } from 'antd';
import { useState } from "react";
import Link from "next/link";


const options = [
    { label: 'Organization', value: 'Organization' },
    { label: 'Location', value: 'Location' },
];

const SettingsSuggestByComponent: React.FC = () => {
    const [form] = Form.useForm();
    const [value4, setValue4] = useState('Organization');


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

    const onChange4 = ({ target: { value } }: RadioChangeEvent) => {
        console.log('radio4 checked', value);
        setValue4(value);
    };

    return (
        <Card

            style={{ marginTop: 10 }}
            title={<p><Link style={{ color: 'black' }} href="/Settings/Connections"><ArrowLeftOutlined style={{ paddingRight: 10 }} /></Link> Suggest People</p>}
            extra={<UsergroupAddOutlined />}
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
                    label="Change Suggest By People"
                    rules={[{ required: true }]}
                >
                    <Radio.Group
                        options={options}
                        onChange={onChange4}
                        value={value4}
                        optionType="button"
                        buttonStyle="solid"
                        defaultValue={"Organization"}
                    />
                </Form.Item>
                <Form.Item>

                    <Button ghost type="primary" htmlType="submit">
                        Save Changes
                    </Button>

                </Form.Item>
            </Form>
        </Card>
    )
}

export default SettingsSuggestByComponent;