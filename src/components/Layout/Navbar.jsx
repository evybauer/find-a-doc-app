import { useLocation } from 'react-router-dom'
import SearchBar from '../SearchBar'
import { Layout, Divider, Dropdown, Image, Menu, Button, message } from 'antd'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { menuItems } from '../../data/menuItems'
import { ThemeContext } from '../../lib/themes'
import { useContext } from 'react'

const { Header } = Layout

const Navbar = () => {
  const { pathname } = useLocation()
  const isProvidersRoute = pathname === '/providers'
  const { theme, toggleTheme } = useContext(ThemeContext)

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
    <Header className='flex items-center py-12 px-12 h-32'>
      <div className='flex items-center justify-between w-full'>
        <div className='flex items-center'>
          <div className='flex h-full w-16'>
            <Link to='/' className='flex items-center flex-shrink-0 w-40'>
              <Image
                src='/assets/logo/logo.png'
                alt='Health Point Logo'
                preview={false}
                className='w-full object-contain mb-4'
              />
            </Link>
          </div>

          {isProvidersRoute && (
            <div className='hidden lg:block ml-28' style={{ width: '540px' }}>
              <SearchBar isNavbar={true} />
            </div>
          )}
        </div>
        <div className='flex md:hidden md:justify-end'>
          <Dropdown overlay={menu} trigger={['click']}>
            <Button
              style={{ backgroundColor: 'transparent', border: 'none' }}
              className='group'
            >
              <FontAwesomeIcon
                icon={faBars}
                className='text-white font-semibold text-base group-hover:text-cyan-500 group-hover:text-lg'
              />
            </Button>
          </Dropdown>
        </div>

        <Menu
          mode='horizontal'
          defaultSelectedKeys={[]}
          style={{ border: 'none' }}
          className='hidden md:flex custom-menu justify-end min-w-0 flex-1'
        >
          {itemsLargeScreen.map((item) => (
            <Menu.Item key={item.key} onClick={item.onClick}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      </div>

      <div className='hidden md:flex'>
        <Divider type='vertical' className='bg-white h-8' />
        <Button
          onClick={toggleTheme}
          className='bg-transparent border-none hover:bg-transparent focus:bg-transparent'
        >
          <FontAwesomeIcon
            className='w-4 h-4 text-white'
            icon={theme.type === 'light' ? faSun : faMoon}
          />
        </Button>
        <Button
          type='primary'
          style={{ margin: '0 16px' }}
          onClick={() =>
            message.warning('Log In functionality not yet implemented')
          }
        >
          Log in
        </Button>
        <Button
          type='primary'
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
