import '../src/index.css'
import { withColorScheme } from './decorators/withColorScheme'

export default {
  title: 'Your Story',
  decorators: [withColorScheme],
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
