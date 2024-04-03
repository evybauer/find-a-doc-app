import React from 'react'
import { useLocation } from 'react-router-dom'
import { Avatar, Typography, message } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHeart,
  faLocationDot,
  faShieldHeart,
  faStar,
} from '@fortawesome/free-solid-svg-icons'
import { Tag } from 'antd'

const { Text, Title } = Typography

const ProviderCard = ({ provider, isModalVisible }) => {
  const location = useLocation()

  const handleCheckNetwork = () => {
    message.warning('Check network functionality not yet implemented')
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
            {provider?.specialty}
          </Title>
        ) : (
          <Text>{provider?.specialty}</Text>
        )}
        <div className='flex flex-wrap gap-2'>
          <Text>
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
          <React.Fragment>
            <Text>
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
              className='underline underline-offset-1 text-sky-600'
              onClick={handleCheckNetwork}
            >
              <FontAwesomeIcon icon={faShieldHeart} className='mr-2' />
              {"See if they're in network"}
            </a>
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
                      <Text className='text-sm font-extralight text-gray-500'>
                        {text}
                      </Text>
                      {index < arr.length - 1 && (
                        <Text className='mx-1'>•</Text>
                      )}
                    </span>
                  ))}
              </div>
            )}
          </React.Fragment>
        )}
      </div>
    </div>
  )
}

export default ProviderCard
