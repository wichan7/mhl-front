import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { BarsOutlined, HomeOutlined, PlusOutlined } from '@ant-design/icons'

const { Header, Footer, Sider, Content } = Layout

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  backgroundColor: '#001529',
  zIndex: 1000,
}

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  color: '#000',
  backgroundColor: '#eeeeee',
}

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#1677ff',
  height: '100%',
}

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#ffffff',
  backgroundColor: '#001529',
  zIndex: 1000,
}

const layoutStyle = {
  overflow: 'hidden',
  height: '100vh',
}

const MainLayout: React.FC = () => {
  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <Menu
          mode="horizontal"
          theme="dark"
          items={[
            {
              label: <Link to="/">홈</Link>,
              key: 'nav_home',
              icon: <HomeOutlined />,
            },
            {
              label: <Link to="/register">캐릭터 등록</Link>,
              key: 'nav_reg',
              icon: <PlusOutlined />,
            },
            {
              label: <Link to="/rank">랭킹</Link>,
              key: 'nav_rank',
              icon: <BarsOutlined />,
            },
          ]}
        />
      </Header>
      <Layout>
        <Sider width="240px" style={siderStyle}>
          광고
        </Sider>
        <Content style={contentStyle}>
          <Outlet />
        </Content>
        <Sider width="240px" style={siderStyle}>
          광고
        </Sider>
      </Layout>
      <Footer style={footerStyle}>
        Powered By{' '}
        <a href="https://openapi.nexon.com/" target="_blank" rel="noreferrer">
          NEXON Open API
        </a>
      </Footer>
    </Layout>
  )
}

export default MainLayout
