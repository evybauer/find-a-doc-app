import { Card, Typography } from 'antd'
import ServicesList from './ServicesList'
import { ErrorBoundary } from 'react-error-boundary'
import { resetApplication } from '../../../common/utils'
import { ErrorCard } from '/src/ui/Error/ErrorCard'

const { Title } = Typography

const ServicesContent = () => {
  return (
    <Card className='p-4 border-none'>
      <div className='flex justify-center text-center my-20'>
        <Title level={1} style={{ fontWeight: 600, color: '#27a5b0' }}>
          Let’s get you a professional who gets you
        </Title>
      </div>
      <ServicesList />
    </Card>
  )
}

const Services = () => (
  <ErrorBoundary FallbackComponent={ErrorCard} onReset={resetApplication}>
    <ServicesContent />
  </ErrorBoundary>
)

export default Services
