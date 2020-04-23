<template>
  <div id="app">
    <Sidebar
      :addBookModal="turnAddBookModal"
    />
    <router-view/>
    <AddBookModal v-show="addBookModalOpened" />
  </div>
</template>

<script>
import Sidebar from './components/Sidebar';
import AddBookModal from './components/AddBookModal';

export default {
  name: 'App',
  components: {
    Sidebar,
    AddBookModal
  },
  data () {
    return {
      addBookModalOpened: false
    };
  },
  methods: {
    turnAddBookModal () {
      this.addBookModalOpened = !this.addBookModalOpened;
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
