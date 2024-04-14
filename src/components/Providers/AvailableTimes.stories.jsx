import { action } from '@storybook/addon-actions'
import AvailableTimes from './AvailableTimes'

export default {
  title: 'Components/Providers/AvailableTimes',
  component: AvailableTimes,
}

const Template = (args) => <AvailableTimes {...args} />

export const Default = Template.bind({})
Default.args = {
  availability: [
    {
      date: Date.now() / 1000,
      availableSpots: [{ startTime: Date.now() / 1000 }],
    },
  ],
  allDates: [Date.now() / 1000],
  setIsModalVisible: action('setIsModalVisible'),
}
