import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAdmin: false,
    currentPage: 'departure',
  },

  getters: {
    isAdmin: ({ isAdmin }) => isAdmin,
    currentPage: ({ currentPage }) => currentPage,
  },

  mutations: {
    onSetAdmin(state, isAdmin) {
      state.isAdmin = isAdmin;
    },

    onChangePage(state, currentPage) {
      state.currentPage = currentPage;
    },
  },
});
