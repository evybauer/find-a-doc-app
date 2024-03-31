import { Typography } from 'antd'
import SearchBar from '../SearchBar'

const { Title } = Typography

const Home = () => {
  return (
    <>
      <div className='mb-16'>
        <div className='flex flex-wrap items-center'>
          <Title
            style={{ fontSize: 60, fontWeight: 100, margin: 0, marginRight: 8 }}
          >
            Book local
          </Title>
          <div class='font-extrabold text-3xl md:text-5xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200'>
            <span class='text-[#27a5b0] inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.5xl)*theme(lineHeight.tight))] overflow-hidden'>
              <ul class='block animate-text-slide-5 text-left leading-tight [&_li]:block'>
                <li>doctors</li>
                <li>dentists</li>
                <li>OB-GYNs</li>
                <li>dermatologists</li>
                <li>cardiologists</li>
                <li>ophthalmologists</li>
                <li aria-hidden='true'>orthopedic surgeons</li>
              </ul>
            </span>
          </div>
        </div>
        <Title style={{ fontSize: 60, fontWeight: 100, margin: 0 }}>
          who take your insurance
        </Title>
      </div>
      <div>
        <SearchBar />
      </div>
    </>
  )
}

export default Home
