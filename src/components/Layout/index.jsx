import { useContext } from 'react'
import { Layout as AntDLayout } from 'antd'
import Navbar from './Navbar'
import Footer from './Footer'
import { SearchContext } from '../../providers/SearchProvider'

const { Content } = AntDLayout

const Layout = ({ children }) => {
  const { searchValues, setSearchValues } = useContext(SearchContext)

  return (
    <AntDLayout>
      <Navbar searchValues={searchValues} setSearchValues={setSearchValues} />
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
