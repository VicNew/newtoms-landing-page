<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
    margin-top: 60px;
  }
  .bg-black {
    background-color:#1a1a1a!important
  }
  a.bg-black:focus,
  a.bg-black:hover,
  button.bg-black:focus,
  button.bg-black:hover {
    background-color:#1d2124!important
  }
</style>
