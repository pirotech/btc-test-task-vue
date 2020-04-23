import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBook, faGlobeAsia, faShoppingCart, faStar, faStarHalfAlt, faThList, faClock, faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

library.add(
  faBook,
  faGlobeAsia,
  faShoppingCart,
  faStar,
  farStar,
  faStarHalfAlt,
  faThList,
  faClock,
  faSearch,
  faPlus
);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
