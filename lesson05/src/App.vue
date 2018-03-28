<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/tc1">TC1</router-link>
      <router-link to="/tc2">TC2</router-link>
      <router-link to="/tc3">TC3</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
