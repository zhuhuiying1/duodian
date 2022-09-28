import axios from 'axios'

const service = axios.create({
  // 判断是开发环境还是生产环境,不同环境有不同的接口的服务
  // baseURL: process.env.NODE_ENV === '' ? 'sss' : 'sss'
  // 全部都是api开头
  baseURL: '/api'
})
service.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 添加公共header
  config.headers.token = localStorage.getItem('verify')
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data
}, function (error) {
  // 对响应错误做点什么
  const res = error.response
  console.log(res)
  alert(res.data.message)
  return Promise.reject(error)
})

export default {
  ...service,
  // get传参需要{
  //   params: {}
  // }
  // 重写就不需要写params了
  get (url, data) {
    return service.get(url, {
      params: data
    })
  }
}
