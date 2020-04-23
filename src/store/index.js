import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const SET_BOOKS = 'SET_BOOKS';

export default new Vuex.Store({
  state: {
    books: []
  },
  mutations: {
    [SET_BOOKS] (state, payload) {
      state.books = payload.books;
    }
  },
  actions: {
  },
  modules: {
  }
});
