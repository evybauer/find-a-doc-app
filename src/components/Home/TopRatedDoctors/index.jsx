import { Suspense, useState, useEffect, useMemo } from 'react'
import { Pagination } from 'antd'
import { getFirestoreURL } from '../../../common/utils/firestoreHelpers/getFirestoreURL'
import { useFetch } from '../../../queries'
import TopRatedDoctorCard from './TopRatedDoctorCard'
import LoadingStatus from '../../../ui/Status/LoadingStatus'
import TopRatedDoctorsCallToAction from './TopRatedDoctorsCallToAction'
import { ErrorCard } from '../../../ui/Error/ErrorCard'
import { ErrorBoundary } from 'react-error-boundary'
import { resetApplication } from '../../../common/utils'

const Error = ({ message }) => <div>Error: {message}</div>

const TopRatedDoctorsContent = () => {
  const urlReviews = getFirestoreURL('reviews')
  const urlProviders = getFirestoreURL('providers')

  const {
    data: reviews,
    loading: loadingReviews,
    error: errorReviews,
  } = useFetch(urlReviews)
  const {
    data: providersList,
    loading: loadingProviders,
    error: errorProviders,
  } = useFetch(urlProviders)

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 3

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = currentPage * itemsPerPage

  const [highestRatedReviews, setHighestRatedReviews] = useState([])

  useEffect(() => {
    if (providersList && reviews) {
      const highestRated = providersList.map((provider) => {
        const reviewsForProvider = reviews.filter(
          (review) => review.providerId === provider.id,
        )
        return reviewsForProvider.reduce((highest, current) => {
          return current.rating > highest.rating ? current : highest
        }, reviewsForProvider[0])
      })
      setHighestRatedReviews(highestRated)
    }
  }, [providersList, reviews])

  const highestRatedReviewsToShow = useMemo(() => {
    return highestRatedReviews.slice(startIndex, endIndex)
  }, [highestRatedReviews, startIndex, endIndex])

  if (loadingReviews || loadingProviders) {
    return <LoadingStatus />
  }

  if (errorReviews) {
    return <Error message={errorReviews.message} />
  }

  if (errorProviders) {
    return <Error message={errorProviders.message} />
  }

  const handleChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className='flex flex-col lg:flex-row mt-48 mb-16'>
      <TopRatedDoctorsCallToAction />
      <div>
        <div className='flex flex-col items-center md:flex-row lg:justify-end gap-4'>
          {highestRatedReviewsToShow.map((review) => (
            <TopRatedDoctorCard
              key={review.id}
              review={review}
              provider={providersList.find(
                (provider) => provider.id === review.providerId,
              )}
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

const TopRatedDoctors = () => (
  <ErrorBoundary FallbackComponent={ErrorCard} onReset={resetApplication}>
    <Suspense fallback={<LoadingStatus />}>
      <TopRatedDoctorsContent />
    </Suspense>
  </ErrorBoundary>
)

export default TopRatedDoctors
