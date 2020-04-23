<template>
  <div id="app">
    <Sidebar />
    <router-view/>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar';

export default {
  name: 'App',
  components: {
    Sidebar
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
