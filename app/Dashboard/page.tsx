import { HomeProfile, CreatePost, Post, HomeCalender } from "@/ui/components";
import { Row, Col, Layout } from "antd";
import React from "react";

const POST_DETAILS = [
    {
        avatarProfileName: 'Rose',
        avatarImage: "https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg",
        image: "https://www.befunky.com/images/prismic/1f427434-7ca0-46b2-b5d1-7d31843859b6_funky-focus-red-flower-field-after.jpeg?auto=avif,webp&format=jpg&width=863",
        description: "Slayed",
        likesCount: 500,
        commentsCount: 15
    },
    {
        avatarProfileName: 'Hannah',
        avatarImage: "https://utahpulse.com/wp-content/uploads/2021/05/JoJo-Hottest-Female-Singers-in-the-world.jpg",
        image: "https://imgix.ranker.com/list_img_v2/11363/691363/original/691363-u3?auto=format&q=50&fit=crop&fm=pjpg&dpr=2&crop=faces&h=185.86387434554973&w=355",
        description: "how is it ?",
        likesCount: 300,
        commentsCount: 19
    },
    {
        avatarProfileName: 'Lexi',
        avatarImage: "https://lyricstranslate.com/files/styles/medium/public/244230003_404316441060733_7404775693723537522_n.jpg",
        image: "https://i.ytimg.com/vi_webp/viimfQi_pUw/hqdefault.webp",
        description: "wowww !",
        likesCount: 296,
        commentsCount: 42
    },
    {
        avatarProfileName: 'Kendall',
        avatarImage: "https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg",
        image: "https://www.befunky.com/images/prismic/1f427434-7ca0-46b2-b5d1-7d31843859b6_funky-focus-red-flower-field-after.jpeg?auto=avif,webp&format=jpg&width=863",
        description: "Enjoy the life to the fullest !In california with my partner !",
        likesCount: 877,
        commentsCount: 13
    }
]

const Dashboard: React.FC = () => {
    return (
        <Layout>
            <Row style={{ marginTop: 15 }}>
            <Col span={5} offset={1}>
                <div style={{position:'sticky', top:80}}>
                <HomeProfile
                    profileName="Lana Del rey"
                    profileTag="@lanadelrey.idk"
                    profileImage="https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg"
                    profileDescription="I'm passionate in singing. I like the way I'm. Going through the flow"
                    linkedInURL=""
                    githubURL=""
                    twitterURL=""
                    instagramURL=""
                />
                </div>
            </Col>
            <Col span={12} offset={1}>
                <>
                    <CreatePost profile={POST_DETAILS[0].avatarImage} />
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
                </>
            </Col>
            <Col span={5} style={{ marginLeft: '-50px' }}>
                <div style={{position:'sticky', top:80}}>
                    <HomeCalender />
                </div>
            </Col>
        </Row>
        </Layout>
    )
}

export default Dashboard