<template>
  <div class="car-list-box">
    <ul>
      <li v-for="item in list" :key="item.id">
        <span class="select-btn" @click="select">
          <img src="@/assets/imgs/ShopCart_btn_UNSEL_gray 1 Copy@2x.png" alt="" v-if="0">
          <img src="@/assets/imgs/分组 9@2x.png" alt="" v-if="1">
        </span>
        <div class="message">
          <img :src="item.img" alt="">
          <div class="message-right">
            <div class="right-top">
              <p>
                {{item.title}}
              </p>
              <p>
                {{item.message}}
              </p>
            </div>
            <div class="right-bottom">
              <p>
                <span>
                  ¥<span>{{item.price}}</span>
                </span>
                <s>
                  ¥{{item.oldPrice}}
                </s>
              </p>
              <div class="btn">
                <img src="@/assets/imgs/Coupon_btn_DEDUCT_gray 1@2x.png" alt="">
                <span>1</span>
                <img src="@/assets/imgs/Coupon_btn_ADD_gray 1@2x.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'car-list',
  props: {
    list: Array
  },
  methods: {
    select () {
    }
  }
}
</script>

<style lang="scss" scoped>
.car-list-box {
  @include wh(100%, auto);
  background: #ffffff;
  ul {
    @include wh(100%, auto);
    li {
      @include wh(100%, auto);
      @include flex(flex-start, center);
      padding: 36px 30px 36px 28px;
      box-sizing: border-box;
      .select-btn {
        @include wh(48px, 48px);
        flex-shrink: 0;
        margin-right: 14px;
        img {
          @include wh(100%, 100%);
        }
      }
      .message {
        @include wh(calc(100% - 48px - 14px), auto);
        display: flex;
        img {
          @include wh(160px, 160px);
          margin-right: 24px;
        }
        .message-right {
          @include wh(calc(100% - 160px - 24px), auto);
          @include flex-column(space-between, flex-start);
          .right-top {
            @include wh(100%, auto);
            p {
              &:nth-of-type(1) {
                @include ellipsis(1);
                font-size: 28px;
              }
              &:nth-of-type(2) {
                @include ellipsis(1);
                font-size: 24px;
                color: #999999;
              }
            }
          }
          .right-bottom {
            @include wh(100%, auto);
            @include flex(space-between, center);
            p {
              @include wh(auto, auto);
              @include flex(flex-start, center);
              span {
                color: #FE3113;
                font-size: 24px;
                span {
                  font-size: 34px;
                  font-weight: 600;
                }
              }
              s {
                @include wh(auto, auto);
                margin-left: 6px;
                color: #999999;
                font-size: 28px;
              }
            }
            .btn {
              @include wh(auto, auto);
              @include flex(flex-start, center);
              img {
                @include wh(56px, 56px);
                margin: 0;
              }
              span {
                font-size: 28px;
                padding: 0 19px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
