"use client"

import React from 'react';
import CountUp from 'react-countup';
import { Card, Col, Row, Statistic } from 'antd';

const formatter = (value: number | string, config?: {}) => {
    return typeof value === 'number' ? <CountUp end={Number(value)} duration={3} separator="," /> : value;
};

const NotificationsSettings: React.FC = () => (
    <Card>
        <Row >
            <Statistic title="Global Users" value={112893} formatter={formatter} />
        </Row>
    </Card>
);

export default NotificationsSettings;
