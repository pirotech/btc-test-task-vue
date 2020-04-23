<template>
  <div id="app">
    <Sidebar
      :addBookModal="() => turnAddBookModal(!addBookModalOpened)"
    />
    <router-view />
    <AddBookModal
      v-if="addBookModalOpened"
      :onModalClose="() => turnAddBookModal(false)"
      :onAction="onAddBook"
    />
    <MessageModal
      v-if="messageModalOpened"
      :bookTitle="addedBook.title"
      :on-modal-close="() => turnMessageModal(false)"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Sidebar from './components/Sidebar';
import AddBookModal from './components/AddBookModal';
import MessageModal from './components/MessageModal';
import loadedBooks from '../public/books.json';
import {SET_BOOKS} from "./store";

export default {
  name: 'App',
  components: {
    Sidebar,
    AddBookModal,
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
      'books'
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
    })
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
      this.$store.state.books = [...this.books, book];
      this.turnMessageModal(true);
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
