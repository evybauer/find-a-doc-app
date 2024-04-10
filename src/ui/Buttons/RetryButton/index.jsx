import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'antd'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'

export const RetryButton = ({ resetErrorBoundary }) => {
    return (
        <Button
            key='retry'
            onClick={resetErrorBoundary}
            className='text-base min-h-[50px] bg-[#037f8a] text-white'
            aria-label='Retry'
            role='button'
            type='button'
            >
            <FontAwesomeIcon icon={faRotateRight} className='mr-2' />
            Retry
        </Button>
    )
}