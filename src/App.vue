<template>
  <div id="app">
    <Sidebar />
    <router-view/>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar";

export default {
  name: 'App',
  components: {
    Sidebar
  }
};
</script>

<style lang="scss">
#app {
  display: flex;
  width: 100%;
  height: 100vh;
}

html,
body,
div,
header,
main,
ul,
li,
ol,
p,
span,
h1,
h2,
h3,
h4,
h5,
h6,
button,
input {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  outline: none;
  border: none;
  font-family: Arial, sans-serif;
}
button {
  cursor: pointer;
}
</style>
