import { Card, Typography } from 'antd'
import ServicesList from './ServicesList'
import { ErrorBoundary } from 'react-error-boundary'
import { resetApplication } from '../../../common/utils'
import { ErrorCard } from '../../ui/Error/ErrorCard'
import { useTranslation } from 'react-i18next'

const { Title } = Typography

const ServicesContent = () => {
  const { t } = useTranslation('global')

  return (
    <Card className='p-4 border-none'>
      <div className='flex justify-center text-center my-20'>
        <Title
          level={1}
          style={{
            fontWeight: 600,
            color: '#27a5b0',
            textTransform: 'capitalize',
          }}
        >
          {t('specialties.services_title')}
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
