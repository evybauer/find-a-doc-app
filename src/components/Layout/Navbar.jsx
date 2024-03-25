import { useLocation } from 'react-router-dom'

import { Layout, Image, Menu, Button, message } from 'antd'
import { Divider } from 'antd'
import SearchBar from '../SearchBar'
import { Link } from 'react-router-dom'

const { Header } = Layout

const labels = [
  {
    name: 'Browse',
    onClick: () => message.warning('Browse functionality not yet implemented'),
  },
  {
    name: 'Help',
    onClick: () => message.warning('Help functionality not yet implemented'),
  },
  {
    name: 'List your practice on Avalon.AI',
    onClick: () => message.warning('Listing functionality not yet implemented'),
  },
]

const Navbar = () => {
  const { pathname } = useLocation()
  const isProvidersRoute = pathname === '/providers'

  const handleLogIn = () => {
    message.warning('Log In functionality not yet implemented')
  }

  const handleSignUp = () => {
    message.warning('Sign Up functionality not yet implemented')
  }

  const items = labels
    .filter((_, index) => !isProvidersRoute || (index !== 0 && index !== 2))
    .map((item, index) => ({
      key: index + 1,
      label: item.name,
      onClick: item.onClick,
    }))

  return (
    <Header className='flex items-center py-12 bg-gray-800'>
      <div className='flex items-center justify-between gap-8'>
        <div className='flex h-full w-14 mr-16'>
          <Link to='/' className='flex items-center flex-shrink-0 w-32'>
            <Image
              src='/assets/logo/logo.png'
              preview={false}
              className='w-full object-contain'
            />
          </Link>
        </div>
        {isProvidersRoute && (
          <div>
            <div className='hidden lg:flex'>
              <SearchBar />
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
        className='bg-gray-800 custom-menu'
      >
        {items.map((item) => (
          <Menu.Item
            key={item.key}
            style={{ color: 'white' }}
            className='custom-menu'
            onClick={item.onClick}
          >
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
        onClick={handleLogIn}
      >
        Log in
      </Button>
      <Button onClick={handleSignUp} type='primary' className='border-none'>
        Sign up
      </Button>
    </Header>
  )
}

export default Navbar
