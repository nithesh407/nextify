'use client'

import { UserOutlined, GlobalOutlined, MoonOutlined, LockOutlined, BellOutlined } from "@ant-design/icons";
import { Avatar, Menu, theme } from "antd"
import Sider from "antd/es/layout/Sider"
import React, { useEffect, useState } from "react";

const items = [
    {
        key: "1",
        icon: <UserOutlined />,
        label: "Account"
    },
    {
        key: "2",
        icon: <LockOutlined />,
        label: "Sign in & Security"
    },
    {
        key: "3",
        icon: <GlobalOutlined />,
        label: "Connections"
    },
    {
        key: "4",
        icon: <MoonOutlined />,
        label: "Theme"
    },
    {
        key: "5",
        icon: <BellOutlined />,
        label: "Notifications"
    }
];


const SettingsSiderComponent: React.FC<{ router: any }> = ({ router }) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const initialSelectedKey = typeof window !== 'undefined' ? localStorage.getItem("selectedKey") || "1" : "1";
    const [selectedKey, setSelectedKey] = useState<string>(initialSelectedKey);

    useEffect(() => {
        localStorage.setItem("selectedKey", selectedKey);
    }, [selectedKey]);

    const handleItemClick = (key: string) => {
        const selectedItem = items.find((elm) => elm.key === key);
        if (selectedItem) {
            setSelectedKey(key);
            if (key == '2') return router.push(`/Settings/SignIn&Security`);
            return router.push(`/Settings/${selectedItem.label}`);
        }
    };

    return (
        <Sider
            theme='light'
            breakpoint='lg'
            collapsedWidth="0"
            style={{ height: '84vh', marginTop: 16, borderRadius: borderRadiusLG, marginLeft: 20, borderTopStyle: 'solid' }}
            width={280}
        >
            <Avatar src={"https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg"} alt='avatar image' size={80} style={{ marginLeft: 100, marginTop: 30, marginBottom: 30 }} />
            <Menu mode="vertical" items={items} selectable={true} selectedKeys={[selectedKey]} onClick={({ key }) => handleItemClick(key)} />
        </Sider>
    );
};

export default SettingsSiderComponent;