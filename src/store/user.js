import { api } from '../api/index.js'
const user = {
  namespaced: true,
  state: {
    userInfo: ''
  },
  mutations: {
    getUser (state, payload) {
      state.userInfo = payload
    }
  },
  actions: {
    getUserInfo ({ commit }) {
      api.user.info().then((res) => {
        commit('getUser', res.data)
      })
    }
  },
  getters: {},
  modules: {}
}
export default user
