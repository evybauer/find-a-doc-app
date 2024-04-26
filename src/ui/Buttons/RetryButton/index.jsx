import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'antd'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'

export const RetryButton = ({ resetErrorBoundary }) => {
  const { t } = useTranslation('global')
  return (
    <Button
      key='retry'
      onClick={resetErrorBoundary}
      style={{ textTransform: 'capitalize' }}
      className='min-h-[50px]'
      aria-label='Retry'
      role='button'
      type='primary'
    >
      <FontAwesomeIcon icon={faRotateRight} className='mr-2' />
      {t('action.retry')}
    </Button>
  )
}
