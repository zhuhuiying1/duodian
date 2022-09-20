<template>
  <div class="tab-bar-box">
    <span
      v-for="(item,index) in list"
      :key="index"
      :class="{'active':index+1===currentIndex}"
      @click="change($event, index)"
    >
      {{item.text}}
    </span>
  </div>
</template>

<script>
export default {
  name: 'tab-bar',
  props: {
    list: Array
  },
  data () {
    return {
      currentIndex: 1
    }
  },
  methods: {
    change (e, val) {
      this.$emit('change', val + 1)
      this.currentIndex = val + 1
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-bar-box {
  @include wh(100%,92px);
  @include flex(space-between,center);
  background: #fff;
  font-size: 28px;
  padding: 0 30px;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 2;
  span.active {
    color: #FE3113;
    font-weight: bold;
  }
}
</style>
