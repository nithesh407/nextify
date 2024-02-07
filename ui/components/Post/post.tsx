
import { Avatar, Card, Layout, Slider, Typography, theme } from 'antd';
import { CommentOutlined, LikeOutlined, MenuOutlined } from '@ant-design/icons';
import styles from './Post.module.scss'; // Import the SCSS file
import { useState } from 'react';

const { Content } = Layout;
const {Paragraph} = Typography;

type PostType = {
  avatarProfileName: string,
  avatarImage: string,
  image: string,
  description:string,
  likesCount: number,
  commentsCount: number,
}

const Post: React.FC<PostType> = ({ avatarProfileName, avatarImage, image,description, commentsCount, likesCount }) => {

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
      <Content style={{ margin: '10px 10px', overflow: 'initial', width: '90%', alignSelf: "center" }}>
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
              <div ><LikeOutlined /> <span>{likesCount}</span></div>,
              <div><CommentOutlined /> <span>{commentsCount}</span></div>,
            ]}
          >
            <div className={styles.imageContainer}>
              <img
                className={styles.postImage}
                alt={avatarProfileName}
                src={image}
              />
            </div>
            <Paragraph
                ellipsis={{
                  rows,
                  expandable: true,
                }}
              >
                {description}
            </Paragraph>
          </Card>
        </div>
      </Content>

    </>
  );
};

export default Post;
