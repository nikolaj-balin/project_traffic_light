import Vue from 'vue';
// store
import {store} from './store';

// JS
import f from './js';
import App from './components/App.vue';

// SCSS
import './assets/scss/main.scss'

// CSS (example)
import './assets/css/main.css'

// Vue init
const app = new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: {App}
})
