const insuranceSearchList = {
  'Popular carriers': [
    'Blue Cross Blue Shield (BCBS)',
    'Aetna',
    'UnitedHealthcare',
    'Cigna',
    'Empire Blue Cross Blue Shield (Health)',
    'EmblemHealth (formerly known as GHI)',
    'HealthFirst (NY)',
  ],
  'All carriers': [],
  '#': ['1199SEIU', '1st Agency', '20/20 Eyecare Plan'],
  A: [
    'AARP',
    'ACE',
    'AIG',
    'APWU',
    'ATRIO Health Plans',
    'AVMA Life',
    'Absolute Total Care',
    'Access Medicare (NY)',
    'Accountable Health Plan of Ohio',
    'Advanced Health',
    'AdvantageMD',
    'Advantica',
    'Advent Health',
    'Adventist Health',
    'Aetna',
  ],
  B: [
    'Bankers Life and Casualty',
    'Baptist Health',
    'Beech Street',
    'Benefit Management',
    'Blue Cross Blue Shield (BCBS)',
  ],
  C: ['Cigna'],
  E: [
    'Empire Blue Cross Blue Shield (Health)',
    'EmblemHealth (formerly known as GHI)',
  ],
  H: ['HealthFirst (NY)'],
  U: ['UnitedHealthcare'],
}

const capitalizeFirstLetterOfEachWord = (str) => {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

const initialOptions = {
  options: [
    {
      label: <span>I'm paying for myself</span>,
      value: "I'm paying for myself",
      searchValue: "I'm paying for myself",
    },
    {
      label: <span>I'll choose my insurance later</span>,
      value: "I'll choose my insurance later",
      searchValue: "I'll choose my insurance later",
    },
  ],
}

const insuranceSearchArray = [
  initialOptions,
  ...Object.keys(insuranceSearchList).map((category) => {
    return {
      label: <span>{capitalizeFirstLetterOfEachWord(category)}</span>,
      title: category,
      options: insuranceSearchList[category].map((insurance) => ({
        label: <span>{capitalizeFirstLetterOfEachWord(insurance)}</span>,
        value: insurance,
        searchValue: insurance,
      })),
    }
  }),
]

export { insuranceSearchArray }
