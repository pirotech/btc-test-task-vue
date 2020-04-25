import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';
import History from '../models/History';

Vue.use(Vuex);

export const ADD_HISTORY = 'ADD_HISTORY';
export const SET_BOOKS = 'SET_BOOKS';
export const ADD_BOOK = 'ADD_BOOK';
export const SELECT_BOOK = 'SELECT_BOOK';

const storedHistories = History.getStoredHistories();
const defaultHistories = History.getDefaultHistories();
const histories = storedHistories ? storedHistories : defaultHistories;

export default new Vuex.Store({
  state: {
    histories,
    books: [],
    selectedBook: null
  },
  mutations: {
    [ADD_HISTORY] (state, payload) {
      const ids = state.histories.map(item => item.id);
      const id = Math.max(...ids) + 1;

      const histories = [
        {id, ...payload.history},
        ...state.histories
      ];
      state.histories = histories;
      localStorage.setItem('histories', JSON.stringify(histories));
    },
    [SET_BOOKS] (state, payload) {
      state.books = payload.books;
      localStorage.setItem('books', JSON.stringify(payload.books));
    },
    [ADD_BOOK] (state, payload) {
      const books = [...state.books, payload.book];
      state.books = books;
      localStorage.setItem('books', JSON.stringify(books));
    },
    [SELECT_BOOK] (state, payload) {
      state.selectedBook = payload.selectedBook;
    }
  },
  actions: {
    [ADD_BOOK] ({state, commit}, {book}) {
      commit({
        type: ADD_BOOK,
        book
      });
      commit({
        type: ADD_HISTORY,
        history: {
          type: History.ADD_BOOK,
          book,
          createdDate: moment()
        }
      });
    }
  },
  modules: {
  }
});
