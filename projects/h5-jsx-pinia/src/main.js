import {
    createApp
} from 'vue'
import App from './App.jsx'

import 'amfe-flexible'
import './index.css'
import {
    createPinia
} from 'pinia';
import router from './router/index';

createApp(App)
    .use(createPinia())
    .use(router)
    .mount('#app')