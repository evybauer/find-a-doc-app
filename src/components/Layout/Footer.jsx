import { Divider, Layout, Typography } from 'antd'

const { Text } = Typography
const { Footer } = Layout

const MainFooter = () => {
  return (
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      <div className='flex flex-col sm:flex-row items-center justify-center'>
        <Text className='text-base'>
          ©2024 Health Point All Rights Reserved{' '}
        </Text>
        <Divider type='vertical' className='hidden sm:flex bg-gray-800' />
        <Text className='text-base'>
          Made with ❤️ by{' '}
          <a
            href='https://evelynbauer.ca/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#27a5b0]'
          >
            Evelyn Bauer
          </a>
        </Text>
      </div>
    </Footer>
  )
}

export default MainFooter
