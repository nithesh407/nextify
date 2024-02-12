import { UserOutlined, ArrowRightOutlined, LoginOutlined, GlobalOutlined } from "@ant-design/icons";
import { Card, List } from "antd";
import Link from "next/link";

const dataAccountAccessSettings = [
    { key: '/Settings/followers', value: 'Followers' },
    { key: '/Settings/following', value: 'Following' },
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
                dataSource={dataAccountAccessSettings}
                renderItem={(item) => <Link href={item.key}> <List.Item extra={<ArrowRightOutlined />}>{item.value}</List.Item></Link>} />
        </Card>
    )
}

export default SettingsConnectionsComponent;