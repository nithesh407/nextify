'use client'

import { EditFilled, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Flex, Image, List, Typography } from "antd";
import { POST_DETAILS } from "@/utils/DUMMY_DATA";
import Link from "next/link";

const { Title, Paragraph } = Typography

const ProfileEducation: React.FC = () => {
    return (
        <Card
            size="small"
            title={
                <Title style={{ display: 'contents' }} level={4}>Education</Title>
            }
            extra={<>
                <Button
                    style={{ marginRight: 10 }}
                    type='text'
                    icon={<PlusOutlined size={30} />}
                ></Button>
                <Button
                    type='text'
                    icon={<EditOutlined />}
                ></Button>
            </>}
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
                                style={{ marginBottom: -17 }}
                                avatar={<Avatar shape='square' size={50} src={item.image} />}
                                title={<Paragraph style={{ lineHeight: '1rem' }}>{item.avatarProfileName}<br /><span style={{ fontWeight: 'lighter' }}>Course and degree</span></Paragraph>}
                                description={<Paragraph type="secondary" style={{ marginTop: '-15px' }} >2024 - 2025</Paragraph>}
                            />
                        </Link>
                    </List.Item>
                )} />

        </Card>
    )
}
export default ProfileEducation;