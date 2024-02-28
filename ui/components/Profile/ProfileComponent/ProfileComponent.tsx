"use client"
import { Image, Button, Card, Flex, QRCode, Typography } from "antd";
import Meta from "antd/es/card/Meta";
import { EditOutlined, GithubFilled, InstagramFilled, LinkedinFilled, TwitterOutlined } from "@ant-design/icons";

import coverImg from '@/public/cover.jpg'
import logo from '@/ui/images/icon.png';
import { useRouter } from "next/navigation";
import Link from "next/link";

const { Text, Title, Paragraph } = Typography


const ProfileComponent: React.FC<any> = ({data}) => {

    const router = useRouter();


    const{
        userName,
        userLocation,
        userDescription,
        linkedINURL,
        githubURL,
        twitterURL,
        instagramURL
    } = data


    return (
        <Card
            actions={[
                <Link href={linkedINURL}><LinkedinFilled style={{ color: 'dodgerblue', fontSize: '25px' }}  /></Link>,
                <Link href={githubURL}> <GithubFilled style={{ color: 'dark grey', fontSize: '25px' }} /> </Link>,
                <Link href={twitterURL}><TwitterOutlined style={{ color: 'skyblue', fontSize: '25px' }} /></Link>,
               <Link href={instagramURL}><InstagramFilled style={{ color: 'mediumvioletred', fontSize: '25px' }} /></Link>,
            ]}
            cover={
                <Image height={220} src={coverImg.src} alt={"coverImage"}></Image>
            }

        >
            <Meta
                style={{ display: 'flex', flexDirection: 'column', marginTop: -120 }}
                avatar={
                    <div style={{ width: 150, height: 150, borderRadius: '50%', overflow: 'hidden' }}>
                        <Image width={150} height={150} style={{ objectFit: 'cover' }} src={data.imageUrl} />
                    </div>
                }
            />

            <Button type="text" shape="circle" onClick={() => router.push("/Profile/edit")} style={{ float: 'right', marginTop: '-40px', height: '35px', width: '35px' }} icon={<EditOutlined style={{ fontSize: '25px' }} />} />


            <Flex align="center">
                <div style={{ flex: 1 }}>
                    <Flex vertical style={{ marginBottom: -60 }}>
                        <Title level={2}>{userName} - <span style={{ fontFamily: 'serif', fontStyle: 'oblique' }}>{''}</span></Title>

                        <Text type="secondary" copyable style={{ marginTop: -15 }} >{`@${userName}`}</Text>

                        <Paragraph ellipsis={{ rows: 2, symbol: 'more', expandable: true }}>{userDescription}</Paragraph>

                        <Paragraph strong>{userLocation.state}, {userLocation.country} • <Button type="link" style={{ paddingLeft: 0 }}>Contact Info</Button></Paragraph>

                        <Flex gap={15}>
                            <Button style={{ width: '25%' }} type="primary" icon={<EditOutlined />}>Edit Profile</Button>
                            <Button style={{ width: '25%', color: '#1677ff', borderColor: '#1677ff', }}  >More</Button>
                            <QRCode
                                errorLevel="H"
                                value={`${userName}.com`}
                                icon={logo.src}
                                size={100}
                                style={{ top: -50, left: 180 }}
                            />
                        </Flex>
                    </Flex>
                </div>
            </Flex>
        </Card>


    )
}
export default ProfileComponent;



