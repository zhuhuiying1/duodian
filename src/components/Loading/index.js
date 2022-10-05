import Loading from './index.vue'

export default (Vue) => {
  const LoadingClass = Vue.extend(Loading) // 生成组件类
  const LoadingComponent = new LoadingClass() // 生成组件实例
  const div = document.createElement('div') // 生成一个div元素
  div.className = 'loading'
  document.body.appendChild(div) // 把div元素插入到body
  LoadingComponent.$mount('.loading') // 把loading组件挂载到div
  Vue.prototype.$loading = {
    show () {
      LoadingComponent.show = true
    },
    hide () {
      LoadingComponent.show = false
    }
  }
}
