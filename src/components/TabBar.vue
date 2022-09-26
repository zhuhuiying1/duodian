<template>
  <div class="tab-bar-box">
    <span
      v-for="(item,index) in list"
      :key="index"
      :class="{'active':index===currentIndex}"
      @click="change(index, item.categoryId)"
    >
      {{item[tabName]}}
    </span>
  </div>
</template>

<script>
export default {
  name: 'tab-bar',
  props: {
    list: Array,
    tabName: {
      type: String,
      default: 'text'
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    change (val, categoryId) {
      this.$emit('change', val, categoryId)
      this.currentIndex = val
    }
  },
  watch: {
    list () {
      this.currentIndex = 0
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
