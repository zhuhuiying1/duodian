<template>
<div class="block">
  <el-carousel
    trigger="click"
    height="3.08rem"
    :interval="5000"
    arrow="never"
    ref="slideCarousel"
  >
    <el-carousel-item
      v-for="(item,index) in list"
      :key="index"
    >
      <img :src="item.img" alt="">
    </el-carousel-item>
  </el-carousel>
</div>
</template>

<script>
export default {
  name: 'swiper-banner',
  data () {
    return {}
  },
  props: {
    list: Array
  },
  mounted () {
    this.slideBanner()
  },
  methods: {
    slideBanner () {
      // 选中的轮播图
      var box = document.querySelector('.el-carousel__container')
      var startPoint = 0
      var stopPoint = 0
      // 重置坐标
      var resetPoint = function () {
        startPoint = 0
        stopPoint = 0
      }
      // 手指按下
      box.addEventListener('touchstart', function (e) {
        // 手指点击位置的X坐标
        startPoint = e.changedTouches[0].pageX
      })
      // 手指滑动
      box.addEventListener('touchmove', function (e) {
        // 手指滑动后终点位置X的坐标
        e.preventDefault()
        stopPoint = e.changedTouches[0].pageX
      })
      // 当手指抬起的时候，判断图片滚动离左右的距离
      const that = this
      box.addEventListener('touchend', function (e) {
        if (stopPoint === 0 || startPoint - stopPoint === 0) {
          resetPoint()
          return
        }
        if (startPoint - stopPoint > 0) {
          resetPoint()
          that.$refs.slideCarousel.next()
          return
        }
        if (startPoint - stopPoint < 0) {
          resetPoint()
          that.$refs.slideCarousel.prev()
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-carousel__item {
    img {
      @include wh(100%,100%);
      object-fit: cover;
    }
  }
  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  ::v-deep(.el-carousel__indicators) {
    @include wh(auto, auto);
    font-size: 24px;
  }
</style>
