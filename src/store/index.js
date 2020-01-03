import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    uid: null,
    lang: null,
    token: null
  },
  getters: {
    uid (state) {
      return state.uid;
    },
    appLang (state) {
      return state.lang;
    },
    isAuthenticated (state) {
      // console.log('TLC: isAuthenticated -> state', state);
      return state.token !== null;
    }
  },
  mutations: {
    setLang (state, lang) {
      state.lang = lang;
    },
    setAuthUser (state, user) {
      // console.log('TLC: setAuthUser -> state', state);
      if (user) {
        state.uid = user.claims.user_id;
        state.token = user.token;
      } else {
        state.uid = null;
        state.token = null;
      }
    }
  },
  actions: {
    appLocale ({ commit }, lang) {
      commit('setLang', lang);
    },
    authUser ({ commit }, user) {
      commit('setAuthUser', user);
    }
  },
  modules: {
  }
});
