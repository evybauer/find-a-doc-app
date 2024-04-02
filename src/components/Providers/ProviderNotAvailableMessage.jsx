import { Button, Tooltip, Typography, message } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

const { Text } = Typography

const ProviderNotAvailableMessage = () => {
  const handleNotifyMe = () => {
    message.success(
      "Thank you! You'll be notified when the doctor is available.",
    )
  }

  return (
    <div className='justify-center mt-4'>
      <div className='bg-gray-100 p-8 border rounded-xl'>
        <Text className='text-base text-gray-700'>
          At this time, the provider has no availability on Health Point at this
          location for appointments that meet your search criteria.
        </Text>
        <Tooltip title='This may not reflect the provider’s full availability. The provider’s office may be able to accommodate additional appointments if you contact them directly.'>
          <FontAwesomeIcon
            icon={faCircleInfo}
            className='text-gray-500 ml-1 cursor-pointer'
          />
        </Tooltip>
      </div>
      <Button
        onClick={handleNotifyMe}
        className='w-full mt-4 bg-white h-12 text-base text-gray-800'
      >
        Notify me
      </Button>
    </div>
  )
}

export default ProviderNotAvailableMessage
