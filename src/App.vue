<template>
  <div id="app">
    <Nav></Nav>
    <div>
        <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>

import Nav from './components/navgation.vue'
import Block from './components/block.vue'
import Footer from './components/footer.vue'
export default {
  name: 'app',
  components: {
    Nav,
    Block,
    Footer
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
