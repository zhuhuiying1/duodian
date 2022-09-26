<template>
  <div class="tag-box">
    <div class="tag" v-if="num > 0">{{num}}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'num-tag',
  props: {
    num: Number
  }
}
</script>

<style lang="scss" scoped>
.tag-box {
  @include wh(auto,auto);
  position: relative;
  .tag {
    @include wh(auto,auto);
    min-width: 40px;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    color: #fff;
    padding: 0px 10px;
    font-size: 44px;
    zoom: 0.5;
    background: #FD5830;
    border-radius: 45%;
    text-align: center;
  }
}
</style>
