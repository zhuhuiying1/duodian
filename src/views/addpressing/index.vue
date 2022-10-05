<template>
  <div class="addpressing">
    <img src="@/assets/imgs/定位.png" alt />
  </div>
</template>

<script>
import map from '@/utils/map'
import storage from '@/utils/localStorage'
import { mapMutations } from 'vuex'
export default {
  name: 'addpressing-view',
  methods: {
    ...mapMutations('map', ['GET_LOCATION'])
  },
  mounted () {
    map.geolocation().then(res => {
      console.log('定位成功了')
      // 把定位位置保存到本地存储
      storage.setItem(
        'location',
        {
          formattedAddress: res.formattedAddress, // 完整地址
          // formattedAddress: res.province + res.city, // 完整地址
          province: res.province, // 省
          city: res.city, // 市
          district: res.district, // 县
          township: res.township // 镇
        },
        1000 * 60 * 60 * 24
      ) // 设置一天后失效
      // 触发一下获取内容
      this.GET_LOCATION()
      this.$router.back()
    }).catch(() => {
      this.$error.show('定位失败,请手动定位')
      setTimeout(() => {
        this.$router.replace('/location')
      }, 1000)
    })
    // 因为谷歌浏览器获取不到定位 所以直接把跳转放到了外面
    // this.$router.back()
  }
}
</script>

<style lang="scss" scoped>
.addpressing {
  @include wh(100vw, 100vh);
  img {
    @include wh(100%, 100%);
    object-fit: cover;
  }
}
</style>
