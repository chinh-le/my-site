import Vue from 'vue';

export const loginCase = () => {
  Vue.prototype.$recaptcha('login').then((token) => {
    // console.log(token); // Will print the token
  });
};
