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
                                    <span>注册会员</span>
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
                                    <h2>新会员注册</h2>
                                    <hr>
                                    <form action="newuser.php" method="post">
                                        <div class="form-group">
                                            <label for="subject">用户名：</label>
                                            <input type="text" class="form-control" id="username" name="username">
                                        </div>

                                        <div class="form-group">
                                            <label for="content">密码：</label>
                                            <input type="text" class="form-control" id="password" name="password">
                                        </div>

                                        <div class="form-group">
                                            <label for="content">确认密码：</label>
                                            <input type="text" class="form-control" id="password_confirm" name="password_confirm">
                                        </div>

                                        <div class="form-group">
                                            <label for="content">昵称：</label>
                                            <input type="text" class="form-control" id="nickname" name="nickname">
                                        </div>

                                        <div class="form-group">
                                            <label for="content">邮件：</label>
                                            <input type="text" class="form-control" id="email" name="email">
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
                                        <button type="submit" class="btn btn-info">提交</button>
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

<style>
@import "../../public/css/style.css"
</style>

