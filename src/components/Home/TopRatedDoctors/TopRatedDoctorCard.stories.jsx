import { MemoryRouter } from 'react-router-dom'
import TopRatedDoctorCard from './TopRatedDoctorCard'
import { mockProvider } from '../../../providers/StorybookProviders'

const mockReview = {
  reviewText:
    'This doctor is amazing! Highly recommended her. She did an amazing job and I am very happy with the results. She is very professional and knowledgeable. I will definitely be coming back to her for future treatments.',
}

export default {
  title: 'Components/Home/TopRatedDoctorCard',
  component: TopRatedDoctorCard,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']} initialIndex={1}>
        <Story />
      </MemoryRouter>
    ),
  ],
}

const Template = (args) => <TopRatedDoctorCard {...args} />

export const Default = Template.bind({})
Default.args = {
  review: mockReview,
  provider: mockProvider,
  isReviewsModalVisible: false,
}
