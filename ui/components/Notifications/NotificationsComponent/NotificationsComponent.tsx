'use client';

import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import React from 'react';
import { Avatar, Card, List, Space } from 'antd';

type T = {
    categoryValue: string
}

const data = Array.from({ length: 6 }).map((_, i) => ({

    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
    description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team.'
}));

const dataPosts = Array.from({ length: 6 }).map((_, i) => ({

    href: 'https://ant.design',
    title: `ant design part for Posts ${i}`,
    avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
    description:
        'Post Ant Design, a design language for background applications, is refined by Ant UED Team.'
}));


const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const NotificationsComponent: React.FC<T> = ({ categoryValue }) => (

    <Card style={{ width: '90%', alignSelf: 'center', position: 'relative', top: 10 }}>
        <div style={{ height: '65vh', overflowY: 'scroll' }}>
            <List
                itemLayout="vertical"
                size="large"
                dataSource={categoryValue === 'all' ? data : dataPosts}
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

