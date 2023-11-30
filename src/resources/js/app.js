import './bootstrap';
import '../scss/app.scss';

import {createApp} from 'vue'
import App from '../views/App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.mount('#app')
