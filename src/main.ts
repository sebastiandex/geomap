import { createApp } from 'vue'
import '@/app/styles/index.scss'
import { App } from '@/app/ui/App'
import { router } from '@/app/providers/router'
import { store } from '@/app/providers/store'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
