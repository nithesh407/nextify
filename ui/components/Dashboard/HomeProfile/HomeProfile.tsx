import Image from "next/image";
import { Avatar, Card } from "antd";
import Meta from "antd/es/card/Meta";
import { GithubFilled, InstagramFilled, LinkedinFilled, TwitterOutlined } from "@ant-design/icons";

import coverImg from '@/public/cover.jpg'

type homeprofiletype = {
    profileName: string,
    profileTag: string,
    profileDescription: string,
    profileImage: string,
    linkedInURL: string,
    githubURL: string,
    twitterURL: string,
    instagramURL: string
}

const HomeProfile: React.FC<homeprofiletype> = ({ profileName, profileTag, profileDescription, profileImage, linkedInURL, githubURL, twitterURL, instagramURL }) => {
    return (
        <Card
            
            actions={[
                <LinkedinFilled style={{ color: 'dark blue' }} src={linkedInURL} />,
                <GithubFilled style={{ color: 'dark grey' }} src={githubURL} />,
                <TwitterOutlined style={{ color: 'skyblue' }} src={twitterURL} />,
                <InstagramFilled style={{ color: 'purple' }} src={instagramURL} />,
            ]}
            cover={
                <Image height={120} src={coverImg} alt={"coverImage"}></Image>
            }

        >
            <Meta
                style={{ display: 'flex', flexDirection: 'column', marginTop: -75, alignItems: 'center' }}
                avatar={
                    <Avatar size={90} src={profileImage} />
                }
                title={profileName}
                description={profileTag}
            >
            </Meta>
            <p style={{ marginTop: 20, textAlign: 'center' }}>{profileDescription}</p>
        </Card>
    )
}
export default HomeProfile;