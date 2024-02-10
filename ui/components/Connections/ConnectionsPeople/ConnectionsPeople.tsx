import React from "react";
import ConnectionsPeopleComponent from "./ConnectionsPeopleComponent";
import { List } from "antd";

const ConnectionsPeople: React.FC = () => {
    return (
        <List>
            <div style={{ height: '89vh', overflowY: 'scroll' }}>

                <ConnectionsPeopleComponent />
                <ConnectionsPeopleComponent />
                <ConnectionsPeopleComponent />
            </div>
        </List>
    )
}

export default ConnectionsPeople;