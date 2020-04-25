import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBook, faGlobeAsia, faShoppingCart, faStar, faThList,
  faStarHalfAlt, faClock, faSearch, faPlus, faTimes,
  faAlignCenter, faTags, faInfoCircle
} from '@fortawesome/free-solid-svg-icons';
import {
  faStar as farStar,
  faFileImage as farFileImage,
  faClock as farClock
} from '@fortawesome/free-regular-svg-icons';

library.add(
  faBook, faGlobeAsia, faShoppingCart, faStar, faThList,
  farStar, faStarHalfAlt, farClock, faSearch, faPlus, faTimes,
  faAlignCenter, faTags, farFileImage, faInfoCircle
);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
