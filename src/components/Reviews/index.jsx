import { useFetch } from '../../queries'
import { getFirestoreURL } from '../../common/utils'
import { Image, Modal, Typography } from 'antd'
import ProviderCard from '../Providers/ProviderCard'
import { Divider } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Suspense } from 'react'
import LoadingStatus from '../../ui/Status/LoadingStatus'

const { Title, Text } = Typography

const Reviews = ({ provider, isModalVisible, closeModal, isHomeView }) => {
  const urlReviews = getFirestoreURL('reviews')
  const {
    data: reviews,
    loading: loadingReviews,
    error: errorReviews,
  } = useFetch(urlReviews)

  if (loadingReviews || !reviews) {
    return null
  }

  if (errorReviews) {
    return <div>Error: {errorReviews.message}</div>
  }

  const providerReviews = reviews.filter(
    (review) => review.providerId === provider.id,
  )

  return (
    <Suspense fallback={<LoadingStatus />}>
      <Modal open={isModalVisible} onCancel={closeModal} footer={null}>
        <Image
          src={provider.photo}
          alt={provider.name}
          className='mb-4'
          preview={false}
        />
        {isHomeView && <ProviderCard provider={provider} />}
        <Divider direction='horizontal' />
        <Title level={2} style={{ fontWeight: 400, marginBottom: 0 }}>
          Reviews
        </Title>
        {providerReviews.map((review) => (
          <Text key={review.id} className='flex flex-col my-6 text-base '>
            <div className='flex font-semibold text-red-500 mb-1'>
              <FontAwesomeIcon icon={faStar} className='mr-2 text-red-600' />
              {review.rating.toFixed(1)}
            </div>
            <div className='flex text-gray-800'>{review.reviewText}</div>
            <div className='flex justify-end font-light text-gray-700'>
              {review.username} ({review.state} - USA)
            </div>
          </Text>
        ))}
      </Modal>
    </Suspense>
  )
}

export default Reviews
