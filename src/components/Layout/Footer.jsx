import { Divider, Layout, Typography } from 'antd'

const { Link, Text } = Typography
const { Footer } = Layout

const MainFooter = () => {
  return (
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      <div className='flex flex-col sm:flex-row items-center justify-center'>
        <Text>©2024 Health Point All Rights Reserved </Text>
        <Divider type='vertical' className='hidden sm:flex' />
        <Text>
          Made with ❤️ by{' '}
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
