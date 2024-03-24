import { Layout } from 'antd'

const { Footer } = Layout

const MainFooter = () => {
  return (
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      ©2024 Avalon.AI All Rights Reserved | Made with ❤️ by <a href="https://evelynbauer.ca/" target="_blank" rel="noopener noreferrer" className='text-[#27a5b0]'>Evelyn Bauer</a>
    </Footer>
  )
}

export default MainFooter
