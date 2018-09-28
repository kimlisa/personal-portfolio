import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
// import {  } from '@fortawesome/free-regular-svg-icons';
import {
  faCode, faCircle, faUser, faHome,
  faFileAlt, faWrench, faEnvelope, faGraduationCap, faToolbox,
  faAngleLeft, faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

import App from './App.vue';
import router from './router';

library.add(
  faCode, faCircle, faEnvelope, faUser, faHome, faFileAlt,
  faWrench, faGithub, faLinkedinIn, faGraduationCap, faToolbox,
  faAngleLeft, faAngleRight,
);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
