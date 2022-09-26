<template>
  <div class="history-box">
    <p>
      <span>历史记录</span>
      <span @click="clear">清空历史记录</span>
    </p>
    <div class="history">
      <span v-for="(item, index) in list" :key="index" @click="search(item)">
        {{item}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'history-view',
  data () {
    return {}
  },
  props: {
    list: Array
  },
  methods: {
    search (val) {
      this.$emit('search', val, true, false)
    },
    clear () {
      this.$emit('clear')
    }
  }
}
</script>

<style lang="scss" scoped>
.history-box {
  padding-top: 137px;
  p {
    @include wh(100%, auto);
    @include flex(space-between, center);
    padding: 0 30px;
    box-sizing: border-box;
    font-size: 30px;
    font-weight: 600;
    span:nth-of-type(2) {
      color: #999999;
      font-size: 24px;
      font-weight: normal;
    }
  }
  .history {
    @include wh(100%, auto);
    display: flex;
    flex-wrap: wrap;
    span {
      @include wh(auto, auto);
      margin: 30px;
      margin-top: 40px;
      font-size: 28px;
    }
  }
}
</style>
