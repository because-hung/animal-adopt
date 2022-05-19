import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '../plugins/fontawesome'

const app = createApp(App).use(store)
app.use(VueAxios, axios)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.provide('axios', app.config.globalProperties.axios) // provide 'axios'
app.mount('#app')
