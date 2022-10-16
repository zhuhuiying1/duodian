<template>
  <transition
    enter-active-class="animate__animated animate__slideInDown"
    leave-active-class="animate__animated animate__slideOutUp"
    appear
    @after-leave="afterLeave"
  >
    <div class="message" :class="type" v-show="show">{{msg}}</div>
  </transition>
</template>

<script>
export default {
  name: 'MessageView',
  data () {
    return {
      show: true
    }
  },
  props: {
    msg: String,
    type: {
      type: String,
      default: 'info'
    }
  },
  methods: {
    afterLeave () {
      this.$destroy() // 手动销毁
    }
  },
  mounted () {
    setTimeout(() => {
      this.show = false
    }, 1000)
  },
  destroyed () {
    document.body.removeChild(this.$el) // 移除元素
  }
}
</script>

<style lang="scss" scoped>
  .message {
    @include wh(100%, 80px);
    @include flex(center, center);
    position: fixed;
    top: 0px;
    left: 0px;
    font-size: 24px;
    color: #ffffff;
    opacity: .8;
  }
  .error {
    background: red;
  }
  .success {
    background: green;
  }
  .info {
    background: dimgray;
  }
</style>
