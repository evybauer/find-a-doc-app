import { Button, Typography } from 'antd'
import { Divider } from 'antd'
import { useNavigate } from 'react-router-dom'

const { Text, Title } = Typography

const FewProvidersMessage = ({ setSearchValues }) => {
  const navigate = useNavigate()

  const handleClear = () => {
    setSearchValues(null)
    navigate('/')
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
        Clear filters
      </Button>
    </div>
  )
}

export default FewProvidersMessage
