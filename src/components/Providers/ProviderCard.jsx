import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Avatar, Tag, Typography, message } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faComment,
  faHeart,
  faLocationDot,
  faShieldHeart,
  faStar,
} from '@fortawesome/free-solid-svg-icons'
import Reviews from '../Reviews'
import { ErrorBoundary } from 'react-error-boundary'
import { resetApplication } from '../../common/utils'
import { ErrorCard } from '../../ui/Error/ErrorCard'

const { Text, Title } = Typography

const ProviderCardContent = ({ provider, isModalVisible }) => {
  const location = useLocation()
  const [isReviewsModalVisible, setIsReviewsModalVisible] = useState(false)

  const handleCheckNetwork = () => {
    message.warning('Check network functionality not yet implemented')
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

  return (
    <div
      className={`flex ${location.pathname === '/' ? 'gap-0' : 'gap-4'} sm:mb-4`}
    >
      <div>
        {location.pathname !== '/' && (
          <Avatar size={100} src={provider.photo} />
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
            {provider.specialty}
          </Title>
        ) : (
          <Text className='text-base'>{provider.specialty}</Text>
        )}
        <div className='flex flex-wrap gap-2'>
          <Text className='text-base'>
            <FontAwesomeIcon icon={faStar} className='mr-2 text-red-500' />
            {`${provider.rating.toFixed(1)} (${provider.reviews} ${location.pathname === '/' ? 'reviews' : ''})`}
          </Text>
          {provider.loyalPatients > 20 && location.pathname !== '/' && (
            <Tag color='red'>
              <FontAwesomeIcon icon={faHeart} className='mr-2' />
              LOYAL PATIENTS
            </Tag>
          )}
        </div>
        {location.pathname !== '/' && (
          <>
            <Text className='text-base'>
              <FontAwesomeIcon icon={faLocationDot} className='mr-2' />
              {`${provider.distance} mi - ${provider.address.streetAddress}, ${provider.address.city} ${provider.address.state} ${provider.address.postalCode} `}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${provider.address.latitude},${provider.address.longitude}`}
                target='_blank'
                rel='noopener noreferrer'
                className='text-sky-600 hover:underline'
              >
                (Map)
              </a>
            </Text>
            <a
              className='underline text-base underline-offset-1 text-sky-600'
              onClick={handleCheckNetwork}
            >
              <FontAwesomeIcon icon={faShieldHeart} className='mr-2' />
              See if they're in network
            </a>
            <a
              className='text-base underline-offset-1 text-sky-600'
              onClick={handleReviewsModalOpen}
            >
              <FontAwesomeIcon icon={faComment} className='mr-2' />
              Reviews
            </a>
            <Reviews
              provider={provider}
              isModalVisible={isReviewsModalVisible}
              closeModal={handleReviewsModalClose}
              isHomeView={false}
            />
            {!isModalVisible && (
              <div>
                {[
                  provider.newPatientAppointments && 'New patient appointments',
                  provider.highlyRecommended && 'Highly Recommended',
                  provider.excellentWaitTime && 'Excellent wait time',
                ]
                  .filter(Boolean)
                  .map((text, index, arr) => (
                    <span key={index}>
                      <Text className='text-base font-extralight text-gray-500'>
                        {text}
                      </Text>
                      {index < arr.length - 1 && (
                        <Text className='mx-1'>•</Text>
                      )}
                    </span>
                  ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

const ProviderCard = (props) => (
  <ErrorBoundary FallbackComponent={ErrorCard} onReset={resetApplication}>
    <ProviderCardContent {...props} />
  </ErrorBoundary>
)

export default ProviderCard
