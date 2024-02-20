import React from 'react';
import { Card, Space } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import Link from 'next/link';

const ConnectionsSettings: React.FC = () => (
    <Space direction="vertical" size={16}>
        <Card title="Manage Connections" extra={<SettingOutlined />} style={{ width: 235 }}>
            <Link href="/Settings/Connections">Connection Settings</Link>
        </Card>
    </Space>
);

export default ConnectionsSettings;