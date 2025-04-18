import { toLonLat } from 'ol/proj'
import { GreatCircle } from 'arc'
import type { Telegram } from '@/shared/model'
import { LINE_POINTS } from './constants'

export const getLineCoords = (telegram: Telegram) => {
  const from = toLonLat(telegram.from.coords)
  const to = toLonLat(telegram.to.coords)
  const arcGenerator = new GreatCircle({ x: from[0], y: from[1] }, { x: to[0], y: to[1] })
  const arcLine = arcGenerator.Arc(LINE_POINTS, { offset: 10 })
  return arcLine.geometries[0].coords
}

export const getTelegramColor = (type: string) => {
  const codeColors: { [index: string]: string } = {
    PNL: 'lightBlue',
    PTM: 'blue',
    MVT: 'purple',
    PSM: 'orange',
    ADL: 'adl',
    LDM: 'ldm',
    BSM: 'bsm',
    PRL: 'prl',
    CRM: 'crm',
  }
  return codeColors[type]
}
