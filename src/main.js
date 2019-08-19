<<<<<<< HEAD
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Tab, Tabs } from 'vant'
import './assets/style/base.scss'
import 'vant/lib/index.css'
Vue.config.productionTip = false

Vue.use(Tab).use(Tabs)

=======
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { Tab, Tabs } from "vant";
import "./assets/style/base.scss";
Vue.config.productionTip = false;
import "vant/lib/index.css";

Vue.use(Tab).use(Tabs);
>>>>>>> 487f6f9317f5820d45b7406f8c0901f8ab7f2cb5
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
