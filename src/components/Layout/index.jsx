import { useState } from 'react'
import { Layout as AntDLayout } from 'antd'
import Navbar from './Navbar'
import Footer from './Footer'
import Providers from '../Providers'
import { providersList } from '../SyntheticData/providersList'
import Dashboard from './Dashboard'

const { Content } = AntDLayout

const Layout = () => {
  const [searchValues, setSearchValues] = useState('')

  return (
    <AntDLayout>
      <Navbar searchValues={searchValues} setSearchValues={setSearchValues} />
      <Content
        style={{
          padding: '32px',
          minHeight: '100vh',
        }}
      >
        <>
          {!searchValues && (
            <Dashboard
              searchValues={searchValues}
              setSearchValues={setSearchValues}
            />
          )}
          {searchValues && (
            <Providers
              providers={providersList}
              searchValues={searchValues}
              setSearchValues={setSearchValues}
            />
          )}
        </>
      </Content>
      <Footer />
    </AntDLayout>
  )
}

export default Layout
