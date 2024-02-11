'use client'
import { ConnectionsSettings, ConnectionsPeople, ConnectionsCategory, ConnectionsComponent } from "@/ui/components";

import { Row, Col } from "antd";
import React, { useEffect, useState } from "react";

import { UserItem } from "@/util";
import { ConnectionsProfileComponentData } from "@/util/DUMMY_DATA";

const Connections: React.FC = () => {
    const [connectionsCategory, setconnectionsCategory] = useState<string>('following')
    const fakeDataUrl = 'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo'
    const [data, setData] = useState<UserItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);


    const handleCategoryChange = (value: string) => {
        setconnectionsCategory(value)
    }
    const appendData = () => {
        fetch(fakeDataUrl)
            .then((res) => res.json())
            .then((body) => {
                setData(body.results);
                setLoading(false);
            });
    }
    useEffect(() => {
        appendData()
    }, [connectionsCategory]);
    return (
        <Row style={{ marginTop: 15 }}>
            <Col span={4} offset={1}>
                <div style={{ position: "sticky", top: 80 }}>
                    <ConnectionsSettings />
                </div>
            </Col>
            <Col span={13} offset={1}>
                <ConnectionsCategory handleCategory={handleCategoryChange} category={connectionsCategory} />
                <ConnectionsComponent
                    category={connectionsCategory}
                    data={data}
                    appendData={appendData}
                    loading={loading}
                    setLoading={setLoading}
                />
            </Col>
            <Col span={5} style={{ marginLeft: '-50px' }} >
                <div style={{ position: "sticky", top: 80 }}>
                    <ConnectionsPeople data={ConnectionsProfileComponentData} />
                </div>
            </Col>
        </Row>
    )
}

export default Connections;