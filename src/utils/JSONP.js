// 解决跨域,原理:同源策略只限制了ajax请求,利用js文件的读取获取内容,缺点:只能get,无法拦截错误
const jsonp = (url, data) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    const fnName = 'a' + (+new Date())
    // 后台的callback传参是传的这里
    window[fnName] = (res) => {
      resolve(res) // res就是在controller里面调用函数传的参数
    }
    script.src = url + '?callback=' + fnName
    document.body.appendChild(script)
  })
}

export default jsonp
