import { useTranslation } from 'react-i18next'

const AnimatedProvidersList = () => {
  const { t } = useTranslation('global')

  return (
    <div className='font-extrabold text-lg md:text-lg [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200'>
      <span className='text-[#27a5b0] inline-flex flex-col h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] overflow-hidden'>
        <ul className='block animate-text-slide-7 text-left leading-tight [&_li]:block'>
          <li>{t('specialty.doctors')}</li>
          <li>{t('specialty.dentists')}</li>
          <li>{t('specialty.ob_gyns')}</li>
          <li>{t('specialty.dermatologists')}</li>
          <li>{t('specialty.cardiologists')}</li>
          <li>{t('specialty.ophthalmologists')}</li>
          <li>{t('specialty.orthopedic_surgeons')}</li>
          <li aria-hidden='true'>doctors</li>
        </ul>
      </span>
    </div>
  )
}

export default AnimatedProvidersList
