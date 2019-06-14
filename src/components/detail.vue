<template>
  <div class="main">
    <div class="wrap text-left">
      <div class="container-fluid">
        <div class="crumbs_pages">
          <div class="row">
            <div class="col-sm-7">
              <div class="crumbs">
                <a href>首页</a>
                >
                <span>详情</span>
              </div>
            </div>
            <div class="col-sm-5">
              <div class="post_btns">
                <button type="button" class="btn btn-info" @click="reply">回复</button>&nbsp;
                <router-link :to="{name:'NewPost', query: {id: this.$route.query.item.section_id}}">
                  <button type="button" class="btn btn-warning">新建</button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="newpost block">
          <div class="detail">
            <div class="row">
              <div class="col-md-2">
                <div class="userinfo">
                  <div class="avatar">
                    <img src="../assets/1.jpg" alt>
                  </div>
                  <span class="nickname">{{this.$route.query.item.post_by}}</span>
                </div>
              </div>
              <div class="col-xs-12 col-md-10">
                <div class="post">
                  <div class="post_header clearfix">
                    <h2>{{this.$route.query.item.subject}}</h2>
                  </div>
                  <div class="meta">
                    <div class="row">
                      <div class="col-sm-6">
                        <span>{{this.$route.query.item.post_at}}</span>
                      </div>
                      <div class="col-sm-6">
                        <span>浏览数：{{this.$route.query.item.view}}</span>
                        <span>回复数：{{this.$route.query.item.replies}}</span>
                      </div>
                    </div>
                  </div>
                  <p v-html="item.content"></p>
                  <div class="post_menu">
                    <a href>回复 </a>
                    <router-link :to="{name:'Edit',query:{item:this.$route.query.item}}">
                      <a href>编辑 </a>
                    </router-link>
                    <a @click="deletePost">删除</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="detail" v-for="(item,index) in thread" :key="index">
            <div class="row">
              <div class="col-md-2">
                <div class="userinfo">
                  <div class="avatar">
                    <img src="../assets/1.jpg" alt>
                  </div>
                  <span class="nickname">{{user}}</span>
                </div>
              </div>
              <div class="col-xs-12 col-md-10">
                <div class="post">
                  <div class="post_header clearfix"></div>
                  <div class="meta">
                    <div class="row">
                      <div class="col-sm-6">
                        <span>{{item.post_at}}</span>
                      </div>
                      <div class="col-sm-6">
                        <span>浏览数：100</span>
                        <span>回复数：99</span>
                      </div>
                    </div>
                  </div>
                  <p>{{item.content}}</p>
                  <div class="post_menu">
                    <a href>回复 </a>
                    <a href>编辑 </a>
                    <a @click="deleteThread(item.id)">删除</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="navs_pages">
            <div class="row">
              <div class="col-md-2">
                <router-link :to="{name:'NewPost', query: {id: this.$route.query.item.section_id}}">
                    <button class="btn btn-warning">新建主题</button>
                </router-link>
              </div>
              <div class="col-md-10">
                <div class="pages">
                  <nav aria-label="Page navigation">
                        <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          <div class="detail reply_form">
            <div class="row">
              <div class="col-md-2">
                <div class="userinfo">
                  <div class="avatar">
                    <img src="../assets/1.jpg" alt>
                  </div>
                  <span class="nickname">{{user}}</span>
                </div>
              </div>
              <div class="col-xs-12 col-md-10">
                <div class="postform">
                  <form>
                    <div class="form-group">
                      <label for="subject">主题：</label>
                      <input
                        type="text"
                        class="form-control"
                        id="subject"
                        name="subject"
                        ref="subject"
                      >
                    </div>

                    <div class="form-group">
                      <label for="content">内容：</label>
                      <textarea
                        class="form-control"
                        rows="5"
                        id="content"
                        name="content"
                        ref="content"
                      ></textarea>
                    </div>

                    <button type="button" class="btn btn-info" @click="submitPost">提交</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        item:this.$route.query.item,
      user: this.$store.state.user,
      time: "",
      show: {
        message: "",
        type: ""
      },
      thread:
        typeof this.$store.state.thread == "string"
          ? JSON.parse(this.$store.state.thread)
          : this.$store.state.thread
    };
  },
  methods: {
    submitPost() {
      this.timenow();
      var _this = this;
      var params = new URLSearchParams();
      params.append("subject", _this.$refs.subject.value);
      params.append("content", _this.$refs.content.value);
      params.append("parent_id", _this.$route.query.item.id);
      params.append("post_by", _this.user);
      params.append("post_at", _this.time);
      _this.axios
        .post("http://localhost/biyesheji/savethread.php", params)
        .then(function(res) {
          if (res.data.is_success === true) {
            _this.show.message = "发帖成功！";
            _this.show.type = "success";
          }
          if (res.data.is_success === false) {
            _this.show.message = "发帖失败，请重试！";
            _this.show.type = "error";
          }
        });

      _this.open();
    },
    timenow() {
      var date = new Date();
      var YY = date.getFullYear();
      var MM = date.getMonth() + 1;
      var DD = date.getUTCDate();
      var hh = date.getHours();
      var mm = date.getMinutes();
      var ss = date.getSeconds();
      if (MM >= 1 && MM <= 9) {
        MM = "0" + MM;
      }
      if (DD >= 1 && DD <= 9) {
        DD = "0" + DD;
      }
      if (hh >= 1 && hh <= 9) {
        hh = "0" + hh;
      }
      if (mm >= 1 && mm <= 9) {
        mm = "0" + mm;
      }
      if (ss >= 1 && ss <= 9) {
        ss = "0" + ss;
      }
      var time = YY + "-" + MM + "-" + DD + " " + hh + ":" + mm + ":" + ss;
      this.time = time;
    },
    open: function() {
      var _this = this;
      _this.$message({
        message: _this.show.message,
        type: _this.show.type
      });
    },
     reply() {
      let curHeight =
        document.documentElement.scrollTop || document.body.scrollTop;
      document.body.scrollTop = curHeight;
    },
    open2() {
        this.$confirm('你确定要删除这条贴子吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
   
    deletePost() {
      var _this = this;
      var params = new URLSearchParams();
      params.append("id", _this.$route.query.item.id);
      _this.axios
        .post("http://localhost/biyesheji/deletesubject.php", params)
        .then(function(res) {
          if (res.data.is_success === true) {
            _this.show.message = "删除成功！";
            _this.show.type = "success";
          }
          if (res.data.is_success === false) {
            _this.show.message = "删除失败，请重试！";
            _this.show.type = "error";
          }
        });
      _this.open2();
    },
    deleteThread(id) {
      var _this = this;
      var params = new URLSearchParams();
      params.append("id", id);
      _this.axios
        .post("http://localhost/biyesheji/deletethread.php", params)
        .then(function(res) {
          if (res.data.is_success === true) {
            _this.show.message = "删除成功！";
            _this.show.type = "success";
          }
          if (res.data.is_success === false) {
            _this.show.message = "删除失败，请重试！";
            _this.show.type = "error";
          }
        });
      _this.open2();
    }
  },
  computed: {
    getThread: function() {
      return typeof this.$store.state.thread == "string"
        ? JSON.parse(this.$store.state.thread)
        : this.$store.state.thread;
    }
  },
  watch: {
    getThread(val) {
      this.thread = val;
    }
  },
  mounted: function() {
    var _this = this;
    var params = new URLSearchParams();
    params.append("id", _this.$route.query.item.id);
    _this.axios
      .post("http://localhost/biyesheji/searchthread.php", params)
      .then(function(res) {
        _this.$store.commit("GET_THREAD", JSON.parse(res.data.thread));
      });
  }
};
</script>

<style>
@import "../../public/css/style.css";
</style>