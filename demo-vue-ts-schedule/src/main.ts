import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import pinia from './utils/pinia'
import Toast from 'vue-toastification'
import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'
import "vue-toastification/dist/index.css";


const app = createApp(App)

app.use(ElementPlus)
app.use(Toast, {
    position: 'top-right',
})
app.use(pinia)
app.use(router)
app.mount('#app')
