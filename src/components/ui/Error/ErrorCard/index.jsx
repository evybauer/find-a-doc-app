import { RetryButton } from '../../Buttons/RetryButton'
import { useTranslation } from 'react-i18next'
import { cap } from '../../../../common/utils'

export const ErrorCard = ({ resetErrorBoundary }) => {
  const { t } = useTranslation('global')

  return (
    <div className='w-full h-full flex items-center justify-center bg-red-100 border border-red-500 rounded-xl my-8 p-8'>
      <div className='container flex flex-col md:flex-row justify-center px-5 text-gray-700'>
        <div className='max-w-lg justify-center md:justify-start'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
            className='h-16 mx-8 fill-red-500'
          >
            <path d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z' />
          </svg>
        </div>
        <div className='max-w-md flex flex-col items-center md:items-start text-center md:text-left'>
          <p className='text-3xl font-extrabold'>Oops!</p>
          <p className='text-2xl'>
            {cap(t('message.error.something_went_wrong'))}
          </p>
          <p className='mt-2 mb-6 text-base'>
            {cap(t('message.error.try_again_later'))}
          </p>
          <RetryButton resetErrorBoundary={resetErrorBoundary} />
        </div>
      </div>
    </div>
  )
}
