<template>
    <div class="footer">
            <div class="wrap">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-6 row-left">
                            <p>
                                <router-link to="/">
                                    <a class="row-left-a">Home</a>
                                </router-link> / 
                                <router-link :to="{name:'section',query:{id:1}}">
                                    <a class="row-left-a">Backend</a>
                                </router-link> / 
                                <router-link :to="{name:'section',query:{id:2}}">
                                    <a class="row-left-a">Frontend</a>
                                </router-link> / 
                                <router-link :to="{name:'section',query:{id:3}}">
                                    <a class="row-left-a">Database</a>
                                </router-link> / 
                                <router-link :to="{name:'section',query:{id:1}}">
                                    <a class="row-left-a">UI</a>
                                </router-link>
                            </p>
                        </div>
                        <div class="col-md-6">
                            <p class="cpoyright">Copyright ©2018 bbs.onlyzen.cn, All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<style>
 @import '../../public/css/style.css';

.row-left
{
    text-align: left;
}

.row-left-a:hover {
    text-decoration: none;
    cursor: pointer;
    color: #31b0d5 !important;
}
</style>

