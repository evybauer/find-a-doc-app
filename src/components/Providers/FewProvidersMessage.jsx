import { useContext } from 'react'
import { SearchContext } from '../../providers/SearchProvider'
import { Button, Divider, Typography } from 'antd'

const { Text, Title } = Typography

const FewProvidersMessage = ({ setFilteredOptions }) => {
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

export default FewProvidersMessage
