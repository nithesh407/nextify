'use client'
import { GlobalOutlined, ArrowLeftOutlined, LogoutOutlined } from "@ant-design/icons";
import { ConfirmModal } from "@/ui/Modals";
import { Button, Card, Form, Input, Typography } from "antd";
import Link from "next/link";
import { useState } from "react";


const { Paragraph } = Typography

const BlockData = "Everyone needs a break once in awhile."
const BlockContent = "Hibernating your account is the best option if you'd like to temporarily hide your LinkedIn profile and activity but not close your account"

const SettingsHibernateComponent: React.FC = () => {
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
            title={<p><Link style={{ color: 'black' }} href="/Settings/Account"><ArrowLeftOutlined style={{ paddingRight: 10 }} /></Link> Hibernate Account</p>}
            extra={<LogoutOutlined />}
        >
            <Paragraph>
                <blockquote>{BlockData}</blockquote>
                <pre>{BlockContent}</pre>
            </Paragraph>

            <Button danger block onClick={showModal}>
                Hibernate Account
            </Button>
            <ConfirmModal open={open} hideModal={hideModal} text="Confirm Hibernate Account" />
        </Card>
    )
}

export default SettingsHibernateComponent;