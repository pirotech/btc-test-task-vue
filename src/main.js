import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBook, faGlobeAsia, faShoppingCart, faStar, faThList, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faBook,
  faGlobeAsia,
  faShoppingCart,
  faStar,
  faThList,
  faClock,
  faSearch
);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
