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
                <span>注册会员</span>
              </div>
            </div>
            <div class="col-sm-5 hidden-xs"></div>
          </div>
        </div>
        <div class="newpost block">
          <div class="row">
            <div class="col-md-3">
              <div class="userinfo"></div>
            </div>
            <div class="col-md-6">
              <div class="postform">
                <h2>新会员注册</h2>
                <hr>
                <!--<form>
                  <div class="form-group">
                    <label for="subject">用户名：</label>
                    <input
                      type="text"
                      class="form-control"
                      ref="username"
                      id="username"
                      name="username"
                    >
                    <span></span>
                  </div>

                  <div class="form-group">
                    <label for="content">密码：</label>
                    <input
                      type="text"
                      class="form-control"
                      ref="password"
                      id="password"
                      name="password"
                    >
                  </div>

                  <div class="form-group">
                    <span>确认密码：</span>
                    <input
                      type="text"
                      class="form-control from-control1"
                      ref="password_confirm"
                      id="password_confirm"
                      name="password_confirm"
                    >
                    <span></span>
                  </div>

                  <div class="form-group">
                    <label for="content">昵称：</label>
                    <input
                      type="text"
                      class="form-control"
                      ref="nickname"
                      id="nickname"
                      name="nickname"
                    >
                  </div>

                  <div class="form-group">
                    <label for="content">邮件：</label>
                    <input type="text" class="form-control" ref="email" id="email" name="email">
                  </div>

                   <div class="form-group row">
                                            <div class="col-xs-5 col-md-2">
                                                <label class="sr-only">验证码：</label>
                                                <input type="text" class="form-control" id="authcode" name="authcode" placeholder="验证码">
                                            </div>
                                            <div class="col-xs-7 col-md-10">
                                                <img class="authcod_img" src="../static/pic/authcocd.jpg" alt="">
                                            </div>
                  </div> 
                  <button type="button" class="btn btn-info" @click="regist">提交</button>
                </form> -->
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="85px" class="demo-ruleForm">
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="ruleForm.username" ref="username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码:" prop="pass">
                        <el-input type="password" v-model="ruleForm.pass" ref="password" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码:" prop="checkPass">
                        <el-input type="password" v-model="ruleForm.checkPass" ref="password_confirm" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="昵称" prop="nickname">
                        <el-input v-model="ruleForm.nickname" ref="nickname"></el-input>
                    </el-form-item>
                   <el-form-item label="邮箱" prop="email" 
                      :rules="[
                       { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                       { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                      ]"
                    >
                    <el-input type="email" v-model="ruleForm.email" ref="email" autocomplete="off"></el-input>
                   </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                  </el-form-item>
                </el-form>
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
export default {
  /*data() {
    return {
      message: "",
      type: ""
    };
  },
  methods: {
    regist: function() {
      var _this = this;

      _this.submit = true;
      var params = new URLSearchParams();
      params.append("username", this.$refs.username.value);
      params.append("password", this.$refs.password.value);
      params.append("username", this.$refs.password_confirm.value);
      params.append("password", this.$refs.nickname.value);
      params.append("username", this.$refs.email.value);
      _this.axios
        .post("http://localhost/biyesheji/newuser.php", params)
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
            if (res.data.message === "密码错误") _this.message = "密码错误！";
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
  }*/
  data() {
      
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      /*var checkEmail = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入邮箱！'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };*/
      return {
        ruleForm: {
            username: '',
            pass: '',
            checkPass: '',
            nickname: '',
            email: ''
        },
        show: {
            message: '',
            type: ''
        },
        rules: {
            username: [
                { required: true, message: '请输入用户名！', trigger: 'blur' },
                { min: 5, max: 15, message: '长度在 5 到 15 个字符！', trigger: 'blur' }
            ],
            pass: [
                {required: true, validator: validatePass, trigger: 'blur' },
                { min: 5, max: 20, message: '密码长度在5到20个字符！', trigger: 'blur' }
            ],
            checkPass: [
                { validator: validatePass2, trigger: 'blur', required: true}
            ],
             nickname: [
                { required: true, message: '请输入昵称！', trigger: 'blur' },
                { min: 5, max: 15, message: '长度在 5 到 15 个字符！', trigger: 'blur' }
            ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        var _this = this;
        _this.$refs[formName].validate((valid) => {
          if (valid) {
              var params = new URLSearchParams();
              params.append("username", this.$refs.username.value);
              params.append("password", this.$refs.password.value);
              params.append("password_confirm", this.$refs.password_confirm.value);
              params.append("nickname", this.$refs.nickname.value);
              params.append("email", this.$refs.email.value);
              _this.axios.post('http://localhost/biyesheji/newuser.php',params)
                .then(function(res) {
                  if(res.data.is_regist === true){
                    if(res.data.message === '注册成功'){
                        _this.show.message = '注册成功！请登陆！'
                        _this.show.type = 'success'
                    } 
                  } else {
                    _this.show.type = 'error'
                    if(res.data.message === '用户名已被注册'){
                       _this.show.message = '该用户名已被注册！'
                    }
                  }
                    _this.open()
                    _this.$router.push("Login");//跳转到登录界面
                })
          } else {
            return false;
          }
        });
      },
      open: function() {
      var _this = this;
      _this.$message({
        message: _this.show.message,
        type: _this.show.type
      });
    },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}

</script>

<style>
@import "../../public/css/style.css";
.form-contorl1 {
  display: inline-block !important;
}
</style>

