import '../src/index.css'
import { withColorScheme, withI18next } from './decorators'

export default {
  title: 'Your Story',
  decorators: [withColorScheme, withI18next],
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
  options: {
    storySort: {
      order: ['Introduction', 'Components'],
    },
  },
}

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', title: 'english' },
        { value: 'es', title: 'spanish' },
      ],
      showName: true,
    },
  },
}
