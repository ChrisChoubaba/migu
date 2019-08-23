// import request from '../../utils/request'
export default {
  namespaced: true,
  state: {
    Authorization: sessionStorage.getItem('Authorization') ? sessionStorage.getItem('Authorization') : '',
    userName: sessionStorage.getItem('userName') ? sessionStorage.getItem('userName') : ''
  },
  mutations: {
    changeToken (state, user) {
      state.Authorization = user.Authorization
    },
    changeUserName (state, user) {
      state.userName = user.userName
      sessionStorage.setItem('userName', user.userName)
    }
  }
}
