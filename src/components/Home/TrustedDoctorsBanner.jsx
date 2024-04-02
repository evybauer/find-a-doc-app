import { Button, message } from 'antd'

const TrustedDoctorsBanner = () => {
  return (
    <div className='hidden md:flex md:relative'>
      <img
        src='/assets/banners/trustedDoctorsBanner.png'
        className='z-0'
        alt='Banner showing trusted doctors'
      />
      <div className='flex absolute bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-12 lg:right-12'>
        <Button
          className='text-base md:text-xl min-h-[50px] text-gray-600 shadow-md'
          onClick={() =>
            message.warning(
              'Find Trusted Doctors functionality not yet implemented',
            )
          }
        >
          Find Trusted Doctors
        </Button>
        <Button
          className='hidden md:block text-xl min-h-[50px] bg-gray-700 text-white border-none shadow-md ml-4'
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

export default TrustedDoctorsBanner
