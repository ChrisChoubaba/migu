import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './assets/style/base.scss'
import { Tab, Tabs, List, Cell, Toast, Search } from 'vant'
// import 'element-ui/lib/theme-chalk/index.css'

import 'vant/lib/index.css'

window.isLogin = '' // 登录状态

Vue.config.productionTip = false
axios.interceptors.request.use(
  config => {
    if (sessionStorage.getItem('Authorization')) {
      config.headers.Authorization = sessionStorage.getItem('Authorization')
    }
    return config
  },
  error => {
    return Promise.reject(error)
  })
Vue.use(Tab).use(Tabs).use(Toast).use(List).use(Cell).use(Search)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
