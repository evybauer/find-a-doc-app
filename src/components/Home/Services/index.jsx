import { Typography } from 'antd'
import ServicesList from './ServicesList'

const { Title } = Typography

const Services = () => {
  return (
    <div className='bg-gray-100 p-4'>
      <div className='flex justify-center text-center my-20'>
        <Title level={1} style={{ fontWeight: 600, color: '#27a5b0' }}>
          Let’s get you a professional who gets you
        </Title>
      </div>
      <ServicesList />
    </div>
  )
}

export default Services
