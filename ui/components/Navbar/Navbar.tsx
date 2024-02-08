"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
    Menu, Badge, Layout, Input, AutoComplete,
} from "antd";
import {
    SettingOutlined,
    NotificationOutlined,
    ToolOutlined,
    UserOutlined,
    QuestionCircleOutlined,
    BellOutlined,
    HomeOutlined,
    GlobalOutlined,
    SearchOutlined,
} from "@ant-design/icons";

import { useRouter, usePathname } from "next/navigation";
import { MenuItemType } from "antd/lib/menu/hooks/useItems";

import logo from '@/ui/images/icon.png'
import styles from "./navbar.module.scss";
import { USERS } from "@/util/DUMMY_DATA";

import { Search } from "..";

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
        key: "/Profile",
        icon: <UserOutlined />,
        label: "Profile",
    },
    {
        key: "/Settings",
        icon: <SettingOutlined />,
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
        <div className={styles.header}>
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
        </div>
    );
};

export default React.memo(Navbar);