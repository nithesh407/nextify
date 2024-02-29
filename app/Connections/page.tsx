'use client'
import { ConnectionsSettings, ConnectionsPeople, ConnectionsCategory, ConnectionsComponent } from "@/ui/components";

import { Row, Col } from "antd";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { UserItem } from "@/Interface";
import { ConnectionsProfileComponentData } from "@/lib/utils/DUMMY_DATA";

const Connections: React.FC = () => {
    const userId = Cookies.get('user_id')
    const [connectionsCategory, setconnectionsCategory] = useState<string>('followings')
    const [data, setData] = useState<UserItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);


    const handleCategoryChange = (value: string) => {
        setconnectionsCategory(value)
    }
    const appendData = () => {
        fetch(`http://localhost:3000/api/v1/connections/${connectionsCategory}/${userId}`)
            .then((res) => res.json())
            .then((body) => {
                const data = Object.values(body.data)
                setData(data[2] as [])
                setLoading(false);
            });
    }
    useEffect(() => {
        setLoading(true)
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