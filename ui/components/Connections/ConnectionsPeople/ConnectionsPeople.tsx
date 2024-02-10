import React from "react";
import ConnectionsPeopleComponent from "./ConnectionsPeopleComponent/ConnectionsPeopleComponent";
import { List, Flex } from "antd";
import styles from './connectionsPeople.module.scss' // Import CSS file for styling

const ConnectionsPeople: React.FC = () => {
    return (
        <List>
            <Flex vertical gap={20} className={styles.scrollableContainer} >
                <ConnectionsPeopleComponent />
                <ConnectionsPeopleComponent />
                <ConnectionsPeopleComponent />
                <ConnectionsPeopleComponent />
                <ConnectionsPeopleComponent />
                <ConnectionsPeopleComponent />
                <ConnectionsPeopleComponent />
            </Flex>
        </List>
    )
}

export default ConnectionsPeople;
