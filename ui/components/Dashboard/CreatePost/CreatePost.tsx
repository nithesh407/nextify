'use client';

import React, { useState } from 'react';
import { Card, Avatar, Button } from 'antd';
import { CreatePostModal } from '@/ui/Modals';

const Createpost: React.FC<{ profile: string }> = ({ profile }) => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const handleCreatePostClick = () => {
        setModalVisible(true);
    };

    const handleModalCancel = () => {
        setModalVisible(false);
    };

    return (
        <>
            <Card style={{ width: '90%', alignSelf: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Avatar size={'large'} src={profile} />
                    <Button
                        size="large"
                        shape="round"
                        type="primary"
                        style={{ width: '85%' }}
                        onClick={handleCreatePostClick}
                    >
                        Create a post
                    </Button>
                </div>
            </Card>
            <CreatePostModal visible={modalVisible} handleCancel={handleModalCancel} />
        </>
    );
};

export default Createpost;
