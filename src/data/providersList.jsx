const insuranceCompanies1 = ['Blue Cross Blue Shield (BCBS)', 'Aetna']
const insuranceCompanies2 = [
  'UnitedHealthcare',
  'Cigna',
  'Empire Blue Cross Blue Shield (Health)',
]
const insuranceCompanies3 = [
  'EmblemHealth (formerly known as GHI)',
  'HealthFirst (NY)',
  'AARP',
  'ACE',
]
const insuranceCompanies4 = [
  'AIG',
  'APWU',
  'ATRIO Health Plans',
  'AVMA Life',
  'Absolute Total Care',
]
const insuranceCompanies5 = [
  'Access Medicare (NY)',
  'Accountable Health Plan of Ohio',
  'Advanced Health',
  'AdvantageMD',
  'Advantica',
  'Advent Health',
]

export const providersList = [
  {
    id: 1,
    photo: '/assets/images/doctors/doctor1.jpg',
    name: 'Dr. Emily Chen',
    specialty: 'Dermatologist',
    sponsored: true,
    rating: 4.7,
    reviews: 312,
    loyalPatients: 87,
    distance: 1.2,
    insurance: ['Blue Cross Blue Shield (BCBS)', 'Aetna'],
    address: {
      streetAddress: '120 East 56th Street',
      city: 'New York',
      state: 'NY',
      postalCode: '10022',
      latitude: 40.75833153925082,
      longitude: -73.96798305673181,
    },
    inNetwork: true,
    newPatientAppointments: true,
    highlyRecommended: true,
    excellentWaitTime: false,
    examsAvailable: ['Skin Cancer'],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 1,
        availableSpots: [
          {
            startTime: 1711108800,
            endTime: 1711112400,
          },
        ],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711195200,
            endTime: 1711198800,
          },
          {
            startTime: 1711202400,
            endTime: 1711206000,
          },
          {
            startTime: 1711206000,
            endTime: 1711209600,
          },
        ],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711281600,
            endTime: 1711285200,
          },
          {
            startTime: 1711288800,
            endTime: 1711292400,
          },
        ],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711454400,
            endTime: 1711458000,
          },
          {
            startTime: 1711458000,
            endTime: 1711461600,
          },
        ],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 1,
        availableSpots: [
          {
            startTime: 1711544400,
            endTime: 1711548000,
          },
        ],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711627200,
            endTime: 1711630800,
          },
          {
            startTime: 1711630800,
            endTime: 1711634400,
          },
          {
            startTime: 1711638000,
            endTime: 1711641600,
          },
        ],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 1,
        availableSpots: [
          {
            startTime: 1711717200,
            endTime: 1711720800,
          },
        ],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 1,
        availableSpots: [
          {
            startTime: 1711886400,
            endTime: 1711890000,
          },
        ],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1712059200,
            endTime: 1712062800,
          },
          {
            startTime: 1712062800,
            endTime: 1712066400,
          },
          {
            startTime: 1712066400,
            endTime: 1712070000,
          },
          {
            startTime: 1712070000,
            endTime: 1712073600,
          },
        ],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1712145600,
            endTime: 1712149200,
          },
          {
            startTime: 1712152800,
            endTime: 1712156400,
          },
        ],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 1,
        availableSpots: [
          {
            startTime: 1712239200,
            endTime: 1712242800,
          },
        ],
      },
    ],
    schedulePreference: ['Morning'],
    gender: 'female',
    visitType: {
      value: 'inPerson',
      label: 'In-person visits only',
    },
    languageSpoken: ['English', 'korean'],
  },
  {
    id: 2,
    photo: '/assets/images/doctors/doctor2.jpg',
    name: 'Dr. Michael Johnson',
    specialty: 'Cardiologist',
    sponsored: false,
    rating: 5.0,
    reviews: 476,
    loyalPatients: 14,
    distance: 0.8,
    insurance: [
      'UnitedHealthcare',
      'Cigna',
      'Empire Blue Cross Blue Shield (Health)',
    ],
    address: {
      streetAddress: '175 Remsen Street',
      city: 'Brooklyn',
      state: 'NY',
      postalCode: '11201',
      latitude: 40.692638364899686,
      longitude: -73.9917429353115,
    },
    inNetwork: true,
    newPatientAppointments: true,
    highlyRecommended: true,
    excellentWaitTime: true,
    examsAvailable: ['Heart Transplant', 'Ventricular Assist Device (VAD)'],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711098000,
            endTime: 1711101600,
          },
          {
            startTime: 1711105200,
            endTime: 1711108800,
          },
          {
            startTime: 1711112400,
            endTime: 1711116000,
          },
          {
            startTime: 1711119600,
            endTime: 1711123200,
          },
          {
            startTime: 1711123200,
            endTime: 1711126800,
          },
          {
            startTime: 1711130400,
            endTime: 1711134000,
          },
        ],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711184400,
            endTime: 1711188000,
          },
          {
            startTime: 1711195200,
            endTime: 1711198800,
          },
          {
            startTime: 1711220400,
            endTime: 1711224000,
          },
        ],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711270800,
            endTime: 1711274400,
          },
          {
            startTime: 1711274400,
            endTime: 1711278000,
          },
          {
            startTime: 1711278000,
            endTime: 1711281600,
          },
          {
            startTime: 1711281600,
            endTime: 1711285200,
          },
          {
            startTime: 1711285200,
            endTime: 1711288800,
          },
          {
            startTime: 1711288800,
            endTime: 1711292400,
          },
        ],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711357200,
            endTime: 1711360800,
          },
          {
            startTime: 1711378800,
            endTime: 1711382400,
          },
          {
            startTime: 1711382400,
            endTime: 1711386000,
          },
        ],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711530000,
            endTime: 1711533600,
          },
          {
            startTime: 1711533600,
            endTime: 1711537200,
          },
          {
            startTime: 1711537200,
            endTime: 1711540800,
          },
          {
            startTime: 1711540800,
            endTime: 1711544400,
          },
          {
            startTime: 1711544400,
            endTime: 1711548000,
          },
          {
            startTime: 1711548000,
            endTime: 1711551600,
          },
        ],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711616400,
            endTime: 1711620000,
          },
          {
            startTime: 1711620000,
            endTime: 1711623600,
          },
          {
            startTime: 1711623600,
            endTime: 1711627200,
          },
          {
            startTime: 1711627200,
            endTime: 1711630800,
          },
          {
            startTime: 1711630800,
            endTime: 1711634400,
          },
          {
            startTime: 1711634400,
            endTime: 1711638000,
          },
        ],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711706400,
            endTime: 1711710000,
          },
          {
            startTime: 1711717200,
            endTime: 1711720800,
          },
          {
            startTime: 1711738800,
            endTime: 1711742400,
          },
        ],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711789200,
            endTime: 1711792800,
          },
          {
            startTime: 1711796400,
            endTime: 1711800000,
          },
          {
            startTime: 1711803600,
            endTime: 1711807200,
          },
          {
            startTime: 1711810800,
            endTime: 1711814400,
          },
          {
            startTime: 1711814400,
            endTime: 1711818000,
          },
          {
            startTime: 1711825200,
            endTime: 1711828800,
          },
        ],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711875600,
            endTime: 1711879200,
          },
          {
            startTime: 1711879200,
            endTime: 1711882800,
          },
          {
            startTime: 1711882800,
            endTime: 1711886400,
          },
          {
            startTime: 1711886400,
            endTime: 1711890000,
          },
          {
            startTime: 1711890000,
            endTime: 1711893600,
          },
          {
            startTime: 1711893600,
            endTime: 1711897200,
          },
        ],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711962000,
            endTime: 1711965600,
          },
          {
            startTime: 1711965600,
            endTime: 1711969200,
          },
          {
            startTime: 1711969200,
            endTime: 1711972800,
          },
          {
            startTime: 1711972800,
            endTime: 1711976400,
          },
          {
            startTime: 1711976400,
            endTime: 1711980000,
          },
          {
            startTime: 1711980000,
            endTime: 1711983600,
          },
        ],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1712052000,
            endTime: 1712055600,
          },
          {
            startTime: 1712070000,
            endTime: 1712073600,
          },
          {
            startTime: 1712077200,
            endTime: 1712080800,
          },
        ],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
    ],
    schedulePreference: ['Afternoon', 'Morning', 'Early Morning'],
    gender: 'male',
    visitType: {
      value: 'inPerson',
      label: 'In-person visits only',
    },
    languageSpoken: ['English'],
  },
  {
    id: 3,
    photo: '/assets/images/doctors/doctor3.jpg',
    name: 'Dr. Sarah Thompson',
    specialty: 'Endocrinologist',
    sponsored: true,
    rating: 5.0,
    reviews: 368,
    loyalPatients: 14,
    distance: 1.5,
    insurance: [
      'EmblemHealth (formerly known as GHI)',
      'HealthFirst (NY)',
      'AARP',
      'ACE',
    ],
    address: {
      streetAddress: '1185 Avenue of the Americas',
      city: 'New York',
      state: 'NY',
      postalCode: '10036',
      latitude: 40.759459064812646,
      longitude: -73.98925518395785,
    },
    inNetwork: false,
    newPatientAppointments: false,
    highlyRecommended: true,
    excellentWaitTime: true,
    examsAvailable: [
      'All Diabetes',
      'Diabetes Type 1',
      'Diabetes Type 2',
      'Acquired Hypothyroidism',
    ],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711098000,
            endTime: 1711101600,
          },
          {
            startTime: 1711119600,
            endTime: 1711123200,
          },
          {
            startTime: 1711130400,
            endTime: 1711134000,
          },
          {
            startTime: 1711144800,
            endTime: 1711148400,
          },
        ],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711184400,
            endTime: 1711188000,
          },
          {
            startTime: 1711188000,
            endTime: 1711191600,
          },
          {
            startTime: 1711191600,
            endTime: 1711195200,
          },
          {
            startTime: 1711195200,
            endTime: 1711198800,
          },
          {
            startTime: 1711198800,
            endTime: 1711202400,
          },
          {
            startTime: 1711202400,
            endTime: 1711206000,
          },
        ],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711360800,
            endTime: 1711364400,
          },
          {
            startTime: 1711364400,
            endTime: 1711368000,
          },
          {
            startTime: 1711368000,
            endTime: 1711371600,
          },
          {
            startTime: 1711375200,
            endTime: 1711378800,
          },
          {
            startTime: 1711389600,
            endTime: 1711393200,
          },
          {
            startTime: 1711393200,
            endTime: 1711396800,
          },
        ],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711443600,
            endTime: 1711447200,
          },
          {
            startTime: 1711447200,
            endTime: 1711450800,
          },
          {
            startTime: 1711450800,
            endTime: 1711454400,
          },
          {
            startTime: 1711454400,
            endTime: 1711458000,
          },
          {
            startTime: 1711458000,
            endTime: 1711461600,
          },
          {
            startTime: 1711461600,
            endTime: 1711465200,
          },
        ],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711533600,
            endTime: 1711537200,
          },
          {
            startTime: 1711548000,
            endTime: 1711551600,
          },
          {
            startTime: 1711562400,
            endTime: 1711566000,
          },
          {
            startTime: 1711569600,
            endTime: 1711573200,
          },
        ],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711616400,
            endTime: 1711620000,
          },
          {
            startTime: 1711620000,
            endTime: 1711623600,
          },
          {
            startTime: 1711623600,
            endTime: 1711627200,
          },
          {
            startTime: 1711627200,
            endTime: 1711630800,
          },
          {
            startTime: 1711630800,
            endTime: 1711634400,
          },
          {
            startTime: 1711638000,
            endTime: 1711641600,
          },
        ],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711789200,
            endTime: 1711792800,
          },
          {
            startTime: 1711792800,
            endTime: 1711796400,
          },
          {
            startTime: 1711800000,
            endTime: 1711803600,
          },
          {
            startTime: 1711803600,
            endTime: 1711807200,
          },
          {
            startTime: 1711814400,
            endTime: 1711818000,
          },
          {
            startTime: 1711821600,
            endTime: 1711825200,
          },
        ],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711875600,
            endTime: 1711879200,
          },
          {
            startTime: 1711879200,
            endTime: 1711882800,
          },
          {
            startTime: 1711882800,
            endTime: 1711886400,
          },
          {
            startTime: 1711886400,
            endTime: 1711890000,
          },
          {
            startTime: 1711890000,
            endTime: 1711893600,
          },
          {
            startTime: 1711893600,
            endTime: 1711897200,
          },
        ],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711962000,
            endTime: 1711965600,
          },
          {
            startTime: 1711983600,
            endTime: 1711987200,
          },
          {
            startTime: 1711990800,
            endTime: 1711994400,
          },
          {
            startTime: 1712005200,
            endTime: 1712008800,
          },
        ],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1712048400,
            endTime: 1712052000,
          },
          {
            startTime: 1712066400,
            endTime: 1712070000,
          },
          {
            startTime: 1712080800,
            endTime: 1712084400,
          },
          {
            startTime: 1712098800,
            endTime: 1712102400,
          },
        ],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712134800,
            endTime: 1712138400,
          },
          {
            startTime: 1712138400,
            endTime: 1712142000,
          },
          {
            startTime: 1712142000,
            endTime: 1712145600,
          },
          {
            startTime: 1712145600,
            endTime: 1712149200,
          },
          {
            startTime: 1712149200,
            endTime: 1712152800,
          },
          {
            startTime: 1712152800,
            endTime: 1712156400,
          },
        ],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1712221200,
            endTime: 1712224800,
          },
          {
            startTime: 1712242800,
            endTime: 1712246400,
          },
          {
            startTime: 1712257200,
            endTime: 1712260800,
          },
          {
            startTime: 1712260800,
            endTime: 1712264400,
          },
        ],
      },
    ],
    schedulePreference: ['Morning', 'Afternoon', 'Evening', 'Early Morning'],
    gender: 'female',
    visitType: {
      value: 'video',
      label: 'Video visits only',
    },
    languageSpoken: ['English', 'norwegian'],
  },
  {
    id: 4,
    photo: '/assets/images/doctors/doctor4.jpg',
    name: 'Dr. David Wilson',
    specialty: 'Orthopedic Surgeon',
    sponsored: false,
    rating: 4.6,
    reviews: 282,
    loyalPatients: 18,
    distance: 2.1,
    insurance: [
      'AIG',
      'APWU',
      'ATRIO Health Plans',
      'AVMA Life',
      'Absolute Total Care',
    ],
    address: {
      streetAddress: '127 John Street',
      city: 'New York',
      state: 'NY',
      postalCode: '10038',
      latitude: 40.709123714583335,
      longitude: -74.00439778475877,
    },
    inNetwork: true,
    newPatientAppointments: true,
    highlyRecommended: false,
    excellentWaitTime: true,
    examsAvailable: ['Bronchitis'],
    availability: [],
    schedulePreference: ['Early Morning', 'Morning', 'Evening', 'Afternoon'],
    gender: 'male',
    visitType: {
      value: 'inPersonAndVideo',
      label: 'In-person and video visits',
    },
    languageSpoken: ['English'],
  },
  {
    id: 5,
    photo: '/assets/images/doctors/doctor5.jpg',
    name: 'Dr. Jessica Rodriguez',
    specialty: 'Obstetrician/Gynecologist',
    sponsored: true,
    rating: 4.7,
    reviews: 394,
    loyalPatients: 126,
    distance: 1.3,
    insurance: [
      'Access Medicare (NY)',
      'Accountable Health Plan of Ohio',
      'Advanced Health',
      'AdvantageMD',
      'Advantica',
      'Advent Health',
    ],
    address: {
      streetAddress: '115 Broadway',
      city: 'New York',
      state: 'NY',
      postalCode: '10006',
      latitude: 40.70837121296296,
      longitude: -74.01337919675926,
    },
    inNetwork: false,
    newPatientAppointments: true,
    highlyRecommended: true,
    excellentWaitTime: false,
    examsAvailable: ['Breast Cancer', 'Endometrial Cancer', 'Ovarian Cancer'],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711112400,
            endTime: 1711116000,
          },
          {
            startTime: 1711116000,
            endTime: 1711119600,
          },
          {
            startTime: 1711126800,
            endTime: 1711130400,
          },
          {
            startTime: 1711130400,
            endTime: 1711134000,
          },
        ],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711198800,
            endTime: 1711202400,
          },
          {
            startTime: 1711202400,
            endTime: 1711206000,
          },
          {
            startTime: 1711209600,
            endTime: 1711213200,
          },
          {
            startTime: 1711216800,
            endTime: 1711220400,
          },
        ],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711281600,
            endTime: 1711285200,
          },
          {
            startTime: 1711288800,
            endTime: 1711292400,
          },
          {
            startTime: 1711292400,
            endTime: 1711296000,
          },
          {
            startTime: 1711296000,
            endTime: 1711299600,
          },
          {
            startTime: 1711299600,
            endTime: 1711303200,
          },
          {
            startTime: 1711306800,
            endTime: 1711310400,
          },
        ],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711368000,
            endTime: 1711371600,
          },
          {
            startTime: 1711371600,
            endTime: 1711375200,
          },
          {
            startTime: 1711378800,
            endTime: 1711382400,
          },
          {
            startTime: 1711382400,
            endTime: 1711386000,
          },
          {
            startTime: 1711386000,
            endTime: 1711389600,
          },
          {
            startTime: 1711389600,
            endTime: 1711393200,
          },
        ],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711540800,
            endTime: 1711544400,
          },
          {
            startTime: 1711544400,
            endTime: 1711548000,
          },
          {
            startTime: 1711558800,
            endTime: 1711562400,
          },
          {
            startTime: 1711566000,
            endTime: 1711569600,
          },
        ],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711627200,
            endTime: 1711630800,
          },
          {
            startTime: 1711630800,
            endTime: 1711634400,
          },
          {
            startTime: 1711634400,
            endTime: 1711638000,
          },
          {
            startTime: 1711638000,
            endTime: 1711641600,
          },
          {
            startTime: 1711641600,
            endTime: 1711645200,
          },
          {
            startTime: 1711645200,
            endTime: 1711648800,
          },
        ],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711713600,
            endTime: 1711717200,
          },
          {
            startTime: 1711717200,
            endTime: 1711720800,
          },
          {
            startTime: 1711728000,
            endTime: 1711731600,
          },
          {
            startTime: 1711738800,
            endTime: 1711742400,
          },
        ],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711800000,
            endTime: 1711803600,
          },
          {
            startTime: 1711810800,
            endTime: 1711814400,
          },
          {
            startTime: 1711814400,
            endTime: 1711818000,
          },
          {
            startTime: 1711818000,
            endTime: 1711821600,
          },
        ],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711886400,
            endTime: 1711890000,
          },
          {
            startTime: 1711911600,
            endTime: 1711915200,
          },
        ],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712059200,
            endTime: 1712062800,
          },
          {
            startTime: 1712062800,
            endTime: 1712066400,
          },
          {
            startTime: 1712066400,
            endTime: 1712070000,
          },
          {
            startTime: 1712070000,
            endTime: 1712073600,
          },
          {
            startTime: 1712073600,
            endTime: 1712077200,
          },
          {
            startTime: 1712077200,
            endTime: 1712080800,
          },
        ],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712145600,
            endTime: 1712149200,
          },
          {
            startTime: 1712149200,
            endTime: 1712152800,
          },
          {
            startTime: 1712152800,
            endTime: 1712156400,
          },
          {
            startTime: 1712160000,
            endTime: 1712163600,
          },
          {
            startTime: 1712163600,
            endTime: 1712167200,
          },
          {
            startTime: 1712170800,
            endTime: 1712174400,
          },
        ],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712235600,
            endTime: 1712239200,
          },
          {
            startTime: 1712239200,
            endTime: 1712242800,
          },
          {
            startTime: 1712242800,
            endTime: 1712246400,
          },
          {
            startTime: 1712246400,
            endTime: 1712250000,
          },
          {
            startTime: 1712250000,
            endTime: 1712253600,
          },
          {
            startTime: 1712253600,
            endTime: 1712257200,
          },
        ],
      },
    ],
    schedulePreference: ['Morning', 'Afternoon'],
    gender: 'female',
    visitType: {
      value: 'video',
      label: 'Video visits only',
    },
    languageSpoken: ['English', 'german'],
  },
  {
    id: 6,
    photo: '/assets/images/doctors/doctor6.jpg',
    name: 'Dr. Robert Brown',
    specialty: 'Gastroenterologist',
    sponsored: false,
    rating: 5.0,
    reviews: 512,
    loyalPatients: 16,
    distance: 0.9,
    insurance: ['Blue Cross Blue Shield (BCBS)', 'Aetna'],
    address: {
      streetAddress: '418 Lafayette Street',
      city: 'New York',
      state: 'NY',
      postalCode: '10003',
      latitude: 40.731452988737864,
      longitude: -73.98865823957928,
    },
    inNetwork: true,
    newPatientAppointments: true,
    highlyRecommended: true,
    excellentWaitTime: true,
    examsAvailable: ['Hernia'],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711101600,
            endTime: 1711105200,
          },
          {
            startTime: 1711105200,
            endTime: 1711108800,
          },
          {
            startTime: 1711108800,
            endTime: 1711112400,
          },
          {
            startTime: 1711119600,
            endTime: 1711123200,
          },
          {
            startTime: 1711126800,
            endTime: 1711130400,
          },
          {
            startTime: 1711134000,
            endTime: 1711137600,
          },
        ],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711188000,
            endTime: 1711191600,
          },
          {
            startTime: 1711191600,
            endTime: 1711195200,
          },
          {
            startTime: 1711202400,
            endTime: 1711206000,
          },
          {
            startTime: 1711206000,
            endTime: 1711209600,
          },
          {
            startTime: 1711213200,
            endTime: 1711216800,
          },
          {
            startTime: 1711216800,
            endTime: 1711220400,
          },
        ],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711270800,
            endTime: 1711274400,
          },
          {
            startTime: 1711274400,
            endTime: 1711278000,
          },
          {
            startTime: 1711278000,
            endTime: 1711281600,
          },
          {
            startTime: 1711281600,
            endTime: 1711285200,
          },
          {
            startTime: 1711285200,
            endTime: 1711288800,
          },
          {
            startTime: 1711288800,
            endTime: 1711292400,
          },
        ],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711357200,
            endTime: 1711360800,
          },
          {
            startTime: 1711360800,
            endTime: 1711364400,
          },
          {
            startTime: 1711364400,
            endTime: 1711368000,
          },
          {
            startTime: 1711368000,
            endTime: 1711371600,
          },
          {
            startTime: 1711371600,
            endTime: 1711375200,
          },
          {
            startTime: 1711375200,
            endTime: 1711378800,
          },
        ],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711530000,
            endTime: 1711533600,
          },
          {
            startTime: 1711533600,
            endTime: 1711537200,
          },
          {
            startTime: 1711537200,
            endTime: 1711540800,
          },
          {
            startTime: 1711540800,
            endTime: 1711544400,
          },
          {
            startTime: 1711544400,
            endTime: 1711548000,
          },
          {
            startTime: 1711548000,
            endTime: 1711551600,
          },
        ],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711616400,
            endTime: 1711620000,
          },
          {
            startTime: 1711620000,
            endTime: 1711623600,
          },
          {
            startTime: 1711623600,
            endTime: 1711627200,
          },
          {
            startTime: 1711627200,
            endTime: 1711630800,
          },
          {
            startTime: 1711630800,
            endTime: 1711634400,
          },
          {
            startTime: 1711634400,
            endTime: 1711638000,
          },
        ],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711710000,
            endTime: 1711713600,
          },
          {
            startTime: 1711724400,
            endTime: 1711728000,
          },
          {
            startTime: 1711728000,
            endTime: 1711731600,
          },
          {
            startTime: 1711742400,
            endTime: 1711746000,
          },
        ],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711796400,
            endTime: 1711800000,
          },
          {
            startTime: 1711810800,
            endTime: 1711814400,
          },
          {
            startTime: 1711821600,
            endTime: 1711825200,
          },
          {
            startTime: 1711836000,
            endTime: 1711839600,
          },
        ],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711879200,
            endTime: 1711882800,
          },
          {
            startTime: 1711897200,
            endTime: 1711900800,
          },
          {
            startTime: 1711908000,
            endTime: 1711911600,
          },
          {
            startTime: 1711918800,
            endTime: 1711922400,
          },
        ],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711962000,
            endTime: 1711965600,
          },
          {
            startTime: 1711965600,
            endTime: 1711969200,
          },
          {
            startTime: 1711969200,
            endTime: 1711972800,
          },
          {
            startTime: 1711972800,
            endTime: 1711976400,
          },
          {
            startTime: 1711976400,
            endTime: 1711980000,
          },
          {
            startTime: 1711980000,
            endTime: 1711983600,
          },
        ],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712221200,
            endTime: 1712224800,
          },
          {
            startTime: 1712224800,
            endTime: 1712228400,
          },
          {
            startTime: 1712228400,
            endTime: 1712232000,
          },
          {
            startTime: 1712232000,
            endTime: 1712235600,
          },
          {
            startTime: 1712235600,
            endTime: 1712239200,
          },
          {
            startTime: 1712239200,
            endTime: 1712242800,
          },
        ],
      },
    ],
    schedulePreference: ['Evening', 'Afternoon', 'Morning', 'Early Morning'],
    gender: 'male',
    visitType: {
      value: 'inPerson',
      label: 'In-person visits only',
    },
    languageSpoken: ['English'],
  },
  {
    id: 7,
    photo: '/assets/images/doctors/doctor11.jpg',
    name: 'Dr. Amanda Lee',
    specialty: 'Nephrologist',
    sponsored: false,
    rating: 4.7,
    reviews: 278,
    loyalPatients: 84,
    distance: 2.3,
    insurance: [
      'UnitedHealthcare',
      'Cigna',
      'Empire Blue Cross Blue Shield (Health)',
    ],
    address: {
      streetAddress: '550 Prospect Place',
      city: 'Brooklyn',
      state: 'NY',
      postalCode: '11238',
      latitude: 40.68105327338678,
      longitude: -73.96359388879546,
    },
    inNetwork: true,
    newPatientAppointments: true,
    highlyRecommended: true,
    excellentWaitTime: false,
    examsAvailable: ['Resuscitation'],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711184400,
            endTime: 1711188000,
          },
          {
            startTime: 1711188000,
            endTime: 1711191600,
          },
          {
            startTime: 1711198800,
            endTime: 1711202400,
          },
          {
            startTime: 1711202400,
            endTime: 1711206000,
          },
          {
            startTime: 1711224000,
            endTime: 1711227600,
          },
          {
            startTime: 1711231200,
            endTime: 1711234800,
          },
        ],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711270800,
            endTime: 1711274400,
          },
          {
            startTime: 1711274400,
            endTime: 1711278000,
          },
          {
            startTime: 1711278000,
            endTime: 1711281600,
          },
          {
            startTime: 1711281600,
            endTime: 1711285200,
          },
          {
            startTime: 1711285200,
            endTime: 1711288800,
          },
          {
            startTime: 1711288800,
            endTime: 1711292400,
          },
        ],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711357200,
            endTime: 1711360800,
          },
          {
            startTime: 1711360800,
            endTime: 1711364400,
          },
          {
            startTime: 1711364400,
            endTime: 1711368000,
          },
          {
            startTime: 1711368000,
            endTime: 1711371600,
          },
          {
            startTime: 1711371600,
            endTime: 1711375200,
          },
          {
            startTime: 1711375200,
            endTime: 1711378800,
          },
        ],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711450800,
            endTime: 1711454400,
          },
          {
            startTime: 1711461600,
            endTime: 1711465200,
          },
          {
            startTime: 1711483200,
            endTime: 1711486800,
          },
        ],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711616400,
            endTime: 1711620000,
          },
          {
            startTime: 1711620000,
            endTime: 1711623600,
          },
          {
            startTime: 1711623600,
            endTime: 1711627200,
          },
          {
            startTime: 1711630800,
            endTime: 1711634400,
          },
          {
            startTime: 1711634400,
            endTime: 1711638000,
          },
          {
            startTime: 1711638000,
            endTime: 1711641600,
          },
        ],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711702800,
            endTime: 1711706400,
          },
          {
            startTime: 1711717200,
            endTime: 1711720800,
          },
          {
            startTime: 1711742400,
            endTime: 1711746000,
          },
        ],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711792800,
            endTime: 1711796400,
          },
          {
            startTime: 1711803600,
            endTime: 1711807200,
          },
          {
            startTime: 1711828800,
            endTime: 1711832400,
          },
        ],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711879200,
            endTime: 1711882800,
          },
          {
            startTime: 1711893600,
            endTime: 1711897200,
          },
          {
            startTime: 1711926000,
            endTime: 1711929600,
          },
        ],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711965600,
            endTime: 1711969200,
          },
          {
            startTime: 1711969200,
            endTime: 1711972800,
          },
          {
            startTime: 1711976400,
            endTime: 1711980000,
          },
          {
            startTime: 1711980000,
            endTime: 1711983600,
          },
          {
            startTime: 1712001600,
            endTime: 1712005200,
          },
          {
            startTime: 1712005200,
            endTime: 1712008800,
          },
        ],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712048400,
            endTime: 1712052000,
          },
          {
            startTime: 1712052000,
            endTime: 1712055600,
          },
          {
            startTime: 1712055600,
            endTime: 1712059200,
          },
          {
            startTime: 1712059200,
            endTime: 1712062800,
          },
          {
            startTime: 1712062800,
            endTime: 1712066400,
          },
          {
            startTime: 1712066400,
            endTime: 1712070000,
          },
        ],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1712142000,
            endTime: 1712145600,
          },
          {
            startTime: 1712156400,
            endTime: 1712160000,
          },
          {
            startTime: 1712174400,
            endTime: 1712178000,
          },
        ],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
    ],
    schedulePreference: ['Morning', 'Early Morning', 'Evening'],
    gender: 'female',
    visitType: {
      value: 'video',
      label: 'Video visits only',
    },
    languageSpoken: ['English'],
  },
  {
    id: 8,
    photo: '/assets/images/doctors/doctor12.jpg',
    name: 'Dr. Michael Davis',
    specialty: 'Oncologist',
    sponsored: true,
    rating: 5.0,
    reviews: 416,
    loyalPatients: 13,
    distance: 1.1,
    insurance: [
      'EmblemHealth (formerly known as GHI)',
      'HealthFirst (NY)',
      'AARP',
      'ACE',
    ],
    address: {
      streetAddress: '222 Broadway',
      city: 'New York',
      state: 'NY',
      postalCode: '10038',
      latitude: 40.709123714583335,
      longitude: -74.00439778475877,
    },
    inNetwork: false,
    newPatientAppointments: true,
    highlyRecommended: true,
    excellentWaitTime: true,
    examsAvailable: [
      'Breast Cancer',
      'Colorectral Cancer',
      'Leukemia',
      'Lung Cancer',
      'Lymphoma',
      'Metastatic Brain Tumor',
    ],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711098000,
            endTime: 1711101600,
          },
          {
            startTime: 1711101600,
            endTime: 1711105200,
          },
          {
            startTime: 1711105200,
            endTime: 1711108800,
          },
          {
            startTime: 1711108800,
            endTime: 1711112400,
          },
          {
            startTime: 1711112400,
            endTime: 1711116000,
          },
          {
            startTime: 1711116000,
            endTime: 1711119600,
          },
        ],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711188000,
            endTime: 1711191600,
          },
          {
            startTime: 1711206000,
            endTime: 1711209600,
          },
          {
            startTime: 1711231200,
            endTime: 1711234800,
          },
        ],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711270800,
            endTime: 1711274400,
          },
          {
            startTime: 1711274400,
            endTime: 1711278000,
          },
          {
            startTime: 1711281600,
            endTime: 1711285200,
          },
          {
            startTime: 1711285200,
            endTime: 1711288800,
          },
          {
            startTime: 1711310400,
            endTime: 1711314000,
          },
          {
            startTime: 1711317600,
            endTime: 1711321200,
          },
        ],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711357200,
            endTime: 1711360800,
          },
          {
            startTime: 1711378800,
            endTime: 1711382400,
          },
          {
            startTime: 1711396800,
            endTime: 1711400400,
          },
        ],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711537200,
            endTime: 1711540800,
          },
          {
            startTime: 1711544400,
            endTime: 1711548000,
          },
          {
            startTime: 1711576800,
            endTime: 1711580400,
          },
        ],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711616400,
            endTime: 1711620000,
          },
          {
            startTime: 1711620000,
            endTime: 1711623600,
          },
          {
            startTime: 1711623600,
            endTime: 1711627200,
          },
          {
            startTime: 1711627200,
            endTime: 1711630800,
          },
          {
            startTime: 1711630800,
            endTime: 1711634400,
          },
          {
            startTime: 1711634400,
            endTime: 1711638000,
          },
        ],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711702800,
            endTime: 1711706400,
          },
          {
            startTime: 1711706400,
            endTime: 1711710000,
          },
          {
            startTime: 1711710000,
            endTime: 1711713600,
          },
          {
            startTime: 1711713600,
            endTime: 1711717200,
          },
          {
            startTime: 1711717200,
            endTime: 1711720800,
          },
          {
            startTime: 1711720800,
            endTime: 1711724400,
          },
        ],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711875600,
            endTime: 1711879200,
          },
          {
            startTime: 1711879200,
            endTime: 1711882800,
          },
          {
            startTime: 1711882800,
            endTime: 1711886400,
          },
          {
            startTime: 1711886400,
            endTime: 1711890000,
          },
          {
            startTime: 1711890000,
            endTime: 1711893600,
          },
          {
            startTime: 1711893600,
            endTime: 1711897200,
          },
        ],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711962000,
            endTime: 1711965600,
          },
          {
            startTime: 1711965600,
            endTime: 1711969200,
          },
          {
            startTime: 1711969200,
            endTime: 1711972800,
          },
          {
            startTime: 1711976400,
            endTime: 1711980000,
          },
          {
            startTime: 1711980000,
            endTime: 1711983600,
          },
          {
            startTime: 1711983600,
            endTime: 1711987200,
          },
        ],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712048400,
            endTime: 1712052000,
          },
          {
            startTime: 1712052000,
            endTime: 1712055600,
          },
          {
            startTime: 1712055600,
            endTime: 1712059200,
          },
          {
            startTime: 1712059200,
            endTime: 1712062800,
          },
          {
            startTime: 1712062800,
            endTime: 1712066400,
          },
          {
            startTime: 1712070000,
            endTime: 1712073600,
          },
        ],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712134800,
            endTime: 1712138400,
          },
          {
            startTime: 1712142000,
            endTime: 1712145600,
          },
          {
            startTime: 1712152800,
            endTime: 1712156400,
          },
          {
            startTime: 1712156400,
            endTime: 1712160000,
          },
          {
            startTime: 1712178000,
            endTime: 1712181600,
          },
          {
            startTime: 1712181600,
            endTime: 1712185200,
          },
        ],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712221200,
            endTime: 1712224800,
          },
          {
            startTime: 1712228400,
            endTime: 1712232000,
          },
          {
            startTime: 1712235600,
            endTime: 1712239200,
          },
          {
            startTime: 1712239200,
            endTime: 1712242800,
          },
          {
            startTime: 1712264400,
            endTime: 1712268000,
          },
          {
            startTime: 1712268000,
            endTime: 1712271600,
          },
        ],
      },
    ],
    schedulePreference: ['Morning', 'Evening', 'Early Morning'],
    gender: 'male',
    visitType: {
      value: 'video',
      label: 'Video visits only',
    },
    languageSpoken: ['English', 'portuguese'],
  },
  {
    id: 9,
    photo: '/assets/images/doctors/doctor13.jpg',
    name: 'Dr. Jessica Thompson',
    specialty: 'Rheumatologist',
    sponsored: false,
    rating: 4.8,
    reviews: 362,
    loyalPatients: 112,
    distance: 0.9,
    insurance: [
      'AIG',
      'APWU',
      'ATRIO Health Plans',
      'AVMA Life',
      'Absolute Total Care',
    ],
    address: {
      streetAddress: '99 Park Avenue',
      city: 'New York',
      state: 'NY',
      postalCode: '10016',
      latitude: 40.74551254968207,
      longitude: -73.97969346333193,
    },
    inNetwork: true,
    newPatientAppointments: false,
    highlyRecommended: true,
    excellentWaitTime: false,
    examsAvailable: ['Osteoporosis'],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711098000,
            endTime: 1711101600,
          },
          {
            startTime: 1711101600,
            endTime: 1711105200,
          },
          {
            startTime: 1711105200,
            endTime: 1711108800,
          },
        ],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711184400,
            endTime: 1711188000,
          },
          {
            startTime: 1711188000,
            endTime: 1711191600,
          },
          {
            startTime: 1711191600,
            endTime: 1711195200,
          },
        ],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 1,
        availableSpots: [
          {
            startTime: 1711278000,
            endTime: 1711281600,
          },
        ],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711357200,
            endTime: 1711360800,
          },
          {
            startTime: 1711364400,
            endTime: 1711368000,
          },
        ],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711443600,
            endTime: 1711447200,
          },
          {
            startTime: 1711447200,
            endTime: 1711450800,
          },
          {
            startTime: 1711450800,
            endTime: 1711454400,
          },
        ],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711533600,
            endTime: 1711537200,
          },
          {
            startTime: 1711537200,
            endTime: 1711540800,
          },
        ],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711616400,
            endTime: 1711620000,
          },
          {
            startTime: 1711623600,
            endTime: 1711627200,
          },
        ],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711702800,
            endTime: 1711706400,
          },
          {
            startTime: 1711706400,
            endTime: 1711710000,
          },
          {
            startTime: 1711710000,
            endTime: 1711713600,
          },
        ],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711789200,
            endTime: 1711792800,
          },
          {
            startTime: 1711792800,
            endTime: 1711796400,
          },
          {
            startTime: 1711796400,
            endTime: 1711800000,
          },
        ],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711962000,
            endTime: 1711965600,
          },
          {
            startTime: 1711965600,
            endTime: 1711969200,
          },
          {
            startTime: 1711969200,
            endTime: 1711972800,
          },
        ],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 1,
        availableSpots: [
          {
            startTime: 1712055600,
            endTime: 1712059200,
          },
        ],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 1,
        availableSpots: [
          {
            startTime: 1712142000,
            endTime: 1712145600,
          },
        ],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 1,
        availableSpots: [
          {
            startTime: 1712228400,
            endTime: 1712232000,
          },
        ],
      },
    ],
    schedulePreference: ['Early Morning'],
    gender: 'female',
    visitType: {
      value: 'inPerson',
      label: 'In-person visits only',
    },
    languageSpoken: ['English'],
  },
  {
    id: 10,
    photo: '/assets/images/doctors/doctor14.jpg',
    name: 'Dr. David Kim',
    specialty: 'Pulmonologist',
    sponsored: true,
    rating: 4.6,
    reviews: 296,
    loyalPatients: 94,
    distance: 1.6,
    insurance: [
      'Access Medicare (NY)',
      'Accountable Health Plan of Ohio',
      'Advanced Health',
      'AdvantageMD',
      'Advantica',
      'Advent Health',
    ],
    address: {
      streetAddress: '150 East 58th Street',
      city: 'New York',
      state: 'NY',
      postalCode: '10155',
      latitude: 40.7598782,
      longitude: -73.9650737,
    },
    inNetwork: false,
    newPatientAppointments: true,
    highlyRecommended: false,
    excellentWaitTime: true,
    examsAvailable: [
      'Asthma',
      'Bronchiectasis',
      'Chronic Obstructive Pulmonary Disease',
      'Emphysema',
      'COVID-19',
    ],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711098000,
            endTime: 1711101600,
          },
          {
            startTime: 1711101600,
            endTime: 1711105200,
          },
          {
            startTime: 1711105200,
            endTime: 1711108800,
          },
          {
            startTime: 1711108800,
            endTime: 1711112400,
          },
          {
            startTime: 1711112400,
            endTime: 1711116000,
          },
          {
            startTime: 1711116000,
            endTime: 1711119600,
          },
        ],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711184400,
            endTime: 1711188000,
          },
          {
            startTime: 1711188000,
            endTime: 1711191600,
          },
          {
            startTime: 1711191600,
            endTime: 1711195200,
          },
          {
            startTime: 1711195200,
            endTime: 1711198800,
          },
          {
            startTime: 1711198800,
            endTime: 1711202400,
          },
          {
            startTime: 1711202400,
            endTime: 1711206000,
          },
        ],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711270800,
            endTime: 1711274400,
          },
          {
            startTime: 1711274400,
            endTime: 1711278000,
          },
          {
            startTime: 1711278000,
            endTime: 1711281600,
          },
          {
            startTime: 1711281600,
            endTime: 1711285200,
          },
          {
            startTime: 1711288800,
            endTime: 1711292400,
          },
          {
            startTime: 1711292400,
            endTime: 1711296000,
          },
        ],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711364400,
            endTime: 1711368000,
          },
          {
            startTime: 1711368000,
            endTime: 1711371600,
          },
          {
            startTime: 1711382400,
            endTime: 1711386000,
          },
          {
            startTime: 1711407600,
            endTime: 1711411200,
          },
        ],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711443600,
            endTime: 1711447200,
          },
          {
            startTime: 1711447200,
            endTime: 1711450800,
          },
          {
            startTime: 1711450800,
            endTime: 1711454400,
          },
          {
            startTime: 1711454400,
            endTime: 1711458000,
          },
          {
            startTime: 1711458000,
            endTime: 1711461600,
          },
          {
            startTime: 1711465200,
            endTime: 1711468800,
          },
        ],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711537200,
            endTime: 1711540800,
          },
          {
            startTime: 1711548000,
            endTime: 1711551600,
          },
          {
            startTime: 1711555200,
            endTime: 1711558800,
          },
          {
            startTime: 1711569600,
            endTime: 1711573200,
          },
        ],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711616400,
            endTime: 1711620000,
          },
          {
            startTime: 1711623600,
            endTime: 1711627200,
          },
          {
            startTime: 1711627200,
            endTime: 1711630800,
          },
          {
            startTime: 1711638000,
            endTime: 1711641600,
          },
          {
            startTime: 1711641600,
            endTime: 1711645200,
          },
          {
            startTime: 1711645200,
            endTime: 1711648800,
          },
        ],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711702800,
            endTime: 1711706400,
          },
          {
            startTime: 1711706400,
            endTime: 1711710000,
          },
          {
            startTime: 1711710000,
            endTime: 1711713600,
          },
          {
            startTime: 1711713600,
            endTime: 1711717200,
          },
          {
            startTime: 1711717200,
            endTime: 1711720800,
          },
          {
            startTime: 1711720800,
            endTime: 1711724400,
          },
        ],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711789200,
            endTime: 1711792800,
          },
          {
            startTime: 1711792800,
            endTime: 1711796400,
          },
          {
            startTime: 1711796400,
            endTime: 1711800000,
          },
          {
            startTime: 1711800000,
            endTime: 1711803600,
          },
          {
            startTime: 1711803600,
            endTime: 1711807200,
          },
          {
            startTime: 1711807200,
            endTime: 1711810800,
          },
        ],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711875600,
            endTime: 1711879200,
          },
          {
            startTime: 1711879200,
            endTime: 1711882800,
          },
          {
            startTime: 1711882800,
            endTime: 1711886400,
          },
          {
            startTime: 1711890000,
            endTime: 1711893600,
          },
          {
            startTime: 1711893600,
            endTime: 1711897200,
          },
          {
            startTime: 1711897200,
            endTime: 1711900800,
          },
        ],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1712055600,
            endTime: 1712059200,
          },
          {
            startTime: 1712070000,
            endTime: 1712073600,
          },
          {
            startTime: 1712080800,
            endTime: 1712084400,
          },
          {
            startTime: 1712088000,
            endTime: 1712091600,
          },
        ],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712134800,
            endTime: 1712138400,
          },
          {
            startTime: 1712138400,
            endTime: 1712142000,
          },
          {
            startTime: 1712152800,
            endTime: 1712156400,
          },
          {
            startTime: 1712156400,
            endTime: 1712160000,
          },
          {
            startTime: 1712160000,
            endTime: 1712163600,
          },
          {
            startTime: 1712163600,
            endTime: 1712167200,
          },
        ],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712221200,
            endTime: 1712224800,
          },
          {
            startTime: 1712224800,
            endTime: 1712228400,
          },
          {
            startTime: 1712239200,
            endTime: 1712242800,
          },
          {
            startTime: 1712242800,
            endTime: 1712246400,
          },
          {
            startTime: 1712246400,
            endTime: 1712250000,
          },
          {
            startTime: 1712257200,
            endTime: 1712260800,
          },
        ],
      },
    ],
    schedulePreference: ['Early Morning', 'Afternoon', 'Evening', 'Morning'],
    gender: 'male',
    visitType: {
      value: 'inPersonAndVideo',
      label: 'In-person and video visits',
    },
    languageSpoken: ['English'],
  },
  {
    id: 11,
    photo: '/assets/images/doctors/doctor15.jpg',
    name: 'Dr. Sarah Wilson',
    specialty: 'Infectious Disease Specialist',
    sponsored: false,
    rating: 4.7,
    reviews: 332,
    loyalPatients: 104,
    distance: 2.2,
    insurance: [
      'Access Medicare (NY)',
      'Accountable Health Plan of Ohio',
      'Advanced Health',
      'AdvantageMD',
      'Advantica',
      'Advent Health',
    ],
    address: {
      streetAddress: '77 Park Avenue',
      city: 'New York',
      state: 'NY',
      postalCode: '10016',
      latitude: 40.74551254968207,
      longitude: -73.97969346333193,
    },
    inNetwork: true,
    newPatientAppointments: true,
    highlyRecommended: true,
    excellentWaitTime: false,
    examsAvailable: ['Hepatitis', 'COVID-19'],
    businessHours: '8am-5pm',
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711098000,
            endTime: 1711101600,
          },
          {
            startTime: 1711101600,
            endTime: 1711105200,
          },
          {
            startTime: 1711105200,
            endTime: 1711108800,
          },
          {
            startTime: 1711108800,
            endTime: 1711112400,
          },
          {
            startTime: 1711112400,
            endTime: 1711116000,
          },
          {
            startTime: 1711116000,
            endTime: 1711119600,
          },
        ],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711278000,
            endTime: 1711281600,
          },
          {
            startTime: 1711281600,
            endTime: 1711285200,
          },
          {
            startTime: 1711299600,
            endTime: 1711303200,
          },
          {
            startTime: 1711317600,
            endTime: 1711321200,
          },
        ],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711357200,
            endTime: 1711360800,
          },
          {
            startTime: 1711360800,
            endTime: 1711364400,
          },
          {
            startTime: 1711364400,
            endTime: 1711368000,
          },
          {
            startTime: 1711368000,
            endTime: 1711371600,
          },
          {
            startTime: 1711371600,
            endTime: 1711375200,
          },
          {
            startTime: 1711375200,
            endTime: 1711378800,
          },
        ],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711443600,
            endTime: 1711447200,
          },
          {
            startTime: 1711447200,
            endTime: 1711450800,
          },
          {
            startTime: 1711454400,
            endTime: 1711458000,
          },
          {
            startTime: 1711465200,
            endTime: 1711468800,
          },
          {
            startTime: 1711468800,
            endTime: 1711472400,
          },
          {
            startTime: 1711476000,
            endTime: 1711479600,
          },
        ],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711530000,
            endTime: 1711533600,
          },
          {
            startTime: 1711533600,
            endTime: 1711537200,
          },
          {
            startTime: 1711537200,
            endTime: 1711540800,
          },
          {
            startTime: 1711540800,
            endTime: 1711544400,
          },
          {
            startTime: 1711544400,
            endTime: 1711548000,
          },
          {
            startTime: 1711548000,
            endTime: 1711551600,
          },
        ],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711616400,
            endTime: 1711620000,
          },
          {
            startTime: 1711620000,
            endTime: 1711623600,
          },
          {
            startTime: 1711623600,
            endTime: 1711627200,
          },
          {
            startTime: 1711627200,
            endTime: 1711630800,
          },
          {
            startTime: 1711630800,
            endTime: 1711634400,
          },
          {
            startTime: 1711638000,
            endTime: 1711641600,
          },
        ],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711702800,
            endTime: 1711706400,
          },
          {
            startTime: 1711706400,
            endTime: 1711710000,
          },
          {
            startTime: 1711710000,
            endTime: 1711713600,
          },
          {
            startTime: 1711713600,
            endTime: 1711717200,
          },
          {
            startTime: 1711717200,
            endTime: 1711720800,
          },
          {
            startTime: 1711720800,
            endTime: 1711724400,
          },
        ],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711875600,
            endTime: 1711879200,
          },
          {
            startTime: 1711879200,
            endTime: 1711882800,
          },
          {
            startTime: 1711882800,
            endTime: 1711886400,
          },
          {
            startTime: 1711886400,
            endTime: 1711890000,
          },
          {
            startTime: 1711890000,
            endTime: 1711893600,
          },
          {
            startTime: 1711893600,
            endTime: 1711897200,
          },
        ],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711962000,
            endTime: 1711965600,
          },
          {
            startTime: 1711965600,
            endTime: 1711969200,
          },
          {
            startTime: 1711976400,
            endTime: 1711980000,
          },
          {
            startTime: 1711983600,
            endTime: 1711987200,
          },
          {
            startTime: 1711987200,
            endTime: 1711990800,
          },
          {
            startTime: 1711998000,
            endTime: 1712001600,
          },
        ],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712048400,
            endTime: 1712052000,
          },
          {
            startTime: 1712052000,
            endTime: 1712055600,
          },
          {
            startTime: 1712055600,
            endTime: 1712059200,
          },
          {
            startTime: 1712059200,
            endTime: 1712062800,
          },
          {
            startTime: 1712062800,
            endTime: 1712066400,
          },
          {
            startTime: 1712066400,
            endTime: 1712070000,
          },
        ],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712224800,
            endTime: 1712228400,
          },
          {
            startTime: 1712228400,
            endTime: 1712232000,
          },
          {
            startTime: 1712232000,
            endTime: 1712235600,
          },
          {
            startTime: 1712242800,
            endTime: 1712246400,
          },
          {
            startTime: 1712246400,
            endTime: 1712250000,
          },
          {
            startTime: 1712257200,
            endTime: 1712260800,
          },
        ],
      },
    ],
    schedulePreference: ['Early Morning', 'Morning', 'Evening', 'Afternoon'],
    gender: 'female',
    visitType: {
      value: 'inPersonAndVideo',
      label: 'In-person and video visits',
    },
    languageSpoken: ['English', 'vietnamese'],
  },
  {
    id: 12,
    photo: '/assets/images/doctors/doctor16.jpg',
    name: 'Dr. Robert Johnson',
    specialty: 'Plastic Surgeon',
    sponsored: true,
    rating: 4.8,
    reviews: 402,
    loyalPatients: 132,
    distance: 1.4,
    insurance: ['Blue Cross Blue Shield (BCBS)', 'Aetna'],
    address: {
      streetAddress: '320 Park Avenue',
      city: 'New York',
      state: 'NY',
      postalCode: '10022',
      latitude: 40.75833153925082,
      longitude: -73.96798305673181,
    },
    inNetwork: false,
    newPatientAppointments: true,
    highlyRecommended: true,
    excellentWaitTime: true,
    examsAvailable: ['Bariatric Surgery'],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711274400,
            endTime: 1711278000,
          },
          {
            startTime: 1711292400,
            endTime: 1711296000,
          },
          {
            startTime: 1711306800,
            endTime: 1711310400,
          },
          {
            startTime: 1711317600,
            endTime: 1711321200,
          },
        ],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711360800,
            endTime: 1711364400,
          },
          {
            startTime: 1711371600,
            endTime: 1711375200,
          },
          {
            startTime: 1711393200,
            endTime: 1711396800,
          },
          {
            startTime: 1711400400,
            endTime: 1711404000,
          },
        ],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711443600,
            endTime: 1711447200,
          },
          {
            startTime: 1711447200,
            endTime: 1711450800,
          },
          {
            startTime: 1711450800,
            endTime: 1711454400,
          },
          {
            startTime: 1711454400,
            endTime: 1711458000,
          },
          {
            startTime: 1711458000,
            endTime: 1711461600,
          },
          {
            startTime: 1711461600,
            endTime: 1711465200,
          },
        ],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711616400,
            endTime: 1711620000,
          },
          {
            startTime: 1711620000,
            endTime: 1711623600,
          },
          {
            startTime: 1711623600,
            endTime: 1711627200,
          },
          {
            startTime: 1711627200,
            endTime: 1711630800,
          },
          {
            startTime: 1711630800,
            endTime: 1711634400,
          },
          {
            startTime: 1711634400,
            endTime: 1711638000,
          },
        ],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711789200,
            endTime: 1711792800,
          },
          {
            startTime: 1711792800,
            endTime: 1711796400,
          },
          {
            startTime: 1711796400,
            endTime: 1711800000,
          },
          {
            startTime: 1711800000,
            endTime: 1711803600,
          },
          {
            startTime: 1711807200,
            endTime: 1711810800,
          },
          {
            startTime: 1711810800,
            endTime: 1711814400,
          },
        ],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711962000,
            endTime: 1711965600,
          },
          {
            startTime: 1711965600,
            endTime: 1711969200,
          },
          {
            startTime: 1711969200,
            endTime: 1711972800,
          },
          {
            startTime: 1711972800,
            endTime: 1711976400,
          },
          {
            startTime: 1711976400,
            endTime: 1711980000,
          },
          {
            startTime: 1711983600,
            endTime: 1711987200,
          },
        ],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1712048400,
            endTime: 1712052000,
          },
          {
            startTime: 1712066400,
            endTime: 1712070000,
          },
          {
            startTime: 1712077200,
            endTime: 1712080800,
          },
          {
            startTime: 1712095200,
            endTime: 1712098800,
          },
        ],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712134800,
            endTime: 1712138400,
          },
          {
            startTime: 1712138400,
            endTime: 1712142000,
          },
          {
            startTime: 1712142000,
            endTime: 1712145600,
          },
          {
            startTime: 1712145600,
            endTime: 1712149200,
          },
          {
            startTime: 1712149200,
            endTime: 1712152800,
          },
          {
            startTime: 1712152800,
            endTime: 1712156400,
          },
        ],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712221200,
            endTime: 1712224800,
          },
          {
            startTime: 1712228400,
            endTime: 1712232000,
          },
          {
            startTime: 1712239200,
            endTime: 1712242800,
          },
          {
            startTime: 1712242800,
            endTime: 1712246400,
          },
          {
            startTime: 1712250000,
            endTime: 1712253600,
          },
          {
            startTime: 1712253600,
            endTime: 1712257200,
          },
        ],
      },
    ],
    schedulePreference: ['Evening', 'Early Morning', 'Afternoon', 'Morning'],
    gender: 'male',
    visitType: {
      value: 'video',
      label: 'Video visits only',
    },
    languageSpoken: ['English', 'italian'],
  },
  {
    id: 13,
    photo: '/assets/images/doctors/doctor18.jpg',
    name: 'Dr. Michael Brown',
    specialty: 'Allergist/Immunologist',
    sponsored: true,
    rating: 4.7,
    reviews: 312,
    loyalPatients: 98,
    distance: 1.8,
    insurance: [
      'UnitedHealthcare',
      'Cigna',
      'Empire Blue Cross Blue Shield (Health)',
    ],
    address: {
      streetAddress: '456 Madison Avenue',
      city: 'New York',
      state: 'NY',
      postalCode: '10022',
      latitude: 40.75833153925082,
      longitude: -73.96798305673181,
    },
    inNetwork: true,
    newPatientAppointments: true,
    highlyRecommended: true,
    excellentWaitTime: false,
    examsAvailable: ['Anemia'],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711184400,
            endTime: 1711188000,
          },
          {
            startTime: 1711188000,
            endTime: 1711191600,
          },
          {
            startTime: 1711191600,
            endTime: 1711195200,
          },
          {
            startTime: 1711195200,
            endTime: 1711198800,
          },
          {
            startTime: 1711198800,
            endTime: 1711202400,
          },
          {
            startTime: 1711202400,
            endTime: 1711206000,
          },
        ],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711270800,
            endTime: 1711274400,
          },
          {
            startTime: 1711274400,
            endTime: 1711278000,
          },
          {
            startTime: 1711278000,
            endTime: 1711281600,
          },
          {
            startTime: 1711285200,
            endTime: 1711288800,
          },
          {
            startTime: 1711288800,
            endTime: 1711292400,
          },
          {
            startTime: 1711292400,
            endTime: 1711296000,
          },
        ],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711357200,
            endTime: 1711360800,
          },
          {
            startTime: 1711364400,
            endTime: 1711368000,
          },
          {
            startTime: 1711368000,
            endTime: 1711371600,
          },
          {
            startTime: 1711375200,
            endTime: 1711378800,
          },
          {
            startTime: 1711382400,
            endTime: 1711386000,
          },
          {
            startTime: 1711389600,
            endTime: 1711393200,
          },
        ],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711447200,
            endTime: 1711450800,
          },
          {
            startTime: 1711461600,
            endTime: 1711465200,
          },
          {
            startTime: 1711472400,
            endTime: 1711476000,
          },
          {
            startTime: 1711486800,
            endTime: 1711490400,
          },
        ],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711530000,
            endTime: 1711533600,
          },
          {
            startTime: 1711533600,
            endTime: 1711537200,
          },
          {
            startTime: 1711537200,
            endTime: 1711540800,
          },
          {
            startTime: 1711540800,
            endTime: 1711544400,
          },
          {
            startTime: 1711544400,
            endTime: 1711548000,
          },
          {
            startTime: 1711548000,
            endTime: 1711551600,
          },
        ],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711616400,
            endTime: 1711620000,
          },
          {
            startTime: 1711620000,
            endTime: 1711623600,
          },
          {
            startTime: 1711623600,
            endTime: 1711627200,
          },
          {
            startTime: 1711627200,
            endTime: 1711630800,
          },
          {
            startTime: 1711630800,
            endTime: 1711634400,
          },
          {
            startTime: 1711634400,
            endTime: 1711638000,
          },
        ],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711702800,
            endTime: 1711706400,
          },
          {
            startTime: 1711706400,
            endTime: 1711710000,
          },
          {
            startTime: 1711710000,
            endTime: 1711713600,
          },
          {
            startTime: 1711713600,
            endTime: 1711717200,
          },
          {
            startTime: 1711717200,
            endTime: 1711720800,
          },
          {
            startTime: 1711720800,
            endTime: 1711724400,
          },
        ],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711792800,
            endTime: 1711796400,
          },
          {
            startTime: 1711796400,
            endTime: 1711800000,
          },
          {
            startTime: 1711800000,
            endTime: 1711803600,
          },
          {
            startTime: 1711803600,
            endTime: 1711807200,
          },
          {
            startTime: 1711818000,
            endTime: 1711821600,
          },
          {
            startTime: 1711821600,
            endTime: 1711825200,
          },
        ],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712048400,
            endTime: 1712052000,
          },
          {
            startTime: 1712052000,
            endTime: 1712055600,
          },
          {
            startTime: 1712059200,
            endTime: 1712062800,
          },
          {
            startTime: 1712062800,
            endTime: 1712066400,
          },
          {
            startTime: 1712077200,
            endTime: 1712080800,
          },
          {
            startTime: 1712080800,
            endTime: 1712084400,
          },
        ],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712134800,
            endTime: 1712138400,
          },
          {
            startTime: 1712138400,
            endTime: 1712142000,
          },
          {
            startTime: 1712142000,
            endTime: 1712145600,
          },
          {
            startTime: 1712145600,
            endTime: 1712149200,
          },
          {
            startTime: 1712152800,
            endTime: 1712156400,
          },
          {
            startTime: 1712156400,
            endTime: 1712160000,
          },
        ],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712221200,
            endTime: 1712224800,
          },
          {
            startTime: 1712224800,
            endTime: 1712228400,
          },
          {
            startTime: 1712228400,
            endTime: 1712232000,
          },
          {
            startTime: 1712232000,
            endTime: 1712235600,
          },
          {
            startTime: 1712235600,
            endTime: 1712239200,
          },
          {
            startTime: 1712242800,
            endTime: 1712246400,
          },
        ],
      },
    ],
    schedulePreference: ['Afternoon', 'Morning', 'Evening', 'Early Morning'],
    gender: 'male',
    visitType: {
      value: 'inPerson',
      label: 'In-person visits only',
    },
    languageSpoken: ['English'],
  },
  {
    id: 14,
    photo: '/assets/images/doctors/doctor19.jpg',
    name: 'Dr. Sarah Kim',
    specialty: 'Radiologist',
    sponsored: false,
    rating: 4.8,
    reviews: 376,
    loyalPatients: 122,
    distance: 0.6,
    insurance: [
      'EmblemHealth (formerly known as GHI)',
      'HealthFirst (NY)',
      'AARP',
      'ACE',
    ],
    address: {
      streetAddress: '789 Park Avenue',
      city: 'New York',
      state: 'NY',
      postalCode: '10021',
      latitude: 40.77017731346054,
      longitude: -73.95967688581743,
    },
    inNetwork: false,
    newPatientAppointments: true,
    highlyRecommended: true,
    excellentWaitTime: true,
    examsAvailable: ['Diagnostic Imaging'],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711108800,
            endTime: 1711112400,
          },
          {
            startTime: 1711119600,
            endTime: 1711123200,
          },
          {
            startTime: 1711126800,
            endTime: 1711130400,
          },
          {
            startTime: 1711134000,
            endTime: 1711137600,
          },
        ],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711198800,
            endTime: 1711202400,
          },
          {
            startTime: 1711216800,
            endTime: 1711220400,
          },
        ],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711285200,
            endTime: 1711288800,
          },
          {
            startTime: 1711288800,
            endTime: 1711292400,
          },
          {
            startTime: 1711303200,
            endTime: 1711306800,
          },
          {
            startTime: 1711306800,
            endTime: 1711310400,
          },
        ],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711368000,
            endTime: 1711371600,
          },
          {
            startTime: 1711371600,
            endTime: 1711375200,
          },
          {
            startTime: 1711375200,
            endTime: 1711378800,
          },
          {
            startTime: 1711378800,
            endTime: 1711382400,
          },
          {
            startTime: 1711382400,
            endTime: 1711386000,
          },
          {
            startTime: 1711386000,
            endTime: 1711389600,
          },
        ],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711461600,
            endTime: 1711465200,
          },
          {
            startTime: 1711465200,
            endTime: 1711468800,
          },
          {
            startTime: 1711472400,
            endTime: 1711476000,
          },
          {
            startTime: 1711476000,
            endTime: 1711479600,
          },
        ],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711540800,
            endTime: 1711544400,
          },
          {
            startTime: 1711544400,
            endTime: 1711548000,
          },
          {
            startTime: 1711548000,
            endTime: 1711551600,
          },
          {
            startTime: 1711551600,
            endTime: 1711555200,
          },
          {
            startTime: 1711555200,
            endTime: 1711558800,
          },
          {
            startTime: 1711558800,
            endTime: 1711562400,
          },
        ],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711630800,
            endTime: 1711634400,
          },
          {
            startTime: 1711645200,
            endTime: 1711648800,
          },
        ],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711800000,
            endTime: 1711803600,
          },
          {
            startTime: 1711803600,
            endTime: 1711807200,
          },
          {
            startTime: 1711810800,
            endTime: 1711814400,
          },
          {
            startTime: 1711814400,
            endTime: 1711818000,
          },
          {
            startTime: 1711818000,
            endTime: 1711821600,
          },
          {
            startTime: 1711821600,
            endTime: 1711825200,
          },
        ],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711972800,
            endTime: 1711976400,
          },
          {
            startTime: 1711987200,
            endTime: 1711990800,
          },
        ],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1712066400,
            endTime: 1712070000,
          },
          {
            startTime: 1712077200,
            endTime: 1712080800,
          },
        ],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1712145600,
            endTime: 1712149200,
          },
          {
            startTime: 1712167200,
            endTime: 1712170800,
          },
        ],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
    ],
    schedulePreference: ['Morning', 'Afternoon'],
    gender: 'female',
    visitType: {
      value: 'inPerson',
      label: 'In-person visits only',
    },
    languageSpoken: ['English'],
  },
  {
    id: 15,
    photo: '/assets/images/doctors/doctor20.jpg',
    name: 'Dr. David Lee',
    specialty: 'Geriatric Medicine',
    sponsored: true,
    rating: 4.7,
    reviews: 298,
    loyalPatients: 92,
    distance: 1.2,
    insurance: [
      'AIG',
      'APWU',
      'ATRIO Health Plans',
      'AVMA Life',
      'Absolute Total Care',
    ],
    address: {
      streetAddress: '123 Lexington Avenue',
      city: 'New York',
      state: 'NY',
      postalCode: '10016',
      latitude: 40.74551254968207,
      longitude: -73.97969346333193,
    },
    inNetwork: true,
    newPatientAppointments: false,
    highlyRecommended: true,
    excellentWaitTime: false,
    examsAvailable: ['Senile Dementia'],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711137600,
            endTime: 1711141200,
          },
          {
            startTime: 1711141200,
            endTime: 1711144800,
          },
          {
            startTime: 1711144800,
            endTime: 1711148400,
          },
          {
            startTime: 1711148400,
            endTime: 1711152000,
          },
        ],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711310400,
            endTime: 1711314000,
          },
          {
            startTime: 1711314000,
            endTime: 1711317600,
          },
          {
            startTime: 1711317600,
            endTime: 1711321200,
          },
          {
            startTime: 1711321200,
            endTime: 1711324800,
          },
        ],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711396800,
            endTime: 1711400400,
          },
          {
            startTime: 1711400400,
            endTime: 1711404000,
          },
          {
            startTime: 1711407600,
            endTime: 1711411200,
          },
        ],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 1,
        availableSpots: [
          {
            startTime: 1711483200,
            endTime: 1711486800,
          },
        ],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711569600,
            endTime: 1711573200,
          },
          {
            startTime: 1711573200,
            endTime: 1711576800,
          },
        ],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711659600,
            endTime: 1711663200,
          },
          {
            startTime: 1711666800,
            endTime: 1711670400,
          },
        ],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711742400,
            endTime: 1711746000,
          },
          {
            startTime: 1711746000,
            endTime: 1711749600,
          },
          {
            startTime: 1711749600,
            endTime: 1711753200,
          },
          {
            startTime: 1711753200,
            endTime: 1711756800,
          },
        ],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711832400,
            endTime: 1711836000,
          },
          {
            startTime: 1711836000,
            endTime: 1711839600,
          },
          {
            startTime: 1711839600,
            endTime: 1711843200,
          },
        ],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711918800,
            endTime: 1711922400,
          },
          {
            startTime: 1711926000,
            endTime: 1711929600,
          },
        ],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1712001600,
            endTime: 1712005200,
          },
          {
            startTime: 1712005200,
            endTime: 1712008800,
          },
        ],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 1,
        availableSpots: [
          {
            startTime: 1712088000,
            endTime: 1712091600,
          },
        ],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 1,
        availableSpots: [
          {
            startTime: 1712174400,
            endTime: 1712178000,
          },
        ],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1712260800,
            endTime: 1712264400,
          },
          {
            startTime: 1712264400,
            endTime: 1712268000,
          },
        ],
      },
    ],
    schedulePreference: ['Evening'],
    gender: 'male',
    visitType: {
      value: 'video',
      label: 'Video visits only',
    },
    languageSpoken: ['English', 'german'],
  },
  {
    id: 16,
    photo: '/assets/images/doctors/doctor21.jpg',
    name: 'Dr. Jessica Davis',
    specialty: 'Ophthalmologist',
    sponsored: false,
    rating: 5.0,
    reviews: 422,
    loyalPatients: 136,
    distance: 0.9,
    insurance: [
      'Access Medicare (NY)',
      'Accountable Health Plan of Ohio',
      'Advanced Health',
      'AdvantageMD',
      'Advantica',
      'Advent Health',
    ],
    address: {
      streetAddress: '456 7th Avenue',
      city: 'New York',
      state: 'NY',
      postalCode: '10018',
      latitude: 40.754153140464744,
      longitude: -73.99042150080128,
    },
    inNetwork: false,
    newPatientAppointments: true,
    highlyRecommended: true,
    excellentWaitTime: true,
    examsAvailable: ['Physical therapy'],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711123200,
            endTime: 1711126800,
          },
          {
            startTime: 1711126800,
            endTime: 1711130400,
          },
          {
            startTime: 1711130400,
            endTime: 1711134000,
          },
          {
            startTime: 1711134000,
            endTime: 1711137600,
          },
          {
            startTime: 1711137600,
            endTime: 1711141200,
          },
          {
            startTime: 1711141200,
            endTime: 1711144800,
          },
        ],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711209600,
            endTime: 1711213200,
          },
          {
            startTime: 1711213200,
            endTime: 1711216800,
          },
          {
            startTime: 1711216800,
            endTime: 1711220400,
          },
          {
            startTime: 1711220400,
            endTime: 1711224000,
          },
          {
            startTime: 1711224000,
            endTime: 1711227600,
          },
          {
            startTime: 1711227600,
            endTime: 1711231200,
          },
        ],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711296000,
            endTime: 1711299600,
          },
          {
            startTime: 1711299600,
            endTime: 1711303200,
          },
          {
            startTime: 1711303200,
            endTime: 1711306800,
          },
          {
            startTime: 1711306800,
            endTime: 1711310400,
          },
          {
            startTime: 1711310400,
            endTime: 1711314000,
          },
          {
            startTime: 1711314000,
            endTime: 1711317600,
          },
        ],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711382400,
            endTime: 1711386000,
          },
          {
            startTime: 1711386000,
            endTime: 1711389600,
          },
          {
            startTime: 1711389600,
            endTime: 1711393200,
          },
          {
            startTime: 1711396800,
            endTime: 1711400400,
          },
          {
            startTime: 1711404000,
            endTime: 1711407600,
          },
          {
            startTime: 1711407600,
            endTime: 1711411200,
          },
        ],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711555200,
            endTime: 1711558800,
          },
          {
            startTime: 1711566000,
            endTime: 1711569600,
          },
          {
            startTime: 1711569600,
            endTime: 1711573200,
          },
          {
            startTime: 1711573200,
            endTime: 1711576800,
          },
        ],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711641600,
            endTime: 1711645200,
          },
          {
            startTime: 1711645200,
            endTime: 1711648800,
          },
          {
            startTime: 1711648800,
            endTime: 1711652400,
          },
          {
            startTime: 1711656000,
            endTime: 1711659600,
          },
          {
            startTime: 1711659600,
            endTime: 1711663200,
          },
          {
            startTime: 1711663200,
            endTime: 1711666800,
          },
        ],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711728000,
            endTime: 1711731600,
          },
          {
            startTime: 1711731600,
            endTime: 1711735200,
          },
          {
            startTime: 1711742400,
            endTime: 1711746000,
          },
          {
            startTime: 1711753200,
            endTime: 1711756800,
          },
        ],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711818000,
            endTime: 1711821600,
          },
          {
            startTime: 1711825200,
            endTime: 1711828800,
          },
          {
            startTime: 1711828800,
            endTime: 1711832400,
          },
          {
            startTime: 1711832400,
            endTime: 1711836000,
          },
        ],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711994400,
            endTime: 1711998000,
          },
          {
            startTime: 1711998000,
            endTime: 1712001600,
          },
          {
            startTime: 1712005200,
            endTime: 1712008800,
          },
          {
            startTime: 1712012400,
            endTime: 1712016000,
          },
        ],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1712167200,
            endTime: 1712170800,
          },
          {
            startTime: 1712170800,
            endTime: 1712174400,
          },
          {
            startTime: 1712174400,
            endTime: 1712178000,
          },
          {
            startTime: 1712185200,
            endTime: 1712188800,
          },
        ],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
    ],
    schedulePreference: ['Afternoon', 'Evening'],
    gender: 'female',
    visitType: {
      value: 'inPerson',
      label: 'In-person visits only',
    },
    languageSpoken: ['English'],
  },
  {
    id: 17,
    photo: '/assets/images/doctors/doctor22.jpg',
    name: 'Dr. Michael Thompson',
    specialty: 'Podiatrist',
    sponsored: true,
    rating: 4.6,
    reviews: 266,
    loyalPatients: 78,
    distance: 1.7,
    insurance: [
      'EmblemHealth (formerly known as GHI)',
      'HealthFirst (NY)',
      'AARP',
      'ACE',
    ],
    address: {
      streetAddress: '789 3rd Avenue',
      city: 'New York',
      state: 'NY',
      postalCode: '10022',
      latitude: 40.75833153925082,
      longitude: -73.96798305673181,
    },
    inNetwork: true,
    newPatientAppointments: true,
    highlyRecommended: false,
    excellentWaitTime: true,
    examsAvailable: ['Foot and Ankle Conditions'],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711191600,
            endTime: 1711195200,
          },
          {
            startTime: 1711198800,
            endTime: 1711202400,
          },
          {
            startTime: 1711220400,
            endTime: 1711224000,
          },
          {
            startTime: 1711227600,
            endTime: 1711231200,
          },
        ],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711270800,
            endTime: 1711274400,
          },
          {
            startTime: 1711274400,
            endTime: 1711278000,
          },
          {
            startTime: 1711278000,
            endTime: 1711281600,
          },
          {
            startTime: 1711281600,
            endTime: 1711285200,
          },
          {
            startTime: 1711285200,
            endTime: 1711288800,
          },
          {
            startTime: 1711292400,
            endTime: 1711296000,
          },
        ],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711447200,
            endTime: 1711450800,
          },
          {
            startTime: 1711450800,
            endTime: 1711454400,
          },
          {
            startTime: 1711458000,
            endTime: 1711461600,
          },
          {
            startTime: 1711461600,
            endTime: 1711465200,
          },
          {
            startTime: 1711468800,
            endTime: 1711472400,
          },
          {
            startTime: 1711476000,
            endTime: 1711479600,
          },
        ],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711537200,
            endTime: 1711540800,
          },
          {
            startTime: 1711540800,
            endTime: 1711544400,
          },
          {
            startTime: 1711562400,
            endTime: 1711566000,
          },
          {
            startTime: 1711580400,
            endTime: 1711584000,
          },
        ],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711616400,
            endTime: 1711620000,
          },
          {
            startTime: 1711620000,
            endTime: 1711623600,
          },
          {
            startTime: 1711623600,
            endTime: 1711627200,
          },
          {
            startTime: 1711627200,
            endTime: 1711630800,
          },
          {
            startTime: 1711630800,
            endTime: 1711634400,
          },
          {
            startTime: 1711634400,
            endTime: 1711638000,
          },
        ],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711702800,
            endTime: 1711706400,
          },
          {
            startTime: 1711706400,
            endTime: 1711710000,
          },
          {
            startTime: 1711710000,
            endTime: 1711713600,
          },
          {
            startTime: 1711717200,
            endTime: 1711720800,
          },
          {
            startTime: 1711720800,
            endTime: 1711724400,
          },
          {
            startTime: 1711724400,
            endTime: 1711728000,
          },
        ],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711789200,
            endTime: 1711792800,
          },
          {
            startTime: 1711792800,
            endTime: 1711796400,
          },
          {
            startTime: 1711796400,
            endTime: 1711800000,
          },
          {
            startTime: 1711800000,
            endTime: 1711803600,
          },
          {
            startTime: 1711803600,
            endTime: 1711807200,
          },
          {
            startTime: 1711807200,
            endTime: 1711810800,
          },
        ],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711962000,
            endTime: 1711965600,
          },
          {
            startTime: 1711965600,
            endTime: 1711969200,
          },
          {
            startTime: 1711969200,
            endTime: 1711972800,
          },
          {
            startTime: 1711972800,
            endTime: 1711976400,
          },
          {
            startTime: 1711976400,
            endTime: 1711980000,
          },
          {
            startTime: 1711980000,
            endTime: 1711983600,
          },
        ],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712048400,
            endTime: 1712052000,
          },
          {
            startTime: 1712052000,
            endTime: 1712055600,
          },
          {
            startTime: 1712055600,
            endTime: 1712059200,
          },
          {
            startTime: 1712059200,
            endTime: 1712062800,
          },
          {
            startTime: 1712062800,
            endTime: 1712066400,
          },
          {
            startTime: 1712070000,
            endTime: 1712073600,
          },
        ],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1712221200,
            endTime: 1712224800,
          },
          {
            startTime: 1712235600,
            endTime: 1712239200,
          },
          {
            startTime: 1712250000,
            endTime: 1712253600,
          },
          {
            startTime: 1712260800,
            endTime: 1712264400,
          },
        ],
      },
    ],
    schedulePreference: ['Morning', 'Afternoon', 'Early Morning', 'Evening'],
    gender: 'male',
    visitType: {
      value: 'inPerson',
      label: 'In-person visits only',
    },
    languageSpoken: ['English'],
  },
  {
    id: 18,
    photo: '/assets/images/doctors/doctor23.jpg',
    name: 'Dr. Sarah Brown',
    specialty: 'Geneticist',
    sponsored: false,
    rating: 4.8,
    reviews: 312,
    loyalPatients: 102,
    distance: 2.4,
    insurance: [
      'Access Medicare (NY)',
      'Accountable Health Plan of Ohio',
      'Advanced Health',
      'AdvantageMD',
      'Advantica',
      'Advent Health',
    ],
    address: {
      streetAddress: '456 Park Avenue',
      city: 'New York',
      state: 'NY',
      postalCode: '10022',
      latitude: 40.75833153925082,
      longitude: -73.96798305673181,
    },
    inNetwork: false,
    newPatientAppointments: true,
    highlyRecommended: true,
    excellentWaitTime: false,
    examsAvailable: ['Genetic Testing'],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711098000,
            endTime: 1711101600,
          },
          {
            startTime: 1711101600,
            endTime: 1711105200,
          },
          {
            startTime: 1711105200,
            endTime: 1711108800,
          },
          {
            startTime: 1711108800,
            endTime: 1711112400,
          },
          {
            startTime: 1711112400,
            endTime: 1711116000,
          },
          {
            startTime: 1711119600,
            endTime: 1711123200,
          },
        ],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711270800,
            endTime: 1711274400,
          },
          {
            startTime: 1711288800,
            endTime: 1711292400,
          },
        ],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711357200,
            endTime: 1711360800,
          },
          {
            startTime: 1711360800,
            endTime: 1711364400,
          },
          {
            startTime: 1711364400,
            endTime: 1711368000,
          },
          {
            startTime: 1711368000,
            endTime: 1711371600,
          },
          {
            startTime: 1711371600,
            endTime: 1711375200,
          },
          {
            startTime: 1711375200,
            endTime: 1711378800,
          },
        ],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711443600,
            endTime: 1711447200,
          },
          {
            startTime: 1711450800,
            endTime: 1711454400,
          },
          {
            startTime: 1711458000,
            endTime: 1711461600,
          },
          {
            startTime: 1711461600,
            endTime: 1711465200,
          },
        ],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711530000,
            endTime: 1711533600,
          },
          {
            startTime: 1711533600,
            endTime: 1711537200,
          },
          {
            startTime: 1711537200,
            endTime: 1711540800,
          },
          {
            startTime: 1711540800,
            endTime: 1711544400,
          },
          {
            startTime: 1711544400,
            endTime: 1711548000,
          },
          {
            startTime: 1711548000,
            endTime: 1711551600,
          },
        ],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711616400,
            endTime: 1711620000,
          },
          {
            startTime: 1711620000,
            endTime: 1711623600,
          },
          {
            startTime: 1711623600,
            endTime: 1711627200,
          },
          {
            startTime: 1711630800,
            endTime: 1711634400,
          },
          {
            startTime: 1711634400,
            endTime: 1711638000,
          },
          {
            startTime: 1711638000,
            endTime: 1711641600,
          },
        ],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711702800,
            endTime: 1711706400,
          },
          {
            startTime: 1711720800,
            endTime: 1711724400,
          },
        ],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711789200,
            endTime: 1711792800,
          },
          {
            startTime: 1711792800,
            endTime: 1711796400,
          },
          {
            startTime: 1711803600,
            endTime: 1711807200,
          },
          {
            startTime: 1711807200,
            endTime: 1711810800,
          },
        ],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711882800,
            endTime: 1711886400,
          },
          {
            startTime: 1711890000,
            endTime: 1711893600,
          },
        ],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711962000,
            endTime: 1711965600,
          },
          {
            startTime: 1711972800,
            endTime: 1711976400,
          },
        ],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1712052000,
            endTime: 1712055600,
          },
          {
            startTime: 1712055600,
            endTime: 1712059200,
          },
          {
            startTime: 1712059200,
            endTime: 1712062800,
          },
          {
            startTime: 1712066400,
            endTime: 1712070000,
          },
        ],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712134800,
            endTime: 1712138400,
          },
          {
            startTime: 1712138400,
            endTime: 1712142000,
          },
          {
            startTime: 1712142000,
            endTime: 1712145600,
          },
          {
            startTime: 1712145600,
            endTime: 1712149200,
          },
          {
            startTime: 1712152800,
            endTime: 1712156400,
          },
          {
            startTime: 1712156400,
            endTime: 1712160000,
          },
        ],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
    ],
    schedulePreference: ['Morning', 'Early Morning'],
    gender: 'female',
    visitType: {
      value: 'inPerson',
      label: 'In-person visits only',
    },
    languageSpoken: ['English'],
  },
  {
    id: 19,
    photo: '/assets/images/doctors/doctor24.jpg',
    name: 'Dr. Michael Chen',
    specialty: 'Oncologist',
    sponsored: false,
    rating: 4.7,
    reviews: 275,
    loyalPatients: 89,
    distance: 3.1,
    insurance: ['Blue Cross Blue Shield (BCBS)', 'Aetna'],
    address: {
      streetAddress: '789 Main Street',
      city: 'Boston',
      state: 'MA',
      postalCode: '02108',
      latitude: 42.35756166404624,
      longitude: -71.06598174416185,
    },
    inNetwork: true,
    newPatientAppointments: true,
    highlyRecommended: true,
    excellentWaitTime: false,
    examsAvailable: [
      'Breast Cancer',
      'Colorectral Cancer',
      'Leukemia',
      'Lung Cancer',
      'Lymphoma',
      'Metastatic Brain Tumor',
    ],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711098000,
            endTime: 1711101600,
          },
          {
            startTime: 1711144800,
            endTime: 1711148400,
          },
        ],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711184400,
            endTime: 1711188000,
          },
          {
            startTime: 1711188000,
            endTime: 1711191600,
          },
          {
            startTime: 1711191600,
            endTime: 1711195200,
          },
          {
            startTime: 1711224000,
            endTime: 1711227600,
          },
          {
            startTime: 1711231200,
            endTime: 1711234800,
          },
          {
            startTime: 1711234800,
            endTime: 1711238400,
          },
        ],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711270800,
            endTime: 1711274400,
          },
          {
            startTime: 1711274400,
            endTime: 1711278000,
          },
          {
            startTime: 1711278000,
            endTime: 1711281600,
          },
          {
            startTime: 1711310400,
            endTime: 1711314000,
          },
          {
            startTime: 1711317600,
            endTime: 1711321200,
          },
          {
            startTime: 1711321200,
            endTime: 1711324800,
          },
        ],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711357200,
            endTime: 1711360800,
          },
          {
            startTime: 1711360800,
            endTime: 1711364400,
          },
          {
            startTime: 1711364400,
            endTime: 1711368000,
          },
          {
            startTime: 1711400400,
            endTime: 1711404000,
          },
          {
            startTime: 1711404000,
            endTime: 1711407600,
          },
          {
            startTime: 1711407600,
            endTime: 1711411200,
          },
        ],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711447200,
            endTime: 1711450800,
          },
          {
            startTime: 1711483200,
            endTime: 1711486800,
          },
        ],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711530000,
            endTime: 1711533600,
          },
          {
            startTime: 1711533600,
            endTime: 1711537200,
          },
          {
            startTime: 1711537200,
            endTime: 1711540800,
          },
          {
            startTime: 1711569600,
            endTime: 1711573200,
          },
          {
            startTime: 1711573200,
            endTime: 1711576800,
          },
          {
            startTime: 1711576800,
            endTime: 1711580400,
          },
        ],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711620000,
            endTime: 1711623600,
          },
          {
            startTime: 1711623600,
            endTime: 1711627200,
          },
          {
            startTime: 1711659600,
            endTime: 1711663200,
          },
          {
            startTime: 1711663200,
            endTime: 1711666800,
          },
        ],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711702800,
            endTime: 1711706400,
          },
          {
            startTime: 1711706400,
            endTime: 1711710000,
          },
          {
            startTime: 1711710000,
            endTime: 1711713600,
          },
          {
            startTime: 1711742400,
            endTime: 1711746000,
          },
          {
            startTime: 1711746000,
            endTime: 1711749600,
          },
          {
            startTime: 1711749600,
            endTime: 1711753200,
          },
        ],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711789200,
            endTime: 1711792800,
          },
          {
            startTime: 1711792800,
            endTime: 1711796400,
          },
          {
            startTime: 1711796400,
            endTime: 1711800000,
          },
          {
            startTime: 1711828800,
            endTime: 1711832400,
          },
          {
            startTime: 1711832400,
            endTime: 1711836000,
          },
          {
            startTime: 1711836000,
            endTime: 1711839600,
          },
        ],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711965600,
            endTime: 1711969200,
          },
          {
            startTime: 1711969200,
            endTime: 1711972800,
          },
          {
            startTime: 1712005200,
            endTime: 1712008800,
          },
          {
            startTime: 1712008800,
            endTime: 1712012400,
          },
        ],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712048400,
            endTime: 1712052000,
          },
          {
            startTime: 1712052000,
            endTime: 1712055600,
          },
          {
            startTime: 1712055600,
            endTime: 1712059200,
          },
          {
            startTime: 1712088000,
            endTime: 1712091600,
          },
          {
            startTime: 1712091600,
            endTime: 1712095200,
          },
          {
            startTime: 1712095200,
            endTime: 1712098800,
          },
        ],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712134800,
            endTime: 1712138400,
          },
          {
            startTime: 1712138400,
            endTime: 1712142000,
          },
          {
            startTime: 1712142000,
            endTime: 1712145600,
          },
          {
            startTime: 1712174400,
            endTime: 1712178000,
          },
          {
            startTime: 1712178000,
            endTime: 1712181600,
          },
          {
            startTime: 1712181600,
            endTime: 1712185200,
          },
        ],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712221200,
            endTime: 1712224800,
          },
          {
            startTime: 1712224800,
            endTime: 1712228400,
          },
          {
            startTime: 1712228400,
            endTime: 1712232000,
          },
          {
            startTime: 1712260800,
            endTime: 1712264400,
          },
          {
            startTime: 1712268000,
            endTime: 1712271600,
          },
          {
            startTime: 1712271600,
            endTime: 1712275200,
          },
        ],
      },
    ],
    schedulePreference: ['Evening', 'Early Morning'],
    gender: 'male',
    visitType: {
      value: 'video',
      label: 'Video visits only',
    },
    languageSpoken: ['English', 'greek'],
  },
  {
    id: 20,
    photo: '/assets/images/doctors/doctor25.jpg',
    name: 'Dr. John Wilson',
    specialty: 'Endocrinologist',
    sponsored: true,
    rating: 4.9,
    reviews: 418,
    loyalPatients: 13,
    distance: 1.8,
    insurance: [
      'UnitedHealthcare',
      'Cigna',
      'Empire Blue Cross Blue Shield (Health)',
    ],
    address: {
      streetAddress: '321 Oak Street',
      city: 'Los Angeles',
      state: 'CA',
      postalCode: '90001',
      latitude: 33.9749214687747,
      longitude: -118.24608792094863,
    },
    inNetwork: false,
    newPatientAppointments: false,
    highlyRecommended: true,
    excellentWaitTime: true,
    examsAvailable: [
      'All Diabetes',
      'Diabetes Type 1',
      'Diabetes Type 2',
      'Acquired Hypothyroidism',
    ],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 1,
        availableSpots: [
          {
            startTime: 1711098000,
            endTime: 1711101600,
          },
        ],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711184400,
            endTime: 1711188000,
          },
          {
            startTime: 1711188000,
            endTime: 1711191600,
          },
          {
            startTime: 1711191600,
            endTime: 1711195200,
          },
        ],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711270800,
            endTime: 1711274400,
          },
          {
            startTime: 1711274400,
            endTime: 1711278000,
          },
          {
            startTime: 1711278000,
            endTime: 1711281600,
          },
        ],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711357200,
            endTime: 1711360800,
          },
          {
            startTime: 1711360800,
            endTime: 1711364400,
          },
        ],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711702800,
            endTime: 1711706400,
          },
          {
            startTime: 1711706400,
            endTime: 1711710000,
          },
        ],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711789200,
            endTime: 1711792800,
          },
          {
            startTime: 1711792800,
            endTime: 1711796400,
          },
          {
            startTime: 1711796400,
            endTime: 1711800000,
          },
        ],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711875600,
            endTime: 1711879200,
          },
          {
            startTime: 1711879200,
            endTime: 1711882800,
          },
          {
            startTime: 1711882800,
            endTime: 1711886400,
          },
        ],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1712052000,
            endTime: 1712055600,
          },
          {
            startTime: 1712055600,
            endTime: 1712059200,
          },
        ],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1712221200,
            endTime: 1712224800,
          },
          {
            startTime: 1712224800,
            endTime: 1712228400,
          },
        ],
      },
    ],
    schedulePreference: ['Early Morning'],
    gender: 'male',
    visitType: {
      value: 'inPerson',
      label: 'In-person visits only',
    },
    languageSpoken: ['English', 'greek'],
  },
  {
    id: 21,
    photo: '/assets/images/doctors/doctor26.jpg',
    name: 'Dr. David Thompson',
    specialty: 'Cardiologist',
    sponsored: false,
    rating: 4.6,
    reviews: 296,
    loyalPatients: 10,
    distance: 2.7,
    insurance: [
      'AIG',
      'APWU',
      'ATRIO Health Plans',
      'AVMA Life',
      'Absolute Total Care',
    ],
    address: {
      streetAddress: '567 Maple Avenue',
      city: 'Chicago',
      state: 'IL',
      postalCode: '60601',
      latitude: 41.83832739698795,
      longitude: -87.80740117409638,
    },
    inNetwork: true,
    newPatientAppointments: true,
    highlyRecommended: false,
    excellentWaitTime: false,
    examsAvailable: ['Heart Transplant', 'Ventricular Assist Device (VAD)'],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711098000,
            endTime: 1711101600,
          },
          {
            startTime: 1711101600,
            endTime: 1711105200,
          },
          {
            startTime: 1711105200,
            endTime: 1711108800,
          },
          {
            startTime: 1711108800,
            endTime: 1711112400,
          },
          {
            startTime: 1711116000,
            endTime: 1711119600,
          },
          {
            startTime: 1711119600,
            endTime: 1711123200,
          },
        ],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711191600,
            endTime: 1711195200,
          },
          {
            startTime: 1711206000,
            endTime: 1711209600,
          },
          {
            startTime: 1711216800,
            endTime: 1711220400,
          },
          {
            startTime: 1711231200,
            endTime: 1711234800,
          },
        ],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711270800,
            endTime: 1711274400,
          },
          {
            startTime: 1711274400,
            endTime: 1711278000,
          },
          {
            startTime: 1711285200,
            endTime: 1711288800,
          },
          {
            startTime: 1711292400,
            endTime: 1711296000,
          },
          {
            startTime: 1711296000,
            endTime: 1711299600,
          },
          {
            startTime: 1711303200,
            endTime: 1711306800,
          },
        ],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711357200,
            endTime: 1711360800,
          },
          {
            startTime: 1711364400,
            endTime: 1711368000,
          },
          {
            startTime: 1711368000,
            endTime: 1711371600,
          },
          {
            startTime: 1711375200,
            endTime: 1711378800,
          },
          {
            startTime: 1711386000,
            endTime: 1711389600,
          },
          {
            startTime: 1711393200,
            endTime: 1711396800,
          },
        ],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711443600,
            endTime: 1711447200,
          },
          {
            startTime: 1711447200,
            endTime: 1711450800,
          },
          {
            startTime: 1711450800,
            endTime: 1711454400,
          },
          {
            startTime: 1711454400,
            endTime: 1711458000,
          },
          {
            startTime: 1711458000,
            endTime: 1711461600,
          },
          {
            startTime: 1711461600,
            endTime: 1711465200,
          },
        ],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711530000,
            endTime: 1711533600,
          },
          {
            startTime: 1711537200,
            endTime: 1711540800,
          },
          {
            startTime: 1711544400,
            endTime: 1711548000,
          },
          {
            startTime: 1711548000,
            endTime: 1711551600,
          },
          {
            startTime: 1711562400,
            endTime: 1711566000,
          },
          {
            startTime: 1711566000,
            endTime: 1711569600,
          },
        ],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711796400,
            endTime: 1711800000,
          },
          {
            startTime: 1711810800,
            endTime: 1711814400,
          },
          {
            startTime: 1711814400,
            endTime: 1711818000,
          },
          {
            startTime: 1711839600,
            endTime: 1711843200,
          },
        ],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711875600,
            endTime: 1711879200,
          },
          {
            startTime: 1711893600,
            endTime: 1711897200,
          },
          {
            startTime: 1711911600,
            endTime: 1711915200,
          },
          {
            startTime: 1711918800,
            endTime: 1711922400,
          },
        ],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711969200,
            endTime: 1711972800,
          },
          {
            startTime: 1711972800,
            endTime: 1711976400,
          },
          {
            startTime: 1711990800,
            endTime: 1711994400,
          },
          {
            startTime: 1712005200,
            endTime: 1712008800,
          },
        ],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
    ],
    schedulePreference: ['Afternoon', 'Morning', 'Early Morning', 'Evening'],
    gender: 'male',
    visitType: {
      value: 'inPerson',
      label: 'In-person visits only',
    },
    languageSpoken: ['English'],
  },
  {
    id: 22,
    photo: '/assets/images/doctors/doctor27.jpg',
    name: 'Dr. Jessica Nguyen',
    specialty: 'Neurologist',
    sponsored: false,
    rating: 4.8,
    reviews: 367,
    loyalPatients: 119,
    distance: 1.5,
    insurance: [
      'EmblemHealth (formerly known as GHI)',
      'HealthFirst (NY)',
      'AARP',
      'ACE',
    ],
    address: {
      streetAddress: '789 Pine Street',
      city: 'San Francisco',
      state: 'CA',
      postalCode: '94101',
      latitude: 37.5781451,
      longitude: -122.348724,
    },
    inNetwork: true,
    newPatientAppointments: true,
    highlyRecommended: true,
    excellentWaitTime: false,
    examsAvailable: [
      "Alzheimer's Disease",
      'Multiple Sclerosis',
      "Parkinson's Disease",
      'Trigeminal Neuralgia',
      'Migraine Headaches',
    ],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711141200,
            endTime: 1711144800,
          },
          {
            startTime: 1711144800,
            endTime: 1711148400,
          },
          {
            startTime: 1711148400,
            endTime: 1711152000,
          },
        ],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711227600,
            endTime: 1711231200,
          },
          {
            startTime: 1711234800,
            endTime: 1711238400,
          },
        ],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711310400,
            endTime: 1711314000,
          },
          {
            startTime: 1711314000,
            endTime: 1711317600,
          },
          {
            startTime: 1711317600,
            endTime: 1711321200,
          },
          {
            startTime: 1711321200,
            endTime: 1711324800,
          },
        ],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 1,
        availableSpots: [
          {
            startTime: 1711404000,
            endTime: 1711407600,
          },
        ],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711483200,
            endTime: 1711486800,
          },
          {
            startTime: 1711486800,
            endTime: 1711490400,
          },
          {
            startTime: 1711490400,
            endTime: 1711494000,
          },
        ],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711656000,
            endTime: 1711659600,
          },
          {
            startTime: 1711663200,
            endTime: 1711666800,
          },
          {
            startTime: 1711666800,
            endTime: 1711670400,
          },
        ],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711742400,
            endTime: 1711746000,
          },
          {
            startTime: 1711746000,
            endTime: 1711749600,
          },
        ],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711828800,
            endTime: 1711832400,
          },
          {
            startTime: 1711832400,
            endTime: 1711836000,
          },
          {
            startTime: 1711839600,
            endTime: 1711843200,
          },
        ],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711915200,
            endTime: 1711918800,
          },
          {
            startTime: 1711918800,
            endTime: 1711922400,
          },
          {
            startTime: 1711922400,
            endTime: 1711926000,
          },
        ],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1712001600,
            endTime: 1712005200,
          },
          {
            startTime: 1712008800,
            endTime: 1712012400,
          },
        ],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1712174400,
            endTime: 1712178000,
          },
          {
            startTime: 1712178000,
            endTime: 1712181600,
          },
          {
            startTime: 1712181600,
            endTime: 1712185200,
          },
          {
            startTime: 1712185200,
            endTime: 1712188800,
          },
        ],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1712268000,
            endTime: 1712271600,
          },
          {
            startTime: 1712271600,
            endTime: 1712275200,
          },
        ],
      },
    ],
    schedulePreference: ['Evening'],
    gender: 'female',
    visitType: {
      value: 'video',
      label: 'Video visits only',
    },
    languageSpoken: ['English', 'hindi'],
  },
  {
    id: 23,
    photo: '/assets/images/doctors/doctor28.jpg',
    name: 'Dr. Robert Garcia',
    specialty: 'Pulmonologist',
    sponsored: true,
    rating: 4.7,
    reviews: 294,
    loyalPatients: 18,
    distance: 2.2,
    insurance: [
      'Access Medicare (NY)',
      'Accountable Health Plan of Ohio',
      'Advanced Health',
      'AdvantageMD',
      'Advantica',
      'Advent Health',
    ],
    address: {
      streetAddress: '456 Cedar Avenue',
      city: 'Miami',
      state: 'FL',
      postalCode: '33101',
      latitude: 25.841655666666664,
      longitude: -80.18183353333333,
    },
    inNetwork: false,
    newPatientAppointments: true,
    highlyRecommended: true,
    excellentWaitTime: true,
    examsAvailable: [
      'Asthma',
      'Bronchiectasis',
      'Chronic Obstructive Pulmonary Disease',
      'Emphysema',
      'COVID-19',
    ],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711105200,
            endTime: 1711108800,
          },
          {
            startTime: 1711119600,
            endTime: 1711123200,
          },
          {
            startTime: 1711130400,
            endTime: 1711134000,
          },
        ],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711184400,
            endTime: 1711188000,
          },
          {
            startTime: 1711188000,
            endTime: 1711191600,
          },
          {
            startTime: 1711191600,
            endTime: 1711195200,
          },
          {
            startTime: 1711195200,
            endTime: 1711198800,
          },
          {
            startTime: 1711198800,
            endTime: 1711202400,
          },
          {
            startTime: 1711202400,
            endTime: 1711206000,
          },
        ],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711270800,
            endTime: 1711274400,
          },
          {
            startTime: 1711278000,
            endTime: 1711281600,
          },
          {
            startTime: 1711288800,
            endTime: 1711292400,
          },
          {
            startTime: 1711292400,
            endTime: 1711296000,
          },
          {
            startTime: 1711299600,
            endTime: 1711303200,
          },
          {
            startTime: 1711303200,
            endTime: 1711306800,
          },
        ],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711360800,
            endTime: 1711364400,
          },
          {
            startTime: 1711371600,
            endTime: 1711375200,
          },
          {
            startTime: 1711382400,
            endTime: 1711386000,
          },
        ],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711443600,
            endTime: 1711447200,
          },
          {
            startTime: 1711447200,
            endTime: 1711450800,
          },
          {
            startTime: 1711450800,
            endTime: 1711454400,
          },
          {
            startTime: 1711454400,
            endTime: 1711458000,
          },
          {
            startTime: 1711458000,
            endTime: 1711461600,
          },
          {
            startTime: 1711461600,
            endTime: 1711465200,
          },
        ],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711537200,
            endTime: 1711540800,
          },
          {
            startTime: 1711544400,
            endTime: 1711548000,
          },
          {
            startTime: 1711558800,
            endTime: 1711562400,
          },
        ],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711616400,
            endTime: 1711620000,
          },
          {
            startTime: 1711638000,
            endTime: 1711641600,
          },
          {
            startTime: 1711641600,
            endTime: 1711645200,
          },
        ],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711789200,
            endTime: 1711792800,
          },
          {
            startTime: 1711796400,
            endTime: 1711800000,
          },
          {
            startTime: 1711807200,
            endTime: 1711810800,
          },
          {
            startTime: 1711810800,
            endTime: 1711814400,
          },
          {
            startTime: 1711814400,
            endTime: 1711818000,
          },
          {
            startTime: 1711821600,
            endTime: 1711825200,
          },
        ],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711875600,
            endTime: 1711879200,
          },
          {
            startTime: 1711879200,
            endTime: 1711882800,
          },
          {
            startTime: 1711882800,
            endTime: 1711886400,
          },
          {
            startTime: 1711890000,
            endTime: 1711893600,
          },
          {
            startTime: 1711893600,
            endTime: 1711897200,
          },
          {
            startTime: 1711897200,
            endTime: 1711900800,
          },
        ],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711962000,
            endTime: 1711965600,
          },
          {
            startTime: 1711965600,
            endTime: 1711969200,
          },
          {
            startTime: 1711969200,
            endTime: 1711972800,
          },
          {
            startTime: 1711972800,
            endTime: 1711976400,
          },
          {
            startTime: 1711976400,
            endTime: 1711980000,
          },
          {
            startTime: 1711980000,
            endTime: 1711983600,
          },
        ],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712048400,
            endTime: 1712052000,
          },
          {
            startTime: 1712052000,
            endTime: 1712055600,
          },
          {
            startTime: 1712055600,
            endTime: 1712059200,
          },
          {
            startTime: 1712059200,
            endTime: 1712062800,
          },
          {
            startTime: 1712062800,
            endTime: 1712066400,
          },
          {
            startTime: 1712066400,
            endTime: 1712070000,
          },
        ],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712134800,
            endTime: 1712138400,
          },
          {
            startTime: 1712138400,
            endTime: 1712142000,
          },
          {
            startTime: 1712142000,
            endTime: 1712145600,
          },
          {
            startTime: 1712145600,
            endTime: 1712149200,
          },
          {
            startTime: 1712149200,
            endTime: 1712152800,
          },
          {
            startTime: 1712156400,
            endTime: 1712160000,
          },
        ],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712221200,
            endTime: 1712224800,
          },
          {
            startTime: 1712224800,
            endTime: 1712228400,
          },
          {
            startTime: 1712228400,
            endTime: 1712232000,
          },
          {
            startTime: 1712232000,
            endTime: 1712235600,
          },
          {
            startTime: 1712235600,
            endTime: 1712239200,
          },
          {
            startTime: 1712242800,
            endTime: 1712246400,
          },
        ],
      },
    ],
    schedulePreference: ['Early Morning', 'Morning', 'Afternoon'],
    gender: 'male',
    visitType: {
      value: 'inPerson',
      label: 'In-person visits only',
    },
    languageSpoken: ['English'],
  },
  {
    id: 24,
    photo: '/assets/images/doctors/doctor29.jpg',
    name: 'Dr. Samantha Davis',
    specialty: 'Rheumatologist',
    sponsored: false,
    rating: 4.9,
    reviews: 427,
    loyalPatients: 14,
    distance: 1.1,
    insurance: [
      'EmblemHealth (formerly known as GHI)',
      'HealthFirst (NY)',
      'AARP',
      'ACE',
    ],
    address: {
      streetAddress: '789 Elm Street',
      city: 'Houston',
      state: 'TX',
      postalCode: '77001',
      latitude: 29.756601,
      longitude: -95.36271,
    },
    inNetwork: true,
    newPatientAppointments: false,
    highlyRecommended: true,
    excellentWaitTime: true,
    examsAvailable: ['Osteoporosis'],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711098000,
            endTime: 1711101600,
          },
          {
            startTime: 1711101600,
            endTime: 1711105200,
          },
          {
            startTime: 1711105200,
            endTime: 1711108800,
          },
          {
            startTime: 1711108800,
            endTime: 1711112400,
          },
          {
            startTime: 1711112400,
            endTime: 1711116000,
          },
          {
            startTime: 1711116000,
            endTime: 1711119600,
          },
        ],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711270800,
            endTime: 1711274400,
          },
          {
            startTime: 1711274400,
            endTime: 1711278000,
          },
          {
            startTime: 1711278000,
            endTime: 1711281600,
          },
          {
            startTime: 1711281600,
            endTime: 1711285200,
          },
          {
            startTime: 1711285200,
            endTime: 1711288800,
          },
          {
            startTime: 1711288800,
            endTime: 1711292400,
          },
        ],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711357200,
            endTime: 1711360800,
          },
          {
            startTime: 1711360800,
            endTime: 1711364400,
          },
          {
            startTime: 1711375200,
            endTime: 1711378800,
          },
          {
            startTime: 1711378800,
            endTime: 1711382400,
          },
          {
            startTime: 1711389600,
            endTime: 1711393200,
          },
          {
            startTime: 1711393200,
            endTime: 1711396800,
          },
        ],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711530000,
            endTime: 1711533600,
          },
          {
            startTime: 1711533600,
            endTime: 1711537200,
          },
          {
            startTime: 1711537200,
            endTime: 1711540800,
          },
          {
            startTime: 1711540800,
            endTime: 1711544400,
          },
          {
            startTime: 1711544400,
            endTime: 1711548000,
          },
          {
            startTime: 1711548000,
            endTime: 1711551600,
          },
        ],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711616400,
            endTime: 1711620000,
          },
          {
            startTime: 1711620000,
            endTime: 1711623600,
          },
          {
            startTime: 1711630800,
            endTime: 1711634400,
          },
          {
            startTime: 1711638000,
            endTime: 1711641600,
          },
          {
            startTime: 1711641600,
            endTime: 1711645200,
          },
          {
            startTime: 1711645200,
            endTime: 1711648800,
          },
        ],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711702800,
            endTime: 1711706400,
          },
          {
            startTime: 1711706400,
            endTime: 1711710000,
          },
          {
            startTime: 1711713600,
            endTime: 1711717200,
          },
          {
            startTime: 1711717200,
            endTime: 1711720800,
          },
          {
            startTime: 1711731600,
            endTime: 1711735200,
          },
          {
            startTime: 1711738800,
            endTime: 1711742400,
          },
        ],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711789200,
            endTime: 1711792800,
          },
          {
            startTime: 1711792800,
            endTime: 1711796400,
          },
          {
            startTime: 1711796400,
            endTime: 1711800000,
          },
          {
            startTime: 1711803600,
            endTime: 1711807200,
          },
          {
            startTime: 1711807200,
            endTime: 1711810800,
          },
          {
            startTime: 1711810800,
            endTime: 1711814400,
          },
        ],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711875600,
            endTime: 1711879200,
          },
          {
            startTime: 1711882800,
            endTime: 1711886400,
          },
          {
            startTime: 1711886400,
            endTime: 1711890000,
          },
          {
            startTime: 1711890000,
            endTime: 1711893600,
          },
          {
            startTime: 1711904400,
            endTime: 1711908000,
          },
          {
            startTime: 1711911600,
            endTime: 1711915200,
          },
        ],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711962000,
            endTime: 1711965600,
          },
          {
            startTime: 1711972800,
            endTime: 1711976400,
          },
          {
            startTime: 1711987200,
            endTime: 1711990800,
          },
          {
            startTime: 1712005200,
            endTime: 1712008800,
          },
        ],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712048400,
            endTime: 1712052000,
          },
          {
            startTime: 1712052000,
            endTime: 1712055600,
          },
          {
            startTime: 1712055600,
            endTime: 1712059200,
          },
          {
            startTime: 1712062800,
            endTime: 1712066400,
          },
          {
            startTime: 1712066400,
            endTime: 1712070000,
          },
          {
            startTime: 1712070000,
            endTime: 1712073600,
          },
        ],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1712138400,
            endTime: 1712142000,
          },
          {
            startTime: 1712145600,
            endTime: 1712149200,
          },
          {
            startTime: 1712163600,
            endTime: 1712167200,
          },
          {
            startTime: 1712181600,
            endTime: 1712185200,
          },
        ],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712224800,
            endTime: 1712228400,
          },
          {
            startTime: 1712228400,
            endTime: 1712232000,
          },
          {
            startTime: 1712232000,
            endTime: 1712235600,
          },
          {
            startTime: 1712239200,
            endTime: 1712242800,
          },
          {
            startTime: 1712246400,
            endTime: 1712250000,
          },
          {
            startTime: 1712257200,
            endTime: 1712260800,
          },
        ],
      },
    ],
    schedulePreference: ['Evening', 'Early Morning', 'Afternoon', 'Morning'],
    gender: 'female',
    visitType: {
      value: 'inPerson',
      label: 'In-person visits only',
    },
    languageSpoken: ['English', 'finnish'],
  },
  {
    id: 25,
    photo: '/assets/images/doctors/doctor31.jpg',
    name: 'Dr. Olivia Taylor',
    specialty: 'Dermatologist',
    sponsored: false,
    rating: 5.0,
    reviews: 379,
    loyalPatients: 12,
    distance: 1.7,
    insurance: ['Blue Cross Blue Shield (BCBS)', 'Aetna'],
    address: {
      streetAddress: '789 Oak Street',
      city: 'Seattle',
      state: 'WA',
      postalCode: '98101',
      latitude: 47.610763395313455,
      longitude: -122.3361878,
    },
    inNetwork: true,
    newPatientAppointments: true,
    highlyRecommended: true,
    excellentWaitTime: false,
    examsAvailable: ['Skin Cancer'],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711098000,
            endTime: 1711101600,
          },
          {
            startTime: 1711101600,
            endTime: 1711105200,
          },
          {
            startTime: 1711105200,
            endTime: 1711108800,
          },
          {
            startTime: 1711112400,
            endTime: 1711116000,
          },
          {
            startTime: 1711116000,
            endTime: 1711119600,
          },
          {
            startTime: 1711119600,
            endTime: 1711123200,
          },
        ],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711184400,
            endTime: 1711188000,
          },
          {
            startTime: 1711188000,
            endTime: 1711191600,
          },
          {
            startTime: 1711191600,
            endTime: 1711195200,
          },
          {
            startTime: 1711195200,
            endTime: 1711198800,
          },
          {
            startTime: 1711198800,
            endTime: 1711202400,
          },
          {
            startTime: 1711202400,
            endTime: 1711206000,
          },
        ],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711270800,
            endTime: 1711274400,
          },
          {
            startTime: 1711278000,
            endTime: 1711281600,
          },
          {
            startTime: 1711281600,
            endTime: 1711285200,
          },
          {
            startTime: 1711292400,
            endTime: 1711296000,
          },
          {
            startTime: 1711299600,
            endTime: 1711303200,
          },
          {
            startTime: 1711306800,
            endTime: 1711310400,
          },
        ],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711357200,
            endTime: 1711360800,
          },
          {
            startTime: 1711360800,
            endTime: 1711364400,
          },
          {
            startTime: 1711364400,
            endTime: 1711368000,
          },
          {
            startTime: 1711371600,
            endTime: 1711375200,
          },
          {
            startTime: 1711375200,
            endTime: 1711378800,
          },
          {
            startTime: 1711378800,
            endTime: 1711382400,
          },
        ],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711443600,
            endTime: 1711447200,
          },
          {
            startTime: 1711447200,
            endTime: 1711450800,
          },
          {
            startTime: 1711450800,
            endTime: 1711454400,
          },
          {
            startTime: 1711458000,
            endTime: 1711461600,
          },
          {
            startTime: 1711461600,
            endTime: 1711465200,
          },
          {
            startTime: 1711465200,
            endTime: 1711468800,
          },
        ],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711530000,
            endTime: 1711533600,
          },
          {
            startTime: 1711533600,
            endTime: 1711537200,
          },
          {
            startTime: 1711537200,
            endTime: 1711540800,
          },
          {
            startTime: 1711540800,
            endTime: 1711544400,
          },
          {
            startTime: 1711544400,
            endTime: 1711548000,
          },
          {
            startTime: 1711548000,
            endTime: 1711551600,
          },
        ],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711616400,
            endTime: 1711620000,
          },
          {
            startTime: 1711627200,
            endTime: 1711630800,
          },
          {
            startTime: 1711652400,
            endTime: 1711656000,
          },
          {
            startTime: 1711663200,
            endTime: 1711666800,
          },
        ],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711710000,
            endTime: 1711713600,
          },
          {
            startTime: 1711713600,
            endTime: 1711717200,
          },
          {
            startTime: 1711731600,
            endTime: 1711735200,
          },
          {
            startTime: 1711746000,
            endTime: 1711749600,
          },
        ],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711882800,
            endTime: 1711886400,
          },
          {
            startTime: 1711897200,
            endTime: 1711900800,
          },
          {
            startTime: 1711904400,
            endTime: 1711908000,
          },
          {
            startTime: 1711926000,
            endTime: 1711929600,
          },
        ],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711962000,
            endTime: 1711965600,
          },
          {
            startTime: 1711965600,
            endTime: 1711969200,
          },
          {
            startTime: 1711969200,
            endTime: 1711972800,
          },
          {
            startTime: 1711972800,
            endTime: 1711976400,
          },
          {
            startTime: 1711976400,
            endTime: 1711980000,
          },
          {
            startTime: 1711980000,
            endTime: 1711983600,
          },
        ],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1712142000,
            endTime: 1712145600,
          },
          {
            startTime: 1712156400,
            endTime: 1712160000,
          },
          {
            startTime: 1712163600,
            endTime: 1712167200,
          },
          {
            startTime: 1712178000,
            endTime: 1712181600,
          },
        ],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
    ],
    schedulePreference: ['Afternoon', 'Early Morning', 'Evening', 'Morning'],
    gender: 'female',
    visitType: {
      value: 'inPersonAndVideo',
      label: 'In-person and video visits',
    },
    languageSpoken: ['English'],
  },
  {
    id: 26,
    photo: '/assets/images/doctors/doctor32.jpg',
    name: 'Dr. Daniel Martinez',
    specialty: 'Nephrologist',
    sponsored: true,
    rating: 4.9,
    reviews: 412,
    loyalPatients: 138,
    distance: 2.3,
    insurance: [
      'UnitedHealthcare',
      'Cigna',
      'Empire Blue Cross Blue Shield (Health)',
    ],
    address: {
      streetAddress: '456 Maple Avenue',
      city: 'Denver',
      state: 'CO',
      postalCode: '80201',
      latitude: 39.749676,
      longitude: -104.98986,
    },
    inNetwork: false,
    newPatientAppointments: false,
    highlyRecommended: true,
    excellentWaitTime: true,
    examsAvailable: ['Resuscitation'],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711098000,
            endTime: 1711101600,
          },
          {
            startTime: 1711105200,
            endTime: 1711108800,
          },
          {
            startTime: 1711108800,
            endTime: 1711112400,
          },
          {
            startTime: 1711119600,
            endTime: 1711123200,
          },
          {
            startTime: 1711130400,
            endTime: 1711134000,
          },
          {
            startTime: 1711134000,
            endTime: 1711137600,
          },
        ],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711184400,
            endTime: 1711188000,
          },
          {
            startTime: 1711188000,
            endTime: 1711191600,
          },
          {
            startTime: 1711191600,
            endTime: 1711195200,
          },
          {
            startTime: 1711195200,
            endTime: 1711198800,
          },
          {
            startTime: 1711198800,
            endTime: 1711202400,
          },
          {
            startTime: 1711202400,
            endTime: 1711206000,
          },
        ],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711360800,
            endTime: 1711364400,
          },
          {
            startTime: 1711364400,
            endTime: 1711368000,
          },
          {
            startTime: 1711375200,
            endTime: 1711378800,
          },
          {
            startTime: 1711378800,
            endTime: 1711382400,
          },
          {
            startTime: 1711382400,
            endTime: 1711386000,
          },
          {
            startTime: 1711393200,
            endTime: 1711396800,
          },
        ],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711447200,
            endTime: 1711450800,
          },
          {
            startTime: 1711450800,
            endTime: 1711454400,
          },
          {
            startTime: 1711458000,
            endTime: 1711461600,
          },
          {
            startTime: 1711465200,
            endTime: 1711468800,
          },
          {
            startTime: 1711468800,
            endTime: 1711472400,
          },
          {
            startTime: 1711479600,
            endTime: 1711483200,
          },
        ],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711530000,
            endTime: 1711533600,
          },
          {
            startTime: 1711533600,
            endTime: 1711537200,
          },
          {
            startTime: 1711537200,
            endTime: 1711540800,
          },
          {
            startTime: 1711540800,
            endTime: 1711544400,
          },
          {
            startTime: 1711544400,
            endTime: 1711548000,
          },
          {
            startTime: 1711551600,
            endTime: 1711555200,
          },
        ],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711616400,
            endTime: 1711620000,
          },
          {
            startTime: 1711623600,
            endTime: 1711627200,
          },
          {
            startTime: 1711630800,
            endTime: 1711634400,
          },
          {
            startTime: 1711638000,
            endTime: 1711641600,
          },
          {
            startTime: 1711645200,
            endTime: 1711648800,
          },
          {
            startTime: 1711652400,
            endTime: 1711656000,
          },
        ],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711702800,
            endTime: 1711706400,
          },
          {
            startTime: 1711710000,
            endTime: 1711713600,
          },
          {
            startTime: 1711713600,
            endTime: 1711717200,
          },
          {
            startTime: 1711724400,
            endTime: 1711728000,
          },
          {
            startTime: 1711731600,
            endTime: 1711735200,
          },
          {
            startTime: 1711738800,
            endTime: 1711742400,
          },
        ],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711796400,
            endTime: 1711800000,
          },
          {
            startTime: 1711807200,
            endTime: 1711810800,
          },
          {
            startTime: 1711818000,
            endTime: 1711821600,
          },
          {
            startTime: 1711832400,
            endTime: 1711836000,
          },
        ],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711879200,
            endTime: 1711882800,
          },
          {
            startTime: 1711882800,
            endTime: 1711886400,
          },
          {
            startTime: 1711890000,
            endTime: 1711893600,
          },
          {
            startTime: 1711893600,
            endTime: 1711897200,
          },
          {
            startTime: 1711900800,
            endTime: 1711904400,
          },
          {
            startTime: 1711908000,
            endTime: 1711911600,
          },
        ],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711962000,
            endTime: 1711965600,
          },
          {
            startTime: 1711965600,
            endTime: 1711969200,
          },
          {
            startTime: 1711969200,
            endTime: 1711972800,
          },
          {
            startTime: 1711972800,
            endTime: 1711976400,
          },
          {
            startTime: 1711976400,
            endTime: 1711980000,
          },
          {
            startTime: 1711980000,
            endTime: 1711983600,
          },
        ],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712048400,
            endTime: 1712052000,
          },
          {
            startTime: 1712052000,
            endTime: 1712055600,
          },
          {
            startTime: 1712062800,
            endTime: 1712066400,
          },
          {
            startTime: 1712070000,
            endTime: 1712073600,
          },
          {
            startTime: 1712077200,
            endTime: 1712080800,
          },
          {
            startTime: 1712080800,
            endTime: 1712084400,
          },
        ],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1712138400,
            endTime: 1712142000,
          },
          {
            startTime: 1712149200,
            endTime: 1712152800,
          },
          {
            startTime: 1712170800,
            endTime: 1712174400,
          },
          {
            startTime: 1712174400,
            endTime: 1712178000,
          },
        ],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712221200,
            endTime: 1712224800,
          },
          {
            startTime: 1712224800,
            endTime: 1712228400,
          },
          {
            startTime: 1712228400,
            endTime: 1712232000,
          },
          {
            startTime: 1712232000,
            endTime: 1712235600,
          },
          {
            startTime: 1712235600,
            endTime: 1712239200,
          },
          {
            startTime: 1712239200,
            endTime: 1712242800,
          },
        ],
      },
    ],
    schedulePreference: ['Morning', 'Afternoon', 'Evening', 'Early Morning'],
    gender: 'male',
    visitType: {
      value: 'video',
      label: 'Video visits only',
    },
    languageSpoken: ['English'],
  },
  {
    id: 27,
    photo: '/assets/images/doctors/doctor33.jpg',
    name: 'Dr. Sophia Hernandez',
    specialty: 'Obstetrician/Gynecologist',
    sponsored: false,
    rating: 4.7,
    reviews: 351,
    loyalPatients: 11,
    distance: 1.9,
    insurance: [
      'AIG',
      'APWU',
      'ATRIO Health Plans',
      'AVMA Life',
      'Absolute Total Care',
    ],
    address: {
      streetAddress: '789 Elm Street',
      city: 'Atlanta',
      state: 'GA',
      postalCode: '30301',
      latitude: 33.759712,
      longitude: -84.390038,
    },
    inNetwork: true,
    newPatientAppointments: true,
    highlyRecommended: false,
    excellentWaitTime: false,
    examsAvailable: ['Breast Cancer', 'Endometrial Cancer', 'Ovarian Cancer'],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711098000,
            endTime: 1711101600,
          },
          {
            startTime: 1711105200,
            endTime: 1711108800,
          },
          {
            startTime: 1711112400,
            endTime: 1711116000,
          },
          {
            startTime: 1711119600,
            endTime: 1711123200,
          },
          {
            startTime: 1711130400,
            endTime: 1711134000,
          },
          {
            startTime: 1711134000,
            endTime: 1711137600,
          },
        ],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711184400,
            endTime: 1711188000,
          },
          {
            startTime: 1711188000,
            endTime: 1711191600,
          },
          {
            startTime: 1711198800,
            endTime: 1711202400,
          },
          {
            startTime: 1711206000,
            endTime: 1711209600,
          },
          {
            startTime: 1711213200,
            endTime: 1711216800,
          },
          {
            startTime: 1711220400,
            endTime: 1711224000,
          },
        ],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711364400,
            endTime: 1711368000,
          },
          {
            startTime: 1711371600,
            endTime: 1711375200,
          },
          {
            startTime: 1711393200,
            endTime: 1711396800,
          },
        ],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711443600,
            endTime: 1711447200,
          },
          {
            startTime: 1711447200,
            endTime: 1711450800,
          },
          {
            startTime: 1711450800,
            endTime: 1711454400,
          },
          {
            startTime: 1711454400,
            endTime: 1711458000,
          },
          {
            startTime: 1711458000,
            endTime: 1711461600,
          },
          {
            startTime: 1711461600,
            endTime: 1711465200,
          },
        ],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711616400,
            endTime: 1711620000,
          },
          {
            startTime: 1711620000,
            endTime: 1711623600,
          },
          {
            startTime: 1711623600,
            endTime: 1711627200,
          },
          {
            startTime: 1711627200,
            endTime: 1711630800,
          },
          {
            startTime: 1711630800,
            endTime: 1711634400,
          },
          {
            startTime: 1711634400,
            endTime: 1711638000,
          },
        ],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711710000,
            endTime: 1711713600,
          },
          {
            startTime: 1711713600,
            endTime: 1711717200,
          },
          {
            startTime: 1711731600,
            endTime: 1711735200,
          },
        ],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711875600,
            endTime: 1711879200,
          },
          {
            startTime: 1711879200,
            endTime: 1711882800,
          },
          {
            startTime: 1711882800,
            endTime: 1711886400,
          },
          {
            startTime: 1711886400,
            endTime: 1711890000,
          },
          {
            startTime: 1711890000,
            endTime: 1711893600,
          },
          {
            startTime: 1711893600,
            endTime: 1711897200,
          },
        ],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711962000,
            endTime: 1711965600,
          },
          {
            startTime: 1711965600,
            endTime: 1711969200,
          },
          {
            startTime: 1711969200,
            endTime: 1711972800,
          },
          {
            startTime: 1711972800,
            endTime: 1711976400,
          },
          {
            startTime: 1711980000,
            endTime: 1711983600,
          },
          {
            startTime: 1711983600,
            endTime: 1711987200,
          },
        ],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1712228400,
            endTime: 1712232000,
          },
          {
            startTime: 1712239200,
            endTime: 1712242800,
          },
          {
            startTime: 1712250000,
            endTime: 1712253600,
          },
        ],
      },
    ],
    schedulePreference: ['Afternoon', 'Morning', 'Early Morning'],
    gender: 'female',
    visitType: {
      value: 'inPerson',
      label: 'In-person visits only',
    },
    languageSpoken: ['English'],
  },
  {
    id: 28,
    photo: '/assets/images/doctors/doctor34.jpg',
    name: 'Dr. Benjamin Gonzalez',
    specialty: 'Orthopedic Surgeon',
    sponsored: false,
    rating: 4.8,
    reviews: 394,
    loyalPatients: 13,
    distance: 2.5,
    insurance: [
      'EmblemHealth (formerly known as GHI)',
      'HealthFirst (NY)',
      'AARP',
      'ACE',
    ],
    address: {
      streetAddress: '456 Pine Street',
      city: 'San Diego',
      state: 'CA',
      postalCode: '92101',
      latitude: 32.72083795954597,
      longitude: -117.16203482407889,
    },
    inNetwork: true,
    newPatientAppointments: true,
    highlyRecommended: true,
    excellentWaitTime: false,
    examsAvailable: ['Bronchitis'],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711220400,
            endTime: 1711224000,
          },
          {
            startTime: 1711231200,
            endTime: 1711234800,
          },
        ],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711389600,
            endTime: 1711393200,
          },
          {
            startTime: 1711396800,
            endTime: 1711400400,
          },
        ],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711468800,
            endTime: 1711472400,
          },
          {
            startTime: 1711472400,
            endTime: 1711476000,
          },
          {
            startTime: 1711490400,
            endTime: 1711494000,
          },
          {
            startTime: 1711494000,
            endTime: 1711497600,
          },
        ],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711641600,
            endTime: 1711645200,
          },
          {
            startTime: 1711645200,
            endTime: 1711648800,
          },
          {
            startTime: 1711648800,
            endTime: 1711652400,
          },
          {
            startTime: 1711652400,
            endTime: 1711656000,
          },
          {
            startTime: 1711656000,
            endTime: 1711659600,
          },
          {
            startTime: 1711659600,
            endTime: 1711663200,
          },
        ],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711728000,
            endTime: 1711731600,
          },
          {
            startTime: 1711738800,
            endTime: 1711742400,
          },
          {
            startTime: 1711742400,
            endTime: 1711746000,
          },
          {
            startTime: 1711746000,
            endTime: 1711749600,
          },
        ],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711900800,
            endTime: 1711904400,
          },
          {
            startTime: 1711904400,
            endTime: 1711908000,
          },
          {
            startTime: 1711908000,
            endTime: 1711911600,
          },
          {
            startTime: 1711915200,
            endTime: 1711918800,
          },
          {
            startTime: 1711918800,
            endTime: 1711922400,
          },
          {
            startTime: 1711922400,
            endTime: 1711926000,
          },
        ],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711987200,
            endTime: 1711990800,
          },
          {
            startTime: 1711990800,
            endTime: 1711994400,
          },
          {
            startTime: 1711994400,
            endTime: 1711998000,
          },
          {
            startTime: 1711998000,
            endTime: 1712001600,
          },
          {
            startTime: 1712001600,
            endTime: 1712005200,
          },
          {
            startTime: 1712005200,
            endTime: 1712008800,
          },
        ],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712073600,
            endTime: 1712077200,
          },
          {
            startTime: 1712077200,
            endTime: 1712080800,
          },
          {
            startTime: 1712080800,
            endTime: 1712084400,
          },
          {
            startTime: 1712084400,
            endTime: 1712088000,
          },
          {
            startTime: 1712088000,
            endTime: 1712091600,
          },
          {
            startTime: 1712091600,
            endTime: 1712095200,
          },
        ],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1712160000,
            endTime: 1712163600,
          },
          {
            startTime: 1712163600,
            endTime: 1712167200,
          },
          {
            startTime: 1712174400,
            endTime: 1712178000,
          },
          {
            startTime: 1712181600,
            endTime: 1712185200,
          },
        ],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1712246400,
            endTime: 1712250000,
          },
          {
            startTime: 1712250000,
            endTime: 1712253600,
          },
          {
            startTime: 1712260800,
            endTime: 1712264400,
          },
          {
            startTime: 1712271600,
            endTime: 1712275200,
          },
        ],
      },
    ],
    schedulePreference: ['Evening', 'Afternoon'],
    gender: 'male',
    visitType: {
      value: 'inPersonAndVideo',
      label: 'In-person and video visits',
    },
    languageSpoken: ['English'],
  },
  {
    id: 29,
    photo: '/assets/images/doctors/doctor35.jpg',
    name: 'Dr. Sophia Rodriguez',
    specialty: 'Pediatrician',
    sponsored: true,
    rating: 4.9,
    reviews: 428,
    loyalPatients: 142,
    distance: 1.2,
    insurance: [
      'Access Medicare (NY)',
      'Accountable Health Plan of Ohio',
      'Advanced Health',
      'AdvantageMD',
      'Advantica',
      'Advent Health',
    ],
    address: {
      streetAddress: '789 Cedar Avenue',
      city: 'Phoenix',
      state: 'AZ',
      postalCode: '85001',
      latitude: 33.449869,
      longitude: -112.069943,
    },
    inNetwork: false,
    newPatientAppointments: true,
    highlyRecommended: true,
    excellentWaitTime: true,
    examsAvailable: ['Pediatric Care'],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711112400,
            endTime: 1711116000,
          },
          {
            startTime: 1711116000,
            endTime: 1711119600,
          },
          {
            startTime: 1711119600,
            endTime: 1711123200,
          },
          {
            startTime: 1711141200,
            endTime: 1711144800,
          },
          {
            startTime: 1711144800,
            endTime: 1711148400,
          },
          {
            startTime: 1711148400,
            endTime: 1711152000,
          },
        ],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711281600,
            endTime: 1711285200,
          },
          {
            startTime: 1711285200,
            endTime: 1711288800,
          },
          {
            startTime: 1711288800,
            endTime: 1711292400,
          },
          {
            startTime: 1711292400,
            endTime: 1711296000,
          },
          {
            startTime: 1711310400,
            endTime: 1711314000,
          },
          {
            startTime: 1711314000,
            endTime: 1711317600,
          },
        ],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711368000,
            endTime: 1711371600,
          },
          {
            startTime: 1711371600,
            endTime: 1711375200,
          },
          {
            startTime: 1711378800,
            endTime: 1711382400,
          },
          {
            startTime: 1711396800,
            endTime: 1711400400,
          },
          {
            startTime: 1711400400,
            endTime: 1711404000,
          },
          {
            startTime: 1711404000,
            endTime: 1711407600,
          },
        ],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711461600,
            endTime: 1711465200,
          },
          {
            startTime: 1711465200,
            endTime: 1711468800,
          },
          {
            startTime: 1711486800,
            endTime: 1711490400,
          },
          {
            startTime: 1711494000,
            endTime: 1711497600,
          },
        ],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711551600,
            endTime: 1711555200,
          },
          {
            startTime: 1711576800,
            endTime: 1711580400,
          },
        ],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711627200,
            endTime: 1711630800,
          },
          {
            startTime: 1711634400,
            endTime: 1711638000,
          },
          {
            startTime: 1711638000,
            endTime: 1711641600,
          },
          {
            startTime: 1711659600,
            endTime: 1711663200,
          },
          {
            startTime: 1711663200,
            endTime: 1711666800,
          },
          {
            startTime: 1711666800,
            endTime: 1711670400,
          },
        ],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711713600,
            endTime: 1711717200,
          },
          {
            startTime: 1711717200,
            endTime: 1711720800,
          },
          {
            startTime: 1711720800,
            endTime: 1711724400,
          },
          {
            startTime: 1711724400,
            endTime: 1711728000,
          },
          {
            startTime: 1711742400,
            endTime: 1711746000,
          },
          {
            startTime: 1711746000,
            endTime: 1711749600,
          },
        ],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711800000,
            endTime: 1711803600,
          },
          {
            startTime: 1711803600,
            endTime: 1711807200,
          },
          {
            startTime: 1711807200,
            endTime: 1711810800,
          },
          {
            startTime: 1711828800,
            endTime: 1711832400,
          },
          {
            startTime: 1711836000,
            endTime: 1711839600,
          },
          {
            startTime: 1711839600,
            endTime: 1711843200,
          },
        ],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711893600,
            endTime: 1711897200,
          },
          {
            startTime: 1711922400,
            endTime: 1711926000,
          },
        ],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711972800,
            endTime: 1711976400,
          },
          {
            startTime: 1711976400,
            endTime: 1711980000,
          },
          {
            startTime: 1711983600,
            endTime: 1711987200,
          },
          {
            startTime: 1712001600,
            endTime: 1712005200,
          },
          {
            startTime: 1712008800,
            endTime: 1712012400,
          },
          {
            startTime: 1712012400,
            endTime: 1712016000,
          },
        ],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712059200,
            endTime: 1712062800,
          },
          {
            startTime: 1712062800,
            endTime: 1712066400,
          },
          {
            startTime: 1712070000,
            endTime: 1712073600,
          },
          {
            startTime: 1712088000,
            endTime: 1712091600,
          },
          {
            startTime: 1712091600,
            endTime: 1712095200,
          },
          {
            startTime: 1712098800,
            endTime: 1712102400,
          },
        ],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1712145600,
            endTime: 1712149200,
          },
          {
            startTime: 1712156400,
            endTime: 1712160000,
          },
          {
            startTime: 1712178000,
            endTime: 1712181600,
          },
          {
            startTime: 1712185200,
            endTime: 1712188800,
          },
        ],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1712235600,
            endTime: 1712239200,
          },
          {
            startTime: 1712271600,
            endTime: 1712275200,
          },
        ],
      },
    ],
    schedulePreference: ['Morning', 'Evening'],
    gender: 'female',
    visitType: {
      value: 'inPerson',
      label: 'In-person visits only',
    },
    languageSpoken: ['English'],
  },
  {
    id: 30,
    photo: '/assets/images/doctors/doctor36.jpg',
    name: 'Dr. Matthew Perez',
    specialty: 'Psychiatrist',
    sponsored: false,
    rating: 4.7,
    reviews: 367,
    loyalPatients: 122,
    distance: 2.1,
    insurance: ['Blue Cross Blue Shield (BCBS)', 'Aetna'],
    address: {
      streetAddress: '456 Walnut Avenue',
      city: 'Dallas',
      state: 'TX',
      postalCode: '75201',
      latitude: 32.785430289958164,
      longitude: -96.79856853075313,
    },
    inNetwork: true,
    newPatientAppointments: false,
    highlyRecommended: false,
    excellentWaitTime: false,
    examsAvailable: ['Anxiety', 'Depression', 'Opioid Dependency'],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711098000,
            endTime: 1711101600,
          },
          {
            startTime: 1711101600,
            endTime: 1711105200,
          },
          {
            startTime: 1711105200,
            endTime: 1711108800,
          },
          {
            startTime: 1711108800,
            endTime: 1711112400,
          },
          {
            startTime: 1711112400,
            endTime: 1711116000,
          },
          {
            startTime: 1711116000,
            endTime: 1711119600,
          },
        ],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711184400,
            endTime: 1711188000,
          },
          {
            startTime: 1711188000,
            endTime: 1711191600,
          },
          {
            startTime: 1711195200,
            endTime: 1711198800,
          },
          {
            startTime: 1711198800,
            endTime: 1711202400,
          },
        ],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711270800,
            endTime: 1711274400,
          },
          {
            startTime: 1711274400,
            endTime: 1711278000,
          },
          {
            startTime: 1711281600,
            endTime: 1711285200,
          },
          {
            startTime: 1711285200,
            endTime: 1711288800,
          },
        ],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711364400,
            endTime: 1711368000,
          },
          {
            startTime: 1711371600,
            endTime: 1711375200,
          },
        ],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711443600,
            endTime: 1711447200,
          },
          {
            startTime: 1711447200,
            endTime: 1711450800,
          },
          {
            startTime: 1711450800,
            endTime: 1711454400,
          },
          {
            startTime: 1711454400,
            endTime: 1711458000,
          },
          {
            startTime: 1711458000,
            endTime: 1711461600,
          },
          {
            startTime: 1711461600,
            endTime: 1711465200,
          },
        ],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711530000,
            endTime: 1711533600,
          },
          {
            startTime: 1711537200,
            endTime: 1711540800,
          },
          {
            startTime: 1711540800,
            endTime: 1711544400,
          },
          {
            startTime: 1711548000,
            endTime: 1711551600,
          },
        ],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711710000,
            endTime: 1711713600,
          },
          {
            startTime: 1711717200,
            endTime: 1711720800,
          },
        ],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711789200,
            endTime: 1711792800,
          },
          {
            startTime: 1711803600,
            endTime: 1711807200,
          },
        ],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711875600,
            endTime: 1711879200,
          },
          {
            startTime: 1711879200,
            endTime: 1711882800,
          },
          {
            startTime: 1711882800,
            endTime: 1711886400,
          },
          {
            startTime: 1711886400,
            endTime: 1711890000,
          },
          {
            startTime: 1711890000,
            endTime: 1711893600,
          },
          {
            startTime: 1711897200,
            endTime: 1711900800,
          },
        ],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711962000,
            endTime: 1711965600,
          },
          {
            startTime: 1711965600,
            endTime: 1711969200,
          },
          {
            startTime: 1711969200,
            endTime: 1711972800,
          },
          {
            startTime: 1711972800,
            endTime: 1711976400,
          },
          {
            startTime: 1711976400,
            endTime: 1711980000,
          },
          {
            startTime: 1711980000,
            endTime: 1711983600,
          },
        ],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1712052000,
            endTime: 1712055600,
          },
          {
            startTime: 1712059200,
            endTime: 1712062800,
          },
        ],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712134800,
            endTime: 1712138400,
          },
          {
            startTime: 1712138400,
            endTime: 1712142000,
          },
          {
            startTime: 1712142000,
            endTime: 1712145600,
          },
          {
            startTime: 1712145600,
            endTime: 1712149200,
          },
          {
            startTime: 1712149200,
            endTime: 1712152800,
          },
          {
            startTime: 1712152800,
            endTime: 1712156400,
          },
        ],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712221200,
            endTime: 1712224800,
          },
          {
            startTime: 1712224800,
            endTime: 1712228400,
          },
          {
            startTime: 1712228400,
            endTime: 1712232000,
          },
          {
            startTime: 1712232000,
            endTime: 1712235600,
          },
          {
            startTime: 1712235600,
            endTime: 1712239200,
          },
          {
            startTime: 1712239200,
            endTime: 1712242800,
          },
        ],
      },
    ],
    schedulePreference: ['Morning', 'Early Morning'],
    gender: 'male',
    visitType: {
      value: 'inPersonAndVideo',
      label: 'In-person and video visits',
    },
    languageSpoken: ['English', 'greek'],
  },
  {
    id: 31,
    photo: '/assets/images/doctors/doctor38.jpg',
    name: 'Dr. Ethan Ramirez',
    specialty: 'Infectious Disease Specialist',
    sponsored: false,
    rating: 4.7,
    reviews: 324,
    loyalPatients: 108,
    distance: 2.8,
    insurance: ['Blue Cross Blue Shield (BCBS)', 'Aetna'],
    address: {
      streetAddress: '456 Maple Avenue',
      city: 'Austin',
      state: 'TX',
      postalCode: '78701',
      latitude: 30.270344762826983,
      longitude: -97.74299830357963,
    },
    inNetwork: true,
    newPatientAppointments: true,
    highlyRecommended: false,
    excellentWaitTime: false,
    examsAvailable: ['Hepatitis', 'COVID-19'],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711195200,
            endTime: 1711198800,
          },
          {
            startTime: 1711198800,
            endTime: 1711202400,
          },
          {
            startTime: 1711206000,
            endTime: 1711209600,
          },
          {
            startTime: 1711209600,
            endTime: 1711213200,
          },
          {
            startTime: 1711216800,
            endTime: 1711220400,
          },
          {
            startTime: 1711220400,
            endTime: 1711224000,
          },
        ],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711540800,
            endTime: 1711544400,
          },
          {
            startTime: 1711551600,
            endTime: 1711555200,
          },
          {
            startTime: 1711558800,
            endTime: 1711562400,
          },
          {
            startTime: 1711562400,
            endTime: 1711566000,
          },
          {
            startTime: 1711576800,
            endTime: 1711580400,
          },
          {
            startTime: 1711580400,
            endTime: 1711584000,
          },
        ],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711713600,
            endTime: 1711717200,
          },
          {
            startTime: 1711717200,
            endTime: 1711720800,
          },
          {
            startTime: 1711720800,
            endTime: 1711724400,
          },
          {
            startTime: 1711724400,
            endTime: 1711728000,
          },
          {
            startTime: 1711728000,
            endTime: 1711731600,
          },
          {
            startTime: 1711731600,
            endTime: 1711735200,
          },
        ],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711800000,
            endTime: 1711803600,
          },
          {
            startTime: 1711803600,
            endTime: 1711807200,
          },
          {
            startTime: 1711807200,
            endTime: 1711810800,
          },
          {
            startTime: 1711814400,
            endTime: 1711818000,
          },
          {
            startTime: 1711821600,
            endTime: 1711825200,
          },
          {
            startTime: 1711825200,
            endTime: 1711828800,
          },
        ],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711976400,
            endTime: 1711980000,
          },
          {
            startTime: 1711980000,
            endTime: 1711983600,
          },
          {
            startTime: 1711990800,
            endTime: 1711994400,
          },
          {
            startTime: 1711994400,
            endTime: 1711998000,
          },
          {
            startTime: 1712001600,
            endTime: 1712005200,
          },
          {
            startTime: 1712012400,
            endTime: 1712016000,
          },
        ],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712066400,
            endTime: 1712070000,
          },
          {
            startTime: 1712070000,
            endTime: 1712073600,
          },
          {
            startTime: 1712077200,
            endTime: 1712080800,
          },
          {
            startTime: 1712084400,
            endTime: 1712088000,
          },
          {
            startTime: 1712088000,
            endTime: 1712091600,
          },
          {
            startTime: 1712095200,
            endTime: 1712098800,
          },
        ],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1712152800,
            endTime: 1712156400,
          },
          {
            startTime: 1712160000,
            endTime: 1712163600,
          },
          {
            startTime: 1712178000,
            endTime: 1712181600,
          },
        ],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712232000,
            endTime: 1712235600,
          },
          {
            startTime: 1712239200,
            endTime: 1712242800,
          },
          {
            startTime: 1712246400,
            endTime: 1712250000,
          },
          {
            startTime: 1712257200,
            endTime: 1712260800,
          },
          {
            startTime: 1712264400,
            endTime: 1712268000,
          },
          {
            startTime: 1712271600,
            endTime: 1712275200,
          },
        ],
      },
    ],
    schedulePreference: ['Evening', 'Morning', 'Afternoon'],
    gender: 'male',
    visitType: {
      value: 'inPersonAndVideo',
      label: 'In-person and video visits',
    },
    languageSpoken: ['English'],
  },
  {
    id: 32,
    photo: '/assets/images/doctors/doctor39.jpg',
    name: 'Dr. Sophia Rivera',
    specialty: 'Geriatric Medicine',
    sponsored: true,
    rating: 4.9,
    reviews: 416,
    loyalPatients: 139,
    distance: 1.4,
    insurance: [
      'UnitedHealthcare',
      'Cigna',
      'Empire Blue Cross Blue Shield (Health)',
    ],
    address: {
      streetAddress: '789 Elm Street',
      city: 'Jacksonville',
      state: 'FL',
      postalCode: '32201',
      latitude: 30.343149,
      longitude: -81.654264,
    },
    inNetwork: false,
    newPatientAppointments: false,
    highlyRecommended: true,
    excellentWaitTime: true,
    examsAvailable: ['Senile Dementia'],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711108800,
            endTime: 1711112400,
          },
          {
            startTime: 1711112400,
            endTime: 1711116000,
          },
          {
            startTime: 1711119600,
            endTime: 1711123200,
          },
          {
            startTime: 1711126800,
            endTime: 1711130400,
          },
          {
            startTime: 1711130400,
            endTime: 1711134000,
          },
          {
            startTime: 1711134000,
            endTime: 1711137600,
          },
        ],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711195200,
            endTime: 1711198800,
          },
          {
            startTime: 1711198800,
            endTime: 1711202400,
          },
          {
            startTime: 1711202400,
            endTime: 1711206000,
          },
          {
            startTime: 1711209600,
            endTime: 1711213200,
          },
          {
            startTime: 1711216800,
            endTime: 1711220400,
          },
          {
            startTime: 1711220400,
            endTime: 1711224000,
          },
        ],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711281600,
            endTime: 1711285200,
          },
          {
            startTime: 1711299600,
            endTime: 1711303200,
          },
        ],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711368000,
            endTime: 1711371600,
          },
          {
            startTime: 1711371600,
            endTime: 1711375200,
          },
          {
            startTime: 1711375200,
            endTime: 1711378800,
          },
          {
            startTime: 1711382400,
            endTime: 1711386000,
          },
          {
            startTime: 1711386000,
            endTime: 1711389600,
          },
          {
            startTime: 1711393200,
            endTime: 1711396800,
          },
        ],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711458000,
            endTime: 1711461600,
          },
          {
            startTime: 1711461600,
            endTime: 1711465200,
          },
          {
            startTime: 1711468800,
            endTime: 1711472400,
          },
          {
            startTime: 1711479600,
            endTime: 1711483200,
          },
        ],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711544400,
            endTime: 1711548000,
          },
          {
            startTime: 1711551600,
            endTime: 1711555200,
          },
          {
            startTime: 1711555200,
            endTime: 1711558800,
          },
          {
            startTime: 1711558800,
            endTime: 1711562400,
          },
        ],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711627200,
            endTime: 1711630800,
          },
          {
            startTime: 1711630800,
            endTime: 1711634400,
          },
          {
            startTime: 1711634400,
            endTime: 1711638000,
          },
          {
            startTime: 1711638000,
            endTime: 1711641600,
          },
          {
            startTime: 1711641600,
            endTime: 1711645200,
          },
          {
            startTime: 1711645200,
            endTime: 1711648800,
          },
        ],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711720800,
            endTime: 1711724400,
          },
          {
            startTime: 1711724400,
            endTime: 1711728000,
          },
          {
            startTime: 1711731600,
            endTime: 1711735200,
          },
          {
            startTime: 1711735200,
            endTime: 1711738800,
          },
        ],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711800000,
            endTime: 1711803600,
          },
          {
            startTime: 1711818000,
            endTime: 1711821600,
          },
        ],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711886400,
            endTime: 1711890000,
          },
          {
            startTime: 1711890000,
            endTime: 1711893600,
          },
          {
            startTime: 1711897200,
            endTime: 1711900800,
          },
          {
            startTime: 1711900800,
            endTime: 1711904400,
          },
          {
            startTime: 1711908000,
            endTime: 1711911600,
          },
          {
            startTime: 1711911600,
            endTime: 1711915200,
          },
        ],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711972800,
            endTime: 1711976400,
          },
          {
            startTime: 1711983600,
            endTime: 1711987200,
          },
          {
            startTime: 1711994400,
            endTime: 1711998000,
          },
          {
            startTime: 1711998000,
            endTime: 1712001600,
          },
        ],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712232000,
            endTime: 1712235600,
          },
          {
            startTime: 1712235600,
            endTime: 1712239200,
          },
          {
            startTime: 1712242800,
            endTime: 1712246400,
          },
          {
            startTime: 1712250000,
            endTime: 1712253600,
          },
          {
            startTime: 1712253600,
            endTime: 1712257200,
          },
          {
            startTime: 1712257200,
            endTime: 1712260800,
          },
        ],
      },
    ],
    schedulePreference: ['Morning', 'Afternoon'],
    gender: 'female',
    visitType: {
      value: 'inPerson',
      label: 'In-person visits only',
    },
    languageSpoken: ['English'],
  },
  {
    id: 33,
    photo: '/assets/images/doctors/doctor40.jpg',
    name: 'Dr. Jacob Flores',
    specialty: 'Allergist/Immunologist',
    sponsored: false,
    rating: 4.8,
    reviews: 379,
    loyalPatients: 126,
    distance: 2.2,
    insurance: [
      'AIG',
      'APWU',
      'ATRIO Health Plans',
      'AVMA Life',
      'Absolute Total Care',
    ],
    address: {
      streetAddress: '456 Pine Street',
      city: 'Indianapolis',
      state: 'IN',
      postalCode: '46201',
      latitude: 39.7751499862615,
      longitude: -86.10805157100364,
    },
    inNetwork: true,
    newPatientAppointments: true,
    highlyRecommended: false,
    excellentWaitTime: false,
    examsAvailable: ['Anemia'],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711123200,
            endTime: 1711126800,
          },
          {
            startTime: 1711126800,
            endTime: 1711130400,
          },
          {
            startTime: 1711130400,
            endTime: 1711134000,
          },
          {
            startTime: 1711134000,
            endTime: 1711137600,
          },
        ],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711303200,
            endTime: 1711306800,
          },
          {
            startTime: 1711306800,
            endTime: 1711310400,
          },
        ],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711382400,
            endTime: 1711386000,
          },
          {
            startTime: 1711386000,
            endTime: 1711389600,
          },
          {
            startTime: 1711389600,
            endTime: 1711393200,
          },
          {
            startTime: 1711393200,
            endTime: 1711396800,
          },
        ],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711468800,
            endTime: 1711472400,
          },
          {
            startTime: 1711472400,
            endTime: 1711476000,
          },
          {
            startTime: 1711476000,
            endTime: 1711479600,
          },
          {
            startTime: 1711479600,
            endTime: 1711483200,
          },
        ],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711555200,
            endTime: 1711558800,
          },
          {
            startTime: 1711558800,
            endTime: 1711562400,
          },
          {
            startTime: 1711566000,
            endTime: 1711569600,
          },
        ],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 1,
        availableSpots: [
          {
            startTime: 1711652400,
            endTime: 1711656000,
          },
        ],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711728000,
            endTime: 1711731600,
          },
          {
            startTime: 1711731600,
            endTime: 1711735200,
          },
          {
            startTime: 1711735200,
            endTime: 1711738800,
          },
          {
            startTime: 1711738800,
            endTime: 1711742400,
          },
        ],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711900800,
            endTime: 1711904400,
          },
          {
            startTime: 1711908000,
            endTime: 1711911600,
          },
          {
            startTime: 1711911600,
            endTime: 1711915200,
          },
        ],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 1,
        availableSpots: [
          {
            startTime: 1711998000,
            endTime: 1712001600,
          },
        ],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1712073600,
            endTime: 1712077200,
          },
          {
            startTime: 1712080800,
            endTime: 1712084400,
          },
        ],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1712160000,
            endTime: 1712163600,
          },
          {
            startTime: 1712163600,
            endTime: 1712167200,
          },
          {
            startTime: 1712170800,
            endTime: 1712174400,
          },
        ],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1712246400,
            endTime: 1712250000,
          },
          {
            startTime: 1712250000,
            endTime: 1712253600,
          },
          {
            startTime: 1712253600,
            endTime: 1712257200,
          },
          {
            startTime: 1712257200,
            endTime: 1712260800,
          },
        ],
      },
    ],
    schedulePreference: ['Afternoon'],
    gender: 'male',
    visitType: {
      value: 'inPersonAndVideo',
      label: 'In-person and video visits',
    },
    languageSpoken: ['English', 'czech'],
  },
  {
    id: 34,
    photo: '/assets/images/doctors/doctor41.jpg',
    name: 'Dr. Isabella Gutierrez',
    specialty: 'Urologist',
    sponsored: false,
    rating: 4.7,
    reviews: 341,
    loyalPatients: 114,
    distance: 1.9,
    insurance: [
      'EmblemHealth (formerly known as GHI)',
      'HealthFirst (NY)',
      'AARP',
      'ACE',
    ],
    address: {
      streetAddress: '789 Cedar Avenue',
      city: 'Columbus',
      state: 'OH',
      postalCode: '43201',
      latitude: 39.98589270170104,
      longitude: -83.00837392264512,
    },
    inNetwork: true,
    newPatientAppointments: true,
    highlyRecommended: true,
    excellentWaitTime: false,
    examsAvailable: ['Prostate Cancer'],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711098000,
            endTime: 1711101600,
          },
          {
            startTime: 1711105200,
            endTime: 1711108800,
          },
          {
            startTime: 1711112400,
            endTime: 1711116000,
          },
          {
            startTime: 1711119600,
            endTime: 1711123200,
          },
          {
            startTime: 1711123200,
            endTime: 1711126800,
          },
          {
            startTime: 1711130400,
            endTime: 1711134000,
          },
        ],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711191600,
            endTime: 1711195200,
          },
          {
            startTime: 1711202400,
            endTime: 1711206000,
          },
          {
            startTime: 1711213200,
            endTime: 1711216800,
          },
          {
            startTime: 1711231200,
            endTime: 1711234800,
          },
        ],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711274400,
            endTime: 1711278000,
          },
          {
            startTime: 1711278000,
            endTime: 1711281600,
          },
          {
            startTime: 1711281600,
            endTime: 1711285200,
          },
          {
            startTime: 1711285200,
            endTime: 1711288800,
          },
          {
            startTime: 1711299600,
            endTime: 1711303200,
          },
          {
            startTime: 1711303200,
            endTime: 1711306800,
          },
        ],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711357200,
            endTime: 1711360800,
          },
          {
            startTime: 1711364400,
            endTime: 1711368000,
          },
          {
            startTime: 1711371600,
            endTime: 1711375200,
          },
          {
            startTime: 1711378800,
            endTime: 1711382400,
          },
          {
            startTime: 1711382400,
            endTime: 1711386000,
          },
          {
            startTime: 1711389600,
            endTime: 1711393200,
          },
        ],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711443600,
            endTime: 1711447200,
          },
          {
            startTime: 1711450800,
            endTime: 1711454400,
          },
          {
            startTime: 1711458000,
            endTime: 1711461600,
          },
          {
            startTime: 1711461600,
            endTime: 1711465200,
          },
          {
            startTime: 1711468800,
            endTime: 1711472400,
          },
          {
            startTime: 1711476000,
            endTime: 1711479600,
          },
        ],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711530000,
            endTime: 1711533600,
          },
          {
            startTime: 1711533600,
            endTime: 1711537200,
          },
          {
            startTime: 1711537200,
            endTime: 1711540800,
          },
          {
            startTime: 1711540800,
            endTime: 1711544400,
          },
          {
            startTime: 1711544400,
            endTime: 1711548000,
          },
          {
            startTime: 1711548000,
            endTime: 1711551600,
          },
        ],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711616400,
            endTime: 1711620000,
          },
          {
            startTime: 1711620000,
            endTime: 1711623600,
          },
          {
            startTime: 1711623600,
            endTime: 1711627200,
          },
          {
            startTime: 1711627200,
            endTime: 1711630800,
          },
          {
            startTime: 1711630800,
            endTime: 1711634400,
          },
          {
            startTime: 1711634400,
            endTime: 1711638000,
          },
        ],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711702800,
            endTime: 1711706400,
          },
          {
            startTime: 1711720800,
            endTime: 1711724400,
          },
          {
            startTime: 1711738800,
            endTime: 1711742400,
          },
          {
            startTime: 1711749600,
            endTime: 1711753200,
          },
        ],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711792800,
            endTime: 1711796400,
          },
          {
            startTime: 1711796400,
            endTime: 1711800000,
          },
          {
            startTime: 1711803600,
            endTime: 1711807200,
          },
          {
            startTime: 1711810800,
            endTime: 1711814400,
          },
          {
            startTime: 1711814400,
            endTime: 1711818000,
          },
          {
            startTime: 1711825200,
            endTime: 1711828800,
          },
        ],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711875600,
            endTime: 1711879200,
          },
          {
            startTime: 1711882800,
            endTime: 1711886400,
          },
          {
            startTime: 1711886400,
            endTime: 1711890000,
          },
          {
            startTime: 1711890000,
            endTime: 1711893600,
          },
          {
            startTime: 1711904400,
            endTime: 1711908000,
          },
          {
            startTime: 1711911600,
            endTime: 1711915200,
          },
        ],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712048400,
            endTime: 1712052000,
          },
          {
            startTime: 1712052000,
            endTime: 1712055600,
          },
          {
            startTime: 1712055600,
            endTime: 1712059200,
          },
          {
            startTime: 1712059200,
            endTime: 1712062800,
          },
          {
            startTime: 1712062800,
            endTime: 1712066400,
          },
          {
            startTime: 1712066400,
            endTime: 1712070000,
          },
        ],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712134800,
            endTime: 1712138400,
          },
          {
            startTime: 1712138400,
            endTime: 1712142000,
          },
          {
            startTime: 1712142000,
            endTime: 1712145600,
          },
          {
            startTime: 1712145600,
            endTime: 1712149200,
          },
          {
            startTime: 1712149200,
            endTime: 1712152800,
          },
          {
            startTime: 1712152800,
            endTime: 1712156400,
          },
        ],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
    ],
    schedulePreference: ['Morning', 'Afternoon', 'Early Morning', 'Evening'],
    gender: 'female',
    visitType: {
      value: 'inPerson',
      label: 'In-person visits only',
    },
    languageSpoken: ['English', 'hebrew'],
  },
  {
    id: 35,
    photo: '/assets/images/doctors/doctor42.jpg',
    name: 'Dr. Liam Sanchez',
    specialty: 'Ophthalmologist',
    sponsored: true,
    rating: 4.9,
    reviews: 432,
    loyalPatients: 144,
    distance: 1.1,
    insurance: [
      'UnitedHealthcare',
      'Cigna',
      'Empire Blue Cross Blue Shield (Health)',
    ],
    address: {
      streetAddress: '456 Walnut Avenue',
      city: 'Charlotte',
      state: 'NC',
      postalCode: '28201',
      latitude: 35.229321,
      longitude: -80.924812,
    },
    inNetwork: false,
    newPatientAppointments: true,
    highlyRecommended: true,
    excellentWaitTime: true,
    examsAvailable: ['Physical therapy'],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711198800,
            endTime: 1711202400,
          },
          {
            startTime: 1711234800,
            endTime: 1711238400,
          },
        ],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711281600,
            endTime: 1711285200,
          },
          {
            startTime: 1711288800,
            endTime: 1711292400,
          },
          {
            startTime: 1711292400,
            endTime: 1711296000,
          },
          {
            startTime: 1711310400,
            endTime: 1711314000,
          },
          {
            startTime: 1711314000,
            endTime: 1711317600,
          },
          {
            startTime: 1711321200,
            endTime: 1711324800,
          },
        ],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711368000,
            endTime: 1711371600,
          },
          {
            startTime: 1711371600,
            endTime: 1711375200,
          },
          {
            startTime: 1711375200,
            endTime: 1711378800,
          },
          {
            startTime: 1711378800,
            endTime: 1711382400,
          },
          {
            startTime: 1711396800,
            endTime: 1711400400,
          },
          {
            startTime: 1711400400,
            endTime: 1711404000,
          },
        ],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711454400,
            endTime: 1711458000,
          },
          {
            startTime: 1711458000,
            endTime: 1711461600,
          },
          {
            startTime: 1711461600,
            endTime: 1711465200,
          },
          {
            startTime: 1711465200,
            endTime: 1711468800,
          },
          {
            startTime: 1711483200,
            endTime: 1711486800,
          },
          {
            startTime: 1711486800,
            endTime: 1711490400,
          },
        ],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711540800,
            endTime: 1711544400,
          },
          {
            startTime: 1711544400,
            endTime: 1711548000,
          },
          {
            startTime: 1711548000,
            endTime: 1711551600,
          },
          {
            startTime: 1711551600,
            endTime: 1711555200,
          },
          {
            startTime: 1711569600,
            endTime: 1711573200,
          },
          {
            startTime: 1711573200,
            endTime: 1711576800,
          },
        ],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711713600,
            endTime: 1711717200,
          },
          {
            startTime: 1711720800,
            endTime: 1711724400,
          },
          {
            startTime: 1711724400,
            endTime: 1711728000,
          },
          {
            startTime: 1711746000,
            endTime: 1711749600,
          },
          {
            startTime: 1711749600,
            endTime: 1711753200,
          },
          {
            startTime: 1711753200,
            endTime: 1711756800,
          },
        ],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711800000,
            endTime: 1711803600,
          },
          {
            startTime: 1711803600,
            endTime: 1711807200,
          },
          {
            startTime: 1711828800,
            endTime: 1711832400,
          },
          {
            startTime: 1711839600,
            endTime: 1711843200,
          },
        ],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1712062800,
            endTime: 1712066400,
          },
          {
            startTime: 1712088000,
            endTime: 1712091600,
          },
        ],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1712235600,
            endTime: 1712239200,
          },
          {
            startTime: 1712242800,
            endTime: 1712246400,
          },
          {
            startTime: 1712260800,
            endTime: 1712264400,
          },
          {
            startTime: 1712268000,
            endTime: 1712271600,
          },
        ],
      },
    ],
    schedulePreference: ['Evening', 'Morning'],
    gender: 'male',
    visitType: {
      value: 'inPerson',
      label: 'In-person visits only',
    },
    languageSpoken: ['English'],
  },
  {
    id: 36,
    photo: '/assets/images/doctors/doctor43.jpg',
    name: 'Dr. Mia Gomez',
    specialty: 'Otolaryngologist (ENT)',
    sponsored: false,
    rating: 4.8,
    reviews: 388,
    loyalPatients: 129,
    distance: 2.6,
    insurance: ['Blue Cross Blue Shield (BCBS)', 'Aetna'],
    address: {
      streetAddress: '789 Elm Street',
      city: 'Detroit',
      state: 'MI',
      postalCode: '48201',
      latitude: 42.34694712890485,
      longitude: -83.06093826068222,
    },
    inNetwork: true,
    newPatientAppointments: false,
    highlyRecommended: false,
    excellentWaitTime: false,
    examsAvailable: ['Ear, Nose, and Throat Conditions'],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711098000,
            endTime: 1711101600,
          },
          {
            startTime: 1711101600,
            endTime: 1711105200,
          },
          {
            startTime: 1711105200,
            endTime: 1711108800,
          },
          {
            startTime: 1711108800,
            endTime: 1711112400,
          },
          {
            startTime: 1711112400,
            endTime: 1711116000,
          },
          {
            startTime: 1711116000,
            endTime: 1711119600,
          },
        ],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711184400,
            endTime: 1711188000,
          },
          {
            startTime: 1711206000,
            endTime: 1711209600,
          },
          {
            startTime: 1711209600,
            endTime: 1711213200,
          },
          {
            startTime: 1711234800,
            endTime: 1711238400,
          },
        ],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711270800,
            endTime: 1711274400,
          },
          {
            startTime: 1711274400,
            endTime: 1711278000,
          },
          {
            startTime: 1711278000,
            endTime: 1711281600,
          },
          {
            startTime: 1711285200,
            endTime: 1711288800,
          },
          {
            startTime: 1711288800,
            endTime: 1711292400,
          },
          {
            startTime: 1711292400,
            endTime: 1711296000,
          },
        ],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711357200,
            endTime: 1711360800,
          },
          {
            startTime: 1711364400,
            endTime: 1711368000,
          },
          {
            startTime: 1711375200,
            endTime: 1711378800,
          },
          {
            startTime: 1711378800,
            endTime: 1711382400,
          },
          {
            startTime: 1711382400,
            endTime: 1711386000,
          },
          {
            startTime: 1711393200,
            endTime: 1711396800,
          },
        ],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711530000,
            endTime: 1711533600,
          },
          {
            startTime: 1711533600,
            endTime: 1711537200,
          },
          {
            startTime: 1711537200,
            endTime: 1711540800,
          },
          {
            startTime: 1711540800,
            endTime: 1711544400,
          },
          {
            startTime: 1711544400,
            endTime: 1711548000,
          },
          {
            startTime: 1711548000,
            endTime: 1711551600,
          },
        ],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711702800,
            endTime: 1711706400,
          },
          {
            startTime: 1711706400,
            endTime: 1711710000,
          },
          {
            startTime: 1711710000,
            endTime: 1711713600,
          },
          {
            startTime: 1711713600,
            endTime: 1711717200,
          },
          {
            startTime: 1711717200,
            endTime: 1711720800,
          },
          {
            startTime: 1711720800,
            endTime: 1711724400,
          },
        ],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711965600,
            endTime: 1711969200,
          },
          {
            startTime: 1711969200,
            endTime: 1711972800,
          },
          {
            startTime: 1711972800,
            endTime: 1711976400,
          },
          {
            startTime: 1711976400,
            endTime: 1711980000,
          },
          {
            startTime: 1711987200,
            endTime: 1711990800,
          },
          {
            startTime: 1711994400,
            endTime: 1711998000,
          },
        ],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712048400,
            endTime: 1712052000,
          },
          {
            startTime: 1712052000,
            endTime: 1712055600,
          },
          {
            startTime: 1712055600,
            endTime: 1712059200,
          },
          {
            startTime: 1712059200,
            endTime: 1712062800,
          },
          {
            startTime: 1712062800,
            endTime: 1712066400,
          },
          {
            startTime: 1712066400,
            endTime: 1712070000,
          },
        ],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1712228400,
            endTime: 1712232000,
          },
          {
            startTime: 1712235600,
            endTime: 1712239200,
          },
          {
            startTime: 1712253600,
            endTime: 1712257200,
          },
          {
            startTime: 1712268000,
            endTime: 1712271600,
          },
        ],
      },
    ],
    schedulePreference: ['Early Morning', 'Evening', 'Morning', 'Afternoon'],
    gender: 'nonBinary',
    visitType: {
      value: 'inPerson',
      label: 'In-person visits only',
    },
    languageSpoken: ['English'],
  },
  {
    id: 37,
    photo: '/assets/images/doctors/doctor45.jpg',
    name: 'Dr. Ava Hernandez',
    specialty: 'Endocrinologist',
    sponsored: false,
    rating: 4.8,
    reviews: 402,
    loyalPatients: 134,
    distance: 2.1,
    insurance: [
      'Access Medicare (NY)',
      'Accountable Health Plan of Ohio',
      'Advanced Health',
      'AdvantageMD',
      'Advantica',
      'Advent Health',
    ],
    address: {
      streetAddress: '789 Oak Street',
      city: 'Baltimore',
      state: 'MD',
      postalCode: '21201',
      latitude: 39.295203033654055,
      longitude: -76.62181824213863,
    },
    inNetwork: true,
    newPatientAppointments: true,
    highlyRecommended: true,
    excellentWaitTime: false,
    examsAvailable: [
      'All Diabetes',
      'Diabetes Type 1',
      'Diabetes Type 2',
      'Acquired Hypothyroidism',
    ],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711105200,
            endTime: 1711108800,
          },
          {
            startTime: 1711108800,
            endTime: 1711112400,
          },
        ],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711278000,
            endTime: 1711281600,
          },
          {
            startTime: 1711292400,
            endTime: 1711296000,
          },
        ],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711360800,
            endTime: 1711364400,
          },
          {
            startTime: 1711364400,
            endTime: 1711368000,
          },
          {
            startTime: 1711371600,
            endTime: 1711375200,
          },
          {
            startTime: 1711378800,
            endTime: 1711382400,
          },
        ],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711530000,
            endTime: 1711533600,
          },
          {
            startTime: 1711540800,
            endTime: 1711544400,
          },
        ],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711710000,
            endTime: 1711713600,
          },
          {
            startTime: 1711720800,
            endTime: 1711724400,
          },
        ],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711789200,
            endTime: 1711792800,
          },
          {
            startTime: 1711810800,
            endTime: 1711814400,
          },
        ],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711875600,
            endTime: 1711879200,
          },
          {
            startTime: 1711879200,
            endTime: 1711882800,
          },
          {
            startTime: 1711882800,
            endTime: 1711886400,
          },
          {
            startTime: 1711886400,
            endTime: 1711890000,
          },
          {
            startTime: 1711890000,
            endTime: 1711893600,
          },
          {
            startTime: 1711893600,
            endTime: 1711897200,
          },
        ],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711965600,
            endTime: 1711969200,
          },
          {
            startTime: 1711969200,
            endTime: 1711972800,
          },
          {
            startTime: 1711976400,
            endTime: 1711980000,
          },
          {
            startTime: 1711983600,
            endTime: 1711987200,
          },
        ],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1712052000,
            endTime: 1712055600,
          },
          {
            startTime: 1712066400,
            endTime: 1712070000,
          },
        ],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712134800,
            endTime: 1712138400,
          },
          {
            startTime: 1712138400,
            endTime: 1712142000,
          },
          {
            startTime: 1712142000,
            endTime: 1712145600,
          },
          {
            startTime: 1712145600,
            endTime: 1712149200,
          },
          {
            startTime: 1712149200,
            endTime: 1712152800,
          },
          {
            startTime: 1712152800,
            endTime: 1712156400,
          },
        ],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712221200,
            endTime: 1712224800,
          },
          {
            startTime: 1712224800,
            endTime: 1712228400,
          },
          {
            startTime: 1712228400,
            endTime: 1712232000,
          },
          {
            startTime: 1712232000,
            endTime: 1712235600,
          },
          {
            startTime: 1712235600,
            endTime: 1712239200,
          },
          {
            startTime: 1712239200,
            endTime: 1712242800,
          },
        ],
      },
    ],
    schedulePreference: ['Morning', 'Early Morning'],
    gender: 'female',
    visitType: {
      value: 'video',
      label: 'Video visits only',
    },
    languageSpoken: ['English', 'mandarin'],
  },
  {
    id: 38,
    photo: '/assets/images/doctors/doctor46.jpg',
    name: 'Dr. Jacob Ramirez',
    specialty: 'Gastroenterologist',
    sponsored: true,
    rating: 4.9,
    reviews: 431,
    loyalPatients: 144,
    distance: 1.4,
    insurance: [
      'AIG',
      'APWU',
      'ATRIO Health Plans',
      'AVMA Life',
      'Absolute Total Care',
    ],
    address: {
      streetAddress: '456 Maple Avenue',
      city: 'Portland',
      state: 'OR',
      postalCode: '97201',
      latitude: 45.50850080231023,
      longitude: -122.69269539286303,
    },
    inNetwork: false,
    newPatientAppointments: false,
    highlyRecommended: true,
    excellentWaitTime: true,
    examsAvailable: ['Hernia'],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711123200,
            endTime: 1711126800,
          },
          {
            startTime: 1711126800,
            endTime: 1711130400,
          },
          {
            startTime: 1711134000,
            endTime: 1711137600,
          },
        ],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711209600,
            endTime: 1711213200,
          },
          {
            startTime: 1711213200,
            endTime: 1711216800,
          },
          {
            startTime: 1711220400,
            endTime: 1711224000,
          },
        ],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711303200,
            endTime: 1711306800,
          },
          {
            startTime: 1711306800,
            endTime: 1711310400,
          },
        ],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711468800,
            endTime: 1711472400,
          },
          {
            startTime: 1711472400,
            endTime: 1711476000,
          },
          {
            startTime: 1711476000,
            endTime: 1711479600,
          },
          {
            startTime: 1711479600,
            endTime: 1711483200,
          },
        ],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711728000,
            endTime: 1711731600,
          },
          {
            startTime: 1711735200,
            endTime: 1711738800,
          },
        ],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 1,
        availableSpots: [
          {
            startTime: 1711821600,
            endTime: 1711825200,
          },
        ],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 1,
        availableSpots: [
          {
            startTime: 1711904400,
            endTime: 1711908000,
          },
        ],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711990800,
            endTime: 1711994400,
          },
          {
            startTime: 1711994400,
            endTime: 1711998000,
          },
        ],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1712160000,
            endTime: 1712163600,
          },
          {
            startTime: 1712163600,
            endTime: 1712167200,
          },
        ],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1712246400,
            endTime: 1712250000,
          },
          {
            startTime: 1712250000,
            endTime: 1712253600,
          },
        ],
      },
    ],
    schedulePreference: ['Afternoon'],
    gender: 'male',
    visitType: {
      value: 'inPersonAndVideo',
      label: 'In-person and video visits',
    },
    languageSpoken: ['English', 'russian'],
  },
  {
    id: 39,
    photo: '/assets/images/doctors/doctor47.jpg',
    name: 'Dr. Sophia Torres',
    specialty: 'Dermatologist',
    sponsored: false,
    rating: 4.7,
    reviews: 376,
    loyalPatients: 125,
    distance: 2.6,
    insurance: [
      'EmblemHealth (formerly known as GHI)',
      'HealthFirst (NY)',
      'AARP',
      'ACE',
    ],
    address: {
      streetAddress: '789 Elm Street',
      city: 'Las Vegas',
      state: 'NV',
      postalCode: '89101',
      latitude: 36.16738488079471,
      longitude: -115.13873768807947,
    },
    inNetwork: true,
    newPatientAppointments: true,
    highlyRecommended: false,
    excellentWaitTime: false,
    examsAvailable: ['Skin Cancer', 'Asthma'],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711098000,
            endTime: 1711101600,
          },
          {
            startTime: 1711101600,
            endTime: 1711105200,
          },
          {
            startTime: 1711105200,
            endTime: 1711108800,
          },
        ],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711188000,
            endTime: 1711191600,
          },
          {
            startTime: 1711191600,
            endTime: 1711195200,
          },
        ],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711270800,
            endTime: 1711274400,
          },
          {
            startTime: 1711274400,
            endTime: 1711278000,
          },
          {
            startTime: 1711278000,
            endTime: 1711281600,
          },
        ],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711357200,
            endTime: 1711360800,
          },
          {
            startTime: 1711360800,
            endTime: 1711364400,
          },
          {
            startTime: 1711364400,
            endTime: 1711368000,
          },
        ],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711443600,
            endTime: 1711447200,
          },
          {
            startTime: 1711447200,
            endTime: 1711450800,
          },
          {
            startTime: 1711450800,
            endTime: 1711454400,
          },
        ],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 1,
        availableSpots: [
          {
            startTime: 1711530000,
            endTime: 1711533600,
          },
        ],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711620000,
            endTime: 1711623600,
          },
          {
            startTime: 1711623600,
            endTime: 1711627200,
          },
        ],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711789200,
            endTime: 1711792800,
          },
          {
            startTime: 1711792800,
            endTime: 1711796400,
          },
          {
            startTime: 1711796400,
            endTime: 1711800000,
          },
        ],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 1,
        availableSpots: [
          {
            startTime: 1711879200,
            endTime: 1711882800,
          },
        ],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711962000,
            endTime: 1711965600,
          },
          {
            startTime: 1711965600,
            endTime: 1711969200,
          },
          {
            startTime: 1711969200,
            endTime: 1711972800,
          },
        ],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1712048400,
            endTime: 1712052000,
          },
          {
            startTime: 1712052000,
            endTime: 1712055600,
          },
          {
            startTime: 1712055600,
            endTime: 1712059200,
          },
        ],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1712134800,
            endTime: 1712138400,
          },
          {
            startTime: 1712138400,
            endTime: 1712142000,
          },
          {
            startTime: 1712142000,
            endTime: 1712145600,
          },
        ],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 1,
        availableSpots: [
          {
            startTime: 1712224800,
            endTime: 1712228400,
          },
        ],
      },
    ],
    schedulePreference: ['Early Morning'],
    gender: 'female',
    visitType: {
      value: 'video',
      label: 'Video visits only',
    },
    languageSpoken: ['English', 'Spanish'],
  },
  {
    id: 40,
    photo: '/assets/images/doctors/doctor48.jpg',
    name: 'Dr. William Flores',
    specialty: 'Cardiologist',
    sponsored: false,
    rating: 4.8,
    reviews: 409,
    loyalPatients: 136,
    distance: 1.9,
    insurance: [
      'UnitedHealthcare',
      'Cigna',
      'Empire Blue Cross Blue Shield (Health)',
    ],
    address: {
      streetAddress: '456 Pine Street',
      city: 'Oklahoma City',
      state: 'OK',
      postalCode: '73101',
      latitude: 35.4805434,
      longitude: -97.5131456,
    },
    inNetwork: true,
    newPatientAppointments: true,
    highlyRecommended: true,
    excellentWaitTime: false,
    examsAvailable: ['Heart Transplant', 'Ventricular Assist Device (VAD)'],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711209600,
            endTime: 1711213200,
          },
          {
            startTime: 1711216800,
            endTime: 1711220400,
          },
          {
            startTime: 1711220400,
            endTime: 1711224000,
          },
          {
            startTime: 1711224000,
            endTime: 1711227600,
          },
          {
            startTime: 1711227600,
            endTime: 1711231200,
          },
          {
            startTime: 1711234800,
            endTime: 1711238400,
          },
        ],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711382400,
            endTime: 1711386000,
          },
          {
            startTime: 1711389600,
            endTime: 1711393200,
          },
          {
            startTime: 1711393200,
            endTime: 1711396800,
          },
          {
            startTime: 1711396800,
            endTime: 1711400400,
          },
          {
            startTime: 1711400400,
            endTime: 1711404000,
          },
          {
            startTime: 1711404000,
            endTime: 1711407600,
          },
        ],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711476000,
            endTime: 1711479600,
          },
          {
            startTime: 1711486800,
            endTime: 1711490400,
          },
        ],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711555200,
            endTime: 1711558800,
          },
          {
            startTime: 1711558800,
            endTime: 1711562400,
          },
          {
            startTime: 1711562400,
            endTime: 1711566000,
          },
          {
            startTime: 1711566000,
            endTime: 1711569600,
          },
          {
            startTime: 1711569600,
            endTime: 1711573200,
          },
          {
            startTime: 1711573200,
            endTime: 1711576800,
          },
        ],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711641600,
            endTime: 1711645200,
          },
          {
            startTime: 1711645200,
            endTime: 1711648800,
          },
          {
            startTime: 1711648800,
            endTime: 1711652400,
          },
          {
            startTime: 1711652400,
            endTime: 1711656000,
          },
          {
            startTime: 1711656000,
            endTime: 1711659600,
          },
          {
            startTime: 1711659600,
            endTime: 1711663200,
          },
        ],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711728000,
            endTime: 1711731600,
          },
          {
            startTime: 1711735200,
            endTime: 1711738800,
          },
          {
            startTime: 1711738800,
            endTime: 1711742400,
          },
          {
            startTime: 1711742400,
            endTime: 1711746000,
          },
          {
            startTime: 1711749600,
            endTime: 1711753200,
          },
          {
            startTime: 1711753200,
            endTime: 1711756800,
          },
        ],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711908000,
            endTime: 1711911600,
          },
          {
            startTime: 1711926000,
            endTime: 1711929600,
          },
        ],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711990800,
            endTime: 1711994400,
          },
          {
            startTime: 1712005200,
            endTime: 1712008800,
          },
        ],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1712077200,
            endTime: 1712080800,
          },
          {
            startTime: 1712084400,
            endTime: 1712088000,
          },
          {
            startTime: 1712091600,
            endTime: 1712095200,
          },
          {
            startTime: 1712095200,
            endTime: 1712098800,
          },
        ],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1712170800,
            endTime: 1712174400,
          },
          {
            startTime: 1712178000,
            endTime: 1712181600,
          },
        ],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712246400,
            endTime: 1712250000,
          },
          {
            startTime: 1712250000,
            endTime: 1712253600,
          },
          {
            startTime: 1712253600,
            endTime: 1712257200,
          },
          {
            startTime: 1712257200,
            endTime: 1712260800,
          },
          {
            startTime: 1712260800,
            endTime: 1712264400,
          },
          {
            startTime: 1712264400,
            endTime: 1712268000,
          },
        ],
      },
    ],
    schedulePreference: ['Evening', 'Afternoon'],
    gender: 'nonBinary',
    visitType: {
      value: 'inPerson',
      label: 'In-person visits only',
    },
    languageSpoken: ['English', 'turkish'],
  },
  {
    id: 41,
    photo: '/assets/images/doctors/doctor49.jpg',
    name: 'Dr. Emma Gutierrez',
    specialty: 'Nephrologist',
    sponsored: true,
    rating: 4.9,
    reviews: 438,
    loyalPatients: 146,
    distance: 1.2,
    insurance: ['Blue Cross Blue Shield (BCBS)', 'Aetna'],
    address: {
      streetAddress: '789 Cedar Avenue',
      city: 'Miami',
      state: 'FL',
      postalCode: '33101',
      latitude: 25.841655666666664,
      longitude: -80.18183353333333,
    },
    inNetwork: false,
    newPatientAppointments: true,
    highlyRecommended: true,
    excellentWaitTime: true,
    examsAvailable: ['Resuscitation'],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711108800,
            endTime: 1711112400,
          },
          {
            startTime: 1711119600,
            endTime: 1711123200,
          },
          {
            startTime: 1711144800,
            endTime: 1711148400,
          },
          {
            startTime: 1711148400,
            endTime: 1711152000,
          },
        ],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711195200,
            endTime: 1711198800,
          },
          {
            startTime: 1711202400,
            endTime: 1711206000,
          },
          {
            startTime: 1711206000,
            endTime: 1711209600,
          },
          {
            startTime: 1711224000,
            endTime: 1711227600,
          },
          {
            startTime: 1711227600,
            endTime: 1711231200,
          },
          {
            startTime: 1711231200,
            endTime: 1711234800,
          },
        ],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711292400,
            endTime: 1711296000,
          },
          {
            startTime: 1711314000,
            endTime: 1711317600,
          },
        ],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711368000,
            endTime: 1711371600,
          },
          {
            startTime: 1711378800,
            endTime: 1711382400,
          },
          {
            startTime: 1711400400,
            endTime: 1711404000,
          },
          {
            startTime: 1711404000,
            endTime: 1711407600,
          },
        ],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711454400,
            endTime: 1711458000,
          },
          {
            startTime: 1711458000,
            endTime: 1711461600,
          },
          {
            startTime: 1711461600,
            endTime: 1711465200,
          },
          {
            startTime: 1711465200,
            endTime: 1711468800,
          },
          {
            startTime: 1711483200,
            endTime: 1711486800,
          },
          {
            startTime: 1711486800,
            endTime: 1711490400,
          },
        ],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711540800,
            endTime: 1711544400,
          },
          {
            startTime: 1711548000,
            endTime: 1711551600,
          },
          {
            startTime: 1711573200,
            endTime: 1711576800,
          },
          {
            startTime: 1711580400,
            endTime: 1711584000,
          },
        ],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711627200,
            endTime: 1711630800,
          },
          {
            startTime: 1711630800,
            endTime: 1711634400,
          },
          {
            startTime: 1711634400,
            endTime: 1711638000,
          },
          {
            startTime: 1711638000,
            endTime: 1711641600,
          },
          {
            startTime: 1711656000,
            endTime: 1711659600,
          },
          {
            startTime: 1711659600,
            endTime: 1711663200,
          },
        ],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711803600,
            endTime: 1711807200,
          },
          {
            startTime: 1711807200,
            endTime: 1711810800,
          },
          {
            startTime: 1711828800,
            endTime: 1711832400,
          },
          {
            startTime: 1711839600,
            endTime: 1711843200,
          },
        ],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711886400,
            endTime: 1711890000,
          },
          {
            startTime: 1711890000,
            endTime: 1711893600,
          },
          {
            startTime: 1711893600,
            endTime: 1711897200,
          },
          {
            startTime: 1711915200,
            endTime: 1711918800,
          },
          {
            startTime: 1711918800,
            endTime: 1711922400,
          },
          {
            startTime: 1711926000,
            endTime: 1711929600,
          },
        ],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712062800,
            endTime: 1712066400,
          },
          {
            startTime: 1712066400,
            endTime: 1712070000,
          },
          {
            startTime: 1712070000,
            endTime: 1712073600,
          },
          {
            startTime: 1712088000,
            endTime: 1712091600,
          },
          {
            startTime: 1712095200,
            endTime: 1712098800,
          },
          {
            startTime: 1712098800,
            endTime: 1712102400,
          },
        ],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1712156400,
            endTime: 1712160000,
          },
          {
            startTime: 1712174400,
            endTime: 1712178000,
          },
        ],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1712242800,
            endTime: 1712246400,
          },
          {
            startTime: 1712271600,
            endTime: 1712275200,
          },
        ],
      },
    ],
    schedulePreference: ['Morning', 'Evening'],
    gender: 'female',
    visitType: {
      value: 'video',
      label: 'Video visits only',
    },
    languageSpoken: ['English'],
  },
  {
    id: 42,
    photo: '/assets/images/doctors/doctor50.jpg',
    name: 'Dr. Michael Sanchez',
    specialty: 'Orthopedic Surgeon',
    sponsored: false,
    rating: 4.8,
    reviews: 421,
    loyalPatients: 140,
    distance: 2.4,
    insurance: ['Blue Cross Blue Shield (BCBS)', 'Aetna'],
    address: {
      streetAddress: '456 Walnut Avenue',
      city: 'Kansas City',
      state: 'MO',
      postalCode: '64101',
      latitude: 39.103081018248176,
      longitude: -94.60138004014598,
    },
    inNetwork: true,
    newPatientAppointments: false,
    highlyRecommended: false,
    excellentWaitTime: false,
    examsAvailable: ['Bronchitis'],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 1,
        availableSpots: [
          {
            startTime: 1711389600,
            endTime: 1711393200,
          },
        ],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711562400,
            endTime: 1711566000,
          },
          {
            startTime: 1711566000,
            endTime: 1711569600,
          },
        ],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 1,
        availableSpots: [
          {
            startTime: 1711645200,
            endTime: 1711648800,
          },
        ],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 1,
        availableSpots: [
          {
            startTime: 1711735200,
            endTime: 1711738800,
          },
        ],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711814400,
            endTime: 1711818000,
          },
          {
            startTime: 1711821600,
            endTime: 1711825200,
          },
          {
            startTime: 1711825200,
            endTime: 1711828800,
          },
        ],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711987200,
            endTime: 1711990800,
          },
          {
            startTime: 1711994400,
            endTime: 1711998000,
          },
        ],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1712073600,
            endTime: 1712077200,
          },
          {
            startTime: 1712077200,
            endTime: 1712080800,
          },
          {
            startTime: 1712080800,
            endTime: 1712084400,
          },
        ],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1712160000,
            endTime: 1712163600,
          },
          {
            startTime: 1712163600,
            endTime: 1712167200,
          },
          {
            startTime: 1712167200,
            endTime: 1712170800,
          },
          {
            startTime: 1712170800,
            endTime: 1712174400,
          },
        ],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1712250000,
            endTime: 1712253600,
          },
          {
            startTime: 1712253600,
            endTime: 1712257200,
          },
        ],
      },
    ],
    schedulePreference: ['Afternoon'],
    gender: 'male',
    visitType: {
      value: 'video',
      label: 'Video visits only',
    },
    languageSpoken: ['English', 'urdu'],
  },
  {
    id: 43,
    photo: '/assets/images/doctors/doctor52.jpg',
    name: 'Dr. Benjamin Perez',
    specialty: 'Pulmonologist',
    sponsored: true,
    rating: 4.9,
    reviews: 442,
    loyalPatients: 17,
    distance: 1.6,
    insurance: [
      'UnitedHealthcare',
      'Cigna',
      'Empire Blue Cross Blue Shield (Health)',
    ],
    address: {
      streetAddress: '456 Cedar Avenue',
      city: 'Seattle',
      state: 'WA',
      postalCode: '98101',
      latitude: 47.610763395313455,
      longitude: -122.3361878,
    },
    inNetwork: false,
    newPatientAppointments: true,
    highlyRecommended: true,
    excellentWaitTime: true,
    examsAvailable: [
      'Asthma',
      'Bronchiectasis',
      'Chronic Obstructive Pulmonary Disease',
      'Emphysema',
      'COVID-19',
    ],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711098000,
            endTime: 1711101600,
          },
          {
            startTime: 1711101600,
            endTime: 1711105200,
          },
          {
            startTime: 1711105200,
            endTime: 1711108800,
          },
          {
            startTime: 1711108800,
            endTime: 1711112400,
          },
          {
            startTime: 1711112400,
            endTime: 1711116000,
          },
          {
            startTime: 1711116000,
            endTime: 1711119600,
          },
        ],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711188000,
            endTime: 1711191600,
          },
          {
            startTime: 1711198800,
            endTime: 1711202400,
          },
        ],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711274400,
            endTime: 1711278000,
          },
          {
            startTime: 1711278000,
            endTime: 1711281600,
          },
          {
            startTime: 1711281600,
            endTime: 1711285200,
          },
          {
            startTime: 1711288800,
            endTime: 1711292400,
          },
        ],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711360800,
            endTime: 1711364400,
          },
          {
            startTime: 1711364400,
            endTime: 1711368000,
          },
          {
            startTime: 1711371600,
            endTime: 1711375200,
          },
          {
            startTime: 1711378800,
            endTime: 1711382400,
          },
        ],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711447200,
            endTime: 1711450800,
          },
          {
            startTime: 1711450800,
            endTime: 1711454400,
          },
          {
            startTime: 1711454400,
            endTime: 1711458000,
          },
          {
            startTime: 1711465200,
            endTime: 1711468800,
          },
        ],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711789200,
            endTime: 1711792800,
          },
          {
            startTime: 1711792800,
            endTime: 1711796400,
          },
          {
            startTime: 1711796400,
            endTime: 1711800000,
          },
          {
            startTime: 1711800000,
            endTime: 1711803600,
          },
          {
            startTime: 1711803600,
            endTime: 1711807200,
          },
          {
            startTime: 1711807200,
            endTime: 1711810800,
          },
        ],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711875600,
            endTime: 1711879200,
          },
          {
            startTime: 1711879200,
            endTime: 1711882800,
          },
          {
            startTime: 1711882800,
            endTime: 1711886400,
          },
          {
            startTime: 1711886400,
            endTime: 1711890000,
          },
          {
            startTime: 1711890000,
            endTime: 1711893600,
          },
          {
            startTime: 1711893600,
            endTime: 1711897200,
          },
        ],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711962000,
            endTime: 1711965600,
          },
          {
            startTime: 1711969200,
            endTime: 1711972800,
          },
          {
            startTime: 1711976400,
            endTime: 1711980000,
          },
          {
            startTime: 1711980000,
            endTime: 1711983600,
          },
        ],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1712048400,
            endTime: 1712052000,
          },
          {
            startTime: 1712055600,
            endTime: 1712059200,
          },
          {
            startTime: 1712059200,
            endTime: 1712062800,
          },
          {
            startTime: 1712066400,
            endTime: 1712070000,
          },
        ],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1712134800,
            endTime: 1712138400,
          },
          {
            startTime: 1712152800,
            endTime: 1712156400,
          },
        ],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1712221200,
            endTime: 1712224800,
          },
          {
            startTime: 1712242800,
            endTime: 1712246400,
          },
        ],
      },
    ],
    schedulePreference: ['Morning', 'Early Morning'],
    gender: 'male',
    visitType: {
      value: 'inPerson',
      label: 'In-person visits only',
    },
    languageSpoken: ['English', 'finnish'],
  },
  {
    id: 44,
    photo: '/assets/images/doctors/doctor53.jpg',
    name: 'Dr. Sophia Rivera',
    specialty: 'Rheumatologist',
    sponsored: false,
    rating: 4.8,
    reviews: 398,
    loyalPatients: 133,
    distance: 2.1,
    insurance: [
      'EmblemHealth (formerly known as GHI)',
      'HealthFirst (NY)',
      'AARP',
      'ACE',
    ],
    address: {
      streetAddress: '789 Oak Street',
      city: 'Chicago',
      state: 'IL',
      postalCode: '60601',
      latitude: 41.83832739698795,
      longitude: -87.80740117409638,
    },
    inNetwork: true,
    newPatientAppointments: false,
    highlyRecommended: false,
    excellentWaitTime: false,
    examsAvailable: ['Osteoporosis'],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711108800,
            endTime: 1711112400,
          },
          {
            startTime: 1711116000,
            endTime: 1711119600,
          },
          {
            startTime: 1711119600,
            endTime: 1711123200,
          },
          {
            startTime: 1711126800,
            endTime: 1711130400,
          },
          {
            startTime: 1711130400,
            endTime: 1711134000,
          },
          {
            startTime: 1711134000,
            endTime: 1711137600,
          },
        ],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711195200,
            endTime: 1711198800,
          },
          {
            startTime: 1711198800,
            endTime: 1711202400,
          },
          {
            startTime: 1711202400,
            endTime: 1711206000,
          },
          {
            startTime: 1711209600,
            endTime: 1711213200,
          },
          {
            startTime: 1711213200,
            endTime: 1711216800,
          },
          {
            startTime: 1711216800,
            endTime: 1711220400,
          },
        ],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711285200,
            endTime: 1711288800,
          },
          {
            startTime: 1711296000,
            endTime: 1711299600,
          },
        ],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711454400,
            endTime: 1711458000,
          },
          {
            startTime: 1711458000,
            endTime: 1711461600,
          },
          {
            startTime: 1711476000,
            endTime: 1711479600,
          },
          {
            startTime: 1711479600,
            endTime: 1711483200,
          },
        ],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711540800,
            endTime: 1711544400,
          },
          {
            startTime: 1711548000,
            endTime: 1711551600,
          },
          {
            startTime: 1711551600,
            endTime: 1711555200,
          },
          {
            startTime: 1711558800,
            endTime: 1711562400,
          },
          {
            startTime: 1711562400,
            endTime: 1711566000,
          },
          {
            startTime: 1711566000,
            endTime: 1711569600,
          },
        ],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711634400,
            endTime: 1711638000,
          },
          {
            startTime: 1711638000,
            endTime: 1711641600,
          },
          {
            startTime: 1711645200,
            endTime: 1711648800,
          },
          {
            startTime: 1711652400,
            endTime: 1711656000,
          },
        ],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711713600,
            endTime: 1711717200,
          },
          {
            startTime: 1711717200,
            endTime: 1711720800,
          },
          {
            startTime: 1711720800,
            endTime: 1711724400,
          },
          {
            startTime: 1711724400,
            endTime: 1711728000,
          },
          {
            startTime: 1711728000,
            endTime: 1711731600,
          },
          {
            startTime: 1711731600,
            endTime: 1711735200,
          },
        ],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711803600,
            endTime: 1711807200,
          },
          {
            startTime: 1711814400,
            endTime: 1711818000,
          },
        ],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711972800,
            endTime: 1711976400,
          },
          {
            startTime: 1711976400,
            endTime: 1711980000,
          },
          {
            startTime: 1711980000,
            endTime: 1711983600,
          },
          {
            startTime: 1711987200,
            endTime: 1711990800,
          },
          {
            startTime: 1711990800,
            endTime: 1711994400,
          },
          {
            startTime: 1711994400,
            endTime: 1711998000,
          },
        ],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712059200,
            endTime: 1712062800,
          },
          {
            startTime: 1712062800,
            endTime: 1712066400,
          },
          {
            startTime: 1712066400,
            endTime: 1712070000,
          },
          {
            startTime: 1712070000,
            endTime: 1712073600,
          },
          {
            startTime: 1712073600,
            endTime: 1712077200,
          },
          {
            startTime: 1712077200,
            endTime: 1712080800,
          },
        ],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712145600,
            endTime: 1712149200,
          },
          {
            startTime: 1712152800,
            endTime: 1712156400,
          },
          {
            startTime: 1712156400,
            endTime: 1712160000,
          },
          {
            startTime: 1712160000,
            endTime: 1712163600,
          },
          {
            startTime: 1712163600,
            endTime: 1712167200,
          },
          {
            startTime: 1712170800,
            endTime: 1712174400,
          },
        ],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1712232000,
            endTime: 1712235600,
          },
          {
            startTime: 1712239200,
            endTime: 1712242800,
          },
          {
            startTime: 1712246400,
            endTime: 1712250000,
          },
          {
            startTime: 1712253600,
            endTime: 1712257200,
          },
        ],
      },
    ],
    schedulePreference: ['Morning', 'Afternoon'],
    gender: 'female',
    visitType: {
      value: 'inPersonAndVideo',
      label: 'In-person and video visits',
    },
    languageSpoken: ['English'],
  },
  {
    id: 45,
    photo: '/assets/images/doctors/doctor54.jpg',
    name: 'Dr. Daniel Flores',
    specialty: 'Allergist/Immunologist',
    sponsored: false,
    rating: 4.7,
    reviews: 371,
    loyalPatients: 124,
    distance: 2.5,
    insurance: ['Blue Cross Blue Shield (BCBS)', 'Aetna'],
    address: {
      streetAddress: '456 Maple Avenue',
      city: 'Boston',
      state: 'MA',
      postalCode: '02101',
      latitude: 42.35865,
      longitude: -71.056762,
    },
    inNetwork: true,
    newPatientAppointments: true,
    highlyRecommended: true,
    excellentWaitTime: false,
    examsAvailable: ['Anemia'],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711101600,
            endTime: 1711105200,
          },
          {
            startTime: 1711105200,
            endTime: 1711108800,
          },
          {
            startTime: 1711141200,
            endTime: 1711144800,
          },
          {
            startTime: 1711148400,
            endTime: 1711152000,
          },
        ],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711184400,
            endTime: 1711188000,
          },
          {
            startTime: 1711188000,
            endTime: 1711191600,
          },
          {
            startTime: 1711191600,
            endTime: 1711195200,
          },
          {
            startTime: 1711224000,
            endTime: 1711227600,
          },
          {
            startTime: 1711227600,
            endTime: 1711231200,
          },
          {
            startTime: 1711234800,
            endTime: 1711238400,
          },
        ],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711270800,
            endTime: 1711274400,
          },
          {
            startTime: 1711274400,
            endTime: 1711278000,
          },
          {
            startTime: 1711278000,
            endTime: 1711281600,
          },
          {
            startTime: 1711310400,
            endTime: 1711314000,
          },
          {
            startTime: 1711314000,
            endTime: 1711317600,
          },
          {
            startTime: 1711317600,
            endTime: 1711321200,
          },
        ],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711443600,
            endTime: 1711447200,
          },
          {
            startTime: 1711447200,
            endTime: 1711450800,
          },
          {
            startTime: 1711450800,
            endTime: 1711454400,
          },
          {
            startTime: 1711483200,
            endTime: 1711486800,
          },
          {
            startTime: 1711486800,
            endTime: 1711490400,
          },
          {
            startTime: 1711490400,
            endTime: 1711494000,
          },
        ],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711530000,
            endTime: 1711533600,
          },
          {
            startTime: 1711533600,
            endTime: 1711537200,
          },
          {
            startTime: 1711537200,
            endTime: 1711540800,
          },
          {
            startTime: 1711569600,
            endTime: 1711573200,
          },
          {
            startTime: 1711573200,
            endTime: 1711576800,
          },
          {
            startTime: 1711576800,
            endTime: 1711580400,
          },
        ],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711623600,
            endTime: 1711627200,
          },
          {
            startTime: 1711659600,
            endTime: 1711663200,
          },
        ],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711702800,
            endTime: 1711706400,
          },
          {
            startTime: 1711706400,
            endTime: 1711710000,
          },
          {
            startTime: 1711710000,
            endTime: 1711713600,
          },
          {
            startTime: 1711742400,
            endTime: 1711746000,
          },
          {
            startTime: 1711746000,
            endTime: 1711749600,
          },
          {
            startTime: 1711749600,
            endTime: 1711753200,
          },
        ],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711792800,
            endTime: 1711796400,
          },
          {
            startTime: 1711796400,
            endTime: 1711800000,
          },
          {
            startTime: 1711836000,
            endTime: 1711839600,
          },
          {
            startTime: 1711839600,
            endTime: 1711843200,
          },
        ],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711875600,
            endTime: 1711879200,
          },
          {
            startTime: 1711879200,
            endTime: 1711882800,
          },
          {
            startTime: 1711915200,
            endTime: 1711918800,
          },
          {
            startTime: 1711918800,
            endTime: 1711922400,
          },
        ],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 2,
        availableSpots: [
          {
            startTime: 1711962000,
            endTime: 1711965600,
          },
          {
            startTime: 1712012400,
            endTime: 1712016000,
          },
        ],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712048400,
            endTime: 1712052000,
          },
          {
            startTime: 1712052000,
            endTime: 1712055600,
          },
          {
            startTime: 1712055600,
            endTime: 1712059200,
          },
          {
            startTime: 1712088000,
            endTime: 1712091600,
          },
          {
            startTime: 1712091600,
            endTime: 1712095200,
          },
          {
            startTime: 1712095200,
            endTime: 1712098800,
          },
        ],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712134800,
            endTime: 1712138400,
          },
          {
            startTime: 1712138400,
            endTime: 1712142000,
          },
          {
            startTime: 1712142000,
            endTime: 1712145600,
          },
          {
            startTime: 1712174400,
            endTime: 1712178000,
          },
          {
            startTime: 1712181600,
            endTime: 1712185200,
          },
          {
            startTime: 1712185200,
            endTime: 1712188800,
          },
        ],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712221200,
            endTime: 1712224800,
          },
          {
            startTime: 1712224800,
            endTime: 1712228400,
          },
          {
            startTime: 1712228400,
            endTime: 1712232000,
          },
          {
            startTime: 1712260800,
            endTime: 1712264400,
          },
          {
            startTime: 1712264400,
            endTime: 1712268000,
          },
          {
            startTime: 1712271600,
            endTime: 1712275200,
          },
        ],
      },
    ],
    schedulePreference: ['Early Morning', 'Evening'],
    gender: 'male',
    visitType: {
      value: 'inPerson',
      label: 'In-person visits only',
    },
    languageSpoken: ['English', 'portuguese'],
  },
  {
    id: 46,
    photo: '/assets/images/doctors/doctor55.jpg',
    name: 'Dr. Olivia Gutierrez',
    specialty: 'Urologist',
    sponsored: false,
    rating: 4.8,
    reviews: 406,
    loyalPatients: 135,
    distance: 1.7,
    insurance: [
      'UnitedHealthcare',
      'Cigna',
      'Empire Blue Cross Blue Shield (Health)',
    ],
    address: {
      streetAddress: '789 Cedar Avenue',
      city: 'Los Angeles',
      state: 'CA',
      postalCode: '90001',
      latitude: 33.9749214687747,
      longitude: -118.24608792094863,
    },
    inNetwork: true,
    newPatientAppointments: true,
    highlyRecommended: false,
    excellentWaitTime: false,
    examsAvailable: ['Prostate Cancer'],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711098000,
            endTime: 1711101600,
          },
          {
            startTime: 1711101600,
            endTime: 1711105200,
          },
          {
            startTime: 1711105200,
            endTime: 1711108800,
          },
          {
            startTime: 1711108800,
            endTime: 1711112400,
          },
          {
            startTime: 1711116000,
            endTime: 1711119600,
          },
          {
            startTime: 1711119600,
            endTime: 1711123200,
          },
        ],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711184400,
            endTime: 1711188000,
          },
          {
            startTime: 1711188000,
            endTime: 1711191600,
          },
          {
            startTime: 1711191600,
            endTime: 1711195200,
          },
          {
            startTime: 1711195200,
            endTime: 1711198800,
          },
          {
            startTime: 1711198800,
            endTime: 1711202400,
          },
          {
            startTime: 1711202400,
            endTime: 1711206000,
          },
        ],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711270800,
            endTime: 1711274400,
          },
          {
            startTime: 1711274400,
            endTime: 1711278000,
          },
          {
            startTime: 1711278000,
            endTime: 1711281600,
          },
          {
            startTime: 1711281600,
            endTime: 1711285200,
          },
          {
            startTime: 1711288800,
            endTime: 1711292400,
          },
          {
            startTime: 1711292400,
            endTime: 1711296000,
          },
        ],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711357200,
            endTime: 1711360800,
          },
          {
            startTime: 1711378800,
            endTime: 1711382400,
          },
          {
            startTime: 1711382400,
            endTime: 1711386000,
          },
        ],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711443600,
            endTime: 1711447200,
          },
          {
            startTime: 1711447200,
            endTime: 1711450800,
          },
          {
            startTime: 1711450800,
            endTime: 1711454400,
          },
          {
            startTime: 1711454400,
            endTime: 1711458000,
          },
          {
            startTime: 1711458000,
            endTime: 1711461600,
          },
          {
            startTime: 1711461600,
            endTime: 1711465200,
          },
        ],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711616400,
            endTime: 1711620000,
          },
          {
            startTime: 1711623600,
            endTime: 1711627200,
          },
          {
            startTime: 1711630800,
            endTime: 1711634400,
          },
          {
            startTime: 1711638000,
            endTime: 1711641600,
          },
          {
            startTime: 1711641600,
            endTime: 1711645200,
          },
          {
            startTime: 1711648800,
            endTime: 1711652400,
          },
        ],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711789200,
            endTime: 1711792800,
          },
          {
            startTime: 1711792800,
            endTime: 1711796400,
          },
          {
            startTime: 1711796400,
            endTime: 1711800000,
          },
          {
            startTime: 1711800000,
            endTime: 1711803600,
          },
          {
            startTime: 1711803600,
            endTime: 1711807200,
          },
          {
            startTime: 1711807200,
            endTime: 1711810800,
          },
        ],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711875600,
            endTime: 1711879200,
          },
          {
            startTime: 1711879200,
            endTime: 1711882800,
          },
          {
            startTime: 1711882800,
            endTime: 1711886400,
          },
          {
            startTime: 1711886400,
            endTime: 1711890000,
          },
          {
            startTime: 1711890000,
            endTime: 1711893600,
          },
          {
            startTime: 1711893600,
            endTime: 1711897200,
          },
        ],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711962000,
            endTime: 1711965600,
          },
          {
            startTime: 1711965600,
            endTime: 1711969200,
          },
          {
            startTime: 1711969200,
            endTime: 1711972800,
          },
          {
            startTime: 1711972800,
            endTime: 1711976400,
          },
          {
            startTime: 1711976400,
            endTime: 1711980000,
          },
          {
            startTime: 1711983600,
            endTime: 1711987200,
          },
        ],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712134800,
            endTime: 1712138400,
          },
          {
            startTime: 1712138400,
            endTime: 1712142000,
          },
          {
            startTime: 1712142000,
            endTime: 1712145600,
          },
          {
            startTime: 1712145600,
            endTime: 1712149200,
          },
          {
            startTime: 1712149200,
            endTime: 1712152800,
          },
          {
            startTime: 1712152800,
            endTime: 1712156400,
          },
        ],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712224800,
            endTime: 1712228400,
          },
          {
            startTime: 1712228400,
            endTime: 1712232000,
          },
          {
            startTime: 1712239200,
            endTime: 1712242800,
          },
          {
            startTime: 1712242800,
            endTime: 1712246400,
          },
          {
            startTime: 1712250000,
            endTime: 1712253600,
          },
          {
            startTime: 1712253600,
            endTime: 1712257200,
          },
        ],
      },
    ],
    schedulePreference: ['Afternoon', 'Early Morning', 'Morning'],
    gender: 'female',
    visitType: {
      value: 'inPersonAndVideo',
      label: 'In-person and video visits',
    },
    languageSpoken: ['English'],
  },
  {
    id: 47,
    photo: '/assets/images/doctors/doctor56.jpg',
    name: 'Dr. Ethan Sanchez',
    specialty: 'Ophthalmologist',
    sponsored: true,
    rating: 4.9,
    reviews: 445,
    loyalPatients: 148,
    distance: 1.3,
    insurance: [
      'EmblemHealth (formerly known as GHI)',
      'HealthFirst (NY)',
      'AARP',
      'ACE',
    ],
    address: {
      streetAddress: '456 Walnut Avenue',
      city: 'Houston',
      state: 'TX',
      postalCode: '77001',
      latitude: 29.756601,
      longitude: -95.36271,
    },
    inNetwork: false,
    newPatientAppointments: true,
    highlyRecommended: true,
    excellentWaitTime: true,
    examsAvailable: ['Physical therapy'],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711098000,
            endTime: 1711101600,
          },
          {
            startTime: 1711101600,
            endTime: 1711105200,
          },
          {
            startTime: 1711108800,
            endTime: 1711112400,
          },
          {
            startTime: 1711119600,
            endTime: 1711123200,
          },
          {
            startTime: 1711123200,
            endTime: 1711126800,
          },
          {
            startTime: 1711126800,
            endTime: 1711130400,
          },
        ],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711270800,
            endTime: 1711274400,
          },
          {
            startTime: 1711278000,
            endTime: 1711281600,
          },
          {
            startTime: 1711288800,
            endTime: 1711292400,
          },
          {
            startTime: 1711292400,
            endTime: 1711296000,
          },
          {
            startTime: 1711296000,
            endTime: 1711299600,
          },
          {
            startTime: 1711306800,
            endTime: 1711310400,
          },
        ],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711357200,
            endTime: 1711360800,
          },
          {
            startTime: 1711360800,
            endTime: 1711364400,
          },
          {
            startTime: 1711364400,
            endTime: 1711368000,
          },
          {
            startTime: 1711371600,
            endTime: 1711375200,
          },
          {
            startTime: 1711375200,
            endTime: 1711378800,
          },
          {
            startTime: 1711378800,
            endTime: 1711382400,
          },
        ],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711443600,
            endTime: 1711447200,
          },
          {
            startTime: 1711461600,
            endTime: 1711465200,
          },
          {
            startTime: 1711479600,
            endTime: 1711483200,
          },
          {
            startTime: 1711494000,
            endTime: 1711497600,
          },
        ],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 4,
        availableSpots: [
          {
            startTime: 1711616400,
            endTime: 1711620000,
          },
          {
            startTime: 1711638000,
            endTime: 1711641600,
          },
          {
            startTime: 1711641600,
            endTime: 1711645200,
          },
          {
            startTime: 1711666800,
            endTime: 1711670400,
          },
        ],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711702800,
            endTime: 1711706400,
          },
          {
            startTime: 1711706400,
            endTime: 1711710000,
          },
          {
            startTime: 1711710000,
            endTime: 1711713600,
          },
          {
            startTime: 1711713600,
            endTime: 1711717200,
          },
          {
            startTime: 1711717200,
            endTime: 1711720800,
          },
          {
            startTime: 1711720800,
            endTime: 1711724400,
          },
        ],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711875600,
            endTime: 1711879200,
          },
          {
            startTime: 1711879200,
            endTime: 1711882800,
          },
          {
            startTime: 1711882800,
            endTime: 1711886400,
          },
          {
            startTime: 1711886400,
            endTime: 1711890000,
          },
          {
            startTime: 1711890000,
            endTime: 1711893600,
          },
          {
            startTime: 1711893600,
            endTime: 1711897200,
          },
        ],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712048400,
            endTime: 1712052000,
          },
          {
            startTime: 1712055600,
            endTime: 1712059200,
          },
          {
            startTime: 1712062800,
            endTime: 1712066400,
          },
          {
            startTime: 1712066400,
            endTime: 1712070000,
          },
          {
            startTime: 1712073600,
            endTime: 1712077200,
          },
          {
            startTime: 1712080800,
            endTime: 1712084400,
          },
        ],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
    ],
    schedulePreference: ['Evening', 'Early Morning', 'Afternoon', 'Morning'],
    gender: 'male',
    visitType: {
      value: 'inPersonAndVideo',
      label: 'In-person and video visits',
    },
    languageSpoken: ['English'],
  },
  {
    id: 48,
    photo: '/assets/images/doctors/doctor57.jpg',
    name: 'Dr. Isabella Ramirez',
    specialty: 'Otolaryngologist (ENT)',
    sponsored: false,
    rating: 4.8,
    reviews: 411,
    loyalPatients: 13,
    distance: 2.2,
    insurance: [
      'Access Medicare (NY)',
      'Accountable Health Plan of Ohio',
      'Advanced Health',
      'AdvantageMD',
      'Advantica',
      'Advent Health',
    ],
    address: {
      streetAddress: '789 Elm Street',
      city: 'Philadelphia',
      state: 'PA',
      postalCode: '19101',
      latitude: 40.017814,
      longitude: -75.310583,
    },
    inNetwork: true,
    newPatientAppointments: false,
    highlyRecommended: false,
    excellentWaitTime: false,
    examsAvailable: ['Ear, Nose, and Throat Conditions'],
    availability: [
      {
        date: 1711080000,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711108800,
            endTime: 1711112400,
          },
          {
            startTime: 1711116000,
            endTime: 1711119600,
          },
          {
            startTime: 1711126800,
            endTime: 1711130400,
          },
          {
            startTime: 1711130400,
            endTime: 1711134000,
          },
          {
            startTime: 1711137600,
            endTime: 1711141200,
          },
          {
            startTime: 1711141200,
            endTime: 1711144800,
          },
        ],
      },
      {
        date: 1711166400,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711252800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711288800,
            endTime: 1711292400,
          },
          {
            startTime: 1711292400,
            endTime: 1711296000,
          },
          {
            startTime: 1711299600,
            endTime: 1711303200,
          },
          {
            startTime: 1711303200,
            endTime: 1711306800,
          },
          {
            startTime: 1711317600,
            endTime: 1711321200,
          },
          {
            startTime: 1711321200,
            endTime: 1711324800,
          },
        ],
      },
      {
        date: 1711339200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711368000,
            endTime: 1711371600,
          },
          {
            startTime: 1711371600,
            endTime: 1711375200,
          },
          {
            startTime: 1711375200,
            endTime: 1711378800,
          },
          {
            startTime: 1711378800,
            endTime: 1711382400,
          },
          {
            startTime: 1711382400,
            endTime: 1711386000,
          },
          {
            startTime: 1711386000,
            endTime: 1711389600,
          },
        ],
      },
      {
        date: 1711425600,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711454400,
            endTime: 1711458000,
          },
          {
            startTime: 1711458000,
            endTime: 1711461600,
          },
          {
            startTime: 1711461600,
            endTime: 1711465200,
          },
          {
            startTime: 1711472400,
            endTime: 1711476000,
          },
          {
            startTime: 1711476000,
            endTime: 1711479600,
          },
          {
            startTime: 1711479600,
            endTime: 1711483200,
          },
        ],
      },
      {
        date: 1711512000,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711548000,
            endTime: 1711551600,
          },
          {
            startTime: 1711562400,
            endTime: 1711566000,
          },
          {
            startTime: 1711576800,
            endTime: 1711580400,
          },
        ],
      },
      {
        date: 1711598400,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1711627200,
            endTime: 1711630800,
          },
          {
            startTime: 1711645200,
            endTime: 1711648800,
          },
          {
            startTime: 1711659600,
            endTime: 1711663200,
          },
        ],
      },
      {
        date: 1711684800,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711713600,
            endTime: 1711717200,
          },
          {
            startTime: 1711724400,
            endTime: 1711728000,
          },
          {
            startTime: 1711728000,
            endTime: 1711731600,
          },
          {
            startTime: 1711738800,
            endTime: 1711742400,
          },
          {
            startTime: 1711746000,
            endTime: 1711749600,
          },
          {
            startTime: 1711749600,
            endTime: 1711753200,
          },
        ],
      },
      {
        date: 1711771200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1711800000,
            endTime: 1711803600,
          },
          {
            startTime: 1711803600,
            endTime: 1711807200,
          },
          {
            startTime: 1711807200,
            endTime: 1711810800,
          },
          {
            startTime: 1711810800,
            endTime: 1711814400,
          },
          {
            startTime: 1711814400,
            endTime: 1711818000,
          },
          {
            startTime: 1711818000,
            endTime: 1711821600,
          },
        ],
      },
      {
        date: 1711857600,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1711944000,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1712030400,
        appointmentsAvailable: 3,
        availableSpots: [
          {
            startTime: 1712059200,
            endTime: 1712062800,
          },
          {
            startTime: 1712084400,
            endTime: 1712088000,
          },
          {
            startTime: 1712095200,
            endTime: 1712098800,
          },
        ],
      },
      {
        date: 1712116800,
        appointmentsAvailable: 0,
        availableSpots: [],
      },
      {
        date: 1712203200,
        appointmentsAvailable: 6,
        availableSpots: [
          {
            startTime: 1712235600,
            endTime: 1712239200,
          },
          {
            startTime: 1712239200,
            endTime: 1712242800,
          },
          {
            startTime: 1712250000,
            endTime: 1712253600,
          },
          {
            startTime: 1712257200,
            endTime: 1712260800,
          },
          {
            startTime: 1712264400,
            endTime: 1712268000,
          },
          {
            startTime: 1712268000,
            endTime: 1712271600,
          },
        ],
      },
    ],
    schedulePreference: ['Morning', 'Afternoon', 'Evening'],
    gender: 'female',
    visitType: {
      value: 'inPerson',
      label: 'In-person visits only',
    },
    languageSpoken: ['English'],
  },
]
