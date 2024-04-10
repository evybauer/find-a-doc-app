import React from 'react'
import SearchBar from '../../SearchBar'
import { Typography } from 'antd'
import AnimatedProvidersList from './AnimatedProvidersList'
import { ErrorBoundary } from 'react-error-boundary'
import { resetApplication } from '../../../common/utils'
import { ErrorCard } from '../../../ui/Error/ErrorCard'

const { Title } = Typography

const SearchSectionContent = () => {
  return (
    <>
      <div className='my-16'>
        <div className='flex flex-wrap items-center'>
          <Title
            style={{ fontSize: 60, fontWeight: 100, margin: 0, marginRight: 8 }}
          >
            Book local
          </Title>
          <AnimatedProvidersList />
        </div>
        <Title style={{ fontSize: 60, fontWeight: 100, margin: 0 }}>
          who take your insurance
        </Title>
      </div>
      <SearchBar />
    </>
  )
}

const SearchSection = () => (
  <ErrorBoundary FallbackComponent={ErrorCard} onReset={resetApplication}>
    <SearchSectionContent />
  </ErrorBoundary>
)

export default SearchSection
