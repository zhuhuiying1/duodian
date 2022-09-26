<template>
  <div class="detail-box" v-html="list">

  </div>
</template>

<script>
export default {
  name: 'detail-component',
  data () {
    return {}
  },
  props: {
    list: String
  }
}
</script>

<style lang="scss" scoped>
.detail-box {
  @include wh(100%, auto);
  font-size: 24px;
  ::v-deep(img) {
    @include wh(100%, auto);
  }
}
</style>
