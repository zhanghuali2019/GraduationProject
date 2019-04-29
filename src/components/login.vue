<template>
  <div class="main">
    <div class="wrap">
      <div class="container-fluid">
        <div class="crumbs_pages">
          <div class="row">
            <div class="col-sm-7">
              <div class="crumbs">
                <a href>首页</a>
                >
                <span>登录</span>
              </div>
            </div>
            <div class="col-sm-5 hidden-xs"></div>
          </div>
        </div>
        <div class="newpost block">
          <div class="row">
            <div class="col-md-3">
              <!-- <div class="userinfo">
                                    <div class="avatar">
                                        <img src="../static/pic/1.jpg" alt="">
                                    </div>
                                    <span class="nickname">andy</span>
              </div>-->
            </div>
            <div class="col-md-6">
              <div class="postform">
                <h2>会员登录</h2>
                <hr>
                <form>
                  <div class="form-group">
                    <label for="subject">用户名：</label>
                    <input
                      type="text"
                      class="form-control"
                      id="username"
                      name="username"
                      ref="username"
                    >
                  </div>

                  <div class="form-group">
                    <label for="content">密码：</label>
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      name="password"
                      ref="password"
                    >
                  </div>

                  <!-- <div class="form-group row">
                                            <div class="col-xs-5 col-md-2">
                                                <label class="sr-only">验证码：</label>
                                                <input type="text" class="form-control" id="authcode" name="authcode" placeholder="验证码">
                                            </div>
                                            <div class="col-xs-7 col-md-10">
                                                <img class="authcod_img" src="../static/pic/authcocd.jpg" alt="">
                                            </div>
                  </div>-->
                  <button type="button" class="btn btn-info" @click="login">登录</button>
                </form>
              </div>
            </div>
            <div class="col-md-3"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue-router'
export default {
  data() {
    return {
      message: "",
      type: ""
    };
  },
  methods: {
    login: function() {
      var _this = this;

      _this.submit = true;
      var params = new URLSearchParams();
      params.append("username", _this.$refs.username.value);
      params.append("password", _this.$refs.password.value);
      _this.axios
        .post("http://localhost/biyesheji/checklogin.php", params)
        .then(function(res) {
          if (res.data.is_login) {
            _this.type = "success";
            _this.message = "登陆成功";
            _this.$store.commit("SET_TOKEN", res.data.is_login);
            _this.$store.commit("GET_USER", res.data.username);
          } else {
            _this.type = "error";
            if (res.data.message === "用户名不能为空")
                _this.message = "用户名不能为空，请填写用户名！";
            if (res.data.message === "密码不能为空") 
                _this.message = "密码不能为空，请填写密码！";
            if (res.data.message === "用户不存在")
                _this.message = "用户不存在,请先注册！";
            if (res.data.message === "密码错误") 
                _this.message = "密码错误！";
          }
          _this.open();
          _this.$router.go(-1); 
        });
    },
    open: function() {
      var _this = this;
      _this.$message({
        message: _this.message,
        type: _this.type
      });
    }
  }
};
</script>

<style>
@import "../../public/css/style.css";
a:hover {
  cursor: pointer;
}
</style>
