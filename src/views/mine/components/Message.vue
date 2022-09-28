<template>
  <div class="message-box">
    <div class="text">
      <p class="name">{{userInfo}}</p>
      <p class="signature">美好的一天</p>
    </div>
    <div class="head-photo">
      <img src="https://img2.baidu.com/it/u=390829681,3002818272&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1663952400&t=dea9b7120e8fe9a9f5b3cb68f854fab8" alt="">
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'message-view',
  data () {
    return {}
  },
  computed: {
    ...mapState('user', ['userInfo'])
  }
}
</script>

<style lang="scss" scoped>
.message-box {
  @include wh (100%, 264px);
  @include flex(space-between, center);
  background: #FE3113;
  padding: 0 37px;
  padding-bottom: 48px;
  box-sizing: border-box;
  .text {
    @include wh(300px, auto);
    @include ellipsis(1);
    color: #fff;
    .name {
      font-size: 40px;
      font-weight: 500;
      line-height: 56px;
    }
    .signature {
      font-size: 24px;
      line-height: 30px;
    }
  }
  .head-photo {
    @include wh(84px, 90px);
    flex-shrink: 0;
    img {
      @include wh(100% , 100%);
      object-fit: cover;
    }
  }
}
</style>
