import React from 'react';
import { Button, Card, Flex } from 'antd';
import { BellOutlined } from '@ant-design/icons';


const NotificationsCategory: React.FC = () => {
    return (
        <Card style={{ width: '90%' }}>
            <Flex gap="small" align="flex-start" vertical>
                <Flex gap="small" wrap="wrap">
                    <Button type="primary" size='middle'>
                        All <BellOutlined />
                    </Button>
                    <Button size='middle'>My Posts</Button>
                    <Button type="dashed" size='middle'>
                        Mentions
                    </Button>
                </Flex>
            </Flex>
        </Card>
    );
};

export default NotificationsCategory;