import { Avatar, Typography } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHeart,
  faLocationDot,
  faShieldHeart,
  faStar,
} from '@fortawesome/free-solid-svg-icons'
import { Tag } from 'antd'

const { Text, Title } = Typography

const ProviderCard = ({ isModalVisible, provider }) => {
  return (
    <div className='flex gap-4 sm:mb-4'>
      <div>
        <Avatar size={100} src={provider.photo} />
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
        <div className='block md:flex md:gap-2'>
          <Text>
            <FontAwesomeIcon icon={faStar} className='mr-2 text-red-500' />
            {`${provider.rating} (${provider.reviews})`}
          </Text>
          {provider.loyalPatients > 1 && (
            <Tag color='red'>
              <FontAwesomeIcon icon={faHeart} className='mr-2' />
              LOYAL PATIENTS
            </Tag>
          )}
        </div>
        <Text>
          <FontAwesomeIcon icon={faLocationDot} className='mr-2' />
          {`${provider.distance} mi - ${provider.address}`}
        </Text>
        <a className='underline underline-offset-1 text-sky-600'>
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
                  {index < arr.length - 1 && <Text className='mx-1'>•</Text>}
                </span>
              ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProviderCard
