import { Typography } from 'antd'
import { getAvailableSpots } from '../../common/utils'

const { Text } = Typography

const AvailabilityCards = ({
  provider,
  allDates,
  showModal,
  showSecondRow,
}) => {
  const availableSpots = getAvailableSpots(provider, allDates)

  const firstRowAvailability = allDates.slice(0, 7)
  const secondRowAvailability = allDates.slice(7, 14)

  return (
    <>
      <div className='grid grid-flow-row-dense grid-cols-3 md:grid-cols-7'>
        {firstRowAvailability.map((date) => (
          <div
            key={date}
            className={`flex flex-col p-2 m-1 border rounded ${availableSpots[date] > 0 ? 'bg-[#128e99]' : 'bg-gray-300'} shadow-md ${date === firstRowAvailability[0] || date === firstRowAvailability[firstRowAvailability.length - 1] ? 'col-span-2 md:col-span-1' : ''}`}
            onClick={() => showModal(provider)}
          >
            <Text
              className={`${availableSpots[date] > 0 ? 'text-white' : 'text-slate-500'}`}
            >
              {new Date(date * 1000).toLocaleDateString('en-US', {
                weekday: 'short',
              })}
            </Text>
            <Text
              className={`${availableSpots[date] > 0 ? 'text-white' : 'text-slate-500'}`}
            >
              {new Date(date * 1000).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
              })}
            </Text>
            <div className='flex mt-2'>
              <Text
                className={`${availableSpots[date] > 0 ? 'text-white' : 'text-slate-500'} font-bold`}
              >
                {availableSpots[date]}
              </Text>
              <Text
                className={`${availableSpots[date] > 0 ? 'text-white' : 'text-slate-500'} ml-1 font-bold`}
              >
                appts
              </Text>
            </div>
          </div>
        ))}
      </div>
      <div
        className={`grid grid-flow-row-dense grid-cols-3 md:grid-cols-7 gap-1 ${showSecondRow ? '' : 'hidden md:grid'}`}
      >
        {secondRowAvailability.map((date) => (
          <div
            key={date}
            className={`flex flex-col p-2 m-1 border rounded ${availableSpots[date] > 0 ? 'bg-[#128e99]' : 'bg-gray-300'} shadow-md ${date === secondRowAvailability[0] || date === secondRowAvailability[secondRowAvailability.length - 1] ? 'col-span-2 md:col-span-1' : ''}`}
            onClick={() => showModal(provider)}
          >
            <Text
              className={`${availableSpots[date] > 0 ? 'text-white' : 'text-slate-500'}`}
            >
              {new Date(date * 1000).toLocaleDateString('en-US', {
                weekday: 'short',
              })}
            </Text>
            <Text
              className={`${availableSpots[date] > 0 ? 'text-white' : 'text-slate-500'}`}
            >
              {new Date(date * 1000).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
              })}
            </Text>
            <div className='flex mt-2'>
              <Text
                className={`${availableSpots[date] > 0 ? 'text-white' : 'text-slate-500'} font-bold`}
              >
                {availableSpots[date]}
              </Text>
              <Text
                className={`${availableSpots[date] > 0 ? 'text-white' : 'text-slate-500'} ml-1 font-bold`}
              >
                appts
              </Text>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default AvailabilityCards