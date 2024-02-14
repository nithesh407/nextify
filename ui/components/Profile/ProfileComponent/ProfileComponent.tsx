"use client"
import { Image, Button, Card, Flex, QRCode, Typography } from "antd";
import Meta from "antd/es/card/Meta";
import { EditOutlined, GithubFilled, InstagramFilled, LinkedinFilled, TwitterOutlined } from "@ant-design/icons";

import coverImg from '@/public/cover.jpg'
import logo from '@/ui/images/icon.png';
import { useRouter } from "next/navigation";

const { Text, Title, Paragraph } = Typography

type profiletype = {
    profileName: string,
    profileTag: string,
    profileRole: string,
    profileURL: string,
    profileLocation: string,
    profileDescription: string,
    profileOrg: String,
    profileImage: string,
    linkedInURL: string,
    githubURL: string,
    twitterURL: string,
    instagramURL: string
}

const ProfileComponent: React.FC<profiletype> = ({ profileName, profileTag, profileRole, profileLocation, profileURL, profileOrg, profileDescription, profileImage, linkedInURL, githubURL, twitterURL, instagramURL }) => {

    const router = useRouter();


    return (
        <Card
            actions={[
                <LinkedinFilled style={{ color: 'dodgerblue', fontSize: '25px' }} src={linkedInURL} />,
                <GithubFilled style={{ color: 'dark grey', fontSize: '25px' }} src={githubURL} />,
                <TwitterOutlined style={{ color: 'skyblue', fontSize: '25px' }} src={twitterURL} />,
                <InstagramFilled style={{ color: 'mediumvioletred', fontSize: '25px' }} src={instagramURL} />,
            ]}
            cover={
                <Image height={220} src={coverImg.src} alt={"coverImage"}></Image>
            }

        >
            <Meta
                style={{ display: 'flex', flexDirection: 'column', marginTop: -120 }}
                avatar={
                    <div style={{ width: 150, height: 150, borderRadius: '50%', overflow: 'hidden' }}>
                        <Image width={150} height={150} style={{ objectFit: 'cover' }} src={profileImage} />
                    </div>
                }
            />

            <Button type="text" shape="circle" onClick={() => router.push("/Profile/gytfugj/edit")} style={{ float: 'right', marginTop: '-40px', height: '35px', width: '35px' }} icon={<EditOutlined style={{ fontSize: '25px' }} />} />


            <Flex align="center">
                <div style={{ flex: 1 }}>
                    <Flex vertical style={{ marginBottom: -60 }}>
                        <Title level={2}>{profileName} - <span style={{ fontFamily: 'serif', fontStyle: 'oblique' }}>{profileRole}</span></Title>

                        <Text type="secondary" copyable style={{ marginTop: -15 }} >{profileTag}</Text>

                        <Paragraph ellipsis={{ rows: 2, symbol: 'more', expandable: true }}>{profileDescription}</Paragraph>

                        <Paragraph strong>{profileLocation} • <Button type="link" style={{ paddingLeft: 0 }}>Contact Info</Button></Paragraph>

                        <Flex gap={15}>
                            <Button style={{ width: '25%' }} type="primary" icon={<EditOutlined />}>Edit Profile</Button>
                            <Button style={{ width: '25%', color: '#1677ff', borderColor: '#1677ff', }}  >More</Button>
                            <QRCode
                                errorLevel="H"
                                value={profileURL}
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



