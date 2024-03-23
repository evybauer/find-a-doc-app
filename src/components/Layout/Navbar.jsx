import { useContext } from 'react'
import { useLocation } from 'react-router-dom'

import { Layout, Image, Menu, Button, Typography } from 'antd'
import { Divider } from 'antd'
import SearchBar from '../SearchBar'
import { SearchContext } from '../../providers/SearchProvider'

const { Header } = Layout
const { Text } = Typography

const labels = ['Browse', 'Help', 'List your practice on Avalon.AI']

const Navbar = () => {
  const { searchValues, setSearchValues } = useContext(SearchContext)
  const { pathname } = useLocation()
  const isProvidersRoute = pathname === '/providers'

  const items = labels
    .filter((_, index) => !isProvidersRoute || (index !== 0 && index !== 2))
    .map((label, index) => ({
      key: index + 1,
      label: label,
    }))

  return (
    <Header className='flex items-center bg-white'>
      <div className='flex items-center justify-between gap-8'>
        <div className='h-full w-32 mt-6 mr-4'>
          <Image
            src='/src/assets/logo/logo.png'
            preview={false}
            className='h-12 object-contain'
          />
        </div>
        {isProvidersRoute && (
          <div>
            <div className='hidden lg:w-full lg:flex'>
              <SearchBar
                searchValues={searchValues}
                setSearchValues={setSearchValues}
              />
            </div>
            <div className='flex w-full lg:hidden border p-2 border-gray-800'>
              <Text>
                {searchValues?.condition
                  ? searchValues.condition
                  : 'Condition,'}
              </Text>
              <Text>
                {searchValues?.location ? searchValues.location : 'Location,'}
              </Text>
              <Text>
                {searchValues?.insurance ? searchValues.insurance : 'Insurance'}
              </Text>
            </div>
          </div>
        )}
      </div>
      <Menu
        mode='horizontal'
        defaultSelectedKeys={[]}
        items={items}
        style={{
          flex: 1,
          minWidth: 0,
          justifyContent: 'end',
          border: 'none',
        }}
      />
      <Divider
        type='vertical'
        style={{
          margin: '0 8px',
          height: 30,
        }}
      />
      <Button style={{ marginRight: 8 }} className='bg-white text-gray-800'>
        Log in
      </Button>
      <Button type='primary'>Sign up</Button>
    </Header>
  )
}

export default Navbar
