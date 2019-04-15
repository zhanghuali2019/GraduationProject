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
                                        <a href="">
                                            <img src="../assets/logo.png" alt="">
                                        </a>
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
                                        <a>登录</a>
                                        <span>/</span>
                                        <a>注册</a>
                                    </div>
                                    <div class="mainnav-offer icon hidden-md hidden-lg" id="mainnav-offer" data-target="#mainnav">
                                        <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
                                    </div>
                                </div>
                                <ul class="list-inline navmenu nav justify-content-left">
                                    <li class="active">
                                        <a>Home</a>
                                    </li>
                                    <li>
                                        <a>教学</a>
                                    </li>
                                    <li>
                                        <a>Frontend</a>
                                    </li>
                                    <li>
                                        <a>Database</a>
                                    </li>
                                    <li>
                                        <a>UI</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<style>
@import '../../public/css/style.css'

</style>