<template>
  <div class="main">
    <div class="wrap">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-8">
            <div class="crumbs_pages">
              <div class="row">
                <div class="col-sm-5 text-left">
                  <div class="crumbs">
                    <a href>首页</a>
                    >
                    <span>版块名称</span>
                  </div>
                </div>
                <div class="col-sm-7 hidden-xs">
                  <div class="pages">
                    <nav aria-label="Page navigation">
                      <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div class="section">
              <div class="block">
                <div class="post">
                  <div class="row">
                    <div class="col-md-2 hidden-xs hidden-sm">
                      <div class="avatar">
                        <img class="img-circle" src="../assets/2.jpg" alt>
                      </div>
                    </div>
                    <div class="col-md-10">
                      <div class="text">
                        <h2>Dependency injection container vs composition root</h2>
                        <p>Dependency injection container vs composition root>Dependency injection container vs composition root, Dependency injection container vs composition root>Dependency injection container vs composition root</p>
                        <div class="meta">
                          <div class="row">
                            <div class="col-sm-6">
                              <span>由 Dependency 发布于：2018-01-20</span>
                            </div>
                            <div class="col-sm-6">
                              <span>浏览数：100</span>
                              <span>回复数：99</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="post">
                  <div class="row">
                    <div class="col-md-2 hidden-xs hidden-sm">
                      <div class="avatar">
                        <img class="img-circle" src="../assets/2.jpg" alt>
                      </div>
                    </div>
                    <div class="col-md-10">
                      <div class="text">
                        <h2>Dependency injection container vs composition root</h2>
                        <p>Dependency injection container vs composition root>Dependency injection container vs composition root, Dependency injection container vs composition root>Dependency injection container vs composition root</p>
                        <div class="meta">
                          <div class="row">
                            <div class="col-sm-6">
                              <span>由 Dependency 发布于：2018-01-20</span>
                            </div>
                            <div class="col-sm-6">
                              <span>浏览数：100</span>
                              <span>回复数：99</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="post">
                  <div class="row">
                    <div class="col-md-2 hidden-xs hidden-sm">
                      <div class="avatar">
                        <img class="img-circle" src="../assets/2.jpg" alt>
                      </div>
                    </div>
                    <div class="col-md-10">
                      <div class="text">
                        <h2>Dependency injection container vs composition root</h2>
                        <p>Dependency injection container vs composition root>Dependency injection container vs composition root, Dependency injection container vs composition root>Dependency injection container vs composition root</p>
                        <div class="meta">
                          <div class="row">
                            <div class="col-sm-6">
                              <span>由 Dependency 发布于：2018-01-20</span>
                            </div>
                            <div class="col-sm-6">
                              <span>浏览数：100</span>
                              <span>回复数：99</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="post">
                  <div class="row">
                    <div class="col-md-2 hidden-xs hidden-sm">
                      <div class="avatar">
                        <img class="img-circle" src="../assets/2.jpg" alt>
                      </div>
                    </div>
                    <div class="col-md-10">
                      <div class="text">
                        <h2>Dependency injection container vs composition root</h2>
                        <p>Dependency injection container vs composition root>Dependency injection container vs composition root, Dependency injection container vs composition root>Dependency injection container vs composition root</p>
                        <div class="meta">
                          <div class="row">
                            <div class="col-sm-6">
                              <span>由 Dependency 发布于：2018-01-20</span>
                            </div>
                            <div class="col-sm-6">
                              <span>浏览数：100</span>
                              <span>回复数：99</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pages">
                  <nav aria-label="Page navigation">
                        <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="newpost_btn">
              <router-link :to="{name:'NewPost', query: {id: this.$route.query.id}}">
                <button class="btn btn-warning btn-lg btn-block">新建主题</button>
              </router-link>
            </div>
            <New></New>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import New from "./new.vue";
export default {
  name: "app",
  components: {
    New
  }
};
</script>
<style>
@import "../../public/css/style.css";
.img-circle {
  border-radius: 50% !important;
}
.text {
  text-align: left;
}
</style>