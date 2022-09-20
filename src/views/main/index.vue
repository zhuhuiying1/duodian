<template>
  <div class="main-page">
    <router-view></router-view>
    <div class="footer-nav">
      <router-link v-for="(item , index) in list" :key="index" :to="item.path" active-class="active">
        <dl>
          <dt>
            <img :src="item.icon" alt="" class="icon">
            <img :src="item.select_icon" alt="" class="select-icon">
          </dt>
          <dd>{{item.text}}</dd>
        </dl>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  data () {
    return {
      list: [
        {
          icon: require('../../assets/imgs/Rectangle@2x.png'),
          select_icon: require('../../assets/imgs/Rectangle@2x(1).png'),
          text: '首页',
          path: '/home'
        },
        {
          icon: require('../../assets/imgs/classify copy 3@2x.png'),
          select_icon: require('../../assets/imgs/classify copy 3@2x(1).png'),
          text: '分类',
          path: '/classify'
        },
        {
          icon: require('../../assets/imgs/car1@2x.png'),
          select_icon: require('../../assets/imgs/car@2x(1).png'),
          text: '购物车',
          path: '/car'
        },
        {
          icon: require('../../assets/imgs/mine@2x.png'),
          select_icon: require('../../assets/imgs/mine@2x(1).png'),
          text: '我的',
          path: '/mine'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .main-page {
    @include wh(100% , auto);
    padding-bottom: 95px;
    box-sizing: border-box;
    min-height: 100vh;
    background: #F8F8F8;
    color: #666666;
    .footer-nav {
      @include wh(100% , 95px);
      position: fixed;
      bottom: 0;
      left: 0;
      background: #fff;
      display: flex;
      align-items: center;
      a {
        flex-grow: 1;
        dl {
          @include flex-column(center,center);
          dt {
            @include wh (auto,auto);
            img {
              @include wh(52px,52px);
              &.select-icon {
                display: none;
              }
            }
          }
          dd {
            @include wh (auto,auto);
            font-size: 22px;
          }
        }
        &.active {
          color: $color-primary;
          .icon {
            display: none;
          }
          .select-icon {
            display: block;
          }
        }
      }
    }
  }
</style>
