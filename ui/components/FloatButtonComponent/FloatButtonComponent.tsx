'use client';

import { FloatButton } from 'antd';
import { ExperimentOutlined, MoonOutlined, SunOutlined, SmileOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

const FloatButtonComponent: React.FC = () => {
    const [open, setOpen] = useState(false);

    const onClick = () => {
        setOpen(!open); // Toggle the state when the FloatButton is clicked
    };

    return (
        <>
            <FloatButton.Group
                open={open}
                trigger="click"
                style={{ right: 24 }}
                icon={<ExperimentOutlined />}
                onClick={onClick} // Add onClick handler directly to FloatButton.Group
            >
                {/* Correct usage of FloatButton */}
                <FloatButton icon={<MoonOutlined />} />
                <FloatButton icon={<SunOutlined />} />
                <FloatButton icon={<SmileOutlined />} />
            </FloatButton.Group>
        </>
    );
};

export default FloatButtonComponent;
