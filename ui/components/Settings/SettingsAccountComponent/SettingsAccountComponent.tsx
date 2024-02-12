import React from 'react';
import { Card, Divider, List } from 'antd';
import { ArrowRightOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/link';

const dataAccountManagement = [
    { key: '/Settings/Hibernate', value: 'Hibernate Account' },
    { key: '/Settings/Close', value: 'Close Account' }
]

const dataGeneralSettings = [
    { key: '/Profile/edit', value: 'Name,location and Organization' },
    { key: '/Profile/personal', value: 'Personal Information' },
    { key: '/Settings/verify', value: 'Verification' }
];

const SettingsAccountComponent: React.FC = () => (

    <><Card
        style={{ marginTop: 10 }}
        title="General Settings"
        extra={<UserOutlined />}
    >
        <List
            size="large"
            bordered
            dataSource={dataGeneralSettings}
            renderItem={(item) => <Link href={item.key}> <List.Item extra={<ArrowRightOutlined />}>{item.value}</List.Item></Link>} />
    </Card><Card
        style={{ marginTop: 10 }}
        title="Account Management"
        extra={<UserOutlined />}
    >
            <List
                size="large"
                bordered
                dataSource={dataAccountManagement}
                renderItem={(item) => <Link href={item.key}> <List.Item extra={<ArrowRightOutlined />}>{item.value}</List.Item></Link>} />
        </Card></>
);

export default SettingsAccountComponent;