<template>
  <div class="main">
    <div class="wrap">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-8">
            <div class="slider">
              <img src="../assets/slide_1.jpg" alt="轮播图">
            </div>
            <div class="primary">
              <div class="block">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="block_header">
                      <h3 class="title">Backend</h3>
                      <router-link :to="{name:'section',query:{id:1}}">
                        <a class="more" href>more</a>
                      </router-link>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <ul class="list">
                      <li>Convert one date time format into another in PHP custom function</li>
                      <li>
                        <a>Best way to include config.php</a>
                      </li>
                      <li>
                        <a>Need to know how to set ad listings to expire 30 days in php mysql?</a>
                      </li>
                      <li>
                        <a>Dependency injection container vs composition root?</a>
                      </li>
                      <li>
                        <a>How to split the following strings into prefix, range and postfix?</a>
                      </li>
                      <li>
                        <a>How to split the following strings into prefix, range and postfix?</a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-6">
                    <div class="image">
                      <img src="../assets/section_1.jpg" alt="Backend">
                    </div>
                  </div>
                </div>
              </div>

              <div class="block">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="block_header">
                      <h3 class="title">Frontend</h3>
                      <router-link :to="{name:'section',query:{id:2}}">
                        <a class="more" href>more</a>
                      </router-link>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <ul class="list">
                      <li>
                        <a>Convert one date time format into another in PHP custom function</a>
                      </li>
                      <li>
                        <a>Best way to include config.php</a>
                      </li>
                      <li>
                        <a>Need to know how to set ad listings to expire 30 days in php mysql?</a>
                      </li>
                      <li>
                        <a>Dependency injection container vs composition root?</a>
                      </li>
                      <li>
                        <a>How to split the following strings into prefix, range and postfix?</a>
                      </li>
                      <li>
                        <a>How to split the following strings into prefix, range and postfix?</a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-6">
                    <div class="image">
                      <img src="../assets/section_2.jpg" alt="Frontend">
                    </div>
                  </div>
                </div>
              </div>

              <div class="block">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="block_header">
                      <h3 class="title">Database</h3>
                      <router-link :to="{name:'section',query:{id:3}}">
                        <a class="more" href>more</a>
                      </router-link>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <ul class="list">
                      <li>
                        <a>Convert one date time format into another in PHP custom function</a>
                      </li>
                      <li>
                        <a>Best way to include config.php</a>
                      </li>
                      <li>
                        <a>Need to know how to set ad listings to expire 30 days in php mysql?</a>
                      </li>
                      <li>
                        <a>Dependency injection container vs composition root?</a>
                      </li>
                      <li>
                        <a>How to split the following strings into prefix, range and postfix?</a>
                      </li>
                      <li>
                        <a>How to split the following strings into prefix, range and postfix?</a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-6">
                    <div class="image">
                      <img src="../assets/section_3.jpg" alt="Database">
                    </div>
                  </div>
                </div>
              </div>

              <div class="block">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="block_header">
                      <h3 class="title">UI</h3>
                      <router-link :to="{name:'section',query:{id:4}}">
                        <a class="more" href>more</a>
                      </router-link>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <ul class="list">
                      <li>
                        <a>Convert one date time format into another in PHP custom function</a>
                      </li>
                      <li>
                        <a>Best way to include config.php</a>
                      </li>
                      <li>
                        <a>Need to know how to set ad listings to expire 30 days in php mysql?</a>
                      </li>
                      <li>
                        <a>Dependency injection container vs composition root?</a>
                      </li>
                      <li>
                        <a>How to split the following strings into prefix, range and postfix?</a>
                      </li>
                      <li>
                        <a>How to split the following strings into prefix, range and postfix?</a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-6">
                    <div class="image">
                      <img src="../assets/section_4.jpg" alt="UI">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
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

ul {
  padding: 0;
  color: #ccc;
  list-style-type: square;
  list-style-position: inside;
  text-align: left;
}
li {
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  list-style-color: #ccc;
}
li * {
  display: inline;
  line-height: 1;
}

.list > li {
  margin-top: 15px;
}

li:hover {
  color: #31b0d5;
  cursor: pointer;
}
</style>