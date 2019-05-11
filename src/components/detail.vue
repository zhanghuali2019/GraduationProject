<template>
    <div class="main">
            <div class="wrap text-left">
                <div class="container-fluid">
                    <div class="crumbs_pages">
                        <div class="row">
                            <div class="col-sm-7">
                                <div class="crumbs">
                                    <a href="">首页</a>
                                    >
                                    <span>详情</span>
                                </div>
                            </div>
                            <div class="col-sm-5">
                                <div class="post_btns">
                                    <button type="button" class="btn btn-info" @click="reply">回复</button>&nbsp;
                                    <button type="button" class="btn btn-warning">新建</button>
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
                                            <img src="../assets/1.jpg" alt="">
                                        </div>
                                        <span class="nickname">{{$route.query.item.post_by}}</span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-10">
                                    <div class="post">
                                        <div class="post_header clearfix">
                                            <h2>{{$route.query.item.subject}}</h2>
                                            <span>#1</span>
                                        </div>
                                        <div class="meta">
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <span>{{$route.query.item.post_at}}</span>
                                                </div>
                                                <div class="col-sm-6">
                                                    <span>浏览数：{{$route.query.item.view}}</span>
                                                    <span>回复数：{{$route.query.item.replies}}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p>{{this.$route.query.item.content}}</p>
                                        <div class="post_menu">
                                            <a href="">回复 </a> <a href="">编辑 </a> <a href="">删除</a>
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
                                            <img src="../assets/1.jpg" alt="">
                                        </div>
                                        <span class="nickname">{{user}}</span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-10">
                                    <div class="post">
                                        <div class="post_header clearfix">
                                            
                                        </div>
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
                                            <a href="">回复 </a> <a href="">编辑 </a> <a href="">删除</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                        <div class="navs_pages">
                            <div class="row">
                                <div class="col-md-2">
                                    <button class="btn btn-warning">新建主题</button>
                                </div>
                                <div class="col-md-10">
                                    <div class="pages">
                                        <nav aria-label="Page navigation">
                                            <ul class="pagination pagination-sm">
                                                <li>
                                                    <a href="#" aria-label="Previous">
                                                    <span aria-hidden="true">&laquo;</span>
                                                    </a>
                                                </li>
                                                <li><a href="#">1</a></li>
                                                <li><span>...</span></li>
                                                <li><a href="#">4</a></li>
                                                <li class="active"><span>5 <span class="sr-only">(current)</span></span></li>
                                                <li><a href="#">6</a></li>
                                                <li><span>...</span></li>
                                                <li><a href="#">10</a></li>
                                                <li>
                                                    <a href="#" aria-label="Next">
                                                        <span aria-hidden="true">&raquo;</span>
                                                    </a>
                                                </li>
                                            </ul>
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
                                            <img src="../assets/1.jpg" alt="">
                                        </div>
                                        <span class="nickname">{{user}}</span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-10">
                                    <div class="postform">
                                        <form>
                                            <div class="form-group">
                                                <label for="subject">主题：</label>
                                                <input type="text" class="form-control" id="subject" name="subject" ref="subject">
                                            </div>

                                            <div class="form-group">
                                                <label for="content">内容：</label>
                                                <textarea class="form-control" rows="5" id="content" name="content" ref="content"></textarea>
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
export default{
    data(){
        return{
            user:this.$store.state.user,
            time: "",
            show: {
                message: '',
                type: ''
            },
            thread:this.$store.state.thread
        }
    },
    methods:{
        submitPost(){
            this.timenow();
            var _this = this
            
                var params = new URLSearchParams();
                params.append("subject", _this.$refs.subject.value);
                params.append("content", _this.$refs.content.value);
                params.append("parent_id", _this.$route.query.item.id);
                params.append("post_by", _this.user);
                params.append("post_at", _this.time);
                _this.axios.post('http://localhost/biyesheji/savethread.php',params).then(function(res){
                    if(res.data.is_success === true){
                        _this.show.message = '发帖成功！'
                        _this.show.type = 'success'
                    }
                    if(res.data.is_success === false){
                        _this.show.message = '发帖失败，请重试！'
                        _this.show.type = 'error'
                    }
                    
                })
             
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
        },
        reply(){
            let curHeight = document.documentElement.scrollTop || document.body.scrollTop;
            document.body.scrollTop = curHeight;
        }
    },
    computed:{
       getThread:function(){
           return this.$store.state.thread;
       }
      
   },
   watch:{
        getThread(val) {
            this.thread = val;
        }
   },
    mounted:function(){
        var _this = this
        var params = new URLSearchParams();
        params.append("id", _this.$route.query.item.id);
        _this.axios.post('http://localhost/biyesheji/searchthread.php',params).then(function(res){
            var thread = JSON.parse(res.data.thread);
            _this.$store.commit("GET_THREAD", JSON.parse(res.data.thread));  
        })
    }
}
</script>

<style>
@import "../../public/css/style.css"
</style>