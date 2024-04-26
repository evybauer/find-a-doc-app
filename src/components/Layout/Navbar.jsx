import { Link, useLocation } from 'react-router-dom'
import SearchBar from '../SearchBar'
import { Layout, Divider, Dropdown, Image, Menu, Button, message } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { menuItems } from '../../data/menuItems'
import { useTranslation } from 'react-i18next'
import { cap } from '../../common/utils'
import { TranslationButton } from '../../ui/Buttons/TranslationButton'
import { ThemeButton } from '../../ui/Buttons/ThemeButton'

const { Header } = Layout

const Navbar = () => {
  const { pathname } = useLocation()
  const isProvidersRoute = pathname === '/providers'
  const { t } = useTranslation('global')

  const removeLoginAndSignUp = (menuItems) => {
    return menuItems.filter(
      (label) => label.value !== 'login' && label.value !== 'signup',
    )
  }

  const updatedMenuItems = removeLoginAndSignUp(menuItems)

  const itemsLargeScreen = updatedMenuItems
    .filter((item) => !isProvidersRoute || item.value === 'help')
    .map((item) => ({
      key: item.id,
      label: t(item.label),
      onClick: () => message.warning(`${cap(t(`${item.error}`))}`),
    }))

  const itemsSmallScreen = menuItems
    .filter(
      (item) =>
        !isProvidersRoute ||
        item.value === 'help' ||
        item.value === 'login' ||
        item.value === 'signup',
    )
    .map((item) => ({
      key: item.id,
      label: cap(t(item.label)),
      onClick: () => message.warning(`${cap(t(`${item.error}`))}`),
    }))

  const menu = (
    <Menu>
      {itemsSmallScreen.map((item) => (
        <Menu.Item
          key={item.id}
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
        <div className='flex md:hidden md:justify-end items-center'>
          <TranslationButton />
          <ThemeButton />
          <Dropdown overlay={menu} trigger={['click']}>
            <Button
              style={{ backgroundColor: 'transparent', border: 'none' }}
              className='group'
            >
              <FontAwesomeIcon
                icon={faBars}
                className='text-white font-semibold text-base group-hover:text-cyan-500'
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
            <Menu.Item
              key={item.key}
              onClick={item.onClick}
            >
              {cap(item.label)}
            </Menu.Item>
          ))}
        </Menu>
      </div>

      <div className='hidden md:flex items-center'>
        <Divider type='vertical' className='bg-white h-8' />
        <TranslationButton />
        <ThemeButton />
        <Button
          type='primary'
          style={{ margin: '0 16px', textTransform: 'capitalize' }}
          onClick={() =>
            message.warning(
              `${cap(t('message.warning.no_login_functionality'))}`,
            )
          }
        >
          {t('action.login')}
        </Button>
        <Button
          type='primary'
          onClick={() =>
            message.warning(
              `${cap(t('message.warning.no_signup_functionality'))}`,
            )
          }
          style={{ textTransform: 'capitalize' }}
        >
          {t('action.signup')}
        </Button>
      </div>
    </Header>
  )
}

export default Navbar
