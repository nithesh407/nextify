
'use client';

import { Avatar, Card, Layout, Slider, Typography, theme } from 'antd';

import { CommentOutlined, LikeOutlined, MenuOutlined } from '@ant-design/icons';
import styles from './postsComponent.module.scss';
import { useState } from 'react';

const { Content } = Layout;
const { Paragraph } = Typography;

type PostType = {
  avatarProfileName: string,
  avatarImage: string,
  image: string,
  description: string,
  likesCount: number,
  commentsCount: number,
}

const PostsComponent: React.FC<PostType> = ({ avatarProfileName, avatarImage, image, description, commentsCount, likesCount }) => {

  const [rows, setRows] = useState(1);
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
      <Content style={{ marginTop: 10, overflow: 'initial', width: '90%', alignSelf: "center" }}>
        <div
          style={{

            // padding: 14,
            width: '100%',
            // textAlign: 'center',

            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >

          <Card
            className={styles.cardContainer} // Use the imported styles
            tabList={avatar}

            activeTabKey={null as unknown as string}

            tabBarExtraContent={<a><MenuOutlined /></a>}
            tabProps={{
              size: 'small',
            }}
            actions={[
              <div ><LikeOutlined /> <span>{likesCount}</span></div>,
              <div><CommentOutlined /> <span>{commentsCount}</span></div>,
            ]}

            style={{ height: '100%' }} // Ensure the Card occupies the full height
          >
            <div className={styles.paraContainer}>
              <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'see more' }}>
                {description}
              </Paragraph>
            </div>
            <div className={styles.imageContainer} style={{ height: '100%' }}> {/* Set imageContainer to fill the Card */}
              <img
                className={styles.postImage}
                alt={avatarProfileName}
                src={image}

              // style={{ height: '100%', objectFit: 'cover' }} // Ensure the image fills the container
              />
            </div>
          </Card>
        </div>
      </Content>

    </>
  );
};

export default PostsComponent;
