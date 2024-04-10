import { useContext } from 'react'
import { SearchContext } from '../../providers/SearchProvider'
import { Button, Divider, Typography } from 'antd'
import { ErrorBoundary } from 'react-error-boundary'
import { resetApplication } from '../../common/utils'
import { ErrorCard } from '../../ui/Error/ErrorCard'

const { Text, Title } = Typography

const FewProvidersMessageContent = ({ setFilteredOptions }) => {
  const { setSearchValues } = useContext(SearchContext)

  const handleClear = () => {
    setSearchValues({})
    setFilteredOptions({})
  }

  return (
    <div className='my-8'>
      <Divider position='horizontal' className='m-0' />
      <div className='my-8'>
        <Title level={2} style={{ margin: 0 }}>
          Find more providers
        </Title>
        <Text className='text-base font-light text-gray-500'>
          Try adjusting your search filters to see available providers
        </Text>
      </div>
      <Button type='primary' onClick={handleClear}>
        Clear Filters
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
