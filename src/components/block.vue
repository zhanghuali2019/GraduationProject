<template>
  <div class="main">
    <div class="wrap">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-8">
            <div class="slider">
              <template>
              <el-carousel :interval="5000" arrow="hover" autoplay="true">
                <el-carousel-item v-for="(item,index) in img" :key="index">
                  <h3>
                    <img :src="item" alt="轮播图">
                  </h3>
                </el-carousel-item>
              </el-carousel>
              </template>
            </div>
            <div class="primary">
              <div class="block">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="block_header">
                      <h3 class="title">Backend</h3>
                      <router-link :to="{name:'section',query:{id:1}}">
                        <a class="more" href>more</a>
                      </router-link>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <ul class="list">
                      <router-link :to="{name:'Detail'}">
                        <li v-for="(item,index) in this.$store.state.all_data" :key="index" v-if="item.section_id == 1">
                          <a>{{item.subject}}</a>
                        </li>
                      </router-link>
                    </ul>
                  </div>
                  <div class="col-lg-6">
                    <div class="image">
                      <img src="../assets/section_1.jpg" alt="Backend">
                    </div>
                  </div>
                </div>
              </div>

              <div class="block">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="block_header">
                      <h3 class="title">Frontend</h3>
                      <router-link :to="{name:'section',query:{id:2}}">
                        <a class="more" href>more</a>
                      </router-link>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <ul class="list">
                      <router-link :to="{name:'Detail'}">
                        <li v-for="(item,index) in this.$store.state.all_data" :key="index" v-if="item.section_id == 2">
                          <a>{{item.subject}}</a>
                        </li>
                      </router-link>
                    </ul>
                  </div>
                  <div class="col-lg-6">
                    <div class="image">
                      <img src="../assets/section_2.jpg" alt="Frontend">
                    </div>
                  </div>
                </div>
              </div>

              <div class="block">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="block_header">
                      <h3 class="title">Database</h3>
                      <router-link :to="{name:'section',query:{id:3}}">
                        <a class="more" href>more</a>
                      </router-link>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <ul class="list">
                      <router-link :to="{name:'Detail'}">
                        <li v-for="(item,index) in this.$store.state.all_data" :key="index" v-if="item.section_id == 3">
                          <a>{{item.subject}}</a>
                        </li>
                      </router-link>
                    </ul>
                  </div>
                  <div class="col-lg-6">
                    <div class="image">
                      <img src="../assets/section_3.jpg" alt="Database">
                    </div>
                  </div>
                </div>
              </div>

              <div class="block">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="block_header">
                      <h3 class="title">UI</h3>
                      <router-link :to="{name:'section',query:{id:4}}">
                        <a class="more" href>more</a>
                      </router-link>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <ul class="list">
                      <router-link :to="{name:'Detail'}">
                        <li v-for="(item,index) in this.$store.state.all_data" :key="index" v-if="item.section_id == 4">
                          <a>{{item.subject}}</a>
                        </li>
                      </router-link>
                    </ul>
                  </div>
                  <div class="col-lg-6">
                    <div class="image">
                      <img src="../assets/section_4.jpg" alt="UI">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
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
  name: "app",
  components: {
    New
  },
  data:function()
  {
    return {
      img:[
        require('../assets/slide_1.jpg'),
        require('../assets/slide_2.jpg'),
        require('../assets/slide_3.jpg'),
        require('../assets/slide_4.jpg')
      ],
      section1:{},
      section2:{},
      section3:{},
      section4:{}
    }
  },
  mounted:function(){
    var _this = this
    _this.axios.post('http://localhost/biyesheji/searchdata.php').then(function(res){
      var all_data = JSON.parse(res.data.all_data)
      var latest_data = JSON.parse(res.data.latest_data)
      var pops_data = JSON.parse(res.data.pops_data)
      _this.$store.commit("SET_ALL_DATA", all_data);
      _this.$store.commit("SET_LATEST_DATA", latest_data);
      _this.$store.commit("SET_POPS_DATA", pops_data);
    })
  }
 
};
</script>

<style>
@import "../../public/css/style.css";
ul {
  padding: 0;
  color: #ccc;
  list-style-type: square;
  list-style-position: inside;
  text-align: left;
}
li {
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  list-style-color: #ccc;
}
li * {
  display: inline;
  line-height: 1;
}

.list > li {
  margin-top: 15px;
}

li:hover {
  color: #31b0d5;
  cursor: pointer;
}

 .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>