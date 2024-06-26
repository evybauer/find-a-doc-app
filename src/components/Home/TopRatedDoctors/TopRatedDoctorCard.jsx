import { useState } from 'react'
import { Button, Card, message, Tag, Typography } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendarDays,
  faComment,
  faStar,
} from '@fortawesome/free-solid-svg-icons'
import { getNextAvailableDate } from '../../../common/utils'
import ProviderCard from '../../Providers/ProviderCard'
import Reviews from '../../Reviews'
import { useTranslation } from 'react-i18next'
import { cap } from '../../../common/utils'

const { Link, Text } = Typography

const TopRatedDoctorCard = ({ review, provider }) => {
  const { t } = useTranslation('global')
  const [isReviewsModalVisible, setIsReviewsModalVisible] = useState(false)

  const handleReviewsModalOpen = () => {
    setIsReviewsModalVisible(true)
  }

  const handleReviewsModalClose = () => {
    setIsReviewsModalVisible(false)
  }

  return (
    <Card className='relative max-w-2xl mt-16 min-w-0 break-words border-none w-full mb-6 shadow-lg rounded-xl mt-24 md:mt-16'>
      <div className='flex flex-wrap justify-start ml-16'>
        <div className='w-full flex justify-start'>
          <div className='relative'>
            <img
              src={provider.photo}
              alt={`${provider.name} ${t('label.photo')}`}
              className='shadow-xl rounded-full align-start border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]'
            />
          </div>
        </div>
      </div>
      <div className='mt-28 lg:mt-32'>
        <div className='flex my-4 lg:absolute lg:top-2 lg:right-0 lg:my-0'>
          <Tag
            color='cyan'
            style={{ textTransform: 'capitalize' }}
            className='text-base'
          >
            <FontAwesomeIcon icon={faStar} className='mr-2' />
            {t('tag.highly_recommended')}
          </Tag>
        </div>
        <ProviderCard
          key={provider.id}
          provider={provider}
          isModalVisible={false}
        />
      </div>
      <div className='text-start min-h-8 mt-8 md:min-h-36 lg:min-h-24'>
        <Typography.Paragraph
          ellipsis={{
            rows: 3,
            expandable: true,
            onExpand: (_, info) => setExpanded(info.expanded),
          }}
        >
          {review.reviewText}
        </Typography.Paragraph>
        <div className='flex my-8 text-blue-500 hover:text-blue-800 text-base cursor-pointer dark:text-blue-100 dark:hover:text-blue-100 lg:text-lg'>
          <Link
            className='underline underline-offset-1'
            onClick={handleReviewsModalOpen}
          >
            <FontAwesomeIcon icon={faComment} className='mr-2' />
            {cap(t('link.see_reviews'))}
          </Link>
        </div>
      </div>
      <Reviews
        provider={provider}
        isModalVisible={isReviewsModalVisible}
        closeModal={handleReviewsModalClose}
        isHomeView={true}
      />
      <div className='flex flex-col justify-between py-8'>
        <div className='flex flex-wrap items-center my-4'>
          <Text className='text-bold'>
            <FontAwesomeIcon icon={faCalendarDays} />{' '}
            {cap(t('reviews.availability'))} {getNextAvailableDate(provider)}
          </Text>
        </div>
        <div className='w-full flex flex-wrap justify-center'>
          <Button
            type='primary'
            style={{ textTransform: 'uppercase' }}
            className='w-full min-h-[50px]'
            onClick={() =>
              message.warning(
                `${cap(t('message.warning.no_book_now_functionality'))}`,
              )
            }
          >
            {t('action.book_now')}
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default TopRatedDoctorCard
