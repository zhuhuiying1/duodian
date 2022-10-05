<template>
  <div class="search-box">
    <a href="javascript:;">
      <router-link to="/location" tag="span" class="search-left">
        <img src="@/assets/imgs/图标@2x(1).png" alt="">
        <span class="location">送至：{{location.formattedAddress}}</span>
        <span class="right-icon">＞</span>
      </router-link>
      <router-link to="/search" tag="span" class="search-right">
        <img src="@/assets/imgs/图标@2x.png" alt="">
      </router-link>
    </a>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'SearchCom',
  data () {
    return {}
  },
  computed: {
    ...mapState('map', ['location'])
  },
  mounted () {
    console.log(this.location)
    console.log(11111)
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
      .location {
        @include wh(auto, auto);
        max-width: 30vw;
        @include ellipsis(1);
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
