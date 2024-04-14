import { useState } from 'react'
import ProvidersHeader from './ProvidersHeader'
import dayjs from 'dayjs'
import { mockProvider } from '../../providers/StorybookProviders'

export default {
  title: 'Components/Providers/ProvidersHeader',
  component: ProvidersHeader,
}

const Template = (args) => {
  const [startDate, setStartDate] = useState(dayjs('2024-03-22'))
  const [endDate, setEndDate] = useState(dayjs('2024-03-22').add(13, 'day'))
  return (
    <ProvidersHeader
      {...args}
      startDate={startDate}
      setStartDate={setStartDate}
      endDate={endDate}
      setEndDate={setEndDate}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  providers: [mockProvider],
}
