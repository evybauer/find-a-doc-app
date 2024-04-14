import { action } from '@storybook/addon-actions'
import BookAppointmentForm from './BookAppointmentForm'

export default {
  title: 'Components/Providers/BookAppointmentForm',
  component: BookAppointmentForm,
}

const Template = (args) => <BookAppointmentForm {...args} />

export const Default = Template.bind({})
Default.args = {
  displayDate: new Date(),
  selectedTime: {
    startTime: Date.now() / 1000,
  },
  setIsModalVisible: action('setIsModalVisible'),
  setSelectedAppointmentIndex: action('setSelectedAppointmentIndex'),
}
