'use client'
import React from 'react';
import { Card, Flex, Layout } from 'antd';
import coverImg from "@/public/authCover.png"
import Image from 'next/image';
const authLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    return (
        <Layout style={{ backgroundColor: '#d3d3d3', height: '84.5ch' }}>
            <Flex style={{ justifyContent: "space-between", margin: 20, marginTop: 15 }}>

                <Card style={{ width: '120vh', height: '95vh' }}>
                    <Image src={coverImg} alt={'coverImg'} style={{ marginLeft: -24, alignSelf: 'center', height: 'auto', width: '106.7%', marginTop: '10%' }} />
                </Card>
                <Card style={{ width: '73vh', height: '95vh' }}>

                    {children}
                </Card>
            </Flex>
        </Layout>
    );
};

export default React.memo(authLayout);