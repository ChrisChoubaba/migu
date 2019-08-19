import request from '../../utils/request'

export default {
  namespaced: true,
  state: {
    filmList: [],
    comingSoonList: []
  },
  getters: {
    // 取时间数组
    getdate(state) {
      let dateList = []

      state.comingSoonList.forEach(item => {
        let date = item.openingDate
        let index = dateList.findIndex(a => a.date === date)
        if (index > -1) {
          dateList[index].list.push(item)
        } else {
          let obj = {
            date,
            list: [item]
          }
          dateList.push(obj)
        }
      })
      console.log(dateList)
      return dateList
    }
  },
  mutations: {
    setFilmList(state, payload) {
      state.filmList = payload.body.movieList
    },
    setComingSoonList(state, payload) {
      state.comingSoonList = payload.comingSoonList
      // state.dateList = payload.dateList
    },
    setdate(state, payload) {
      state.dateList = payload.result
    }
  },
  actions: {
    getFilmList({ commit }, payload) {
      setTimeout(() => {
        request
          .get(
            'http://localhost:8080/api/mgw/bsdata4mv/v2/movieListShow/4708?cityCode=4900'
          )
          .then(data => {
            if (data.code === 200) {
              commit('setFilmList', data)
              // console.log(data)
              payload.callback()
            }
          })
      }, 1000)
    },
    getComingSoonList({ commit }, payload) {
      request
        .get('http://localhost:8080/api/mgw/bsdata4mv/v2/movieListPreview', {
          params: {
            pageNo: payload.pageNo,
            pageSize: 20
          }
        })
        .then(data => {
          if (data.code === 200) {
            // commit('setComingSoonList', data)
            // console.log(data)
            // console.log(data.body.movieList)
            commit({
              type: 'setComingSoonList',
              // dateList: data.body.movieList,
              comingSoonList: data.body.movieList
            })
            // console.log(data.body.movieList)
          }
        })
    }
  }
}
