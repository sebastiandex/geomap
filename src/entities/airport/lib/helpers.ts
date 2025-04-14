import { useTelegramStore } from '@/entities/telegram'
import type { Airport, Telegram } from '@/shared/model'
import { mockData } from '@/entities/telegram/model/mocks_first_part'
import { log } from 'console'
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
          console.log('OFF')
          return
        }
        store.addActive(telegrams[i])
        // transformCoordinates(store.telegrams[i])
        // console.log(store.telegrams[0].id)
        // store.telegrams.splice(0, 1)
        // const newArr = [...storeCopy]
        // const firstElement = newArr.shift()
        // newArr.push(store.telegrams[i])
        // telegrams.splice(0,1,)

        // telegrams.shift()
        // telegrams.push(mockData[i - 1])

        // newArr.splice(0, 1)
        if (i < telegrams.length - 1) loopIt(i + 1)
      },
      Math.floor(Math.random() * (1500 - 100 + 1) + 100)
    )
    // telegrams.push(store.telegrams[i])
    // store.shiftArray()
    // store.telegrams.push(telegramsCopy[i])
    const telegramsCopy = JSON.parse(JSON.stringify(store.telegrams))
    // telegramsCopy.shift()
    console.log('telegramsCopy', telegramsCopy)
    // telegramsCopy.push(telegrams[i])
    store.telegrams = telegramsCopy
    // const telegramsFiltered = telegrams.filter((item) => item.id !== telegrams[i].id)
    console.log('store.telegrams', store.telegrams)
    store.telegrams = telegramsCopy
    console.log(i)
    console.log(telegrams.length - 1)
    if (i == telegrams.length - 1) {
      console.log('Play STOPPED')
      store.telegrams = mockData
      playAutoSelect()
    }
  })(i)
}
