<template>
  <div class="history">
    <div class="title">
      历史记录
    </div>
    <div class="cont">
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'history-view',
  props: {}
}
</script>

<style lang="scss" scoped>
.history {
  @include wh(100%, 100%);
  overflow: auto;
}
</style>