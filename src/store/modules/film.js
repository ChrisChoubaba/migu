import request from '../../utils/request'

export default {
  namespaced: true,
  state: {
    filmList: [],
    comingSoonList: [],
    dateList: []
  },
  mutations: {
    setFilmList(state, payload) {
      state.filmList = payload.body.movieList
    },
    setComingSoonList(state, payload) {
      state.comingSoonList = payload.body.movieList
      state.dateList = payload.body.movieList.openingDate
    }
  },
  actions: {
    getFilmList({ commit }) {
      request
        .get(
          'http://localhost:8080/api/mgw/bsdata4mv/v2/movieListShow/4708?cityCode=4900'
        )
        .then(data => {
          if (data.code === 200) {
            commit('setFilmList', data)
            // console.log(data)
          }
        })
    },
    getComingSoonList({ commit }) {
      request
        .get(
          'http://localhost:8080/api/mgw/bsdata4mv/v2/movieListPreview?pageNo=0&pageSize=20'
        )
        .then(data => {
          if (data.code === 200) {
            commit('setComingSoonList', data)
            // console.log(data)
            console.log(data.body.movieList[0].openingDate)
          }
        })
    }
  }
}
