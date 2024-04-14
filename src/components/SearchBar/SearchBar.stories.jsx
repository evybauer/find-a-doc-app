import { SearchProvider } from '../../providers/SearchProvider'
import SearchBar from './index'
import { MemoryRouter } from 'react-router-dom'

export default {
  title: 'Components/SearchBar/SearchBar',
  component: SearchBar,
}

export const Default = () => {
  const args = {
    isNavbar: false,
  }

  return (
    <MemoryRouter initialEntries={['/providers']}>
      <SearchProvider>
        <SearchBar {...args} />
      </SearchProvider>
    </MemoryRouter>
  )
}
