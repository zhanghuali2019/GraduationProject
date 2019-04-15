<template>
  <div id="app">
    <Nav></Nav>
    <Block></Block>
  </div>
</template>

<script>

import Nav from './components/navgation.vue'
import Block from './components/block.vue'
export default {
  name: 'app',
  components: {
    Nav,
    Block
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
