<template>
    <div class="main">
            <div class="wrap">
                <div class="container-fluid">
                    <div class="crumbs_pages">
                        <div class="row">
                            <div class="col-sm-7">
                                <div class="crumbs">
                                    <a href="">首页</a>
                                    >
                                    <span>登录</span>
                                </div>
                            </div>
                            <div class="col-sm-5 hidden-xs">

                            </div>
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
                                </div> -->
                            </div>
                            <div class="col-md-6">
                                <div class="postform">
                                    <h2>会员登录</h2>
                                    <hr>
                                    <form>
                                        <div class="form-group">
                                            <label for="subject">用户名：</label>
                                            <input type="text" class="form-control" id="username" name="username" ref="username">
                                        </div>

                                        <div class="form-group">
                                            <label for="content">密码：</label>
                                            <input type="password" class="form-control" id="password" name="password" ref="password">
                                        </div>

                                        <!-- <div class="form-group row">
                                            <div class="col-xs-5 col-md-2">
                                                <label class="sr-only">验证码：</label>
                                                <input type="text" class="form-control" id="authcode" name="authcode" placeholder="验证码">
                                            </div>
                                            <div class="col-xs-7 col-md-10">
                                                <img class="authcod_img" src="../static/pic/authcocd.jpg" alt="">
                                            </div>
                                        </div> -->
                                        <button type="button" class="btn btn-info" @click="login">登录</button>
                                    </form>
                                </div>
                            </div>
                            <div class="col-md-3">

                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
</template>

<script>
import store from '../store/index.js'
export default{
    methods: {
        login:function(){
            var params = new URLSearchParams()
            params.append('username', this.$refs.username.value)
            params.append('password', this.$refs.password.value)
            var _this = this;
            _this.axios.post('http://localhost/biyesheji/checklogin.php',params)
            .then(function(res){
                _this.$store.commit('SET_TOKEN', res.data.is_login)
                _this.$store.commit('GET_USER', res.data.username)
            })
            if(res.data.is_login){
                _this.$router.push({path: '/'})
            }
        }
        /*open2:function() {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },*/
    }
}
</script>

<style>
@import "../../public/css/style.css";
a:hover{
    cursor: pointer;
}
</style>
