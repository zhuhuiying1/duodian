<template>
  <div class="search-box">
    <a href="javascript:;">
      <span class="search-left">
        <img src="@/assets/imgs/图标@2x(1).png" alt="">
        <span>送至：北京八维研修学院</span>
        <span class="right-icon">＞</span>
      </span>
      <span class="search-right">
        <img src="@/assets/imgs/图标@2x.png" alt="">
      </span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'SearchCom',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.search-box {
  @include wh(100%,98px);
  background: #fff;
  font-size: 24px;
  color: #999999;
  a {
    @include wh(100% , 100%);
    @include flex(space-between, center);
    .search-left {
      @include wh(auto , auto);
      @include flex(center, center);
      img {
        @include wh(54px , 54px);
        margin-left: 16px;
      }
      .right-icon {
        @include wh(auto,auto);
        margin-left: 14px;
      }
    }
    .search-right {
      @include wh(54px, 54px);
      img {
        @include wh(100%, 100%);
      }
    }
  }
}
</style>
