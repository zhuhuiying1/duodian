<template>
  <div class="car-page">
    <car-list :list="carList"></car-list>
    <settle-accounts :price="price"></settle-accounts>
  </div>
</template>

<script>
import CarList from './components/CarList.vue'
import SettleAccounts from './components/SettleAccounts.vue'
export default {
  name: 'CarPage',
  components: {
    CarList,
    SettleAccounts
  },
  data () {
    return {
      carList: [
        {
          id: 1,
          img: 'https://img2.baidu.com/it/u=3357357836,1977184716&fm=253&fmt=auto&app=138&f=JPEG?w=375&h=500',
          title: '旺旺 旺仔牛奶糖',
          message: '规格: 1袋/5颗',
          price: '2.5',
          oldPrice: '5'
        },
        {
          id: 2,
          img: 'https://img2.baidu.com/it/u=3357357836,1977184716&fm=253&fmt=auto&app=138&f=JPEG?w=375&h=500',
          title: '旺旺 旺仔牛奶糖',
          message: '规格: 1袋/5颗',
          price: '2.5',
          oldPrice: '5'
        },
        {
          id: 3,
          img: 'https://img2.baidu.com/it/u=3357357836,1977184716&fm=253&fmt=auto&app=138&f=JPEG?w=375&h=500',
          title: '旺旺 旺仔牛奶糖',
          message: '规格: 1袋/5颗',
          price: '2.5',
          oldPrice: '5'
        }
      ],
      price: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.car-page {
  @include wh(100%, auto);
  min-height: calc(100vh - 100px);
  padding-bottom: 99px;
  box-sizing: border-box;
}
</style>
