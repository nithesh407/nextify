'use client'

import React, { useState } from "react";
import NotificationsCategory from "./NotificationsCategory/NotificationsCategory";
import NotificationsComponent from "./NotificationsComponent/NotificationsComponent";


const NotificationsWrapper: React.FC = () => {
    const [notificationsCategory, setNotificationsCategory] = useState<string>('all')

    const handleCategoryChange = (value: string) => {
        setNotificationsCategory(value)
    }

    return (
        <>

            <NotificationsCategory handleCategory={handleCategoryChange} category={notificationsCategory} />

            <NotificationsComponent categoryValue={notificationsCategory} />
        </>
    )
}

export default NotificationsWrapper;