import Vue from 'vue';
import App from './App.vue';
import routes from './router.js';
import { store } from './store.js';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: routes,
  store: store,
}).$mount('#app')
