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
    id: 4,
    type: 'PRL',
    from: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    to: {
      name: 'MCX',
      coords: [5304652.035026469, 5284158.732576696],
    },
    iata: 'SU',
    //datetime: '10.04.2025, 08:46:45',
  },

  // вылеты из СПБ

  {
    id: 5,
    type: 'BSM',
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
    type: 'BSM',
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
    type: 'BSM',
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
    type: 'PNL',
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
    type: 'BSM',
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
    type: 'ADL',
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
    type: 'BSM',
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
    type: 'BSM',
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
    type: 'PRL',
    from: {
      name: 'HMA',
      coords: [7690629.4728931775, 8632393.143951507],
    },
    to: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    iata: 'SU',
    //datetime: '09.03.2023, 16:45:00',
  },
  {
    id: 17,
    type: 'BSM',
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
    type: 'PSM',
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
    type: 'PSM',
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
    type: 'BSM',
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
    id: 24,
    type: 'PRL',
    from: {
      name: 'SVX',
      coords: [6768570.130652493, 7707790.806334404],
    },
    to: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    iata: 'SU',
    //datetime: '10.04.2025, 08:46:45',
  },
  {
    id: 25,
    type: 'BSM',
    from: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    to: {
      name: 'AER',
      coords: [4446868.566769821, 5379860.550508249],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 26,
    type: 'CRM',
    from: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    to: {
      name: 'GRV',
      coords: [5087300.729252602, 5371263.072058031],
    },
    iata: 'SU',
    //datetime: '10.04.2025, 08:46:45',
    //new,
  },
  {
    id: 27,
    type: 'ADL',
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
    type: 'BSM',
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
    type: 'BSM',
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
    type: 'PRL',
    from: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    to: {
      name: 'KZN',
      coords: [5485857.90213976, 7480574.980275688],
    },
    iata: 'SU',
    //datetime: '10.04.2025, 08:46:45',
  },
  {
    id: 31,
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
    id: 31,
    type: 'BSM',
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
    type: 'PRL',
    from: {
      name: 'KHV',
      coords: [15049070.453310147, 6195165.8895390285],
    },
    to: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    iata: 'SU',
    //datetime: '10.04.2025, 08:46:45',
  },
  {
    id: 33,
    type: 'PRL',
    from: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    to: {
      name: 'LED',
      coords: [3368806.0901314416, 8355410.462125431],
    },
    iata: 'SU',
    //datetime: '10.04.2025, 08:46:45',
  },
  {
    id: 34,
    type: 'PNL',
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
    type: 'BSM',
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
    type: 'BSM',
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
    type: 'PRL',
    from: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    to: {
      name: 'STW',
      coords: [4687975.4518789705, 5638729.204993358],
    },
    iata: 'SU',
    //datetime: '10.04.2025, 08:46:45',
  },
  {
    id: 38,
    type: 'BSM',
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
    id: 40,
    type: 'ADL',
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
    type: 'BSM',
    from: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    to: {
      name: 'VOG',
      coords: [4935416.41601426, 6237664.787953884],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 42,
    type: 'PRL',
    from: {
      name: 'AER',
      coords: [4446868.566769821, 5379860.550508249],
    },
    to: {
      name: 'LED',
      coords: [3368806.0901314416, 8355410.462125431],
    },
    iata: 'SU',
    //datetime: '10.04.2025, 08:46:45',
  },
  {
    id: 43,
    type: 'BSM',
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
    type: 'BSM',
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
    type: 'PRL',
    from: {
      name: 'PKS',
      coords: [17638640.107888676, 7014412.5835433],
    },
    to: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    iata: 'SU',
    //datetime: '10.04.2025, 08:46:45',
  },
  {
    id: 46,
    type: 'BSM',
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
    type: 'ADL',
    from: {
      name: 'LED',
      coords: [3368806.0901314416, 8355410.462125431],
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
    type: 'BSM',
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
    type: 'BSM',
    from: {
      name: 'GRV',
      coords: [5087300.729252602, 5371263.072058031],
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
    type: 'BSM',
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
    type: 'BSM',
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
    id: 52,
    type: 'PRL',
    from: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    to: {
      name: 'KGD',
      coords: [2293025.663054325, 7340875.597788583],
    },
    iata: 'SU',
    //datetime: '10.04.2025, 08:46:45',
  },
  {
    id: 53,
    type: 'BSM',
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
    type: 'BSM',
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
    type: 'BSM',
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
    type: 'ADL',
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
    type: 'BSM',
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
    type: 'PNL',
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
    type: 'PRL',
    from: {
      name: 'TJM',
      coords: [7270954.9926025355, 7794595.813657025],
    },
    to: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    iata: 'SU',
    //datetime: '10.04.2025, 00:45:00',
  },
  {
    id: 62,
    type: 'BSM',
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
    type: 'BSM',
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
    type: 'BSM',
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
    type: 'PRL',
    from: {
      name: 'CEK',
      coords: [6846549.433953181, 7421443.289208611],
    },
    to: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    iata: 'SU',
    //datetime: '10.04.2025, 20:45:00',
  },
  {
    id: 66,
    type: 'BSM',
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
    type: 'MVT',
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
    type: 'BSM',
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
    type: 'BSM',
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
    type: 'BSM',
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
    type: 'PRL',
    from: {
      name: 'TOF',
      coords: [9485600.602189317, 7635000.803772509],
    },
    to: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    iata: 'SU',
    //datetime: '09.03.2023, 16:45:00',
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
      name: 'KGD',
      coords: [2293025.663054325, 7340875.597788583],
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
      name: 'CSY',
      coords: [5270666.194487283, 7576412.873501932],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 77,
    type: 'BSM',
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

  //Субсидированные проверенные

  {
    id: 78,
    type: 'BSM',
    from: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    to: {
      name: 'VVO',
      coords: [14710503.354011485, 5372795.016231667],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 79,
    type: 'BSM',
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
    id: 80,
    type: 'PRL',
    from: {
      name: 'KHV',
      coords: [15049070.453310147, 6195165.8895390285],
    },
    to: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    iata: 'SU',
    //datetime: '10.04.2025, 08:46:45',
  },
  {
    id: 81,
    type: 'BSM',
    from: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    to: {
      name: 'VOG',
      coords: [4935416.41601426, 6237664.787953884],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 82,
    type: 'BSM',
    from: {
      name: 'AER',
      coords: [4446868.566769821, 5379860.550508249],
    },
    to: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 83,
    type: 'BSM',
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
    id: 84,
    type: 'BSM',
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
  {
    id: 85,
    type: 'ADL',
    from: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    to: {
      name: 'AER',
      coords: [4446868.566769821, 5379860.550508249],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 86,
    type: 'BSM',
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
    id: 87,
    type: 'BSM',
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
    id: 88,
    type: 'BSM',
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
  {
    id: 89,
    type: 'BSM',
    from: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    to: {
      name: 'VOG',
      coords: [4935416.41601426, 6237664.787953884],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 90,
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
  {
    id: 91,
    type: 'BSM',
    from: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    to: {
      name: 'HMA',
      coords: [7690629.4728931775, 8632393.143951507],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 92,
    type: 'BSM',
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
  {
    id: 93,
    type: 'BSM',
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
    id: 94,
    type: 'BSM',
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
    id: 95,
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
    id: 96,
    type: 'BSM',
    from: {
      name: 'ASF',
      coords: [5344048.002818208, 5825865.054276822],
    },
    to: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 97,
    type: 'BSM',
    from: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    to: {
      name: 'IKT',
      coords: [11621198.241363794, 6848492.635865335],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 98,
    type: 'BSM',
    from: {
      name: 'KVK',
      coords: [3738731.8899865686, 10289182.79792737],
    },
    to: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    iata: 'SU',
    datetime: '',
  },
  {
    id: 99,
    type: 'PRL',
    from: {
      name: 'NOZ',
      coords: [9671248.11698526, 7134631.439366045],
    },
    to: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    iata: 'SU',
    //datetime: '10.04.2025, 08:46:45',
  },
  {
    id: 100,
    type: 'BSM',
    from: {
      name: 'LED',
      coords: [3368806.0901314416, 8355410.462125431],
    },
    to: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    iata: 'DP',
    datetime: '',
  },
  {
    id: 101,
    type: 'ADL',
    from: {
      name: 'VKO',
      coords: [4149222.5122867655, 7479037.969008795],
    },
    to: {
      name: 'AER',
      coords: [4446868.566769821, 5379860.550508249],
    },
    iata: 'DP',
    datetime: '',
  },
  {
    id: 102,
    type: 'BSM',
    from: {
      name: 'MRV',
      coords: [4795988.753795685, 5500622.886223015],
    },
    to: {
      name: 'AER',
      coords: [4446868.566769821, 5379860.550508249],
    },
    iata: 'A4',
    datetime: '',
  },
  {
    id: 103,
    type: 'BSM',
    from: {
      name: 'KUF',
      coords: [5583106.609296763, 7076231.14090393],
    },
    to: {
      name: 'MRV',
      coords: [4795988.753795685, 5500622.886223015],
    },
    iata: 'A4',
    datetime: '',
  },
  {
    id: 104,
    type: 'PRL',
    from: {
      name: 'KGD',
      coords: [2293025.663054325, 7340875.597788583],
    },
    to: {
      name: 'VKO',
      coords: [4149222.5122867655, 7479037.969008795],
    },
    iata: 'A4',
    //datetime: '10.04.2025, 08:46:45',
  },
  {
    id: 105,
    type: 'BSM',
    from: {
      name: 'ULV',
      coords: [5368571.686639966, 7221667.496637229],
    },
    to: {
      name: 'VKO',
      coords: [4149222.5122867655, 7479037.969008795],
    },
    iata: 'DP',
    datetime: '',
  },
  {
    id: 106,
    type: 'BSM',
    from: {
      name: 'MRV',
      coords: [4795988.753795685, 5500622.886223015],
    },
    to: {
      name: 'RGK',
      coords: [9555264.339527747, 6794558.3341107145],
    },
    iata: 'A4',
    datetime: '',
  },
  {
    id: 107,
    type: 'MVT',
    from: {
      name: 'ASF',
      coords: [5344048.002818208, 5825865.054276822],
    },
    to: {
      name: 'MCX',
      coords: [5304652.035026469, 5284158.732576696],
    },
    iata: 'A4',
    datetime: '',
  },
  {
    id: 108,
    type: 'BSM',
    from: {
      name: 'BAX',
      coords: [9299630.260870075, 7050483.368678848],
    },
    to: {
      name: 'AER',
      coords: [4446868.566769821, 5379860.550508249],
    },
    iata: 'N4',
    datetime: '',
  },
  {
    id: 109,
    type: 'BSM',
    from: {
      name: 'AER',
      coords: [4446868.566769821, 5379860.550508249],
    },
    to: {
      name: 'VKO',
      coords: [4149222.5122867655, 7479037.969008795],
    },
    iata: '6R',
    datetime: '',
  },
  {
    id: 110,
    type: 'BSM',
    from: {
      name: 'LED',
      coords: [3368806.0901314416, 8355410.462125431],
    },
    to: {
      name: 'BAX',
      coords: [9299630.260870075, 7050483.368678848],
    },
    iata: 'N4',
    datetime: '',
  },
  {
    id: 111,
    type: 'PRL',
    from: {
      name: 'ASF',
      coords: [5344048.002818208, 5825865.054276822],
    },
    to: {
      name: 'SVO',
      coords: [4164807.2409978234, 7552943.130519489],
    },
    iata: 'DP',
    //datetime: '10.04.2025, 08:46:45',
  },
  {
    id: 112,
    type: 'PRL',
    from: {
      name: 'VKO',
      coords: [4149222.5122867655, 7479037.969008795],
    },
    to: {
      name: 'KUF',
      coords: [5583106.609296763, 7076231.14090393],
    },
    iata: 'DP',
    //datetime: '10.04.2025, 08:46:45',
  },
  {
    id: 113,
    type: 'BSM',
    from: {
      name: 'MQF',
      coords: [6540643.473253265, 7056044.395601269],
    },
    to: {
      name: 'LED',
      coords: [3368806.0901314416, 8355410.462125431],
    },
    iata: 'A4',
    datetime: '',
  },
  {
    id: 114,
    type: 'BSM',
    from: {
      name: 'VKO',
      coords: [4149222.5122867655, 7479037.969008795],
    },
    to: {
      name: 'OVB',
      coords: [9194800.696390048, 7368331.648083807],
    },
    iata: '6R',
    datetime: '',
  },
  {
    id: 115,
    type: 'BSM',
    from: {
      name: 'PEE',
      coords: [6236273.721526296, 7949378.060282518],
    },
    to: {
      name: 'LED',
      coords: [3368806.0901314416, 8355410.462125431],
    },
    iata: 'DP',
    datetime: '',
  },
  {
    id: 116,
    type: 'BSM',
    from: {
      name: 'KEJ',
      coords: [9585443.053481804, 7414444.929098155],
    },
    to: {
      name: 'KZN',
      coords: [5485857.90213976, 7480574.980275688],
    },
    iata: 'N4',
    datetime: '',
  },
  {
    id: 117,
    type: 'BSM',
    from: {
      name: 'KZN',
      coords: [5485857.90213976, 7480574.980275688],
    },
    to: {
      name: 'MRV',
      coords: [4795988.753795685, 5500622.886223015],
    },
    iata: 'N4',
    datetime: '',
  },
  {
    id: 118,
    type: 'BSM',
    from: {
      name: 'SVX',
      coords: [6768570.130652493, 7707790.806334404],
    },
    to: {
      name: 'KZN',
      coords: [5485857.90213976, 7480574.980275688],
    },
    iata: 'WZ',
    datetime: '',
  },
  {
    id: 119,
    type: 'PNL',
    from: {
      name: 'VKO',
      coords: [9194800.696390048, 7368331.648083807],
    },
    to: {
      name: 'OVB',
      coords: [9194800.696390048, 7368331.648083807],
    },
    iata: 'ZF',
    datetime: '',
  },
  {
    id: 120,
    type: 'BSM',
    from: {
      name: 'MRV',
      coords: [4795988.753795685, 5500622.886223015],
    },
    to: {
      name: 'AER',
      coords: [4446868.566769821, 5379860.550508249],
    },
    iata: 'A4',
    datetime: '',
  },
  {
    id: 121,
    type: 'BSM',
    from: {
      name: 'ASF',
      coords: [5344048.002818208, 5825865.054276822],
    },
    to: {
      name: 'AER',
      coords: [4446868.566769821, 5379860.550508249],
    },
    iata: 'A4',
    datetime: '',
  },
]
