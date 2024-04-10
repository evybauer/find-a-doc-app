import { RetryButton } from '../../Buttons/RetryButton'

export const ErrorPage = ({ error, resetErrorBoundary }) => {
  return (
    <div className='h-screen w-screen bg-gray-100 flex items-center justify-center'>
      <div className='container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700'>
        <div className='max-w-lg'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
            className='h-48 md:h-60 mx-8 fill-yellow-500'
          >
            <path d='M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z' />
          </svg>
        </div>
        <div className='max-w-md flex flex-col items-center md:items-start text-center md:text-left bottom-0'>
          <p className='text-4xl font-extrabold'>
            {error.status ? error.status : 'Something went wrong.'}
          </p>
          <p className='text-3xl'>{error.message}</p>
          <p className='mt-2 mb-6 text-base'>
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <RetryButton resetErrorBoundary={resetErrorBoundary} />
        </div>
      </div>
    </div>
  )
}
