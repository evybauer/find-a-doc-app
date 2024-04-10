import { Spin } from 'antd'

const LoadingStatus = () => {
  return (
    <div className='flex min-h-[880px] items-center justify-center'>
      <Spin size='large' />
    </div>
  )
}

export default LoadingStatus
