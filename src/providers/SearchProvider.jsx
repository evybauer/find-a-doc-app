import React from 'react'

export const SearchContext = React.createContext()

export const SearchProvider = ({ children }) => {
  const [searchValues, setSearchValues] = React.useState({})

  return (
    <SearchContext.Provider value={{ searchValues, setSearchValues }}>
      {children}
    </SearchContext.Provider>
  )
}
