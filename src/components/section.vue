<template>
  <div class="main">
    <div class="wrap">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-8">
            <div class="crumbs_pages">
              <div class="row">
                <div class="col-sm-5 text-left">
                  <div class="crumbs">
                    <a href>首页</a>
                    >
                    <span v-show="$route.query.id == 1">学习</span>
                    <span v-show="$route.query.id == 2">生活</span>
                    <span v-show="$route.query.id == 3">社团</span>
                    <span v-show="$route.query.id == 4">兼职</span>
                  </div>
                </div>
               
              </div>
            </div>
            <div class="section">
              <div class="block">
                <div class="post" v-for="(item,index) in all_data" :key="index" v-if="item.section_id == $route.query.id">
                  <div class="row">
                    <div class="col-md-2 hidden-xs hidden-sm">
                      <div class="avatar">
                        <img class="img-circle" src="../assets/2.jpg" alt>
                      </div>
                    </div>
                    <div class="col-md-10">
                      <div class="text">
                        <router-link :to="{name:'Detail',query:{item:item}}">
                          <h2>{{item.subject}}</h2>
                          <p v-html="item.content"></p>
                        </router-link>
                        <div class="meta">
                          <div class="row">
                            <div class="col-sm-6">
                              <span>由 {{item.post_by}} 发布于：{{item.post_at}}</span>
                            </div>
                            <div class="col-sm-6">
                              <span>浏览数：{{item.view}}</span>
                              <span>回复数：{{item.replies}}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pages">
                  <nav aria-label="Page navigation">
                        <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="newpost_btn">
              <router-link :to="{name:'NewPost', query: {id: this.$route.query.id}}">
                <button class="btn btn-warning btn-lg btn-block">新建主题</button>
              </router-link>
            </div>
            <New></New>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import New from "./new.vue";
export default {
  data:function(){
    return{
      param:this.$route.query.id,
      all_data: typeof this.$store.state.all_data=="string" ? JSON.parse(this.$store.state.all_data) : this.$store.state.all_data
    }
  },
  name: "app",
  components: {
    New
  },
  computed:{
       getAllData:function(){
          var val = this.$store.state.all_data
          if(typeof val=="string")
            return JSON.parse(val)
          else 
            return val;
       }
   },
   watch:{
        getAllData(val) {
            this.all_data = val;
        }
   },
  created(){
    this.param = this.$route.query.id
    //this.all_data = JSON.parse(this.$store.state.all_data)
  }
};
</script>
<style>
@import "../../public/css/style.css";
.img-circle {
  border-radius: 50% !important;
}
.text {
  text-align: left;
}
</style>