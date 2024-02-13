'use client'
import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme, Image, Avatar } from 'antd';
import { Content } from 'antd/es/layout/layout';


const SettingsLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    return (
        <Layout>
            {children}
        </Layout>
    );
};

export default React.memo(SettingsLayout);