import { Button, Card, Typography, message } from 'antd'
import { useTranslation } from 'react-i18next'
import { cap } from '../../../common/utils'

const { Title } = Typography

const ServiceCard = ({ source, title, buttonText }) => {
  const { t } = useTranslation('global')

  return (
    <div className='relative max-w-xl mt-6 min-w-0 break-words w-full mb-6 shadow-lg rounded-xl mt-16'>
      <Card className='border-none px-6'>
        <div className='flex flex-wrap justify-center'>
          <div className='w-full flex justify-center'>
            <div className='relative'>
              <img
                src={source}
                className='shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]'
                alt={`${t(title)}`}
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
            {cap(t(title))}
          </Title>
          <div className='flex justify-center items-end pt-8'>
            <Button
              type='primary'
              className='min-h-[50px]'
              onClick={() =>
                message.warning(
                  `${buttonText} ${cap(t('message.warning.no_functionality'))}`,
                )
              }
            >
              {cap(t(buttonText))}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
export default ServiceCard
