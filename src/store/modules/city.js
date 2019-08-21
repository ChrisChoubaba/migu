import request from '../../utils/request'

export default {
  namespaced: true,
  state: {
    cities: [],
    curCity: []
  },
  getters: {
    zm(state) {
      let pys = []
      state.cities.forEach(item => {
        if (item.cityCode === '') {
          pys.push(item.cityName)
        }
      })
      return pys
    }
  },
  mutations: {
    setCities(state, payload) {
      state.cities = payload.cities
    },
    setName(state, payload) {
      state.curCity = payload.curCity
    }
  },
  actions: {
    getCities({ commit }) {
      request
        .post('http://localhost:8080/api/mta-service/data/migu/cities.jsp')
        .then(res => {
          commit('setCities', res)
        })
    }
  }
}
