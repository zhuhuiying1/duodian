import Vue from 'vue'
import Vuex from 'vuex'
// import { api } from '../api/index.js'
import user from './user'
import map from './map'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // userInfo: ''
  },
  getters: {
  },
  mutations: {
    // setInfo (state, payload) {
    //   state.userInfo = payload
    // }
  },
  actions: {
    // getUserInfo (context) { // 可以直接把commit解出来 { commit }
    //   const token = localStorage.getItem('verify')
    //   if (token) {
    //     api.user.info().then((res) => {
    //       console.log(res.data)
    //       context.commit('setInfo', res.data)
    //     })
    //   }
    // }
  },
  modules: {
    user,
    map
  }
})
