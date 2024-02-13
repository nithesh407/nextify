import React from 'react';
import { Card, Empty } from 'antd';
import { ArrowLeftOutlined, UserSwitchOutlined } from '@ant-design/icons';
import Link from 'next/link';

const SettingsTwoStepComponent: React.FC = () => {
    return (
        <Card

            style={{ marginTop: 10, height: '75vh' }}
            title={<p><Link style={{ color: 'black' }} href="/Settings/SignIn&Security"><ArrowLeftOutlined style={{ paddingRight: 10 }} /></Link> Two-Step Authentication</p>}
            extra={<UserSwitchOutlined />}
        >
            <Empty
                style={{ marginTop: 70 }}
                image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                imageStyle={{ height: 150 }}
                description={
                    <span>
                        Coming <Link href="#API">Soon</Link>
                    </span>
                }
            >
            </Empty>
        </Card>
    )
}

export default SettingsTwoStepComponent;