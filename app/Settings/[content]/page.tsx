'use client'

import {
    SettingsSiderComponent,
    SettingsAccountComponent,
    SettingsSigninComponent,
    SettingsConnectionsComponent,
    SettingsThemeComponent,
    SettingsVerifyComponent,
    SettingsHibernateComponent,
    SettingsCloseComponent,
    SettingsEmailComponent,
    SettingsPhoneComponent,
    SettingsPasswordComponent,
    SettingsSuggestByComponent,
    SettingsTwoStepComponent,
    SettingsNotificationsComponent
}
    from "@/ui/components";
import { Layout, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import { usePathname } from 'next/navigation'
import { useRouter } from "next/navigation";


const ContentComponent: React.FC = () => {
    const pathname = usePathname()
    const router = useRouter()
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken()

    const content = pathname.split('/')[2]
    return (
        <Layout>
            <SettingsSiderComponent router={router} />
            <Content style={{ margin: '16px 16px 0' }}>
                <div
                    style={{
                        padding: 24,
                        minHeight: 535,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {content === 'Account' && <SettingsAccountComponent />}
                    {content === 'SignIn&Security' && <SettingsSigninComponent />}
                    {content === 'Connections' && <SettingsConnectionsComponent />}
                    {content === 'Theme' && <SettingsThemeComponent />}
                    {content === 'verify' && <SettingsVerifyComponent />}
                    {content === 'Hibernate' && <SettingsHibernateComponent />}
                    {content === 'Close' && <SettingsCloseComponent />}
                    {content === 'email' && <SettingsEmailComponent />}
                    {content === 'phonenumber' && <SettingsPhoneComponent />}
                    {content === 'ChangePassword' && <SettingsPasswordComponent />}
                    {content === 'suggest' && <SettingsSuggestByComponent />}
                    {content === 'twostep' && <SettingsTwoStepComponent />}
                    {content === 'Notifications' && <SettingsNotificationsComponent />}
                </div>
            </Content>
        </Layout>
    )
}

export default ContentComponent;