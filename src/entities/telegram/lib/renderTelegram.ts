import type { Coordinate } from 'ol/coordinate'
import type { LineString } from 'ol/geom'
import type { RenderFunction } from 'ol/style/Style'
import { RENDER_RATIO } from '@/shared/lib/constants'

import { useTelegramStore } from '../model/useTelegramStore'
import { getTelegramColor } from './helpers'

const store = useTelegramStore()
export const renderTelegram: RenderFunction = (_coords, state) => {
  const coords = _coords as Coordinate[]
  const startX = coords[0][0]
  const startY = coords[0][1]
  const endX = coords.at(-1)![0]
  const endY = coords.at(-1)![1]
  const ctx = state.context
  const ratio = RENDER_RATIO
  const theme = state.feature.get('theme') || 'light'
  const geometry = state.feature.getGeometry() as LineString
  // ctx.strokeStyle = getTelegramColor(store.active[0].type)
  ctx.strokeStyle = '#6BCAFF'
  ctx.lineWidth = 1 * ratio
  // Render Line
  ctx.beginPath()
  ctx.moveTo(startX, startY)
  coords.forEach(([x, y]) => ctx.lineTo(x, y))
  ctx.stroke()
  ctx.closePath()
  // Render Circle
  ctx.beginPath()
  ctx.arc(startX, startY, 2 * ratio, 0, 2 * Math.PI)
  // ctx.fillStyle = theme === 'dark' ? '#626364' : '#fefefe'
  ctx.fillStyle = getTelegramColor(store.active[0].type)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // Render Arrow
  let startSegment: Coordinate = []
  let endSegment: Coordinate = []
  geometry.forEachSegment((start, end) => {
    startSegment = start
    endSegment = end
  })
  const dx = endSegment[0] - startSegment[0]
  const dy = endSegment[1] - startSegment[1]
  const rotation = Math.atan2(dy, dx) || 0
  const arrowLength = 6 * ratio
  ctx.beginPath()
  ctx.save()
  ctx.translate(endX, endY)
  ctx.rotate(0.8 - rotation)
  ctx.translate(-endX, -endY)
  ctx.moveTo(endX - 1, endY - 1)
  ctx.lineTo(endX, endY + arrowLength)
  ctx.restore()
  ctx.translate(endX, endY)
  ctx.rotate(2.2 - rotation)
  ctx.translate(-endX, -endY)
  ctx.moveTo(endX + 1, endY + 1)
  ctx.lineTo(endX, endY + arrowLength)
  ctx.stroke()
  ctx.closePath()
}
