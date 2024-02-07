import React, { useState } from 'react';
import { Avatar, Card, Layout, theme } from 'antd';
import { CommentOutlined, LikeOutlined, MenuOutlined, SaveOutlined } from '@ant-design/icons';
import styles from './Post.module.scss'; // Import the SCSS file

const { Content } = Layout;

type PostType = {
  avatarProfileName: string,
  avatarImage: string,
  image: string,
  likesCount: number,
  commentsCount: number
}

const Post: React.FC<PostType> = ({ avatarProfileName, avatarImage, image, commentsCount, likesCount }) => {


  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const avatar = [
    {
      key: avatarProfileName,
      label: avatarProfileName,
      icon: <Avatar src={avatarImage} />
    },
  ];

  return (
    <>
      <Content style={{ margin: '10px 10px 0', overflow: 'initial', width: '50%', alignSelf: "center" }}>
        <div
          style={{
            padding: 24,
            textAlign: 'center',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Card
            className={styles.cardContainer} // Use the imported styles
            tabList={avatar}
            tabBarExtraContent={<MenuOutlined />}
            tabProps={{
              size: 'small',
            }}
            actions={[
              <p><LikeOutlined /> <span>{likesCount}</span></p>,
              <p><CommentOutlined /> <span>{commentsCount}</span></p>,
            ]}
          >
            <div className={styles.imageContainer}>
              <img
                className={styles.postImage}
                alt={avatarProfileName}
                src={image}
              />
            </div>
          </Card>
        </div>
      </Content>

    </>
  );
};

export default Post;
