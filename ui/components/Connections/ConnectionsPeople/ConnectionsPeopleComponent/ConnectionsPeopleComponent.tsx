import { LinkedinFilled, GithubFilled, TwitterOutlined, InstagramFilled, ShopOutlined } from "@ant-design/icons";
import { Card, Avatar, Image, Button } from "antd";
import Meta from "antd/es/card/Meta";

import coverImg from '@/public/cover.jpg'
import Link from "next/link";

import styles from './connectionsPeopleComponent.module.scss'

const ConnectionsPeopleComponent: React.FC = () => {
    return (
        <Card
        // cover={
        //     <Image height={100} src={coverImg.src} alt={"coverImage"}></Image>
        // }
        >
            <Meta
                style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}

                avatar={
                    <Link href={'#'}><Avatar size={70} src={"https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg"} /></Link>
                }

                title={<Link href={'#'} className={styles.customLink}>Profile Name</Link>}
                description={<p style={{ fontWeight: 'normal', marginTop: '-7px', lineHeight: '1.1rem' }}>Full Stack WEB Developer</p>}
            >
            </Meta>
            <p style={{ fontWeight: 'initial', marginTop: '5px', textAlign: 'center' }}><ShopOutlined style={{ paddingRight: 10 }} />Kongu Engineering College</p>
            <Button block style={{ borderColor: '#4096ff', color: '#4096ff' }}>follow</Button>
        </Card>
    )
}

export default ConnectionsPeopleComponent;