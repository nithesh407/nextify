
'use client';

import { Avatar, Card, Layout, Slider, Typography, theme } from 'antd';

import { CommentOutlined, LikeOutlined, MenuOutlined } from '@ant-design/icons';
import styles from './postsComponent.module.scss';

const { Content } = Layout;
const { Paragraph } = Typography;

type PostType = {
  avatarProfileName: string,
  avatarImage: string,
  imageUrl: string,
  postDescription: string,
  likesCount: number,
  commentsCount: number,
}

const PostsComponent: React.FC<PostType> = ({ avatarProfileName, avatarImage, imageUrl, postDescription, commentsCount, likesCount }) => {

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
            width: '100%',
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
                {postDescription}
              </Paragraph>
            </div>
            <div className={styles.imageContainer} style={{ height: '100%' }}> {/* Set imageContainer to fill the Card */}
              <img
                className={styles.postImage}
                alt={avatarProfileName}
                src={imageUrl}

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
