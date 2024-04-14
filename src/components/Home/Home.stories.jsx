import { MemoryRouter } from 'react-router-dom'
import Home from './index'
import { MockContextProvider } from '../../../.storybook/decorators'

export default {
  title: 'Components/Home',
  component: Home,
}

const Template = (args) => (
  <MemoryRouter>
    <MockContextProvider>
      <Home {...args} />
    </MockContextProvider>
  </MemoryRouter>
)

export const Default = Template.bind({})
Default.args = {}
