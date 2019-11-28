import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    downloadUrl: null
  },
  getters: {
    isAuthenticated (state) {
      // console.log('TLC: isAuthenticated -> state', state);
      return state.token !== null;
    },
    downloadUrl (state) {
      return state.downloadUrl;
    }
  },
  mutations: {
    setAuthUser (state, user) {
      // console.log('TLC: setAuthUser -> state', state);
      if (user) {
        state.token = user.token;
      } else {
        state.token = null;
      }
    },
    setDownloadUrl (state, url) {
      state.downloadUrl = url || null;
    }
  },
  actions: {
  },
  modules: {
  }
});
