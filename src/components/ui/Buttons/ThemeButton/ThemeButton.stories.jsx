import React from 'react'
import { ThemeButton } from './index'
import ThemeProvider from '../../../lib/themes'

export default {
  title: 'ui/Buttons/ThemeButton',
  component: ThemeButton,
}

const Template = (args) => (
  <ThemeProvider>
    <div className='bg-gray-800 h-16 flex items-center justify-center'>
      <ThemeButton {...args} />
    </div>
  </ThemeProvider>
)

export const Default = Template.bind({})
Default.args = {
  theme: { type: 'light' },
}
