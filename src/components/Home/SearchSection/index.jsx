import SearchBar from '../../SearchBar'
import { Typography } from 'antd'
import AnimatedProvidersList from './AnimatedProvidersList'
import { ErrorBoundary } from 'react-error-boundary'
import { resetApplication } from '../../../common/utils'
import { ErrorCard } from '../../ui/Error/ErrorCard'
import { useTranslation } from 'react-i18next'

const { Title } = Typography

const SearchSectionContent = () => {
  const { t } = useTranslation('global')

  return (
    <>
      <div className='max-w-screen-lg mx-auto my-16'>
        <div className='flex flex-wrap items-center'>
          <Title
            style={{
              fontSize: 50,
              fontWeight: 100,
              margin: 0,
              marginRight: 8,
              textTransform: 'capitalize',
            }}
          >
            {t('specialties.home_main_title_1')}
          </Title>
          <AnimatedProvidersList />
        </div>
        <Title style={{ fontSize: 50, fontWeight: 100, margin: 0 }}>
          {t('specialties.home_main_title_2')}
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
