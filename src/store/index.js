import Vue from 'vue'

import Vuex from 'vuex'

import film from './modules/film'
import navImg from './modules/navImg'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    film,
    navImg
  }
})
