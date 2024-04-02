import { Button, Typography, message } from 'antd'
import { services } from '../../data'

const { Title } = Typography

const Services = () => {
  return (
    <div className='bg-gray-100 p-4'>
      <div className='flex justify-center my-20 text-center'>
        <Title level={1} style={{ fontWeight: 600, color: '#27a5b0' }}>
          Let’s get you a professional who gets you
        </Title>
      </div>
      <div className='flex justify-center'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => {
            const { key, source, title, buttonText } = service
            return (
              <div
                className='relative max-w-xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16'
                key={key || index}
              >
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
                          message.warning(
                            `${buttonText} functionality not yet implemented`,
                          )
                        }
                      >
                        {buttonText}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Services
