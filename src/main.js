import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Tab, Tabs, List, Cell } from 'vant'
import './assets/style/base.scss'
// import 'element-ui/lib/theme-chalk/index.css'

import 'vant/lib/index.css'

Vue.config.productionTip = false

Vue.use(Tab)
  .use(Tabs)
  .use(List)
  .use(Cell)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
