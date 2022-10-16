import { api } from '../api/index.js'
const user = {
  namespaced: true,
  state: {
    userInfo: '',
    userAddress: []
  },
  mutations: {
    getUser (state, payload) {
      state.userInfo = payload
      console.log(state)
    },
    getAddress (state, payload) {
      state.userAddress = payload
    }
  },
  actions: {
    getUserInfo ({ commit, dispatch }) { // 获取用户信息
      api.user.info().then((res) => {
        commit('getUser', res.data)
      })
      dispatch('getUserAddress') // 获取用户信息的时候同时获取下历史地址
      dispatch('car/getCarList', null, { root: true }) // 获取用户信息的时候同时获取下购物车
    },
    getUserAddress ({ commit }) { // 获取历史地址
      api.address.list().then((res) => {
        commit('getAddress', res.data)
      })
    }
  },
  getters: {},
  modules: {}
}
export default user
