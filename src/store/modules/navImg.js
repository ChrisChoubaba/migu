import request from '../../utils/request'
export default {
  namespaced: true,
  state: {
    imgList1: [],
    imgList2: [],
    imgList3: []
  },
  getters: {},
  mutations: {
    setNavImg(state, payload) {
      state.imgList1 = payload.imgs[0].list
      state.imgList2 = payload.imgs[1].list
      state.imgList3 = payload.imgs[2].list

      // console.log(state.imgList1, state.imgList2, state.imgList3)
      // console.log(state.imgList[0].list[0].imgSrc)
    }
  },
  actions: {
    getNavImg({ commit }) {
      request
        .post('http://localhost:8080/api/lovev/miguMovie/data/seeFilmData.jsp')
        .then(res => {
          // console.log(res)
          commit({
            type: 'setNavImg',
            imgs: res
          })
        })
    },
    getFreeImg({ commit }) {
      request
        .post(
          'http://localhost:8080/api/lovev/miguMovie/data/seeFilmData.jsp',
          {
            nodeId: 70022795,
            pagesize: 3,
            pageidx: 1
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
        })
    }
  }
}
