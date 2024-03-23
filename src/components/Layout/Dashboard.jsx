import { Typography } from 'antd'
import SearchBar from '../SearchBar'

const { Title } = Typography

const Dashboard = ({ searchValues, setSearchValues }) => {
  return (
    <>
      <div className='mb-16'>
        <Title style={{ fontSize: 60, fontWeight: 100, margin: 0 }}>
          Book local "DOCTORS"
        </Title>
        <Title style={{ fontSize: 60, fontWeight: 100, margin: 0 }}>
          who take your insurance
        </Title>
      </div>
      <div>
        <SearchBar
          searchValues={searchValues}
          setSearchValues={setSearchValues}
        />
      </div>
    </>
  )
}

export default Dashboard
