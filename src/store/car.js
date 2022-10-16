import { api } from '../api/index.js'
const car = {
  namespaced: true,
  state: {
    carList: []
  },
  getters: {
    // 0是被选择的  写反了
    num (state) { // 总数
      return state.carList.reduce((pre, item) => {
        item.isActive === '0' ? pre += 1 : pre += 0
        return pre
      }, 0)
    },
    allPrice (state) { // 总价
      return state.carList.reduce((pre, item) => {
        const price = item.num * item.price / 100
        item.isActive === '0' ? pre += price : pre += 0
        return pre
      }, 0)
    },
    isAllActive (state) { // 是否全选
      return state.carList.reduce((pre, item) => {
        if (item.isActive === '1') {
          pre = false
        }
        return pre
      }, true)
    }
  },
  mutations: {
    GET_CAR_LIST (state, payload) {
      state.carList = payload
      console.log(state.carList)
    }
  },
  actions: {
    getCarList ({ commit }) {
      api.car.list().then((res) => {
        commit('GET_CAR_LIST', res.data)
      })
    }
  }
}
export default car
