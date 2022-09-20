import axios from 'axios'

const service = axios.create({
  // 判断是开发环境还是生产环境,不同环境有不同的接口的服务
  // baseURL: process.env.NODE_ENV === '' ? 'sss' : 'sss'
  // 全部都是api开头
  baseURL: '/api'
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
