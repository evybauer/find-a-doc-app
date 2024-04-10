import { ErrorBoundary } from 'react-error-boundary'
import { Layout as AntDLayout } from 'antd'
import Navbar from './Navbar'
import Footer from './Footer'
import { ErrorPage } from '../../ui/Error/ErrorPage'
import { resetApplication } from '../../common/utils'

const { Content } = AntDLayout

const Layout = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage} onReset={resetApplication}>
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
    </ErrorBoundary>
  )
}

export default Layout
