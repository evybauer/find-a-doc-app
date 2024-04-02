import { useState } from 'react'
import { Button, Pagination, Tag, Typography, message } from 'antd'
import { reviews } from '../../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faStar } from '@fortawesome/free-solid-svg-icons'
import ProviderCard from '../Providers/ProviderCard'
import { providersList } from '../../data'

const { Text, Title } = Typography

const ReviewCard = ({ review, provider }) => {
  const getNextAvailableDate = (provider) => {
    if (provider.availability && provider.availability.length > 0) {
      const nextAvailableDate = new Date(provider.availability[0].date * 1000)
      return nextAvailableDate.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      })
    }
    return 'No availability'
  }

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
            <Tag color='cyan'>
              <FontAwesomeIcon icon={faStar} className='mr-2' />
              Highly Reccomended
            </Tag>
          </div>
          <ProviderCard provider={provider} isModalVisible={false} />
        </div>
        <div className='text-start min-h-8 md:min-h-36 lg:min-h-24'>
          <Text>"{review.review}"</Text>
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

const TopRatedDoctors = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 3

  const handleChange = (page) => {
    setCurrentPage(page)
  }

  const reviewsToShow = reviews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  )

  return (
    <div className='flex flex-col lg:flex-row mt-48 mb-16'>
      <div className='flex flex-col items-center justify-center mb-16 lg:mb-0 lg:items-start lg:mr-4'>
        <Title level={1}>Top Rated Doctors</Title>
        <Text className='text-lg text-gray-500 lg:text-xl'>
          According to 90% of patients
        </Text>
        <Button
          className='mt-8 text-lg text-gray-500 font-semibold min-h-[50px]'
          onClick={() =>
            message.warning(
              'See more highly-recommended doctors functionality not yet implemented',
            )
          }
        >
          See more highly-recommended doctors
        </Button>
      </div>

      <div>
        <div className='flex flex-col items-center md:flex-row lg:justify-end gap-4'>
          {reviewsToShow.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
              provider={providersList[review.providerId - 1]}
            />
          ))}
        </div>
        <Pagination
          current={currentPage}
          onChange={handleChange}
          total={reviews.length}
          pageSize={itemsPerPage}
          showSizeChanger={false}
          className='flex justify-start'
        />
      </div>
    </div>
  )
}

export default TopRatedDoctors
