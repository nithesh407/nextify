import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import React from 'react';
import { Avatar, Card, List, Space } from 'antd';
import styles from './notificationsComponent.module.scss'; // Import SCSS module

interface NotificationItem {
    href: string,
    title: string,
    avatar: string,
    description: string
}

interface NotificationComponentsProps {
    data: NotificationItem[]
}

const NotificationsComponent: React.FC<NotificationComponentsProps> = ({ data }) => (
    <Card className={styles['notifications-card']}>
        <div className={styles['list-container']}>
            <List
                itemLayout="vertical"
                size="large"
                dataSource={data}
                renderItem={(item) => (
                    <List.Item
                        key={item.title}
                        extra={
                            <img
                                width={190}
                                alt="logo"
                                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                            />
                        }
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar} />}
                            title={<a href={item.href}>{item.title}</a>}
                            description={item.description}
                        />
                    </List.Item>
                )}
            />
        </div>
    </Card>
);

export default NotificationsComponent;
