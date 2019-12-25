import Vue from 'vue';
import { VueReCaptcha } from 'vue-recaptcha-v3';
import Vuelidate from 'vuelidate';
import { i18n } from './i18n';
import { _init } from './firebase';

// SCSS customizing
import './styles/style.scss';

import App from './App.vue';
import router from './router';
import store from './store';
import { _appConfig } from './config';

_init(); // Firebase init

Vue.use(VueReCaptcha, {
  siteKey: _appConfig.recaptchaSiteKey,
  loaderOptions: {
    // useRecaptchaNet: true,
    // renderParameters: {},
    autoHideBadge: true
  }
});

Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app');
