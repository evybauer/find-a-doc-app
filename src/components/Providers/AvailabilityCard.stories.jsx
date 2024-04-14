import dayjs from 'dayjs'
import AvailabilityCard from './AvailabilityCard'
import { mockProvider } from '../../providers/StorybookProviders'

export default {
  title: 'Components/Providers/AvailabilityCard',
  component: AvailabilityCard,
}

const Template = (args) => <AvailabilityCard {...args} />

const allDates = mockProvider.availability.map((item) => ({
  date: dayjs(item.date * 1000).format('ddd, MMM DD'),
  spots: item.appointmentsAvailable,
}))

const availableSpots = allDates.reduce((acc, curr) => {
  acc[curr.date] = curr.spots
  return acc
}, {})

export const Default = Template.bind({})
Default.args = {
  provider: mockProvider,
  allDates: allDates,
  showModal: () => console.log('Show modal'),
  showSecondRow: true,
  availableSpots: availableSpots,
}

export const NoSecondRow = Template.bind({})
NoSecondRow.args = {
  ...Default.args,
  showSecondRow: false,
}
