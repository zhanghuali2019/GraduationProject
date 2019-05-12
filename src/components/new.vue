<template>
  <div class="secondary">
    <div class="block">
      <h3 class="title">最新</h3>
      <ul class="list">
        <li v-for="(item, index) in this.latest_data" :key="index">
          <a>{{item.subject}}</a>
        </li>
      </ul>
    </div>
    <div class="block">
      <h3 class="title">热帖</h3>
      <ul class="list">
        <li v-for="(item, index) in this.pops_data" :key="index">
          <a>{{item.subject}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      latest_data:typeof this.$store.state.latest_data=="string" ? JSON.parse(this.$store.state.latest_data) : this.$store.state.latest_data,
      pops_data:typeof this.$store.state.pops_data=="string" ? JSON.parse(this.$store.state.pops_data) : this.$store.state.pops_data
    }
  },
  computed:{
       getLatestData:function(){
           return typeof this.$store.state.latest_data=="string" ? JSON.parse(this.$store.state.latest_data) : this.$store.state.latest_data
       },
       getPopsData:function(){
           return typeof this.$store.state.pops_data=="string" ? JSON.parse(this.$store.state.pops_data) : this.$store.state.pops_data
       }
   },
   watch:{
      getLatestData(val) {
          this.latest_data = val;
      },
      getPopstData(val){
          this.pops_data = val;
      }
   }
}
</script>


<style>
@import '../../public/css/style.css'

</style>
