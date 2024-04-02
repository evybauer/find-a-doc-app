import { useLocation } from 'react-router-dom'
import SearchBar from '../SearchBar'
import { Layout, Dropdown, Image, Menu, Button, message } from 'antd'
import { Divider } from 'antd'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { menuItems } from '../../data/menuItems'

const { Header } = Layout

const Navbar = () => {
  const { pathname } = useLocation()
  const isProvidersRoute = pathname === '/providers'

  const removeLoginAndSignUp = (menuItems) => {
    return menuItems.filter(
      (label) => label.name !== 'Log in' && label.name !== 'Sign up',
    )
  }

  const updatedMenuItems = removeLoginAndSignUp(menuItems)

  const itemsLargeScreen = updatedMenuItems
    .filter((item) => !isProvidersRoute || item.name === 'Help')
    .map((item, index) => ({
      key: index + 1,
      label: item.name,
      onClick: item.onClick,
    }))

  const itemsSmallScreen = menuItems
    .filter(
      (item) =>
        !isProvidersRoute ||
        item.name === 'Help' ||
        item.name === 'Log in' ||
        item.name === 'Sign up',
    )
    .map((item, index) => ({
      key: index + 1,
      label: item.name,
      onClick: item.onClick,
    }))

  const menu = (
    <Menu>
      {itemsSmallScreen.map((item) => (
        <Menu.Item
          key={item.key}
          style={{ color: 'white', margin: '8px 0' }}
          onClick={item.onClick}
        >
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  )

  return (
    <Header className='flex items-center py-12 px-12 bg-gray-800 h-32'>
      <div className='flex items-center justify-between w-full'>
        <div className='flex items-center'>
          <div className='flex h-full w-14'>
            <Link to='/' className='flex items-center flex-shrink-0 w-32'>
              <Image
                src='/assets/logo/logo.png'
                preview={false}
                className='w-full object-contain'
              />
            </Link>
          </div>

          {isProvidersRoute && (
            <div className='hidden lg:block ml-28' style={{ width: '540px' }}>
              <SearchBar />
            </div>
          )}
        </div>
        <div className='flex md:hidden md:justify-end'>
          <Dropdown overlay={menu} trigger={['click']}>
            <Button
              style={{ backgroundColor: '#1F2937', borderColor: '#1F2937' }}
            >
              <FontAwesomeIcon
                icon={faBars}
                className='text-white font-semibold'
              />
            </Button>
          </Dropdown>
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
          className='hidden md:flex bg-gray-800 custom-menu'
        >
          {itemsLargeScreen.map((item) => (
            <Menu.Item
              key={item.key}
              style={{ color: 'white', fontSize: '16px' }}
              onClick={item.onClick}
            >
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      </div>

      <div className='hidden md:flex'>
        <Divider
          type='vertical'
          style={{
            height: 30,
            backgroundColor: 'white',
          }}
        />
        <Button
          style={{ margin: '0 16px' }}
          className='bg-gray-200 border-none text-gray-900 text-base'
          onClick={() =>
            message.warning('Log In functionality not yet implemented')
          }
        >
          Log in
        </Button>
        <Button
          type='primary'
          className='border-none text-base'
          onClick={() =>
            message.warning('Sign Up functionality not yet implemented')
          }
        >
          Sign up
        </Button>
      </div>
    </Header>
  )
}

export default Navbar
