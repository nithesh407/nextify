import { HomeProfile, CreatePost, PostsComponent, HomeCalender } from "@/ui/components";
import { Row, Col, Layout } from "antd";
import React from "react";

import { POST_DETAILS } from "@/utils/DUMMY_DATA";

const postData = async () => {
    const response = await fetch("http://localhost:3000/api/v1/posts/",
        {
            cache: 'no-cache',
        }

    )

    const posts = await response.json()
    return posts.data
}

const Dashboard: React.FC = async () => {
    const POSTS = await postData()
    return (
        <Layout>
            <Row style={{ marginTop: 15 }}>
                <Col span={5} offset={1}>
                    <div style={{ position: 'sticky', top: 80 }}>
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
                        {POSTS && POSTS.map((post: { avatarProfileName: string; avatarImage: string; postDescription: string; imageUrl: string; likesCount: number; commentsCount: number; }, index: React.Key | null | undefined) => (
                            <PostsComponent
                                key={index}
                                avatarProfileName={post.avatarProfileName}
                                avatarImage={post.avatarImage}
                                postDescription={post.postDescription}
                                imageUrl={post.imageUrl as string}
                                likesCount={post.likesCount}
                                commentsCount={post.commentsCount}
                            />
                        ))}
                    </>
                </Col>
                <Col span={5} style={{ marginLeft: '-50px' }}>
                    <div style={{ position: 'sticky', top: 80 }}>
                        <HomeCalender />
                    </div>
                </Col>
            </Row>
        </Layout>
    )
}

export default Dashboard