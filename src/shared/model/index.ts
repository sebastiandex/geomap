import { type Coordinate } from 'ol/coordinate'

export type Theme = 'light' | 'dark'

export interface Airport {
  name: string
  coords: Coordinate
}

export type TelegramType = 'PNL' | 'PTM' | 'MVT' | 'PSM' | 'ADL' | 'LDM' | 'BSM' | 'PRL' | 'CRM'

export interface Telegram {
  id: number
  type: TelegramType
  from: Airport
  to: Airport
  iata: string
  datetime: string
}
