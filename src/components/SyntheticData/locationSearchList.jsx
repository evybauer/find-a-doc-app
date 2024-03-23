const locationSearchList = {
  predictions: [
    {
      description: 'New York, NY, USA, 10004',
      place_id: 'ChIJOwg_06VPwokRYv534QaPC8g',
      structured_formatting: {
        main_text: 'New York',
        secondary_text: 'NY, USA',
      },
      terms: [
        {
          value: 'New York',
          offset: 0,
        },
        {
          value: 'NY',
          offset: 10,
        },
        {
          value: 'USA',
          offset: 14,
        },
      ],
      types: ['locality', 'political', 'geocode'],
    },
    {
      description: 'Los Angeles, CA, USA, 90001',
      place_id: 'ChIJE9on3F3HwoAR9AhGJW_fL-I',
      structured_formatting: {
        main_text: 'Los Angeles',
        secondary_text: 'CA, USA',
      },
      terms: [
        {
          value: 'Los Angeles',
          offset: 0,
        },
        {
          value: 'CA',
          offset: 13,
        },
        {
          value: 'USA',
          offset: 17,
        },
      ],
      types: ['locality', 'political', 'geocode'],
    },
  ],
  status: 'OK',
}

const capitalizeFirstLetterOfEachWord = (str) => {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

export const locationSearchArray = locationSearchList.predictions.map(
  (location) => ({
    value: location.description,
    label: capitalizeFirstLetterOfEachWord(location.description),
    searchValue: location.description,
  }),
)
