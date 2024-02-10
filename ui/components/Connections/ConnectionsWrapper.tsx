'use client';

import React, { useState } from "react"

import ConnectionsCategory from "./ConnectionsCategory/ConnectionsCategory";
import ConnectionsComponent from "./ConnectionsComponent/ConnectionsComponent";

const ConnectionsWrapper: React.FC = () => {
    const [connectionsCategory, setconnectionsCategory] = useState<string>('following')

    const handleCategoryChange = (value: string) => {
        setconnectionsCategory(value)
    }

    return (
        <>
            <ConnectionsCategory handleCategory={handleCategoryChange} category={connectionsCategory} />
            <ConnectionsComponent category={connectionsCategory} />
        </>
    )
}

export default ConnectionsWrapper;