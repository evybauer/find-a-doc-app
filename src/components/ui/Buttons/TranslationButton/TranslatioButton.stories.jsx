import React from 'react'
import { TranslationButton } from './index'

export default {
  title: 'ui/Buttons/TranslationButton',
  component: TranslationButton,
}

const Template = (args) => (
  <div className='bg-gray-800 h-16 flex items-center justify-center'>
    <TranslationButton {...args} />
  </div>
)

export const English = Template.bind({})
English.args = {
  language: 'en',
}

export const Spanish = Template.bind({})
Spanish.args = {
  language: 'es',
}
