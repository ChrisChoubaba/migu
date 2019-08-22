import Vue from 'vue'

import Vuex from 'vuex'

import film from './modules/film'

import city from './modules/city'
import navImg from './modules/navImg'
import login from './modules/login'
import search from './modules/search'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    film,
    login,
    city,
    navImg,
    search
  }
})
