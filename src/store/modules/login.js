// import request from '../../utils/request'
export default {
  namespaced: true,
  state: {
    Authorization:  sessionStorage.getItem('Authorization') ?  sessionStorage.getItem('Authorization') : '',
    // Authorization: '',
    userName: sessionStorage.getItem('userName') ?  sessionStorage.getItem('userName') : ''
  },
  mutations: {
    // 修改token，并将token存入sessionStorage
    changeToken (state, user) {
      state.Authorization = user.Authorization;
      // state.Authorization = '';
      // sessionStorage.setItem('Authorization', user.Authorization);
    },
    changeUserName (state, user) {
      state.userName = user.userName;
      // sessionStorage.setItem('userName', user.userName);
    }
  }
}
