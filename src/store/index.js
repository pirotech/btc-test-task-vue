import moment from "moment";
import Vue from 'vue';
import Vuex from 'vuex';
import {ADD_TO_MUST_READ} from "../models/constants";

Vue.use(Vuex);

export const ADD_HISTORY = 'ADD_HISTORY';
export const SET_BOOKS = 'SET_BOOKS';
export const SELECT_BOOK = 'SELECT_BOOK';

export default new Vuex.Store({
  state: {
    histories: [
      {
        id: 1,
        type: ADD_TO_MUST_READ,
        book: {
          id: 1000,
          title: 'Fight Club',
          author: 'Chuck Palahniuk'
        },
        createdDate: moment('25-04-2020 15:46:00', 'DD-MM-YYYY HH:mm:SS')
      },
      {
        id: 0,
        type: ADD_TO_MUST_READ,
        book: {
          id: 1001,
          title: 'The Trial',
          author: 'Franz Kafka'
        },
        createdDate: moment('22-04-2020 12:00:00', 'DD-MM-YYYY HH:mm:SS')
      }
    ],
    books: [],
    selectedBook: null
  },
  mutations: {
    [ADD_HISTORY] (state, payload) {
      const id = state.histories.reduce((sum, item) => (
        sum < item.id ? item.id : sum
      ), 0);
      state.histories = [
        {id, ...payload.history},
        ...state.histories
      ];
    },
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
