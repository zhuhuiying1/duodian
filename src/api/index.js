import axios from '@/utils/axios'

const api = {
  home: {
    base: () => axios.get('/home')
  },
  product: {
    data: (params) => axios.get('/product', params)
  },
  classify: {
    data: (params) => axios.get('/category', params)
  }
}

export default (Vue) => {
  Vue.prototype.$api = api
}
