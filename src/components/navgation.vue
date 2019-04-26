<template>
    <div class="header">
            <div class="wrap">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="logobar">
                                <div class="mainnav-oner icon hidden-md hidden-lg" id="mainnav-oner" data-target="#mainnav">
                                    <span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
                                </div>
                                <div class="logo">
                                    <div class="image">
                                        <router-link to="/">
                                            <a href="">
                                                <img src="../assets/logo.png" alt="">
                                            </a>
                                        </router-link>
                                    </div>
                                    <h1 class="title">
                                        <a>
                                            <span>BBS</span>
                                        </a>
                                    </h1>
                                </div>
                                <div class="search-oner icon hidden-md hidden-lg" id="search-oner" data-target="#search">
                                    <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="search" id="search">
                                <div class="search-offer icon hidden-md hidden-lg" id="search-offer" data-target="#search">
                                    <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
                                </div>
                                <form action="" method="get">
                                    <div class="input-group">
                                        <label class="sr-only" for="keyword">搜索：</label>
                                        <input type="text" class="form-control" id="keyword" placeholder="关键词">
                                        <span class="input-group-btn">
                                            <button class="btn btn-info" type="button">搜索</button>
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="mainnav" id="mainnav">
                                <div class="usermenu">
                                    <div class="links">
                                        <router-link :to="{name:'Login'}">
                                            <a v-show="!token">登录</a>
                                        </router-link>
                                        <a v-show="token">{{getUser}}</a>
                                        <span>/</span>
                                        <router-link :to="{name:'Regist'}" v-show='!token'>
                                            <a>注册</a>
                                        </router-link>
                                        <a v-show='token' @click="loginout">退出</a>
                                    </div>
                                    <div class="mainnav-offer icon hidden-md hidden-lg" id="mainnav-offer" data-target="#mainnav">
                                        <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
                                    </div>
                                </div>
                                <ul class="list-inline navmenu nav justify-content-left">
                                    <li>
                                        <router-link to="/">
                                            <a>Home</a>
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link :to="{name:'section',query:{id:1}}">
                                            <a>Backend</a>
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link :to="{name:'section',query:{id:2}}">
                                            <a>Frontend</a>
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link :to="{name:'section',query:{id:3}}">
                                            <a> Database </a>
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link :to="{name:'section',query:{id:4}}">
                                            <a>UI</a>
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
   data(){
       return {
           token: this.$store.state.token,
           user:  this.$store.state.user
       }
   },
   methods:{
       loginout:function(){
            this.$store.commit('LOGOUT')
        }
   },
   computed:{
       getToken:function(){
           return this.$store.state.token;
       },
       getUser:function(){
           return this.$store.state.user
       }
   },
   watch:{
        getToken(val) {
            this.token = val;
        },
        getUser(user) {
            this.user = user;
        }
   }
}
</script>

<style>
@import '../../public/css/style.css';
a{
    color:black !important;
    text-decoration: none !important;
}
a:hover{
    color:#5bc0de !important;
}
</style>