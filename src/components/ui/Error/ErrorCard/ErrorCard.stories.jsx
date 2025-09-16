import { ErrorCard } from './index'

export default {
  title: 'ui/Error/ErrorCard/ErrorCard',
  component: ErrorCard,
}

const Template = (args) => <ErrorCard {...args} />

export const error_card = Template.bind({})
error_card.args = {
  resetErrorBoundary: () => console.log('Resetting error boundary'),
}
