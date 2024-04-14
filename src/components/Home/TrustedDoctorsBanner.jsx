import { useState } from 'react'
import { Button, message } from 'antd'
import { ErrorCard } from '../../ui/Error/ErrorCard'
import { ErrorBoundary } from 'react-error-boundary'
import { resetApplication } from '../../common/utils'

const TrustedDoctorsBannerContent = () => {
  const [imgLoadError, setImgLoadError] = useState(false)

  const handleImageError = () => {
    setImgLoadError(true)
  }

  const handleImageLoad = () => {
    setImgLoadError(false)
  }

  if (imgLoadError) {
    throw new Error('Image loading error')
  }

  return (
    <div className='hidden md:flex md:relative'>
      {!imgLoadError && (
        <img
          src='/assets/banners/trustedDoctorsBanner.png'
          alt='Trusted Doctors Banner'
          onError={handleImageError}
          onLoad={handleImageLoad}
        />
      )}
      <div className='flex absolute bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-12 lg:right-12'>
        <Button
          type='primary'
          className='md:text-xl min-h-[50px] border-none shadow-md bg-neutral-100 text-black'
          onClick={() =>
            message.warning(
              'Find Trusted Doctors functionality not yet implemented',
            )
          }
        >
          Find Trusted Doctors
        </Button>
        <Button
          type='primary'
          className='hidden md:block text-xl min-h-[50px] border-none shadow-md ml-4 bg-neutral-800 text-white'
          onClick={() =>
            message.warning(
              'Book Trusted Doctorfunctionality not yet implemented',
            )
          }
        >
          Book Trusted Doctors
        </Button>
      </div>
    </div>
  )
}

const TrustedDoctorsBanner = () => (
  <ErrorBoundary FallbackComponent={ErrorCard} onReset={resetApplication}>
    <TrustedDoctorsBannerContent />
  </ErrorBoundary>
)

export default TrustedDoctorsBanner
