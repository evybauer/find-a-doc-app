import { Divider, Layout, Typography } from 'antd'
import { useTranslation } from 'react-i18next'

const { Link, Text } = Typography
const { Footer } = Layout

const MainFooter = () => {
  const { t } = useTranslation('global')

  return (
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      <div className='flex flex-col sm:flex-row items-center justify-center'>
        <Text style={{ textTransform: 'capitalize' }}>
          ©{t('footer.reserved_rights')}{' '}
        </Text>
        <Divider type='vertical' className='hidden sm:flex' />
        <Text style={{ textTransform: 'capitalize' }}>
          {t('footer.made_with')} ❤️ {t('footer.by')}{' '}
          <Link
            href='https://evelynbauer.ca/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Evelyn Bauer
          </Link>
        </Text>
      </div>
    </Footer>
  )
}

export default MainFooter
