import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import Block from './components/block'
import Section from './components/section'
import NewPost from './components/NewPost'
import Login from './components/login'
import Regist from './components/regist'

Vue.config.productionTip = false
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name:'block', component: Block},
    { path: '/section', name:'section', component: Section},
    { path: '/NewPost', name:'NewPost', component: NewPost},
    { path: '/Login', name:'Login', component: Login},
    { path: '/Regist', name:'Regist', component: Regist}
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
