import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 初始化时用sessionStore.getItem('token'),这样子刷新页面就无需重新登录
const state = {
  user: window.sessionStorage.getItem('user'),
  token: window.sessionStorage.getItem('token'),
  all_data: window.sessionStorage.getItem('all_data'),
  latest_data:window.sessionStorage.getItem('latest_data'),
  pops_data: window.sessionStorage.getItem('pops_data'),
  thread: window.sessionStorage.getItem('thread')
}
const mutations = {
  //将token保存到sessionStorage里，token表示登陆状态
  SET_TOKEN: (state, data) => {
    state.token = data
    window.sessionStorage.setItem('token', data) 
  },
  //获取用户名
  GET_USER: (state, data) => {
    // 把用户名存起来
    state.user = data
    window.sessionStorage.setItem('user', data)
  },
  //登出
  LOGOUT: (state) => {
    // 登出的时候要清除token
    state.token = null
    state.user = null
    window.sessionStorage.removeItem('token')
    window.sessionStorage.removeItem('user')
  },
  SET_ALL_DATA: (state,data) => {
    state.all_data = data
    window.sessionStorage.setItem('all_data', JSON.stringify(data))
  },
  SET_LATEST_DATA: (state,data) => {
    state.latest_data = data
    window.sessionStorage.setItem('latest_data', JSON.stringify(data))
  },
  SET_POPS_DATA: (state,data) => {
    state.pops_data = data
    window.sessionStorage.setItem('pops_data', JSON.stringify(data))
  },
  GET_THREAD:(state,data) => {
    state.thread = data
    window.sessionStorage.setItem('thread', JSON.stringify(data))
  }
}
 
const actions = {
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})