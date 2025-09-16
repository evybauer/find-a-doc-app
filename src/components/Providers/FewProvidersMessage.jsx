import { useContext } from 'react'
import { SearchContext } from '../../providers/SearchProvider'
import { Button, Divider, Typography } from 'antd'
import { ErrorBoundary } from 'react-error-boundary'
import { resetApplication } from '../../common/utils'
import { ErrorCard } from '../ui/Error/ErrorCard'
import { useTranslation } from 'react-i18next'
import { cap } from '../../common/utils'

const { Text, Title } = Typography

const FewProvidersMessageContent = ({ setFilteredOptions }) => {
  const { t } = useTranslation('global')
  const { setSearchValues } = useContext(SearchContext)

  const handleClear = () => {
    setSearchValues({})
    setFilteredOptions({})
  }

  return (
    <div className='my-8'>
      <Divider position='horizontal' className='m-0' />
      <div className='my-8'>
        <Title level={2} style={{ margin: 0, textTransform: 'capitalize' }}>
          {t('action.find_more_providers')}
        </Title>
        <Text
          style={{ textTransform: 'capitalize' }}
          className='text-base font-light text-gray-500'
        >
          {t('providers.adjust_filters')}
        </Text>
      </div>
      <Button type='primary' onClick={handleClear}>
        {cap(t('action.clear_filters'))}
      </Button>
    </div>
  )
}

const FewProvidersMessage = (props) => (
  <ErrorBoundary FallbackComponent={ErrorCard} onReset={resetApplication}>
    <FewProvidersMessageContent {...props} />
  </ErrorBoundary>
)

export default FewProvidersMessage
