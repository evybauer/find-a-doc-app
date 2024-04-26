import { Button, Tooltip, Typography, message } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'
import { cap } from '../../common/utils'

const { Text } = Typography

const ProviderNotAvailableMessage = () => {
  const { t } = useTranslation('global')
  const handleNotifyMe = () => {
    message.success(`${t('message.success.notification_confirmation')}`)
  }

  return (
    <div className='justify-center mt-4'>
      <div className='p-8 border rounded-xl'>
        <Text className='normal-case'>
          {cap(t('providers.no_availability'))}
        </Text>
        <Tooltip title={t('providers.contact_disclaimer')}>
          <FontAwesomeIcon
            icon={faCircleInfo}
            className='ml-1 cursor-pointer'
          />
        </Tooltip>
      </div>
      <Button onClick={handleNotifyMe} className='w-full mt-4 h-12'>
        {cap(t('action.notify_me'))}
      </Button>
    </div>
  )
}

export default ProviderNotAvailableMessage
