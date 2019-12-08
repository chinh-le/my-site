import Vue from 'vue';
import { VueReCaptcha } from 'vue-recaptcha-v3';
import Vuelidate from 'vuelidate';
import BootstrapVue from 'bootstrap-vue';

// SCSS customizing
import './styles/style.scss';

import App from './App.vue';
import router from './router';
import store from './store';
import { appConfig } from './config';

Vue.use(VueReCaptcha, {
  siteKey: appConfig.recaptchaSiteKey,
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
