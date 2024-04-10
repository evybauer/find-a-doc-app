import { Typography } from 'antd'
import ServicesList from './ServicesList'
import { ErrorBoundary } from 'react-error-boundary'
import { resetApplication } from '../../../common/utils'
import { ErrorCard } from '/src/ui/Error/ErrorCard'

const { Title } = Typography

const ServicesContent = () => {
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

const Services = () => (
  <ErrorBoundary FallbackComponent={ErrorCard} onReset={resetApplication}>
    <ServicesContent />
  </ErrorBoundary>
)

export default Services
