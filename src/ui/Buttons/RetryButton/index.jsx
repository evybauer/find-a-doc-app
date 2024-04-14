import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'antd'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'

export const RetryButton = ({ resetErrorBoundary }) => {
  return (
    <Button
      key='retry'
      onClick={resetErrorBoundary}
      className='min-h-[50px]'
      aria-label='Retry'
      role='button'
      type='primary'
    >
      <FontAwesomeIcon icon={faRotateRight} className='mr-2' />
      Retry
    </Button>
  )
}
