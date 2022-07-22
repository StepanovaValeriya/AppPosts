import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'materialize-css/dist/js/materialize.min.js';
import Main from './styles/main.scss';
import Loader from './app/Loader.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

createApp(App)
  .component('Loader', Loader)
  .use(store)
  .use(router)
  .use(VueAxios, axios)
  .mount('#app');
