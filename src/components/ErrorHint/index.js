import ErrorHint from './index.vue'

export default (Vue) => {
  const ErrorClass = Vue.extend(ErrorHint) // 生成组件类
  const ErrorComponent = new ErrorClass() // 生成组件实例
  const div = document.createElement('div')
  div.className = 'error'
  document.body.appendChild(div)
  ErrorComponent.$mount('.error')
  Vue.prototype.$error = {
    show (text) {
      ErrorComponent.text = text
      ErrorComponent.show = true
      setTimeout(() => {
        ErrorComponent.show = false
      }, 1000)
    }
  }
}
