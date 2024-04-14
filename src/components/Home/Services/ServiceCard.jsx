import { Button, Card, Typography, message } from 'antd'

const { Title } = Typography

const ServiceCard = ({ source, title, buttonText }) => (
  <div className='relative max-w-xl mt-6 min-w-0 break-words w-full mb-6 shadow-lg rounded-xl mt-16'>
    <Card className='border-none px-6'>
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
      <div className='mt-20 py-8 text-center border-none'>
        <Title
          level={3}
          style={{ margin: 0, fontWeight: 400 }}
          className='text-xl text-textBase md:text-2xl lg:min-h-16'
        >
          {title}
        </Title>
        <div className='flex justify-center items-end pt-8'>
          <Button
            type='primary'
            className='min-h-[50px]'
            onClick={() =>
              message.warning(`${buttonText} functionality not yet implemented`)
            }
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </Card>
  </div>
)

export default ServiceCard
