<template>
  <div class="search-box">
    <div class="location-select">
      {{location.city}} >
    </div>
    <div class="search">
      <i class="el-icon-search"></i>
      <input type="text" placeholder="搜索地址" v-model="inputVal">
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'location-search',
  computed: {
    ...mapState('map', ['location'])
  },
  data () {
    return {
      inputVal: ''
    }
  },
  props: {
    val: String
  },
  watch: {
    inputVal (val) {
      this.$emit('update:val', val)
    }
  },
  methods: {
    commitSearch () {

    }
  }
}
</script>

<style lang="scss" scoped>
.search-box {
  @include wh(100%, 98px);
  @include flex(space-between, center);
  flex-shrink: 0;
  background: #fff;
  padding: 0 25px;
  box-sizing: border-box;
  margin-bottom: 22px;
  .location-select {
    @include wh(auto,auto);
    font-size: 24px;
  }
  .search {
    @include wh(594px, 64px);
    @include flex(flex-start, center);
    background: #F6F6F6;
    border-radius: 32px;
    i {
      flex-shrink: 0;
      font-size: 22px;
      margin-left: 30px;
    }
    input {
      flex: 1;
      outline: none;
      border: 0px solid transparent;
      background: transparent;
      font-size: 22px;
    }
  }
}
</style>
