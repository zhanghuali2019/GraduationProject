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
                                    <span>编辑帖子</span>
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
                                        <img src="pic/1.jpg" alt="">
                                    </div>
                                    <span class="nickname">andy</span>
                                </div>
                            </div>
                            <div class="col-md-9">
                                <div class="postform">
                                    <form>
                                        <div class="form-group">
                                            <label for="subject">主题：</label>
                                            <input type="text" class="form-control" id="subject" name="subject" value="hello, world!">
                                        </div>

                                        <div class="form-group">
                                            <label for="content">内容：</label>
                                            <textarea class="form-control" rows="5" id="content" name="content">hello, world ....</textarea>
                                        </div>

                                        <div class="form-group row">
                                            <div class="col-xs-5 col-md-2">
                                                <label class="sr-only">验证码：</label>
                                                <input type="text" class="form-control" id="authcode" name="authcode" value="6hzy" placeholder="验证码">
                                            </div>
                                            <div class="col-xs-7 col-md-10">
                                                <img class="authcod_img" src="pic/authcocd.jpg" alt="">
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-info">提交</button>
                                    </form>
                                </div>
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
