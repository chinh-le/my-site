import Vue from 'vue';
import Vuex from 'vuex';
// import * as firebase from 'firebase';
// import axios from '@/http/axios-auth';
// import config from '@/config';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // userId: null,
    // tokenId: null,
    token: null,
    downloadUrl: null
  },
  getters: {
    isAuthenticated (state) {
      return state.token !== null;
    },
    /* authentication (state) {
      return state.authenticated;
    }, */
    downloadUrl (state) {
      return state.downloadUrl;
    }
  },
  mutations: {
    setAuthUser (state, user) {
      if (user) {
        state.token = user.token;
      } else {
        state.token = null;
      }
    },
    /* setAuthentication (state, isAuthenticated) {
      state.authenticated = isAuthenticated;
    }, */
    setDownloadUrl (state, url) {
      state.downloadUrl = url || null;
    }
  },
  actions: {
    autoSignin ({ commit }) {

    }
  },
  modules: {
  }
});
