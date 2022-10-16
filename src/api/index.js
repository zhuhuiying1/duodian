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
  },
  address: {
    create: (params) => axios.post('/address', params),
    list: () => axios.get('/address'),
    update: (id, params) => axios.put('/address/' + id, params)
  },
  car: {
    add: (params) => axios.post('/car', params),
    list: () => axios.get('/car'),
    update: (id, params) => axios.put('/car/' + id, params),
    updateAll: (params) => axios.put('/car', params),
    delete: (id) => axios.delete('/car/' + id)
    // router.get('/api/car', controller.car.list)
    // router.put('/api/car/:id', controller.car.update)
  }
}

export default (Vue) => {
  Vue.prototype.$api = api
}
