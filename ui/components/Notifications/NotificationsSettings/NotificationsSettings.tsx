import React from 'react';
import { Card, Space } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import Link from 'next/link';

const NotificationsSettings: React.FC = () => (
    <Space direction="vertical" size={16}>
        <Card title="Manage Notifications" extra={<SettingOutlined />} style={{ width: 235 }}>
            <Link href="#">Notifications Settings</Link>
        </Card>
    </Space>
);

export default NotificationsSettings;