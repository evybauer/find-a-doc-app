import { Button, Typography, message } from 'antd'
import { useTranslation } from 'react-i18next'
import { cap } from '../../../common/utils'

const { Title, Text } = Typography

const TopRatedDoctorsCallToAction = () => {
  const { t } = useTranslation('global')

  return (
    <div className='flex flex-col items-center justify-center mb-16 lg:mb-0 lg:items-start lg:mr-4'>
      <Title level={1}>{cap(t('reviews.title'))}</Title>
      <Text
        type='secondary'
        className='text-lg lg:text-xl'
        style={{ textTransform: 'capitalize' }}
      >
        {t('reviews.cta_info')}
      </Text>
      <Button
        className='mt-8 text-lg font-semibold min-h-[50px]'
        onClick={() =>
          message.warning(
            `${cap(t('message.warning.no_highly_recommended_functionality'))}`,
          )
        }
      >
        {cap(t('reviews.cta_button'))}
      </Button>
    </div>
  )
}

export default TopRatedDoctorsCallToAction
