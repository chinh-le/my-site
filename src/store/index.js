import Vue from 'vue';
import Vuex from 'vuex';
import axios from '@/http/axios-auth';
import config from '@/config';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authenticated: false,
    userId: null,
    tokenId: null,
    token: null
  },
  getters: {
    authentication (state) {
      return state.authenticated;
    }
  },
  mutations: {
    setAuthentication (state, isAuthenticated) {
      state.authenticated = isAuthenticated;
    }
  },
  actions: {
    signin ({ commit }, payload) {
      axios.post('/accounts:signInWithPassword?key=' + config.apiKey, {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
        .then(res => {
          console.log('res: ', res);
          commit('setAuthentication', true);
        })
        .catch(err => {
          console.log('err: ', err);
          commit('setAuthentication', false);
        });
    }
  },
  modules: {
  }
});
