import Vue from 'vue';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

library.add(faArrowRight, faChevronRight, faChevronLeft, faGithub, faLinkedinIn);
dom.watch();
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
