<template>
    <div class="main">
            <div class="wrap">
                <div class="container-fluid">
                    <div class="crumbs_pages">
                        <div class="row text-left">
                            <div class="col-sm-7">
                                <div class="crumbs">
                                    <a href="">首页</a>
                                    >
                                    <span>新建帖子</span>
                                </div>
                            </div>
                            <div class="col-sm-5 hidden-xs">

                            </div>
                        </div>
                    </div>
                    <div class="newpost block">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="userinfo">
                                    <div class="avatar">
                                        <img src="../assets/1.jpg" alt="">
                                    </div>
                                    <span class="nickname">{{this.$store.state.user}}</span>
                                </div>
                            </div>
                            <div class="col-md-9">
                                <div class="postform text-left">
                                    <form>
                                        <div class="form-group">
                                            <label for="subject">主题：</label>
                                            <input type="text" class="form-control" id="subject" name="subject" ref="subject">
                                        </div>

                                        <div class="form-group">
                                            <label for="content">内容：</label>
                                            <wang-editor :catchData="catchData"  id="account--editor" ref="editor"></wang-editor>
                                        </div>
                                        
                                        <div class="form-group row">
                                            <div class="col-xs-5 col-md-2">
                                                <label class="sr-only">验证码：</label>
                                                <input type="text" class="form-control" id="authcode" name="authcode" placeholder="验证码" ref="authcodeValue">
                                            </div>
                                            <div class="col-xs-7 col-md-10 text-left" @click="newcode">
                                                <img class="authcod_img" src="http://localhost/biyesheji/one.png" alt="这是验证码" ref="authcode">
                                            </div>
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
</template>

<script type="text/javascript">
import WangEditor from './editor.vue';
export default{
    data(){
        return{
            content:"",
            authcode:"",
            is_success: "",
            user:this.$store.state.user,
            time: "",
            show: {
                message: '',
                type: ''
            }
        }
    },
    methods:{
        catchData(value){
            this.content=value      //在这里接受子组件传过来的参数，赋值给data里的参数
            console.log(value)
        },
        newcode(){
            var _this = this
             _this.axios.post('http://localhost/biyesheji/checkcode.php').then(function(res){
                _this.$refs.authcode.src = "http://localhost/biyesheji/one.png"
                _this.authcode=res.data.authcode;
            })
        },
        submitPost(){
            this.timenow();
            var _this = this
            if(this.$refs.authcodeValue.value == this.authcode){
                var params = new URLSearchParams();
                params.append("subject", _this.$refs.subject.value);
                params.append("content", _this.content);
                params.append("section_id", _this.$route.query.id);
                params.append("authcode", _this.authcode);
                params.append("post_by", _this.user);
                params.append("post_at", _this.time);
                _this.axios.post('http://localhost/biyesheji/savepost.php',params).then(function(res){
                    if(res.data.is_success === true){
                        _this.show.message = '发帖成功！'
                        _this.show.type = 'success'
                    }
                    if(res.data.is_success === false){
                        _this.show.message = '发帖失败，请重试！'
                        _this.show.type = 'error'
                    }
                    
                })
            } else {
                 _this.show.message = '验证码错误！'
                 _this.show.type = 'error'
            }
            _this.open();
        },
        timenow(){
            var date = new Date();
            var YY = date.getFullYear();
            var MM = date.getMonth()+1;
            var DD = date.getUTCDate();
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            if(MM>=1 && MM<=9){
                MM = '0'+MM;
            }
            if(DD>=1 && DD<=9){
                DD = '0'+DD;
            }
            if(hh>=1 && hh<=9){
                hh = '0'+hh;
            }
            if(mm>=1 && mm<=9){
                mm = '0'+mm;
            }
            if(ss>=1 && ss<=9){
                ss = '0'+ss;
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
    }
    },
    components: {
        WangEditor
    }
}
</script>


<style>
@import '../../public/css/style.css';
#account--editor {
    width: auto;
    min-height: 300px;
    height: auto;
}
</style>
