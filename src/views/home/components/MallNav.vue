<template>
  <div class="hot-nav-box">
    <el-carousel
      trigger="click"
      height="3.08rem"
      :interval="5000"
      arrow="never"
      ref="slideCarousel"
      :autoplay="false"
    >
    <el-carousel-item
      v-for="(item,index) in Math.ceil(list.length / 10)"
      :key="index"
    >
      <dl
        v-for="(sonItem,sonIndex) in list.slice(index*10, index*10+10)"
        :key="sonIndex"
      >
        <dt>
          <img :src="sonItem.icon" alt="">
        </dt>
        <dd>
          {{sonItem.text}}
        </dd>
      </dl>
    </el-carousel-item>
  </el-carousel>
</div>
</template>

<script>
export default {
  name: 'mall-nav',
  data () {
    return {
    }
  },
  props: {
    list: Array
  },
  mounted () {
    this.navBanner()
  },
  methods: {
    navBanner () {
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
.hot-nav-box {
  @include wh(100% , 312px);
  margin-top: 14px;
  background: #fff;
  font-size: 24px;
  .el-carousel__item{
    @include wh(100% , 100%);
    display: grid;
    grid-template-rows: repeat(2 , 156px);
    grid-template-columns: repeat(auto-fill , 20%);
  }
  dl {
    @include wh(100% , 100%);
    @include flex-column(center,center);
    dt {
      @include wh(auto,auto);
      img {
        @include wh (90px,90px);
      }
    }
    dd {
      @include wh(auto,auto);
      margin-top: 4px;
    }
  }
}
</style>
