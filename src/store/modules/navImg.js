import request from '../../utils/request'
export default {
  namespaced: true,
  state: {
    imgList1: [],
    imgList2: [],
    imgList3: [],
    Videos: []
  },
  getters: {},
  mutations: {
    setNavImg(state, payload) {
      state.imgList1 = payload.imgList1
      state.imgList2 = payload.imgList2 || []
      state.imgList3 = payload.imgList3 || []
      // console.log(state.imgList1)

      // console.log(state.imgList1, state.imgList2, state.imgList3)
      // console.log(state.imgList[0].list[0].imgSrc)
    },
    setVideo(state, payload) {
      state.Videos = payload.list
    }
  },
  actions: {
    getNavImg({ commit, state }, payload) {
      request
        .post(
          'http://localhost:8080/api/lovev/miguMovie/data/seeFilmData.jsp',
          {
            nodeId: payload.nodeId,
            pagesize: payload.pagesize,
            pageidx: payload.pageidx
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
        .then(res => {
          console.log(res)
          if (res.length == 2) {
            commit({
              type: 'setNavImg',
              imgList1: state.imgList1.concat(res[0].list),
              imgList2: state.imgList1.concat(res[1].list)
            })
          } else if (res.length == 1) {
            commit({
              type: 'setNavImg',
              imgList1: state.imgList1.concat(res[0].list)
            })
          } else {
            commit({
              type: 'setNavImg',
              imgList1: state.imgList1.concat(res[0].list),
              imgList2: state.imgList1.concat(res[1].list),
              imgList3: state.imgList1.concat(res[2].list)
            })
          }
        })
    },
    getVideo({ commit }, payload) {
      request
        .post(
          'http://localhost:8080/api/lovev/miguMovie/data/seeFilmData.jsp',

          {
            nodeId: payload.nodeId,
            pagesize: payload.pagesize,
            pageidx: payload.pageidx
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
        .then(res => {
          commit('setVideo', res[1])
        })
    }
  }
}
