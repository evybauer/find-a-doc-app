import Services from './Services'
import TopRatedDoctors from './TopRatedDoctors'
import TrustedDoctorsBanner from './TrustedDoctorsBanner'
import SearchSection from './SearchSection'

const Home = () => {
  return (
    <>
      <SearchSection />
      <TopRatedDoctors />
      <TrustedDoctorsBanner />
      <Services />
    </>
  )
}

export default Home
