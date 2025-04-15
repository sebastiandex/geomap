import { useTelegramStore } from '@/entities/telegram'
import type { Airport, Telegram } from '@/shared/model'
import { mockData } from '@/entities/telegram/model/mocks_first_part(2)'
const store = useTelegramStore()
export const getAirportsFromTelegrams = (telegrams: Telegram[]) => {
  const airports: Airport[] = []

  telegrams.forEach((telegram) => {
    if (!airports.find((airport) => airport.name === telegram.from.name)) {
      airports.push(telegram.from)
    }
    if (!airports.find((airport) => airport.name === telegram.to.name)) {
      airports.push(telegram.to)
    }
  })

  return airports
}

export async function playAutoSelect() {
  store.autoRunIOn = true
  const telegrams = JSON.parse(JSON.stringify(store.telegrams))
  const i = 0
  ;(function loopIt(i) {
    setTimeout(
      function () {
        if (!store.autoRunIOn) {
          return
        }
        store.addActive(telegrams[i])
        if (i < telegrams.length - 1) loopIt(i + 1)
      },
      Math.floor(Math.random() * (1200 - 100 + 1) + 100)
    )
    const telegramsCopy = JSON.parse(JSON.stringify(store.telegrams))
    telegramsCopy.push(telegrams[i])
    telegramsCopy.shift()
    store.telegrams = telegramsCopy
    if (i == telegrams.length - 1) {
      store.telegrams = mockData
      playAutoSelect()
    }
  })(i)
}
