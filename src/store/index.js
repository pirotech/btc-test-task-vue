import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const SET_BOOKS = 'SET_BOOKS';
export const SELECT_BOOK = 'SELECT_BOOK';

export default new Vuex.Store({
  state: {
    books: [],
    selectedBook: null
  },
  mutations: {
    [SET_BOOKS] (state, payload) {
      state.books = payload.books;
      localStorage.setItem('books', JSON.stringify(payload.books));
    },
    [SELECT_BOOK] (state, payload) {
      state.selectedBook = payload.selectedBook;
    }
  },
  actions: {
  },
  modules: {
  }
});
