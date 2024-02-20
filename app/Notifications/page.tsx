'use client'
import { NotificationsSettings, NotificationsStatistics, NotificationsCategory, NotificationsComponent } from "@/ui/components";

import { Row, Col, } from "antd";
import React, { useState } from "react";

import { data, dataPosts } from '@/utils/DUMMY_DATA'

const Notifications: React.FC = () => {
    const [notificationsCategory, setNotificationsCategory] = useState<string>('all')

    const handleCategoryChange = (value: string) => {
        setNotificationsCategory(value)
    }


    return (
        <Row style={{ marginTop: 15 }}>
            <Col span={4} offset={1}>
                <div style={{ position: "sticky", top: 80 }}>
                    <NotificationsSettings />
                </div>
            </Col>
            <Col span={13} offset={1}>
                <NotificationsCategory handleCategory={handleCategoryChange} category={notificationsCategory} />
                <NotificationsComponent data={notificationsCategory === 'all' ? data : dataPosts} />
            </Col>
            <Col span={5} style={{ marginLeft: '-50px' }} >
                <div style={{ position: "sticky", top: 80 }}>
                    <NotificationsStatistics />
                </div>
            </Col>
        </Row>
    )
}

export default Notifications;