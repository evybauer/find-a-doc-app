import { useContext } from 'react'
import { useLocation } from 'react-router-dom'

import { Layout, Image, Menu, Button, Typography } from 'antd'
import { Divider } from 'antd'
import SearchBar from '../SearchBar'
import { SearchContext } from '../../providers/SearchProvider'
import { Link } from 'react-router-dom'

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
    <Header className='flex items-center py-12 bg-gray-800'>
      <div className='flex items-center justify-between gap-8'>
        <div className='flex h-full w-14 mr-16'>
          <Link to='/' className='flex items-center flex-shrink-0 w-32'>
            <Image
              src='/src/assets/logo/logo.png'
              preview={false}
              className='w-full object-contain'
            />
          </Link>
        </div>
        {isProvidersRoute && (
          <div>
            <div className='hidden lg:flex'>
              <SearchBar
                searchValues={searchValues}
                setSearchValues={setSearchValues}
              />
            </div>
          </div>
        )}
      </div>
      <Menu
        mode='horizontal'
        defaultSelectedKeys={[]}
        style={{
          flex: 1,
          minWidth: 0,
          justifyContent: 'end',
          border: 'none',
        }}
        className='bg-gray-800'
      >
        {items.map((item) => (
          <Menu.Item key={item.key} style={{ color: 'white' }}>
            {item.label}
          </Menu.Item>
        ))}
      </Menu>
      <Divider
        type='vertical'
        style={{
          margin: '0 12px',
          height: 30,
          backgroundColor: 'white',
        }}
      />
      <Button
        style={{ margin: '0 16px' }}
        className='bg-gray-200 border-none text-gray-900 '
      >
        Log in
      </Button>
      <Button type='primary' className='border-none'>
        Sign up
      </Button>
    </Header>
  )
}

export default Navbar
