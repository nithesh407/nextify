import React from 'react';
import { Card, Empty } from 'antd';
import { NotificationTwoTone } from '@ant-design/icons';
import Link from 'next/link';

const SettingsNotificationsComponent: React.FC = () => {
    return (
        <Card

            style={{ marginTop: 10, height: '75vh' }}
            title="User Notifications"
            extra={<NotificationTwoTone />}
        >
            <Empty
                style={{ marginTop: 70 }}
                image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                imageStyle={{ height: 150 }}
                description={
                    <span>
                        Coming <Link href="#API">Soon</Link>
                    </span>
                }
            >
            </Empty>
        </Card>
    )
}

export default SettingsNotificationsComponent;