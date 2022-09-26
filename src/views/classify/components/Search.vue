<template>
  <div class="search-box">
    <div class="search">
      <i class="el-icon-search"></i>
      <span>搜索校园超市商品</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchView'
}
</script>

<style lang="scss" scoped>
.search-box {
  @include wh(100%,98px);
  @include flex(center,center);
  background: #fff;
  position: fixed;
  top: 0;
  z-index: 100;
  .search {
    @include wh(694px,64px);
    @include flex(flex-start,center);
    background: #F6F6F6;
    border-radius: 32px;
    font-size: 24px;
    color: #D1D1D1;
    i {
      color: #565656;
      margin-left: 30px;
      margin-right: 21px;
    }
  }
}
</style>
