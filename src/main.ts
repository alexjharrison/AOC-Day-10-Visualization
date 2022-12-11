import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import 'primeflex/primeflex.scss';
import 'primevue/resources/themes/arya-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

createApp(App).use(PrimeVue).mount('#app')
