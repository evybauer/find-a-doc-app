import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Avatar, Card, Tag, Typography, message } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faComment,
  faHeart,
  faLocationDot,
  faShieldHeart,
  faStar,
  faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import Reviews from '../Reviews'
import { ErrorBoundary } from 'react-error-boundary'
import { resetApplication } from '../../common/utils'
import { ErrorCard } from '../../ui/Error/ErrorCard'
import { useTranslation } from 'react-i18next'
import { cap } from '../../common/utils'

const { Link, Text, Title } = Typography

const ProviderCardContent = ({ provider, isModalVisible }) => {
  const { t } = useTranslation('global')
  const location = useLocation()
  const [isReviewsModalVisible, setIsReviewsModalVisible] = useState(false)

  const handleCheckNetwork = () => {
    message.warning(`${cap(t('message.warning.no_check_network'))}`)
  }

  const handleReviewsModalOpen = () => {
    setIsReviewsModalVisible(true)
  }

  const handleReviewsModalClose = () => {
    setIsReviewsModalVisible(false)
  }

  if (!provider) {
    return null
  }

  const toSnakeCase = (str) => {
    return str
      .replace(/\.?([A-Z]+)/g, (x, y) => '_' + y.toLowerCase())
      .replace(/^_/, '')
      .replace(/\//g, '')
  }

  return (
    <Card className='border-none bg-transparent' bodyStyle={{ padding: '0' }}>
      <div
        className={`flex ${location.pathname === '/' ? 'gap-0' : 'gap-4'} sm:mb-4`}
      >
        <div>
          {location.pathname !== '/' && (
            <Avatar
              size={100}
              src={provider.photo}
              alt={`${provider.name} photo`}
            />
          )}
        </div>
        <div className='flex flex-col'>
          {!isModalVisible && (
            <Title level={4} style={{ margin: 0, fontWeight: 500 }}>
              {provider.name}
            </Title>
          )}
          {isModalVisible ? (
            <Title level={4} style={{ margin: 0, fontWeight: 500 }}>
              {cap(t(`specialty.${toSnakeCase(provider.specialty)}`))}
            </Title>
          ) : (
            <Text>
              {cap(t(`specialty.${toSnakeCase(provider.specialty)}`))}
            </Text>
          )}
          <div className='flex flex-wrap gap-2'>
            <Text>
              <FontAwesomeIcon icon={faStar} className='mr-2 text-red-500' />
              {`${provider.rating} (${provider.reviews} ${location.pathname === '/' ? `${t('reviews.reviews')}` : ''})`}
            </Text>
            {provider.loyalPatients > 20 && location.pathname !== '/' && (
              <Tag color='red' style={{ textTransform: 'uppercase' }}>
                <FontAwesomeIcon icon={faHeart} className='mr-2' />
                {t('tag.loyal_patients')}
              </Tag>
            )}
          </div>
          {location.pathname !== '/' && (
            <>
              <Text>
                <FontAwesomeIcon icon={faLocationDot} className='mr-2' />
                {`${provider.distance} mi - ${provider.address.streetAddress}, ${provider.address.city} ${provider.address.state} ${provider.address.postalCode} - `}
                <Link
                  href={`https://www.google.com/maps/search/?api=1&query=${provider.address.latitude},${provider.address.longitude}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ textTransform: 'capitalize' }}
                  underline
                >
                  {t('providers.map')}{' '}
                  <FontAwesomeIcon
                    className='text-sm'
                    icon={faUpRightFromSquare}
                  />
                </Link>
              </Text>
              <Link onClick={handleCheckNetwork} target='_blank'>
                <FontAwesomeIcon icon={faShieldHeart} className='mr-2' />
                {cap(t('providers.network_availability'))}
              </Link>
              <div>
                <Link
                  onClick={handleReviewsModalOpen}
                  target='_blank'
                  style={{ textTransform: 'capitalize' }}
                >
                  <FontAwesomeIcon icon={faComment} className='mr-2' />
                  {t('reviews.reviews')}
                </Link>
              </div>
              <Reviews
                provider={provider}
                isModalVisible={isReviewsModalVisible}
                closeModal={handleReviewsModalClose}
                isHomeView={false}
              />
              {!isModalVisible && (
                <div className='flex flex-col'>
                  {[
                    provider.newPatientAppointments && t('providers.wait_time'),
                    provider.highlyRecommended &&
                      t('providers.highly_recommended'),
                    provider.excellentWaitTime && t('providers.wait_time'),
                  ]
                    .filter(Boolean)
                    .map((text, index, arr) => (
                      <Text
                        key={index}
                        type='secondary'
                        style={{ textTransform: 'capitalize' }}
                        className='flex flex-col text-base font-light'
                      >
                        {`${text}${index < arr.length - 1 ? '•' : ''}`}
                      </Text>
                    ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Card>
  )
}

const ProviderCard = (props) => (
  <ErrorBoundary FallbackComponent={ErrorCard} onReset={resetApplication}>
    <ProviderCardContent {...props} />
  </ErrorBoundary>
)

export default ProviderCard
