"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
    Menu, Badge, Layout, Input, AutoComplete,
} from "antd";
import {
    SettingOutlined,
    UserOutlined,
    BellOutlined,
    HomeOutlined,
    GlobalOutlined,
    LogoutOutlined,
} from "@ant-design/icons";

import { useRouter, usePathname } from "next/navigation";
import { MenuItemType } from "antd/lib/menu/hooks/useItems";

import logo from '@/ui/images/icon.png'
import styles from "./navbar.module.scss";
import { USERS } from "@/lib/utils/DUMMY_DATA";

import { Search } from "..";
import { Header } from "antd/es/layout/layout";
import Cookies from "js-cookie";

const menuItems: MenuItemType[] = [
    {
        key: "/Dashboard",
        icon: <HomeOutlined />,
        label: "Dashboard",
    },
    {
        key: "/Connections",
        icon: <GlobalOutlined />,
        label: "Connections",
    },
    {
        key: "/Notifications",
        icon: <BellOutlined />,
        label: "Notifications",
    },
    {
        key: '/Profile',
        icon: <UserOutlined />,
        label: "Profile",
    },
    {
        key: "/Settings/Account",
        label: 'Settings',
        icon: <SettingOutlined />,
    },
    {
        key: "/api/v1/users/Logout",
        label: 'Logout',
        icon: <LogoutOutlined />,
    },
];


const Navbar: React.FC = ({ }) => {
    const router = useRouter();
    const pathname = usePathname() as string;

    const handleSelect = (data: any) => {
        console.log('Selected:', data);
    };

    useEffect(() => {
        Object.keys(menuItems).forEach((item) => {
            router.prefetch(menuItems[item as unknown as number].key as string);
        });
    }, []);

    return (

        <Header style={{
            backgroundColor: 'white',
            height: '60 px',
            padding: '0 40px 0 40px',
            position: 'sticky',
            top: 0,
            zIndex: 1,
            display: 'flex',
            alignItems: 'center'
        }}>
            <div className={styles.logoContainer}>
                <Image
                    src={logo}
                    width={32}
                    height={32}
                    alt="Logo"
                />
            </div>
            <div className={styles.search}>
                <Search data={USERS} onSelect={handleSelect} placeholder="Global Search" />
            </div>
            <div className={styles.headerNav}>
                <Menu
                    className={styles.navMenu}
                    mode="horizontal"
                    selectedKeys={[pathname]}
                    onSelect={(item) => router.push(item.key)}
                    items={menuItems}
                />
            </div>
        </Header>
    );
};

export default Navbar;