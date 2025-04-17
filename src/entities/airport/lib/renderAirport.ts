import type { RenderFunction } from 'ol/style/Style'
import { RENDER_RATIO } from '@/shared/lib/constants'

export const renderAirport: RenderFunction = (coords, state) => {
  const [x, y] = coords.map(Number)
  const ctx = state.context
  const theme = state.feature.get('theme')
  const airport = state.feature.get('airport')
  const ratio = RENDER_RATIO
  const isActive = state.feature.get('active')
  const mainColor = isActive ? '#6BCAFF' : theme === 'dark' ? '#434246' : '#928FA0'
  // const mainColor = isActive ? '#6BCAFF' : '#928FA0'
  const textColor = theme === 'dark' ? (isActive ? '#333' : 'rgba(255, 255, 255, 0.6)') : '#fff'
  // const textColor = isActive ? '#333' : '#fff'
  // Render circle
  ctx.beginPath()
  ctx.arc(x, y, 2 * ratio, 0, 2 * Math.PI)
  ctx.lineWidth = 1 * ratio
  ctx.strokeStyle = mainColor
  ctx.stroke()
  // Render rectangle
  const rectRadius = 2 * ratio
  const rectWidth = 22 * ratio
  const rectHeight = 14 * ratio
  const rectX = x - rectWidth - 2 * ratio
  const movedUpCoords = y - 17 * ratio
  const rectY = airport.name === 'SVO' ? movedUpCoords : y + 2 * ratio
  ctx.beginPath()
  ctx.moveTo(rectX, rectY + rectRadius)
  ctx.arcTo(rectX, rectY + rectHeight, rectX + rectRadius, rectY + rectHeight, rectRadius)
  ctx.arcTo(
    rectX + rectWidth,
    rectY + rectHeight,
    rectX + rectWidth,
    rectY + rectHeight - rectRadius,
    rectRadius
  )
  ctx.arcTo(rectX + rectWidth, rectY, rectX + rectWidth - rectRadius, rectY, rectRadius)
  ctx.arcTo(rectX, rectY, rectX, rectY + rectRadius, rectRadius)
  ctx.fillStyle = mainColor
  ctx.fill()
  ctx.shadowColor = 'black'
  ctx.shadowOffsetX = 0.2
  ctx.shadowOffsetY = 0.2
  // Render text
  const textX = rectX + rectWidth / 2
  const textY = rectY + 0.7 * ratio + rectHeight / 2
  ctx.fillStyle = textColor
  ctx.font = `bold ${7 * ratio}px/1 Open Sans`
  ctx.textBaseline = 'middle'
  ctx.textAlign = 'center'
  ctx.fillText(airport.name, textX, textY)
}
