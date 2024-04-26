import { MemoryRouter } from 'react-router-dom'
import SearchInput from './SearchInput'

export default {
  title: 'Components/SearchBar/SearchInput',
  component: SearchInput,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/', '/providers']} initialIndex={1}>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {
    onChange: { action: 'onChange' },
  },
}

const Template = (args) => (
  <div style={{ width: '300px', border: '1px red solid' }}>
    <SearchInput {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Search',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  searchValue: 'option1',
  isProviderModal: false,
}
