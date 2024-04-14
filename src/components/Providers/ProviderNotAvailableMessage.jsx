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
      <div className='p-8 border rounded-xl'>
        <Text>
          At this time, the provider has no availability on Health Point at this
          location for appointments that meet your search criteria.
        </Text>
        <Tooltip title='This may not reflect the provider’s full availability. The provider’s office may be able to accommodate additional appointments if you contact them directly.'>
          <FontAwesomeIcon
            icon={faCircleInfo}
            className='ml-1 cursor-pointer'
          />
        </Tooltip>
      </div>
      <Button onClick={handleNotifyMe} className='w-full mt-4 h-12'>
        Notify me
      </Button>
    </div>
  )
}

export default ProviderNotAvailableMessage
