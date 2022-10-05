import storage from '@/utils/localStorage'
const map = {
  namespaced: true,
  state: {
    location: {}
  },
  mutations: {
    GET_LOCATION (state) {
      const location = storage.getItem('location')
      if (location) {
        state.location = location
      }
    },
    SET_LOCATION (state, payload) {
      storage.setItem(
        'location',
        {
          formattedAddress: payload, // 完整地址
          // formattedAddress: res.province + res.city, // 完整地址
          province: state.location.province, // 省
          city: state.location.city, // 市
          district: state.location.district, // 县
          township: state.location.township // 镇
        },
        1000 * 60 * 60 * 24
      ) // 设置一天后失效
      const location = storage.getItem('location')
      if (location) {
        state.location = location
      }
    }
  },
  // actions: {
  //   getLocation ({ commit }) {
  //     commit('GET_LOCATION')
  //   }
  // },
  gettres: {}
}
export default map
