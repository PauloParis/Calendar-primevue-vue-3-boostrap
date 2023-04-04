import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

import PrimeVue from 'primevue/config';

import Calendar from 'primevue/calendar';


//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primevue/resources/primevue.min.css";

//icons
import "primeicons/primeicons.css";






const app = createApp(App)

app.use(PrimeVue)
app.component('Calendar', Calendar)
app.mount('#app')
