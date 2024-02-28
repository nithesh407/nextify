'use client'

import {  EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Flex, Image, List, Typography } from "antd";
import moment from "moment";
import { Moment } from "moment";

import Link from "next/link";

const { Title, Paragraph } = Typography

type Education=[ {
    organization: string;
    degree: string;
    period: [Moment, Moment];
}
]

const ProfileEducation: React.FC<{educations:Education}> = ({educations}) => {
    const formatYear = (date: Moment) => moment(date).year().toString();


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
                dataSource={educations}
                loadMore
                renderItem={(item, index) => (
                    <List.Item style={index === educations.length - 1 ? { borderBottom: 'none' } : undefined}>
                        <Link href={''}>
                            <List.Item.Meta
                                style={{ marginBottom: -17 }}
                                avatar={<Avatar shape='square' size={50} />}
                                title={<Paragraph style={{ lineHeight: '1rem' }}>{item.organization}<br /><span style={{ fontWeight: 'lighter' }}>{item.degree}</span></Paragraph>}
                                description={<Paragraph type="secondary" style={{ marginTop: '-15px' }} >{`${formatYear(item.period[0])} - ${formatYear(item.period[1])}`}</Paragraph>}
                            />
                        </Link>
                    </List.Item>
                )} />

        </Card>
    )
}
export default ProfileEducation;