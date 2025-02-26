import { createApp } from 'vue'

import App from './App.vue'
import router from './router/router'
import { createPinia, Pinia } from 'pinia'

const app = createApp(App)
const pinia: Pinia = createPinia()
app.use(router)
app.use(pinia)
app.mount('#app')
