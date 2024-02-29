'use client';

import React from 'react';
import { Button, Card, Flex } from 'antd';

import { UserOutlined } from '@ant-design/icons';

type ConnectionsCategoryProps = {
    handleCategory: (value: string) => void;
    category: string
}

const ConnectionsCategory: React.FC<ConnectionsCategoryProps> = ({ handleCategory, category }) => {

    const categoryChange = (value: string) => {
        handleCategory(value);
    }

    return (
        <Card style={{ width: '90%' }}>
            <Flex gap="small" align="flex-start" vertical>
                <Flex gap="small" wrap="wrap">
                    <Button type={category === 'followings' ? 'primary' : 'default'} size='middle' onClick={() => categoryChange('followings')}>
                        Following <UserOutlined />
                    </Button>
                    <Button size='middle' type={category === 'followers' ? 'primary' : 'default'} onClick={() => categoryChange('followers')}>Followers <UserOutlined /></Button>
                </Flex>
            </Flex>
        </Card>
    );
};

export default ConnectionsCategory;
