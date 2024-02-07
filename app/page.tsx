"use client"
import { Navbar, Post } from "@/ui/components"
import { Layout } from "antd";
import React from "react";

const POST_DETAILS = [
  {
    avatarProfileName: 'Rose',
    avatarImage: "https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg",
    image: "https://www.befunky.com/images/prismic/1f427434-7ca0-46b2-b5d1-7d31843859b6_funky-focus-red-flower-field-after.jpeg?auto=avif,webp&format=jpg&width=863",
    likesCount: 500,
    commentsCount: 15
  },
  {
    avatarProfileName: 'Hannah',
    avatarImage: "https://utahpulse.com/wp-content/uploads/2021/05/JoJo-Hottest-Female-Singers-in-the-world.jpg",
    image: "https://imgix.ranker.com/list_img_v2/11363/691363/original/691363-u3?auto=format&q=50&fit=crop&fm=pjpg&dpr=2&crop=faces&h=185.86387434554973&w=355",
    likesCount: 300,
    commentsCount: 19
  },
  {
    avatarProfileName: 'Lexi',
    avatarImage: "https://lyricstranslate.com/files/styles/medium/public/244230003_404316441060733_7404775693723537522_n.jpg",
    image: "https://i.ytimg.com/vi_webp/viimfQi_pUw/hqdefault.webp",
    likesCount: 296,
    commentsCount: 42
  },
  {
    avatarProfileName: 'Kendall',
    avatarImage: "https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg",
    image: "https://www.befunky.com/images/prismic/1f427434-7ca0-46b2-b5d1-7d31843859b6_funky-focus-red-flower-field-after.jpeg?auto=avif,webp&format=jpg&width=863",
    likesCount: 877,
    commentsCount: 13
  }
]

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Layout>
        {POST_DETAILS.map((post, index) => (
          <Post
            key={index}
            avatarProfileName={post.avatarProfileName}
            avatarImage={post.avatarImage}
            image={post.image}
            likesCount={post.likesCount}
            commentsCount={post.commentsCount}
          />
        ))}
      </Layout>

    </>
  );
}


export default Home;