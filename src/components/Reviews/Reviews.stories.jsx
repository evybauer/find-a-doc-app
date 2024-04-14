import { action } from '@storybook/addon-actions'
import Reviews from './index'
import { mockProvider, mockReview } from '../../providers/StorybookProviders'

export default {
  title: 'Components/Reviews/Reviews',
  component: Reviews,
  argTypes: {
    provider: { control: 'object' },
    reviews: { control: 'object' },
    isModalVisible: { control: 'boolean' },
    closeModal: { action: 'clicked' },
    isHomeView: { control: 'boolean' },
  },
}

const Template = (args) => <Reviews {...args} />

export const Default = Template.bind({})
Default.args = {
  provider: mockProvider,
  reviews: mockReview,
  isModalVisible: false,
  closeModal: action('closeModal'),
  isHomeView: false,
}
