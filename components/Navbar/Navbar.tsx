"use client"

import { useState } from 'react';
import Image from 'next/image';
import {Menu, MenuProps,Input} from 'antd';;
import {HomeOutlined,GlobalOutlined,BellOutlined,UserOutlined,SettingOutlined} from '@ant-design/icons';
import { SearchProps } from 'antd/es/input/Search';

import logo from '@/public/logo.png'

const { Search } = Input ;

const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

const items: MenuProps['items'] = [
    {
    key: "Home",
    icon: <HomeOutlined/>
    },
    {
        key: "Search",
        icon: <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />,
    },
    {
      label: 'Home',
      key: 'Home',
      icon: <HomeOutlined style={{marginInlineStart:650}}/> ,

    },
    {
        label: 'My Network',
        key: 'My network',
        icon: <GlobalOutlined /> ,
  
      },
    {
        label: 'Notifications',
        key: 'Notifications',
        icon: <BellOutlined />,
    },
    {
        label: 'Me',
        key: 'Me',
        icon: <UserOutlined />,
    },
    {
        label: 'Settings',
        key: 'Settings',
        icon: <SettingOutlined />,
    },       
     
];

const Navbar:React.FC = ()=>{
    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
      console.log('click ', e);
      setCurrent(e.key);
    };

    return(
         <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    );
}

export default Navbar;