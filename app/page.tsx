"use client"
import {Navbar,Post} from "@/components/index";
import {Layout, theme, Col, Row} from "antd";
import React from "react";

const { Content, Footer } = Layout;

const Home: React.FC = () => {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <Navbar/>
        <Layout>
              <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                <div
                  style={{
                    padding: 24,
                    textAlign: 'center',
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                  }}
                >
                  <Post username="pradeep" avatarUrl="sddd" content="wowo" imageUrl="dkdd"/>
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
              </Footer>
            </Layout>

    </>
  );
}


export default Home;