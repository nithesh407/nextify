import React, { useState } from 'react';
import { Avatar, Card } from 'antd';
import { CommentOutlined, LikeOutlined, MenuOutlined, SaveOutlined } from '@ant-design/icons';

const avatar = [
  {
    key: 'profilename',
    label: 'Profile Name',
    icon:<Avatar/>
  },
];

const Post: React.FC = () => {


  return (
    <>
      <Card
        style={{ width: '100%', maxHeight:600,maxWidth:600 }}
        tabList={avatar}
        tabBarExtraContent={<MenuOutlined />}
        tabProps={{
          size: 'small',
        }}
        actions={[
            <LikeOutlined />,
            <CommentOutlined />,
        ]}
      >
    <img style={{maxHeight:500,maxWidth:500}} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
      </Card>
    </>
  );
};

export default Post;