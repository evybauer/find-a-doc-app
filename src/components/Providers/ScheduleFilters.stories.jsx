import { useState } from 'react'
import { SearchProvider } from '../../providers/SearchProvider'
import ScheduleFilters from './ScheduleFilters'
import { MemoryRouter } from 'react-router-dom'

export default {
  title: 'Components/Providers/ScheduleFilters',
  component: ScheduleFilters,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <SearchProvider>
          <Story />
        </SearchProvider>
      </MemoryRouter>
    ),
  ],
}

const Template = (args) => {
  const [filteredOptions, setFilteredOptions] = useState({})
  const [searchValues, setSearchValues] = useState({})
  return (
    <ScheduleFilters
      {...args}
      filteredOptions={filteredOptions}
      setFilteredOptions={setFilteredOptions}
      searchValues={searchValues}
      setSearchValues={setSearchValues}
    />
  )
}

export const Default = Template.bind({})
