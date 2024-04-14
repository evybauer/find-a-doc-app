import { MemoryRouter } from 'react-router-dom'
import ProviderCard from './ProviderCard'
import { mockProvider } from '../../providers/StorybookProviders'

export default {
  title: 'Components/Providers/ProviderCard',
  component: ProviderCard,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/', '/providers']} initialIndex={1}>
        <Story />
      </MemoryRouter>
    ),
  ],
}

const Template = (args) => <ProviderCard {...args} />

export const Default = Template.bind({})
Default.args = {
  provider: mockProvider,
  isModalVisible: false,
}
