import { createApp } from 'vue'

import App from './App.vue'

import { useRouter } from './router'
import { setupStore } from './store'

const app = createApp(App)

setupStore(app)
useRouter(app)
app.mount('#app')
