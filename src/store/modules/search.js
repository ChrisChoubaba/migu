import request from '../../utils/request'
export default {
  namespaced: true,
  state: {
    searchList: []
  },
  getters: {

  },
  mutations: {
    setSearchFilm (state, payload) {
      state.searchList = payload
    }

  },
  actions: {
    getSearchFilm ({ commit }, payload) {
      request
        .post(
          'http://localhost:8080/api/publish/i_www/resource/lovev/miguMovie/data/searchResultData2.jsp',
          {
            searchVal: payload
          },
          {
            transformRequest: data => {
              let arr = []
              for (let key in data) {
                arr.push(`${key}=${data[key]}`)
              }
              return arr.join('&')
            }
          }
        )
        .then(data => {
          console.log(data)
          commit('setSearchFilm', data)
        })
    }
  }
}