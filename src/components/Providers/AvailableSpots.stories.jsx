import dayjs from 'dayjs'
import AvailableSpots from './AvailableSpots'
import { SearchContext } from '../../providers/SearchProvider'
import { mockProvider } from '../../providers/StorybookProviders'

const startDateMock = dayjs()
const endDateMock = dayjs().add(7, 'day')

export default {
  title: 'Components/Providers/AvailableSpots',
  component: AvailableSpots,
  argTypes: {
    showModal: { action: 'showModal' },
    setSelectedProvider: { action: 'setSelectedProvider' },
    setIsModalVisible: { action: 'setIsModalVisible' },
    handleOk: { action: 'handleOk' },
    handleCancel: { action: 'handleCancel' },
  },
}

const Template = (args) => (
  <SearchContext.Provider value={{ searchValues: 'All Diabetes' }}>
    <AvailableSpots {...args} />
  </SearchContext.Provider>
)

export const Default = Template.bind({})
Default.args = {
  provider: mockProvider,
  selectedProvider: mockProvider,
  isModalVisible: false,
  startDate: startDateMock,
  endDate: endDateMock,
}
