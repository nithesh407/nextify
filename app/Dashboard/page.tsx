import { HomeProfile, CreatePost, PostsComponent, HomeCalender } from "@/ui/components";
import { Row, Col, Layout } from "antd";
import { cookies } from "next/headers";
import React from "react";


const postData = async () => {
    const response = await fetch("http://localhost:3000/api/v1/posts/",
        {
            cache: 'no-cache',
        }
    )
    const posts = await response.json()
    return posts.data
}
const userDetail = async () => {
    const id = cookies().get('user_id')?.value
    const response = await fetch("http://localhost:3000/api/v1/users/getUser",
        {
            method: 'POST',
            body: JSON.stringify(id),
            cache: 'no-store'
        }
    )
    const user = await response.json()
    return user
}

const Dashboard: React.FC = async () => {
    const POSTS = await postData()
    const { userDetails } = await userDetail()
    console.log(userDetails)
    return (
        <Layout>
            <Row style={{ marginTop: 15 }}>
                <Col span={5} offset={1}>
                    <div style={{ position: 'sticky', top: 80 }}>
                        <HomeProfile
                            profileName={userDetails.userName}
                            profileTag={`@${userDetails.email}`}
                            profileImage={userDetails.imageUrl}
                            profileDescription={userDetails.userDescription}
                            linkedInURL={userDetails.linkedINURL}
                            githubURL={userDetails.githubURL}
                            twitterURL={userDetails.twitterURL}
                            instagramURL={userDetails.instagramURL}
                        />
                    </div>
                </Col>
                <Col span={12} offset={1}>
                    <>
                        <CreatePost profile={"https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"} />
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