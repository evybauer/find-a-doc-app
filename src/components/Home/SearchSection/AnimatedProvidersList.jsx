const AnimatedProvidersList = () => {
  return (
    <div className='font-extrabold text-3xl md:text-5xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200'>
      <span className='text-[#27a5b0] inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.5xl)*theme(lineHeight.tight))] overflow-hidden'>
        <ul className='block animate-text-slide-7 text-left leading-tight [&_li]:block'>
          <li>doctors</li>
          <li>dentists</li>
          <li>OB-GYNs</li>
          <li>dermatologists</li>
          <li>cardiologists</li>
          <li>ophthalmologists</li>
          <li>orthopedic surgeons</li>
          <li aria-hidden='true'>doctors</li>
        </ul>
      </span>
    </div>
  )
}

export default AnimatedProvidersList
