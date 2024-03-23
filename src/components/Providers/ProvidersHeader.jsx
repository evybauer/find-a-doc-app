import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DatePicker, Typography } from 'antd'
import dayjs from 'dayjs'

const { RangePicker } = DatePicker
const { Title, Text } = Typography

const startDate = dayjs()
const endDate = dayjs().add(14, 'day')

const today = dayjs()
const thirteenDaysFromToday = dayjs().add(13, 'day')

const ProvidersHeader = ({ providers }) => {
  return (
    <div className='flex justify-between items-center border-b-2'>
      <Title level={2} style={{ fontWeight: 400 }}>
        {providers.length} providers
      </Title>
      <div className='flex items-center'>
        <RangePicker
          defaultValue={[today, thirteenDaysFromToday]}
          suffixIcon={null}
          allowClear={false}
          className='border-none shadow-none outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent focus:border-none focus:border-none'
        />
        {/* <Text className="text-base">{`${startDate.format('ddd, MMM D')} - ${endDate.format('ddd, MMM D')}`}</Text> */}
        <div className='flex gap-4'>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className='text-base text-gray-600'
          />
          <FontAwesomeIcon
            icon={faChevronRight}
            className='text-base text-gray-600'
          />
        </div>
      </div>
    </div>
  )
}

export default ProvidersHeader
