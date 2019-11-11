import Vue from 'vue';
import { VueReCaptcha } from 'vue-recaptcha-v3';
import Vuelidate from 'vuelidate';
import BootstrapVue from 'bootstrap-vue';
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// SCSS customizing
import './style/style.scss';

import App from './App.vue';
import router from './router';
import store from './store';
import config from './config';
// console.log('config: ', config);

Vue.use(VueReCaptcha, {
  siteKey: config.recaptchaSiteKey,
  loaderOptions: {
    // useRecaptchaNet: true,
    // renderParameters: {},
    autoHideBadge: true
  }
});

Vue.use(Vuelidate);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
