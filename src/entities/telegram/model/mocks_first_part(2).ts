import type { Telegram } from '@/shared/model'

export const mockData: Telegram[] = [
  //отправка из МСК
  {
    id: 1,
    type: 'MVT',
    from: {
      name: 'VKO',
      coords: [4149222.5122867655, 7479037.969008795],
    },
    to: {
      name: 'KZN',
      coords: [5485857.90213976, 7480574.980275688],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 2,
    type: 'PTM',
    from: {
      name: 'VKO',
      coords: [4149222.5122867655, 7479037.969008795],
    },
    to: {
      name: 'OMS',
      coords: [8160865.265902123, 7355502.902339347],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 3,
    type: 'PTM',
    from: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    to: {
      name: 'SVX',
      coords: [6768570.130652493, 7707790.806334404],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 4,
    type: 'MVT',
    from: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    to: {
      name: 'MCX',
      coords: [5304652.035026469, 5284158.732576696],
    },
    iata: 'SU',
    datetime: '',
  },

  // вылеты из СПБ

  {
    id: 5,
    type: 'MVT',
    from: {
      name: 'LED',
      coords: [3368806.0901314416, 8355410.462125431],
    },
    to: {
      name: 'PEE',
      coords: [6236273.721526296, 7949378.060282518],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 6,
    type: 'PSM',
    to: {
      name: 'LED',
      coords: [3368806.0901314416, 8355410.462125431],
    },
    from: {
      name: 'OVB',
      coords: [9194800.696390048, 7368331.648083807],
    },
    iata: 'SU',
    datetime: '',
  },

  //прилеты в МСК

  {
    id: 7,
    type: 'MVT',
    from: {
      name: 'TOF',
      coords: [9485600.602189317, 7635000.803772509],
    },
    to: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 8,
    type: 'ADL',
    from: {
      name: 'KHV',
      coords: [15049070.453310147, 6195165.8895390285],
    },
    to: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    iata: 'SU',
    datetime: '',
  },

  //Прилет в СПБ

  {
    id: 9,
    type: 'BSM',
    from: {
      name: 'KRR',
      coords: [4360417.850219763, 5626985.9462288385],
    },
    to: {
      name: 'LED',
      coords: [3368806.0901314416, 8355410.462125431],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 10,
    type: 'PSM',
    from: {
      name: 'STW',
      coords: [4687975.4518789705, 5638729.204993358],
    },
    to: {
      name: 'LED',
      coords: [3368806.0901314416, 8355410.462125431],
    },
    iata: 'SU',
    datetime: '',
  },

  //прилеты в МСК

  {
    id: 11,
    type: 'PTM',
    from: {
      name: 'HTA',
      coords: [12613054.904331863, 6805153.612617776],
    },
    to: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 12,
    type: 'MVT',
    from: {
      name: 'OGZ',
      coords: [4965595.129968315, 5343272.990601991],
    },
    to: {
      name: 'VKO',
      coords: [4149222.5122867655, 7479037.969008795],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 13,
    type: 'LDM',
    from: {
      name: 'LED',
      coords: [3368806.0901314416, 8355410.462125431],
    },
    to: {
      name: 'VKO',
      coords: [4149222.5122867655, 7479037.969008795],
    },
    iata: 'SU',
    datetime: '',
  },

  //прилет в СПБ

  {
    id: 14,
    type: 'MVT',
    from: {
      name: 'VKO',
      coords: [4149222.5122867655, 7479037.969008795],
    },
    to: {
      name: 'LED',
      coords: [3368806.0901314416, 8355410.462125431],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 15,
    type: 'ADL',
    from: {
      name: 'NJC',
      coords: [8513770.31561496, 8614030.53517164],
    },
    to: {
      name: 'LED',
      coords: [3368806.0901314416, 8355410.462125431],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 16,
    type: 'MVT',
    from: {
      name: 'HMA',
      coords: [7690629.4728931775, 8632393.143951507],
    },
    to: {
      name: 'LED',
      coords: [3368806.0901314416, 8355410.462125431],
    },
    iata: 'SU',
    datetime: '',
  },

  // вылеты/прилеты TUR

  {
    id: 17,
    type: 'BSM',
    from: {
      name: 'AYT',
      coords: [3427838.8160991147, 4425218.989217558],
    },
    to: {
      name: 'SVX',
      coords: [6768570.130652493, 7707790.806334404],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 18,
    type: 'BSM',
    from: {
      name: 'IST',
      coords: [3200657.999288202, 5053033.5485327905],
    },
    to: {
      name: 'KZN',
      coords: [5485857.90213976, 7480574.980275688],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 19,
    type: 'PTM',
    from: {
      name: 'KZN',
      coords: [5485857.90213976, 7480574.980275688],
    },
    to: {
      name: 'IST',
      coords: [3200657.999288202, 5053033.5485327905],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 20,
    type: 'PTM',
    from: {
      name: 'SVX',
      coords: [6768570.130652493, 7707790.806334404],
    },
    to: {
      name: 'AYT',
      coords: [3427838.8160991147, 4425218.989217558],
    },
    iata: 'SU',
    datetime: '',
  },

  //Субсидированные

  {
    id: 21,
    type: 'MVT',
    from: {
      name: 'KHV',
      coords: [15049070.453310147, 6195165.8895390285],
    },
    to: {
      name: 'GDX',
      coords: [16778107.048209433, 8379905.212210491],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 22,
    type: 'MVT',
    from: {
      name: 'KHV',
      coords: [15049070.453310147, 6195165.8895390285],
    },
    to: {
      name: 'OVB',
      coords: [9194800.696390048, 7368331.648083807],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 23,
    type: 'PSM',
    to: {
      name: 'KHV',
      coords: [15049070.453310147, 6195165.8895390285],
    },
    from: {
      name: 'PKC',
      coords: [17638640.107888676, 7014412.5835433],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 24,
    type: 'MVT',
    from: {
      name: 'BQS',
      coords: [14183494.62069797, 6520311.130084994],
    },
    to: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    iata: 'SU',
    datetime: '',
  },

  // Несубсидированные

  {
    id: 25,
    type: 'ADL',
    from: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    to: {
      name: 'GRV',
      coords: [5087300.729252602, 5371263.072058031],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 26,
    type: 'BSM',
    from: {
      name: 'SIP',
      coords: [3781923.8524143584, 5629711.54015677],
    },
    to: {
      name: 'UFA',
      coords: [6219787.304939812, 7276608.782365759],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 27,
    type: 'PSM',
    from: {
      name: 'TJM',
      coords: [7270954.9926025355, 7794595.813657025],
    },
    to: {
      name: 'YKS',
      coords: [14446297.67456273, 8881299.732978977],
    },
    iata: 'SU',
    datetime: '',
  },

  //прилеты в МСК

  {
    id: 28,
    type: 'PTM',
    from: {
      name: 'YKS',
      coords: [14446297.67456273, 8881299.732978977],
    },
    to: {
      name: 'NUX',
      coords: [8518100.643806819, 9896030.489455359],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 29,
    type: 'MVT',
    from: {
      name: 'CEK',
      coords: [6846549.433953181, 7421443.289208611],
    },
    to: {
      name: 'ARH',
      coords: [4532562.310782482, 9503867.711649053],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 30,
    type: 'LDM',
    from: {
      name: 'ARH',
      coords: [4532562.310782482, 9503867.711649053],
    },
    to: {
      name: 'HTA',
      coords: [12613054.904331863, 6805153.612617776],
    },
    iata: 'SU',
    datetime: '',
  },

  //Субсидированные

  {
    id: 31,
    type: 'MVT',
    from: {
      name: 'VVO',
      coords: [14710503.354011485, 5372795.016231667],
    },
    to: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    iata: 'SU',
    datetime: '',
  },

  //Несубсидированные

  {
    id: 32,
    type: 'ADL',
    from: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    to: {
      name: 'KGD',
      coords: [2293025.663054325, 7340875.597788583],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 33,
    type: 'MVT',
    from: {
      name: 'TOF',
      coords: [9485600.602189317, 7635000.803772509],
    },
    to: {
      name: 'DYR',
      coords: [19785748.18241118, 9538913.00790416],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 34,
    type: 'BSM',
    from: {
      name: 'KZN',
      coords: [5485857.90213976, 7480574.980275688],
    },
    to: {
      name: 'ABA',
      coords: [10172965.061990544, 7121068.376221672],
    },
    iata: 'SU',
    datetime: '',
  },
]
