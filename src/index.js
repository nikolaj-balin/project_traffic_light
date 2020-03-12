import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// store
import {store} from './store';

// JS
import f from './js';
import App from './components/App.vue';

// SCSS
import './assets/scss/main.scss'

// CSS (example)
import './assets/css/main.css'

const routes = [
  { path: '/', component: App },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

// Vue init
const app = new Vue({
  el: '#app',
  store,
  router,
  template: '<router-view></router-view>',
  // components: {App}
});


