"use client"
import { Navbar, Post ,CreatePost } from "@/ui/components"
import { Layout,Col, Row,Card } from "antd";
import React from "react";

const POST_DETAILS = [
  {
    avatarProfileName: 'Rose',
    avatarImage: "https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg",
    image: "https://www.befunky.com/images/prismic/1f427434-7ca0-46b2-b5d1-7d31843859b6_funky-focus-red-flower-field-after.jpeg?auto=avif,webp&format=jpg&width=863",
    description:"Slayed",
    likesCount: 500,
    commentsCount: 15
  },
  {
    avatarProfileName: 'Hannah',
    avatarImage: "https://utahpulse.com/wp-content/uploads/2021/05/JoJo-Hottest-Female-Singers-in-the-world.jpg",
    image: "https://imgix.ranker.com/list_img_v2/11363/691363/original/691363-u3?auto=format&q=50&fit=crop&fm=pjpg&dpr=2&crop=faces&h=185.86387434554973&w=355",
    description:"how is it ?",
    likesCount: 300,
    commentsCount: 19
  },
  {
    avatarProfileName: 'Lexi',
    avatarImage: "https://lyricstranslate.com/files/styles/medium/public/244230003_404316441060733_7404775693723537522_n.jpg",
    image: "https://i.ytimg.com/vi_webp/viimfQi_pUw/hqdefault.webp",
    description:"wowww !",
    likesCount: 296,
    commentsCount: 42
  },
  {
    avatarProfileName: 'Kendall',
    avatarImage: "https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg",
    image: "https://www.befunky.com/images/prismic/1f427434-7ca0-46b2-b5d1-7d31843859b6_funky-focus-red-flower-field-after.jpeg?auto=avif,webp&format=jpg&width=863",
    description:"Enjoy the life to the fullest !In california with my partner !",
    likesCount: 877,
    commentsCount: 13
  }
]

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Row gutter={[24,24]}>
      <Col span={5} offset={1}>
          <Card>wowow</Card>
      </Col>
      <Col span={10} offset={.5}>
          <Layout>
            <CreatePost profile={POST_DETAILS[0].avatarImage}/>
            {POST_DETAILS.map((post, index) => (
              <Post
                key={index}
                avatarProfileName={post.avatarProfileName}
                avatarImage={post.avatarImage}
                description={post.description}
                image={post.image}
                likesCount={post.likesCount}
                commentsCount={post.commentsCount}
              />
            ))}
          </Layout>
      </Col>
      <Col span={6} offset={.5}>
        <Card>wowow</Card>
      </Col>
      </Row>
    </>
  );
}


export default Home;