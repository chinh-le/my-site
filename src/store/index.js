import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lang: null,
    token: null,
    downloadUrl: null
  },
  getters: {
    appLang (state) {
      return state.lang;
    },
    isAuthenticated (state) {
      // console.log('TLC: isAuthenticated -> state', state);
      return state.token !== null;
    },
    downloadUrl (state) {
      return state.downloadUrl;
    }
  },
  mutations: {
    setLang (state, lang) {
      state.lang = lang;
    },
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
    appLocale ({ commit }, lang) {
      commit('setLang', lang);
    }
  },
  modules: {
  }
});
