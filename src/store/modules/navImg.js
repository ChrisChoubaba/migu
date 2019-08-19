import request from '../../utils/request'
export default {
  namespaced: true,
  state: {
    imgList: []
  },
  getters: {},
  mutations: {
    setNavImg(state, payload) {
      let arr = []
      payload.imgs.forEach(item => {})
      console.log(state.imgList)
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
