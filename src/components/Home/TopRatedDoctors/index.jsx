import { useState } from 'react'
import { Button, Pagination, Typography, message } from 'antd'
import { getFirestoreURL } from '../../../common/utils/getFirestoreURL'
import { useFetch } from '../../../queries'
import TopRatedDoctorCard from './TopRatedDoctorCard'

const { Text, Title } = Typography

const TopRatedDoctors = () => {

  const urlReviews = getFirestoreURL('reviews')
  const urlProviders = getFirestoreURL('providers')

  const { data: reviews, loadingReviews, errorReviews } = useFetch(urlReviews)
  const { data: providersList, loadingProviders, errorProviders } = useFetch(urlProviders)
  
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 3

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  if (loadingReviews || loadingProviders) {
    return <div>Loading...</div>
  }

  if (errorReviews || errorProviders) {
    return <div>Error: {error.message}</div>
  }


  const handleChange = (page) => {
    setCurrentPage(page)
  }

  const getHighestRatedReviewForProvider = (providerId) => {
      if (!reviews) return null

      const reviewsForProvider = reviews?.filter(review => review.providerId === providerId)
      let highestRatedReview = reviewsForProvider?.reduce((highest, current) => {
        return (current.rating > highest.rating) ? current : highest;
      }, reviewsForProvider[0])
      
      return highestRatedReview
  }

  const highestRatedReviews = providersList ? providersList?.map(provider => getHighestRatedReviewForProvider(provider.id)) : []
  const highestRatedReviewsToShow = highestRatedReviews.slice(startIndex, endIndex)

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
          {highestRatedReviewsToShow?.map((review) => (
            <TopRatedDoctorCard
              key={review?.id}
              review={review}
              provider={providersList.find(provider => provider?.id === review?.providerId)}
            />
          ))}
        </div>
        <Pagination
          current={currentPage}
          onChange={handleChange}
          total={15}
          pageSize={itemsPerPage}
          showSizeChanger={false}
          className='flex justify-start'
        />
      </div>
    </div>
  )
}

export default TopRatedDoctors
