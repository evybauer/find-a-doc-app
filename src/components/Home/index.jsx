import Services from './Services'
import TopRatedDoctors from './TopRatedDoctors'
import TrustedDoctorsBanner from './TrustedDoctorsBanner'
import SearchSection from './SearchSection'
import { ErrorBoundary } from 'react-error-boundary'
import { resetApplication } from '../../common/utils'
import { ErrorCard } from '../ui/Error/ErrorCard'

const HomeContent = () => {
  return (
    <>
      <SearchSection />
      <TopRatedDoctors />
      <TrustedDoctorsBanner />
      <Services />
    </>
  )
}

const Home = () => (
  <ErrorBoundary FallbackComponent={ErrorCard} onReset={resetApplication}>
    <HomeContent />
  </ErrorBoundary>
)

export default Home
