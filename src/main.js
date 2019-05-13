import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'jquery'
import store from './store/index'

import Block from './components/block'
import Section from './components/section'
import NewPost from './components/NewPost'
import Login from './components/login'
import Regist from './components/regist'
import Detail from './components/detail'
import Edit from './components/edit'
import Usercenter from './components/usercenter'

import axios from 'axios'  //引入axios
import qs from  'qs'


Vue.prototype.axios = axios
Vue.prototype.qs = qs
Vue.config.productionTip = false

Vue.use(Router)
Vue.use(ElementUI)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name:'block', component: Block},
    { path: '/section', name:'section', component: Section},
    { path: '/NewPost', name:'NewPost', component: NewPost, meta: {
      requireAuth: true
    }},
    { path: '/Login', name:'Login', component: Login},
    { path: '/Regist', name:'Regist', component: Regist},
    { path: '/Detail', name:'Detail', component: Detail},
    { path: '/Edit', name:'Edit', component: Edit},
    { path: '/Usercenter', name:'Usercenter', component: Usercenter}
  ]
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
      if (store.state.token) {  // 通过vuex state获取当前的token是否存在
          next();
      }
      else {
          next({
              path: '/login',
              query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
          })
      }
  }
  else {
      next();
  }
})