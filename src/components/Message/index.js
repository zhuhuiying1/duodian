import Message from './Message.vue'

export default (Vue) => {
  Vue.prototype.$message = {
    error (msg) {
      const Component = Vue.extend(Message)
      const message = new Component({
        propsData: { // 手动传递props
          msg,
          type: 'error'
        }
      })
      message.$mount() // 渲染出来但是不挂载
      document.body.appendChild(message.$el) // 挂载到body
    },
    success (msg) {
      const Component = Vue.extend(Message)
      const message = new Component({
        propsData: {
          msg,
          type: 'success'
        }
      })
      message.$mount() // 渲染出来但是不挂载
      document.body.appendChild(message.$el)
    },
    info (msg) {
      const Component = Vue.extend(Message)
      const message = new Component({
        propsData: {
          msg,
          type: 'info'
        }
      })
      message.$mount() // 渲染出来但是不挂载
      document.body.appendChild(message.$el)
    }
  }
}
