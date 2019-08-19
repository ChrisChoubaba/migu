import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Tab, Tabs } from 'vant'
import './assets/style/base.scss'
Vue.config.productionTip = false
import 'vant/lib/index.css'

Vue.use(Tab).use(Tabs)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
