import { UserOutlined, ArrowRightOutlined, LoginOutlined } from "@ant-design/icons";
import { Card, List } from "antd";
import Link from "next/link";

const dataAccountAccessSettings = [
    { key: '/Settings/email', value: 'Email Addresses' },
    { key: '/Settings/phonenumber', value: 'Phone Numbers' },
    { key: '/Settings/ChangePassword', value: 'Change Password' },
    { key: '/Settings/twostep', value: 'Two-Step Verification' }
]

const SettingsSigninComponent: React.FC = () => {
    return (
        <Card
            style={{ marginTop: 10 }}
            title="Account Access"
            extra={<LoginOutlined />}
        >
            <List
                size="large"
                bordered
                dataSource={dataAccountAccessSettings}
                renderItem={(item) => <Link href={item.key}> <List.Item extra={<ArrowRightOutlined />}>{item.value}</List.Item></Link>} />
        </Card>
    )
}

export default SettingsSigninComponent;