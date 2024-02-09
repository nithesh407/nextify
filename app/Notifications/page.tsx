import { NotificationsComponent, NotificationsSettings, NotificationsStatistics, NotificationsCategory } from "@/ui/components";

import { Row, Col, Layout, Card } from "antd";
import React from "react";


const Notifications: React.FC = () => {
    return (
        <Row style={{ marginTop: 15 }}>
            <Col span={4} offset={1}>
                <div style={{ position: "sticky", top: 80 }}>
                    <NotificationsSettings />
                </div>
            </Col>
            <Col span={13} offset={1}>
                <div style={{ position: "sticky", top: 80 }}>
                    <NotificationsCategory />
                </div>
                <NotificationsComponent />
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