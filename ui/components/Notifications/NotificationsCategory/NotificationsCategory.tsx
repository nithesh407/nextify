'use client';

import React from 'react';
import { Button, Card, Flex } from 'antd';
import { BellOutlined } from '@ant-design/icons';

type NotificationsCategoryProps = {
    handleCategory: (value: string) => void;
    category: string
}

const NotificationsCategory: React.FC<NotificationsCategoryProps> = ({ handleCategory, category }) => {

    const categoryChange = (value: string) => {
        handleCategory(value);
    }

    return (
        <Card style={{ width: '90%' }}>
            <Flex gap="small" align="flex-start" vertical>
                <Flex gap="small" wrap="wrap">
                    <Button type={category === 'all' ? 'primary' : 'default'} size='middle' onClick={() => categoryChange('all')}>
                        All <BellOutlined />
                    </Button>
                    <Button size='middle' type={category === 'myposts' ? 'primary' : 'default'} onClick={() => categoryChange('myposts')}>My Posts</Button>
                    <Button type="dashed" size='middle'>
                        Mentions
                    </Button>
                </Flex>
            </Flex>
        </Card>
    );
};

export default NotificationsCategory;
