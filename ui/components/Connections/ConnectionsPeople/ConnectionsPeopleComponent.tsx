import { LinkedinFilled, GithubFilled, TwitterOutlined, InstagramFilled } from "@ant-design/icons";
import { Card, Avatar, Image, Button } from "antd";
import Meta from "antd/es/card/Meta";

import coverImg from '@/public/cover.jpg'

const ConnectionsPeopleComponent: React.FC = () => {
    return (
        <Card
            cover={
                <Image height={100} src={coverImg.src} alt={"coverImage"}></Image>
            }
        >
            <Meta
                style={{ display: 'flex', flexDirection: 'column', marginTop: -75, alignItems: 'flex-start' }}
                avatar={
                    <Avatar size={80} src={"https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg"} />
                }
                title={'Profile Name'}
            >
            </Meta>
            <p style={{ marginTop: 10 }}>{"I'm passionate in singing. I like the way I'm. Going through the flow"}</p>
            <Button block style={{ borderColor: '#4096ff', color: '#4096ff' }}>follow</Button>
        </Card>
    )
}

export default ConnectionsPeopleComponent;