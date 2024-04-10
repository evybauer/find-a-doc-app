import { mockProvider } from '../../providers/StorybookProviders'
import AvailabilityCard from './AvailabilityCard'

export default {
  title: 'Components/AvailabilityCard',
  component: AvailabilityCard,
}

const Template = (args) => <AvailabilityCard {...args} />

export const Default = Template.bind({})
Default.args = {
  provider: mockProvider,
  allDates: allDates,
  showModal: () => console.log('Show modal'),
  showSecondRow: true,
  availableSpots: result,
}

export const NoSecondRow = Template.bind({})
NoSecondRow.args = {
  ...Default.args,
  showSecondRow: false,
}
