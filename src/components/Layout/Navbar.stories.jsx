import { MemoryRouter } from 'react-router-dom'
import Navbar from './Navbar'
import { ThemeContext } from '../../lib/themes'
import { SearchContext } from '../../providers/SearchProvider'

export default {
  title: 'Components/Layout/Navbar',
  component: Navbar,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/', '/providers']} initialIndex={0}>
        <ThemeContext.Provider
          value={{ theme: { type: 'light' }, toggleTheme: () => {} }}
        >
          <SearchContext.Provider
            value={{ searchValues: {}, setSearchValues: () => {} }}
          >
            <Story />
          </SearchContext.Provider>
        </ThemeContext.Provider>
      </MemoryRouter>
    ),
  ],
}

export const Default = () => <Navbar />
