export default {
  methods: {
    scrollBottom () {
      // 如果到底了
      // body的高度 < body滚动出去的高度 + 可视区域的高度
      const pageHeight = document.body.offsetHeight
      const scrollTop = document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      if (pageHeight < scrollTop + windowHeight + 60) {
        this.$options.scroll.call(this)
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollBottom)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollBottom)
  }
}
