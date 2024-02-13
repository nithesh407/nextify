'use client'
import { GlobalOutlined, ArrowLeftOutlined, LogoutOutlined } from "@ant-design/icons";
import { ConfirmModal } from "@/ui/Modals";
import { Button, Card, Form, Input, Typography } from "antd";
import Link from "next/link";
import { useState } from "react";


const { Paragraph } = Typography
const profileName = 'Nithesh'
const connections = '434'

const BlockData = `${profileName}, we’re sorry to see you go`
const BlockContent = `Just a quick reminder, closing your account means you’ll lose touch with your ${connections} connections`

const SettingsCloseComponent: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);

    const showModal = () => {
        setOpen(true);
    };

    const hideModal = () => {
        setOpen(false);
    };
    return (
        <Card
            style={{ marginTop: 10 }}
            title={<p><Link style={{ color: 'black' }} href="/Settings/Account"><ArrowLeftOutlined style={{ paddingRight: 10 }} /></Link> Close Account</p>}
            extra={<LogoutOutlined />}
        >
            <Paragraph>
                <blockquote>{BlockData}</blockquote>
                <pre>{BlockContent}</pre>
            </Paragraph>

            <Button danger block onClick={showModal}>
                Close Account
            </Button>
            <ConfirmModal open={open} hideModal={hideModal} text="Confirm Close Account" />
        </Card>
    )
}

export default SettingsCloseComponent;