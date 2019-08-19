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
      console.log(state.imgList1, state.imgList2, state.imgList3)
      // console.log(state.imgList[0].list[0].imgSrc)
    }
  },
  actions: {
    getNavImg({ commit }) {
      request
        .get('http://localhost:8080/api/lovev/miguMovie/data/seeFilmData.jsp')
        .then(res => {
          commit({
            type: 'setNavImg',
            imgs: res
          })
        })
    }
  }
}
