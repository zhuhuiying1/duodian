<template>
  <div class="service-box">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <img :src="item.icon" alt="">
        <span>
          {{item.title}}
        </span>
        <span>
          {{item.cont}}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'service-car',
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
.service-box {
  @include wh(690px, 342px);
  background: #fff;
  box-shadow: 0px 0px 17px -3px rgba(0,0,0,0.06);
  border-radius: 12px;
  border: 1px solid #F0F0F0;
  margin: 0 auto;
  ul {
    @include wh(100%, 100%);
    @include flex-column(space-around, center);
    li {
      @include wh(100%, auto);
      @include flex(flex-start, center);
      padding: 0 56px 0 33px;
      box-sizing: border-box;
      font-size: 28px;
      img {
        @include wh(38px, auto);
      }
      span {
        @include wh(auto, auto);
        &:nth-of-type(2) {
          font-size: 24px;
          color: #FE3113;
          margin-left: auto;
          margin-right: 0px;
        }
      }
      &:nth-of-type(3) {
        span:nth-of-type(2) {
          color: #999999;
        }
      }
    }
  }
}
</style>
