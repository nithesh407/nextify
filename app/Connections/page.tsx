import { ConnectionsSettings, NotificationsStatistics, ConnectionsWrapper, ConnectionsPeople } from "@/ui/components";

import { Row, Col, Layout, Card } from "antd";
import React from "react";


const Connections: React.FC = () => {
    return (
        <Row style={{ marginTop: 15 }}>
            <Col span={4} offset={1}>
                <div style={{ position: "sticky", top: 80 }}>
                    <ConnectionsSettings />
                </div>
            </Col>
            <Col span={13} offset={1}>
                <ConnectionsWrapper />
            </Col>
            <Col span={5} style={{ marginLeft: '-50px' }} >
                <div style={{ position: "sticky", top: 80 }}>

                    <ConnectionsPeople />
                </div>
            </Col>
        </Row>
    )
}

export default Connections;