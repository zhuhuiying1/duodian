<template>
  <div class="settle-accounts-box">
    <div class="select-btn" @click="select">
      <img src="@/assets/imgs/ShopCart_btn_UNSEL_gray 1 Copy@2x.png" alt="" v-if="!isAllActive">
      <img src="@/assets/imgs/分组 9@2x.png" alt="" v-if="isAllActive">
      <span>全选</span>
    </div>
    <div class="settle">
      <div class="price-box">
        <span>
          合计:
        </span>
        <span>
          ¥{{allPrice}}
        </span>
      </div>
      <div class="btn">
        去结算({{num}})
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'settle-accounts',
  // props: {
  //   price: Number
  // },
  data () {
    return {
      // isSelect: false
    }
  },
  computed: {
    ...mapGetters('car', ['num', 'allPrice', 'isAllActive'])
  },
  methods: {
    select () {
      this.$emit('select', this.isAllActive)
    }
  }
}
</script>

<style lang="scss" scoped>
.settle-accounts-box {
  @include wh(100%, 99px);
  @include flex(space-between, center);
  background: #ffffff;
  position: fixed;
  bottom: 100px;
  .select-btn {
    @include flex(flex-start, center);
    img {
      @include wh(30px, 30px);
      margin: 0px 19px 0px 29px;
    }
    span {
      font-size: 26px;
      color: #666666;
    }
  }
  .settle {
    @include wh(auto, 100%);
    @include flex(flex-start, center);
    .price-box {
      @include wh(auto, auto);
      @include flex(flex-start, center);
      margin-right: 32px;
      span {
        &:nth-of-type(1) {
          font-size: 28px;
          font-weight: 500;
          margin-right: 10px;
        }
        &:nth-of-type(2) {
          font-size: 36px;
          font-weight: 600;
          color: #FE3113;
        }
      }
    }
    .btn {
      @include wh(240px, 100%);
      @include flex(center, center);
      font-size: 32px;
      font-weight: 500;
      color: #FFFFFF;
      background: #FE3113;
      border-bottom-right-radius: 10px;
    }
  }
}
</style>
