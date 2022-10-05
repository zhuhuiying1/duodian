<template>
  <transition
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
  >
    <div class="error-hint" v-show="show">
      <div class="error-text-box">
        {{text}}
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'error-hint',
  data () {
    return {
      show: false,
      text: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.error-hint {
  @include wh(100vw, 100vh);
  @include flex(center, center);
  background: rgba($color: #000000, $alpha: 0.1);
  position: fixed;
  top: 0;
  left: 0;
  .error-text-box {
    font-size: 30px;
    @include wh(500px, 150px);
    @include flex(center, center);
    border-radius: 40px;
    background: #fff;
    box-shadow: 0px 0px 15px 1px #ccc;
  }
}
</style>
