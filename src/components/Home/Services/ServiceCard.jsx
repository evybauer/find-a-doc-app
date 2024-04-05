import { Button, message } from 'antd'

const ServiceCard = ({ source, title, buttonText }) => (
  <div className='relative max-w-xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16'>
    <div className='px-6'>
      <div className='flex flex-wrap justify-center'>
        <div className='w-full flex justify-center'>
          <div className='relative'>
            <img
              src={source}
              className='shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]'
              alt={title}
            />
          </div>
        </div>
      </div>
      <div className='mt-20 py-8 text-center'>
        <h1
          style={{ margin: 0, fontWeight: 400 }}
          className='text-xl md:text-2xl lg:min-h-16'
        >
          {title}
        </h1>
        <div className='flex justify-center items-end pt-8'>
          <Button
            type='primary'
            className='text-base min-h-[50px]'
            onClick={() =>
              message.warning(`${buttonText} functionality not yet implemented`)
            }
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  </div>
)

export default ServiceCard
