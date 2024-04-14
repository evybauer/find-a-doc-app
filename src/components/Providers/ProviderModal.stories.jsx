import ProviderModal from './ProviderModal'
import { SearchProvider } from '../../providers/SearchProvider'
import { mockProvider } from '../../providers/StorybookProviders'
import { MemoryRouter } from 'react-router-dom'

const mockAllDates = []

export default {
  title: 'Components/Providers/ProviderModal',
  component: ProviderModal,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/', '/providers']} initialIndex={1}>
        <SearchProvider>
          <Story />
        </SearchProvider>
      </MemoryRouter>
    ),
  ],
}

const Template = (args) => <ProviderModal {...args} />

export const Default = Template.bind({})
Default.args = {
  provider: mockProvider,
  isModalVisible: true,
  setIsModalVisible: () => {},
  handleOk: () => {},
  handleCancel: () => {},
  allDates: mockAllDates,
}
