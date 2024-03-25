import { Layout as AntDLayout } from 'antd'
import Navbar from './Navbar'
import Footer from './Footer'

const { Content } = AntDLayout

const Layout = ({ children }) => {
  return (
    <AntDLayout>
      <Navbar />
      <Content
        style={{
          padding: '32px',
          minHeight: '100vh',
        }}
      >
        {children}
      </Content>
      <Footer />
    </AntDLayout>
  )
}

export default Layout
