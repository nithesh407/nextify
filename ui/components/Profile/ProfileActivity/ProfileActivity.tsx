'use client'

import {  PlusOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Flex, Image, List, Typography } from "antd";
import { POST_DETAILS } from "@/lib/utils/DUMMY_DATA";
import Link from "next/link";

const { Title, Paragraph } = Typography

const ProfileActivity: React.FC = () => {
    const followerCount = 3;
    return (
        <Card
            actions={[
                <Paragraph>See More</Paragraph>
            ]}
            title={
                <Title style={{ display: 'contents' }} level={4}>
                    Activity
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ fontSize: '12px', fontWeight: 'lighter' }}>
                            <a href="">{followerCount} followers</a>
                        </span>
                    </div>
                </Title>
            }
            extra={<Button
                shape="round"
                type="default"
                style={{ color: '#1677ff', borderColor: '#1677ff' }}
                icon={<PlusOutlined />}
                title="Create a post"
            >Create a post</Button>}
        >
            <List
                itemLayout="vertical"
                size="small"
                dataSource={POST_DETAILS}
                loadMore
                renderItem={(item, index) => (
                    <List.Item style={index === POST_DETAILS.length - 1 ? { borderBottom: 'none' } : undefined}>
                        <Link href={''}>
                            <List.Item.Meta
                                style={{ marginBottom: -7 }}
                                avatar={<Avatar shape='square' size={100} src={item.avatarImage} />}
                                title={<Paragraph type='secondary'>12/12/2024</Paragraph>}
                                description={<Paragraph style={{ marginTop: '-10px' }} ellipsis={{ rows: 3, suffix: 'see more' }} >{item.postDescription}</Paragraph>}
                            />
                        </Link>
                    </List.Item>
                )} />

        </Card>
    )
}
export default ProfileActivity;