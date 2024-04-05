import { Button, message, Tag, Typography } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faStar } from '@fortawesome/free-solid-svg-icons'
import { getNextAvailableDate } from '../../../common/utils'
import ProviderCard from '../../Providers/ProviderCard'

const { Text } = Typography

const TopRatedDoctorCard = ({ review, provider }) => {
  return (
    <div className='relative max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-24 md:mt-16'>
      <div className='px-6'>
        <div className='flex flex-wrap justify-start ml-16'>
          <div className='w-full flex justify-start'>
            <div className='relative'>
              <img
                src={provider.photo}
                className='shadow-xl rounded-full align-start border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]'
              />
            </div>
          </div>
        </div>
        <div className='mt-28 lg:mt-32'>
          <div className='flex my-4 lg:absolute lg:top-2 lg:right-0 lg:my-0'>
            <Tag color='cyan' className='text-base'>
              <FontAwesomeIcon icon={faStar} className='mr-2' />
              Highly Reccomended
            </Tag>
          </div>
          <ProviderCard
            key={provider.id}
            provider={provider}
            isModalVisible={false}
          />
        </div>
        <div className='text-start min-h-8 md:min-h-36 lg:min-h-24'>
          <Text className='text-base'>"{review.reviewText}"</Text>
        </div>
        <div className='flex flex-col justify-between py-8'>
          <div className='flex flex-wrap items-center my-4'>
            <Text className='text-base text-semibold'>
              <FontAwesomeIcon icon={faCalendarDays} /> Appointments available
              on {getNextAvailableDate(provider)}
            </Text>
          </div>
          <div className='w-full flex flex-wrap justify-center'>
            <Button
              type='primary'
              className='w-full min-h-[50px]'
              onClick={() =>
                message.warning('BOOK NOW functionality not yet implemented')
              }
            >
              BOOK NOW
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopRatedDoctorCard
