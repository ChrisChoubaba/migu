import request from '../../utils/request'

export default {
  namespaced: true,
  state: {
    filmList: [],
    comingSoonList: [],
    cinemas: []
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
      // console.log(dateList)
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
    setCinemas(state, payload) {
      state.cinemas = payload.cinemaes
    }
    // setdate(state, payload) {
    //   state.dateList = payload.result
    // }
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
            // console.log(data.body.movieList)
          }
        })
    },
    getCinemas({ commit }, payload) {
      request
        .post(
          'http://localhost:8080/api/mta-service/data/migu/validCinemaes.jsp',
          {
            cityCode: 4900,
            orderType: 1,
            longitude: '',
            latitude: ''
          },
          {
            transformRequest: data => {
              //在请求发送到服务器之前对请求的参数做格式转换
              // 这里研究 咪咕 发现，他需要的是  key=value&key=value 这种格式的数据
              // nodeId=70022794&pagesize=3&pageidx=1
              let arr = []
              for (let key in data) {
                arr.push(`${key}=${data[key]}`)
              }
              // arr =['nodeId=70022794', 'pagesize=3', 'pageidx=1']
              return arr.join('&')
            }
          }
        )
        .then(data => {
          commit('setCinemas', data)
          console.log(data)
        })
    }
  }
}
