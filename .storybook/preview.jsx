import '../src/index.css'

export default {
  title: 'Your Story',
  decorators: [],
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
