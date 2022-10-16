<template>
  <div class="popover-box" @click.self="hide">
    <transition
      enter-active-class="animate__animated animate__slideInUp"
      leave-active-class="animate__animated animate__slideOutDown"
    >
      <div class="popover" v-show="show">
        <div class="title-message">
          <img :src="message.img" alt="">
          <div class="message">
            <p>
              {{message.name}}
            </p>
            <p>
              ¥{{message.price / 100}}
            </p>
            <p>
              <span class="num">
                <button :disabled="num === 1" @click.prevent="lower">－</button>
                <span>{{num}}</span>
                <button @click.prevent="upper">＋</button>
              </span>
              <span class="button" @click="add">
                <img src="@/assets/imgs/car@2x.png" alt="">
              </span>
            </p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'popover-box',
  data () {
    return {
      num: 1
    }
  },
  props: {
    show: Boolean,
    message: Object
  },
  methods: {
    hide () {
      this.$emit('update:show', false)
    },
    upper () {
      this.num++
    },
    lower () {
      this.num--
    },
    add () {
      this.$api.car.add({
        product_id: this.message.id,
        num: this.num
      }).then(() => {
        this.hide()
        this.$store.dispatch('car/getCarList') // 每次添加完购物车都要触发一下vuex重新获取数据
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.popover-box {
  @include wh(100%, 100vh);
  position: fixed;
  top: 0;
  left: 0;
  background: rgba($color: #575353, $alpha: 0.2);
  z-index: 1000;
  .popover {
    @include wh(100%, auto);
    padding: 40px 40px;
    box-sizing: border-box;
    background: #fff;
    position: absolute;
    bottom: 0;
    .title-message {
      @include wh(100%, auto);
      display: flex;
      img {
        @include wh(160px, 160px);
      }
      .message {
        @include flex-column(space-between, flex-start);
        p {
          padding-left: 40px;
          font-size: 30px;
          box-sizing: border-box;
          &:nth-of-type(2) {
            color: red;
          }
          &:nth-of-type(3) {
            @include wh(100%, auto);
            @include flex(space-between, center);
            .num {
              display: flex;
              button {
                @include wh(36px, 36px);
                font-size: 20px;
                line-height: 34px;
                text-align: center;
                border: 1px solid #cccccc;
                outline: none;
                background: #ccc;
                &:disabled {
                  background: rgb(227, 226, 226);
                }
              }
              span {
                padding: 0 10px;
              }
            }
            .button {
              @include wh(50px,50px);
              @include flex(center,center);
              background: #FE3113;
              margin-left: auto;
              margin-right: 0px;
              border-radius: 100%;
              img {
                @include wh (30px,30px);
              }
            }
          }
        }
      }
    }
  }
}
</style>
