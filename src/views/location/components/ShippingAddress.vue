<template>
  <div class="shipping-address">
    <div class="title" @click="getLocation">
      定位到当前位置
    </div>
    <div class="history">
      <slot>
        <div class="null">
          您还没有收货地址哦!
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import map from '@/utils/map'
export default {
  name: 'shipping-address',
  methods: {
    getLocation () {
      this.$loading.show()
      map.geolocation().then(res => {
        this.$emit('getLocationHintList', res)
        this.$loading.hide()
      }).catch(() => {
        this.$loading.hide()
        this.$error.show('定位失败,请手动选择位置')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.shipping-address {
  @include wh(100%, auto);
  @include flex-column(flex-start, flex-start);
  flex-grow: 1;
  overflow: auto;
  .title {
    @include wh(100%, 70px);
    flex-shrink: 0;
    line-height: 70px;
    background: #fff;
    padding-left: 21px;
    box-sizing: border-box;
    font-size: 24px;
  }
  .history {
    @include wh(100%, auto);
    flex-grow: 1;
    overflow: auto;
    .null {
    @include wh(100%, 100%);
    @include flex(center, center);
    font-size: 24px;
    color: #8F8F8F;
  }
  }
}
</style>
