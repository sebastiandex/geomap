import type { Telegram } from '@/shared/model'

export const mockData: Telegram[] = [
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
      name: 'ABA',
      coords: [10172965.061990544, 7121068.376221672],
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
      name: 'ARH',
      coords: [4532562.310782482, 9503867.711649053],
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
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 17,
    type: 'MVT',
    from: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
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
    id: 18,
    type: 'BSM',
    from: {
      name: 'AYT',
      coords: [3427838.8160991147, 4425218.989217558],
    },
    to: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 19,
    type: 'BSM',
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
    id: 20,
    type: 'BSM',
    from: {
      name: 'IST',
      coords: [3200657.999288202, 5053033.5485327905],
    },
    to: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 21,
    type: 'BSM',
    from: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    to: {
      name: 'KZN',
      coords: [5485857.90213976, 7480574.980275688],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 22,
    type: 'PTM',
    from: {
      name: 'KZN',
      coords: [5485857.90213976, 7480574.980275688],
    },
    to: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 23,
    type: 'PTM',
    from: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    to: {
      name: 'IST',
      coords: [3200657.999288202, 5053033.5485327905],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 24,
    type: 'PTM',
    from: {
      name: 'SVX',
      coords: [6768570.130652493, 7707790.806334404],
    },
    to: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 25,
    type: 'PTM',
    from: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    to: {
      name: 'AYT',
      coords: [3427838.8160991147, 4425218.989217558],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 26,
    type: 'PTM',
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
    id: 27,
    type: 'PTM',
    from: {
      name: 'GRV',
      coords: [5087300.729252602, 5371263.072058031],
    },
    to: {
      name: 'LED',
      coords: [3368806.0901314416, 8355410.462125431],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 28,
    type: 'PTM',
    from: {
      name: 'LED',
      coords: [3368806.0901314416, 8355410.462125431],
    },
    to: {
      name: 'KZN',
      coords: [5485857.90213976, 7480574.980275688],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 29,
    type: 'PTM',
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
  {
    id: 30,
    type: 'PTM',
    from: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    to: {
      name: 'KZN',
      coords: [5485857.90213976, 7480574.980275688],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 31,
    type: 'PTM',
    from: {
      name: 'KZN',
      coords: [5485857.90213976, 7480574.980275688],
    },
    to: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 31,
    type: 'PTM',
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
  {
    id: 32,
    type: 'PTM',
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
  {
    id: 33,
    type: 'PTM',
    from: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    to: {
      name: 'LED',
      coords: [3368806.0901314416, 8355410.462125431],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 34,
    type: 'PTM',
    from: {
      name: 'ABA',
      coords: [10172965.061990544, 7121068.376221672],
    },
    to: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 35,
    type: 'PTM',
    from: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    to: {
      name: 'KHV',
      coords: [15049070.453310147, 6195165.8895390285],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 36,
    type: 'PTM',
    from: {
      name: 'OMS',
      coords: [8160865.265902123, 7355502.902339347],
    },
    to: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 37,
    type: 'PTM',
    from: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    to: {
      name: 'STW',
      coords: [4687975.4518789705, 5638729.204993358],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 38,
    type: 'PTM',
    from: {
      name: 'YKS',
      coords: [14446297.67456273, 8881299.732978977],
    },
    to: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 39,
    type: 'PTM',
    from: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    to: {
      name: 'UFA',
      coords: [6219787.304939812, 7276608.782365759],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 40,
    type: 'PTM',
    from: {
      name: 'CEK',
      coords: [6846549.433953181, 7421443.289208611],
    },
    to: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 41,
    type: 'PTM',
    from: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    to: {
      name: 'IST',
      coords: [3200657.999288202, 5053033.5485327905],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 42,
    type: 'PTM',
    from: {
      name: 'AYT',
      coords: [3427838.8160991147, 4425218.989217558],
    },
    to: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 43,
    type: 'PTM',
    from: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    to: {
      name: 'ARH',
      coords: [4532562.310782482, 9503867.711649053],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 44,
    type: 'PTM',
    from: {
      name: 'OVB',
      coords: [9194800.696390048, 7368331.648083807],
    },
    to: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 45,
    type: 'PTM',
    from: {
      name: 'PKS',
      coords: [17638640.107888676, 7014412.5835433],
    },
    to: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 46,
    type: 'PTM',
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
    id: 47,
    type: 'PTM',
    from: {
      name: 'IST',
      coords: [3200657.999288202, 5053033.5485327905],
    },
    to: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 48,
    type: 'PTM',
    from: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    to: {
      name: 'TJM',
      coords: [7270954.9926025355, 7794595.813657025],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 49,
    type: 'PTM',
    from: {
      name: 'IST',
      coords: [3200657.999288202, 5053033.5485327905],
    },
    to: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 50,
    type: 'PTM',
    from: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    to: {
      name: 'NJC',
      coords: [8513770.31561496, 8614030.53517164],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 51,
    type: 'PTM',
    from: {
      name: 'IST',
      coords: [3200657.999288202, 5053033.5485327905],
    },
    to: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 52,
    type: 'PTM',
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
    id: 53,
    type: 'PTM',
    from: {
      name: 'UFA',
      coords: [6219787.304939812, 7276608.782365759],
    },
    to: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    iata: 'SU',
    datetime: '',
  },

  //Субсидированные НЕ ПРОВЕРЕНЫ

  {
    id: 54,
    type: 'MVT',
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
  {
    id: 55,
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
    id: 56,
    type: 'PSM',
    to: {
      name: 'KHV',
      coords: [15049070.453310147, 6195165.8895390285],
    },
    from: {
      name: 'LED',
      coords: [3368806.0901314416, 8355410.462125431],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 57,
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

  // Несубсидированные ПРОВЕРЕННЫЕ

  {
    id: 58,
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
    id: 59,
    type: 'BSM',
    from: {
      name: 'STW',
      coords: [4687975.4518789705, 5638729.204993358],
    },
    to: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 60,
    type: 'BSM',
    from: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    to: {
      name: 'UFA',
      coords: [6219787.304939812, 7276608.782365759],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 61,
    type: 'PSM',
    from: {
      name: 'TJM',
      coords: [7270954.9926025355, 7794595.813657025],
    },
    to: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 62,
    type: 'PSM',
    from: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
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
    id: 63,
    type: 'PTM',
    from: {
      name: 'YKS',
      coords: [14446297.67456273, 8881299.732978977],
    },
    to: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 64,
    type: 'PTM',
    from: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    to: {
      name: 'PEE',
      coords: [6236273.721526296, 7949378.060282518],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 65,
    type: 'MVT',
    from: {
      name: 'CEK',
      coords: [6846549.433953181, 7421443.289208611],
    },
    to: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 66,
    type: 'MVT',
    from: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    to: {
      name: 'ARH',
      coords: [4532562.310782482, 9503867.711649053],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 67,
    type: 'LDM',
    from: {
      name: 'ARH',
      coords: [4532562.310782482, 9503867.711649053],
    },
    to: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 68,
    type: 'LDM',
    from: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    to: {
      name: 'LED',
      coords: [3368806.0901314416, 8355410.462125431],
    },
    iata: 'SU',
    datetime: '',
  },

  //Субсидированные  НЕ ПРОВЕРЕНЫ

  {
    id: 69,
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

  //Несубсидированные ПРОВЕРЕНЫ

  {
    id: 70,
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
    id: 71,
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
    id: 72,
    type: 'BSM',
    from: {
      name: 'KZN',
      coords: [5485857.90213976, 7480574.980275688],
    },
    to: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 73,
    type: 'BSM',
    from: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    to: {
      name: 'ABA',
      coords: [10172965.061990544, 7121068.376221672],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 74,
    type: 'BSM',
    from: {
      name: 'KZN',
      coords: [5485857.90213976, 7480574.980275688],
    },
    to: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 75,
    type: 'BSM',
    from: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    to: {
      name: 'AYT',
      coords: [3427838.8160991147, 4425218.989217558],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 76,
    type: 'BSM',
    from: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    to: {
      name: 'IST',
      coords: [3200657.999288202, 5053033.5485327905],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 77,
    type: 'PTM',
    from: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    to: {
      name: 'ARH',
      coords: [4532562.310782482, 9503867.711649053],
    },
    iata: 'SU',
    datetime: '',
  },
]
