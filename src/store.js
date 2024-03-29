import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {}
  },
  mutations: {
    SET_USER_INFO(state, data) {
      state.userInfo = data;
    },

  },
  actions: {
    setUserInfo({ commit, state }, data) {
      commit('SET_USER_INFO', data);
    }
  }
})
