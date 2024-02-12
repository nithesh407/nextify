import { UserOutlined, ArrowRightOutlined, LoginOutlined, GlobalOutlined, SunOutlined, MoonOutlined } from "@ant-design/icons";
import { Card, List } from "antd";
import Link from "next/link";

const dataAccountAccessSettings = [
    { key: '/Settings/dark', value: 'Dark Mode', icon: <SunOutlined /> },
    { key: '/Settings/light', value: 'Light Mode', icon: <MoonOutlined /> }
]

const SettingsThemeComponent: React.FC = () => {
    return (
        <Card
            style={{ marginTop: 10 }}
            title="Choose Theme"
            extra={<GlobalOutlined />}
        >
            <List
                size="large"
                bordered
                dataSource={dataAccountAccessSettings}
                renderItem={(item) => <Link href={item.key}> <List.Item extra={item.icon}>{item.value}</List.Item></Link>} />
        </Card>
    )
}

export default SettingsThemeComponent;