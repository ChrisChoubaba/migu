import request from '../../utils/request'

export default {
  namespaced: true,
  state: {
    filmList: [],
    comingSoonList: [],
    cinemas: [],
    dateList: []
  },
  getters: {
    // 取时间数组
    getdate(state) {
      state.comingSoonList.forEach(item => {
        let date = item.openingDate
        let index = state.dateList.findIndex(a => a.date === date)
        if (index > -1) {
          state.dateList[index].list.push(item)
        } else {
          let obj = {
            date,
            list: [item]
          }
          state.dateList.push(obj)
        }
      })
      // console.log(dateList)
      return state.dateList
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
    setCinemas(state, payload) {
      state.cinemas = payload.cinemaes
    }
    // setdate(state, payload) {
    //   state.dateList = payload.result
    // }
  },
  actions: {
    // 获取正在热映数据
    getFilmList({ commit }, payload) {
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
    // 获取即将上映数据
    getComingSoonList({ commit, state, getters }, payload) {
      request
        .get('http://localhost:8080/api/mgw/bsdata4mv/v2/movieListPreview', {
          params: {
            pageNo: payload.pageNo,
            pageSize: payload.pageSize
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
              comingSoonList: data.body.movieList,
              dateList: data.body.movieList
            })
            payload.callback()
          }
        })
    },
    // 获取影院
    getCinemas({ commit }, payload) {
      // let hello = JSON.parse(localStorage.getItem('hello')).cityCode
      //   ? JSON.parse(localStorage.getItem('hello')).cityCode
      //   : 4900
      // console.log(hello)
      request
        .post(
          'http://localhost:8080/api/mta-service/data/migu/validCinemaes.jsp',
          {
            cityCode: localStorage.getItem('hello')
              ? JSON.parse(localStorage.getItem('hello')).cityCode
              : 4900,
            orderType: 1,
            longitude: '',
            latitude: ''
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
          commit('setCinemas', data)
          // console.log(data)
        })
    }
  }
}
