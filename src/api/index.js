import axios from '@/utils/axios'

export const api = {
  home: {
    base: () => axios.get('/home')
  },
  product: {
    data: (params) => axios.get('/product', params),
    detail: id => axios.get(`/detail/${id}`),
    search: (params) => axios.get('/search', params),
    classify: (params) => axios.get('/classify', params)
  },
  classify: {
    data: (params) => axios.get('/category', params)
  },
  user: {
    verify: (params) => axios.get('/user/sendMessageCode', params),
    login: (params) => axios.post('/user/login', params),
    info: () => axios.get('/user/info')
  }
}

export default (Vue) => {
  Vue.prototype.$api = api
}
