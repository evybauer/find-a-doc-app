import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, DatePicker, Typography } from 'antd'

const { RangePicker } = DatePicker
const { Title } = Typography

const ProvidersHeader = ({
  providers,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  const handleLeftClick = () => {
    if (startDate.isSame('2024-03-22')) {
      return
    }
    setStartDate((prevDate) => prevDate.subtract(14, 'day'))
    setEndDate((prevDate) => prevDate.subtract(14, 'day'))
  }

  const handleRightClick = () => {
    setStartDate((prevDate) => prevDate.add(14, 'day'))
    setEndDate((prevDate) => prevDate.add(14, 'day'))
  }

  return (
    <div className='flex flex-col sm:flex-row justify-between md:items-center border-b-2 my-8'>
      <Title level={2} className='text-left' style={{ fontWeight: 400 }}>
        {providers.length} providers
      </Title>
      <div className='flex justify-between mt-0 md:items-center md:space-x-4 '>
        <Button className='bg-none border-none' onClick={handleLeftClick}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className={`text-base ${startDate.isSame('2024-03-22') ? 'text-gray-300' : 'text-gray-600'}`}
          />
        </Button>
        <RangePicker
          value={[startDate, endDate]}
          suffixIcon={null}
          allowClear={false}
          className='border-none shadow-none outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent focus:border-none focus:border-none'
        />
        <Button className='bg-none border-none' onClick={handleRightClick}>
          <FontAwesomeIcon
            icon={faChevronRight}
            className='text-base text-gray-600'
          />
        </Button>
      </div>
    </div>
  )
}

export default ProvidersHeader
