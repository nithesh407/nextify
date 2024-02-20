'use client'
import React from 'react';
import { Layout } from 'antd';

const SettingsLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    return (
        <Layout>
            {children}
        </Layout>
    );
};

export default React.memo(SettingsLayout);