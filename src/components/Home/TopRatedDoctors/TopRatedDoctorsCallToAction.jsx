import { Button, Typography, message } from 'antd'

const { Title, Text } = Typography

const TopRatedDoctorsCallToAction = () => {
  return (
    <div className='flex flex-col items-center justify-center mb-16 lg:mb-0 lg:items-start lg:mr-4'>
      <Title level={1}>Top Rated Doctors</Title>
      <Text type='secondary' className='text-lg lg:text-xl'>
        According to 90% of patients
      </Text>
      <Button
        className='mt-8 text-lg font-semibold min-h-[50px]'
        onClick={() =>
          message.warning(
            'See more highly-recommended doctors functionality not yet implemented',
          )
        }
      >
        See more highly-recommended doctors
      </Button>
    </div>
  )
}

export default TopRatedDoctorsCallToAction
