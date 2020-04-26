<template>
  <div id="app">
    <Sidebar
      :addBookModal="() => turnAddBookModal(!addBookModalOpened)"
    />
    <router-view />
    <BookModal
      v-if="addBookModalOpened"
      :onModalClose="() => turnAddBookModal(false)"
      :onAction="onAddBook"
    />
    <MessageModal
      v-if="messageModalOpened"
      :bookTitle="addedBook.title"
      :on-modal-close="() => turnMessageModal(false)"
    />
    <BookModal
      v-if="selectedBook"
      :book="selectedBook"
      disabled
      :onModalClose="closeBookModal"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Sidebar from './components/Sidebar';
import BookModal from './components/BookModal';
import MessageModal from './components/MessageModal';
import {SELECT_BOOK, SET_BOOKS, ADD_BOOK} from './store';
import loadedBooks from '../public/books.json';

export default {
  name: 'App',
  components: {
    Sidebar,
    BookModal,
    MessageModal
  },
  data () {
    return {
      addBookModalOpened: false,
      addedBook: {},
      messageModalOpened: false
    };
  },
  computed: {
    ...mapState([
      'books',
      'selectedBook'
    ])
  },
  created () {
    // ... api call processing ...
    const savedBooks = JSON.parse(localStorage.getItem('books'));
    const books = savedBooks ? savedBooks : loadedBooks;
    localStorage.setItem('books', JSON.stringify(books));
    this.$store.commit({
      type: SET_BOOKS,
      books
    });
  },
  methods: {
    turnAddBookModal (value) {
      this.addBookModalOpened = value;
    },
    turnMessageModal (value) {
      this.messageModalOpened = value;
    },
    onAddBook (book) {
      this.turnAddBookModal(false);
      this.addedBook = book;
      this.$store.dispatch({
        type: ADD_BOOK,
        book: book
      });
      this.turnMessageModal(true);
    },
    closeBookModal () {
      this.$store.commit({
        type: SELECT_BOOK,
        selectedBook: null
      })
    }
  }
};
</script>

<style lang="scss">
@import "main";

#app {
  display: flex;
  width: 100%;
  min-height: 100vh;
}
</style>
