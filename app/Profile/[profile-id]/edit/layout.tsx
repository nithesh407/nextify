'use client'
import { Layout, theme , Typography} from "antd"

const {Content}=Layout
const {Title} = Typography
const EditLayout:React.FC =({ children }: React.PropsWithChildren)=>{
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
    return(
        <Layout>
            {/* <Content>
            <div
                style={{
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                    padding:5,
                    width:700,
                    margin:'auto',
                    marginTop:20,
                    marginBottom:5
                }}
            >
                <Title level={3}>Edit</Title>
           </div>
            </Content> */}
            <Content>
            <div
                style={{
                    background: colorBgContainer,
                    minHeight: 280,
                    padding: 30,
                    borderRadius: borderRadiusLG,
                    width:700,
                    margin:'auto',
                    marginTop:20,
                    marginBottom:20
                }}
            >
                {children}
            </div>
            </Content>
        </Layout>
    )
}
export default EditLayout;