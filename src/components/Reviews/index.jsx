import { useFetch } from '../../queries'
import { getFirestoreURL } from '../../common/utils'
import { Image, Modal, Typography } from 'antd'
import ProviderCard from '../Providers/ProviderCard'
import { Divider } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Suspense } from 'react'
import LoadingStatus from '../../ui/Status/LoadingStatus'
import { useTranslation } from 'react-i18next'

const { Title, Text } = Typography

const Reviews = ({ provider, isModalVisible, closeModal, isHomeView }) => {
  const { t } = useTranslation('global')

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
          alt={`${provider.name} photo`}
          className='mb-4'
          preview={false}
        />
        {isHomeView && <ProviderCard provider={provider} />}
        <Divider direction='horizontal' />
        <Title
          level={2}
          style={{
            fontWeight: 400,
            marginBottom: 0,
            textTransform: 'capitalize',
          }}
        >
          {t('reviews.title')}
        </Title>
        {providerReviews.map((review) => (
          <Text key={review.id} className='flex flex-col my-6'>
            <Text
              type='danger'
              className='flex items-center font-semibold mb-1'
            >
              <FontAwesomeIcon type='danger' icon={faStar} className='mr-2' />
              {review.rating.toFixed(1)}
            </Text>
            <Text className='flex'>{review.reviewText}</Text>
            <Text type='secondary' className='flex justify-end font-light'>
              {review.username} ({review.state} - USA)
            </Text>
          </Text>
        ))}
      </Modal>
    </Suspense>
  )
}

export default Reviews
