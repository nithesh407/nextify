'use client'

import { BookOutlined, EditOutlined, FileTextOutlined, PlusOutlined } from "@ant-design/icons";
import {  Button, Card, List, Typography } from "antd";
import Link from "next/link";

const { Title, Paragraph } = Typography



const ProfileSkills: React.FC <{skills:[string]}>= ({skills}) => {
    return (
        <Card
            size="small"
            title={
                <Title style={{ display: 'contents' }} level={4}>Skills</Title>
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
                dataSource={skills}
                loadMore
                renderItem={(item, index) => (
                    <List.Item style={index === skills.length - 1 ? { borderBottom: 'none' } : undefined}>
                        <Link href={''}>
                            <List.Item.Meta
                                style={{ marginBottom: -5 }}
                                avatar={<FileTextOutlined/>}
                                title={<Paragraph style={{ lineHeight: '1rem' }}>{item }</Paragraph>}
                            />
                        </Link>
                    </List.Item>
                )} />

        </Card>
    )
}
export default ProfileSkills;