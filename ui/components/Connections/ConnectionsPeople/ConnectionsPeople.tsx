import React from "react";
import { List, Flex, Avatar, Button, Card } from "antd";
import styles from './connectionsPeople.module.scss' // Import CSS file for styling
import { ShopOutlined } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import Link from "next/link";

interface T {
    profileName: string
    avatarImage: string
    profession: string
    oranization: string
}

interface Data {
    data: T[]
}


const ConnectionsPeople: React.FC<Data> = ({ data }) => {
    return (
        <List className={styles.scrollableContainer}>
            {data.map((user) => (
                <Flex vertical gap={20} style={{ paddingBottom: 20 }}>
                    <Card
                    // cover={
                    //     <Image height={100} src={coverImg.src} alt={"coverImage"}></Image>
                    // }
                    >
                        <Meta
                            style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}

                            avatar={
                                <Link href={'#'}><Avatar size={70} src={user.avatarImage} /></Link>
                            }

                            title={<Link href={'#'} className={styles.customLink}>{user.profileName}</Link>}
                            description={<p style={{ fontWeight: 'normal', marginTop: '-7px', lineHeight: '1.1rem' }}>{user.profession}</p>}
                        >
                        </Meta>
                        <p style={{ fontWeight: 'initial', marginTop: '5px', textAlign: 'center' }}><ShopOutlined style={{ paddingRight: 10 }} />{user.oranization}</p>
                        <Button block style={{ borderColor: '#4096ff', color: '#4096ff' }}>follow</Button>
                    </Card>
                </Flex>
            ))}
        </List>
    )
}

export default ConnectionsPeople;
