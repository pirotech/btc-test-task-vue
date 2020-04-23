<template>
  <div id="app">
    <Sidebar
      :addBookModal="() => turnAddBookModal(!addBookModalOpened)"
    />
    <router-view/>
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
import Sidebar from './components/Sidebar';
import AddBookModal from './components/AddBookModal';
import MessageModal from './components/MessageModal';

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
