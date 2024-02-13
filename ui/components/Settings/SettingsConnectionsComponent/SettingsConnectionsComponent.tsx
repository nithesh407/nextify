import { UserOutlined, ArrowRightOutlined, LoginOutlined, GlobalOutlined } from "@ant-design/icons";
import { Card, List } from "antd";
import Link from "next/link";

const dataConnectionSettings = [
    { key: '/Connections', value: 'Followers & Following' },
    { key: '/Settings/suggest', value: 'Suggest People By' },
]

const SettingsConnectionsComponent: React.FC = () => {
    return (
        <Card
            style={{ marginTop: 10 }}
            title="Manage Connections"
            extra={<GlobalOutlined />}
        >
            <List
                size="large"
                bordered
                dataSource={dataConnectionSettings}
                renderItem={(item) => <Link href={item.key}> <List.Item extra={<ArrowRightOutlined />}>{item.value}</List.Item></Link>} />
        </Card>
    )
}

export default SettingsConnectionsComponent;