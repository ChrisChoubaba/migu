import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Tab, Tabs } from 'vant'
import './assets/style/base.scss'
import axios from 'axios'
import 'vant/lib/index.css'
import 'element-ui/lib/theme-chalk/index.css'

window.isLogin = '' //登录状态

Vue.config.productionTip = false

Vue.config.productionTip = false
Vue.use(Tab).use(Tabs)

axios.interceptors.request.use(
  config => {
    if (sessionStorage.getItem('Authorization')) {
      config.headers.Authorization = sessionStorage.getItem('Authorization');
    }
 
    return config;
  },
  error => {
    return Promise.reject(error);
  });

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')