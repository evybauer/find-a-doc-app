import { SearchProvider } from '../../providers/SearchProvider'
import SearchBar from './index'
import { MemoryRouter } from 'react-router-dom'

export default {
  title: 'Components/SearchBar/SearchBar',
  component: SearchBar,
}

export const Default = () => {
  return (
    <MemoryRouter initialEntries={['/']}>
      <SearchProvider>
        <SearchBar {...args} />
      </SearchProvider>
    </MemoryRouter>
  )
}
