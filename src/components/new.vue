<template>
  <div class="secondary">
    <div class="block">
      <h3 class="title">最新</h3>
      <ul class="list">
        <li v-for="(item, index) in this.$store.state.latest_data" :key="index">
          <a>{{item.subject}}</a>
        </li>
      </ul>
    </div>
    <div class="block">
      <h3 class="title">热帖</h3>
      <ul class="list">
        <li v-for="(item, index) in this.$store.state.pops_data" :key="index">
          <a>{{item.subject}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {

}
</script>


<style>
@import '../../public/css/style.css'

</style>
