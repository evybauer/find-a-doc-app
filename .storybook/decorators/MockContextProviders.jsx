import { createContext } from 'react'
import { mockProvider } from '../../src/providers/StorybookProviders'

const MockDataContext = createContext()

export const MockContextProvider = ({ children }) => {
  const mockData = {
    doctors: [mockProvider],
    services: [
      { id: 1, name: 'Service 1', description: 'Description 1' },
      { id: 2, name: 'Service 2', description: 'Description 2' },
    ],
    searchValues: {
      condition: 'Anxiety',
      location: 'New York, NY',
      insurance: '',
    },
  }

  return (
    <MockDataContext.Provider value={mockData}>
      {children}
    </MockDataContext.Provider>
  )
}
