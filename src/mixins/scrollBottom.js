export default {
  throttleTimer: null,
  methods: {
    scrollBottom () {
      // 如果到底了
      // body的高度 < body滚动出去的高度 + 可视区域的高度
      const pageHeight = document.body.offsetHeight
      const scrollTop = document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      if (pageHeight < scrollTop + windowHeight + 20) {
        console.log('快到底了')
        this.$options.scroll.call(this)
      }
    },
    throttle () {
      if (this.$options.throttleTimer) {
        clearTimeout(this.$options.throttleTimer)
      }
      this.$options.throttleTimer = setTimeout(() => {
        this.scrollBottom()
      }, 400)
    }
  },
  mounted () {
    window.addEventListener('scroll', this.throttle)
  },
  destroyed () {
    window.removeEventListener('scroll', this.throttle)
  }
}
