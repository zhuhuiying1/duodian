<template>
  <div class="mine-page">
    <message></message>
    <indent-car :list="indentList"></indent-car>
    <service-car :list="serviceList"></service-car>
  </div>
</template>

<script>
import Message from './components/Message.vue'
import IndentCar from './components/IndentCar.vue'
import ServiceCar from './components/ServiceCar.vue'
export default {
  name: 'mine-page',
  components: {
    Message,
    IndentCar,
    ServiceCar
  },
  data () {
    return {
      indentList: [
        {
          icon: require('@/assets/imgs/Personal_btn_PENDINGPAYMENT_red@2x.png'),
          text: '待付款',
          num: 1
        },
        {
          icon: require('@/assets/imgs/图标@2x(4).png'),
          text: '待配送',
          num: 45
        },
        {
          icon: require('@/assets/imgs/图标@2x(5).png'),
          text: '已发货',
          num: 0
        },
        {
          icon: require('@/assets/imgs/图标@2x(6).png'),
          text: '退款/售后'
        }
      ],
      serviceList: [
        {
          icon: require('@/assets/imgs/首页1@2x.png'),
          title: '我的优惠券',
          cont: '8张未使用'
        },
        {
          icon: require('@/assets/imgs/首页1@2x(1).png'),
          title: '资质规则'
        },
        {
          icon: require('@/assets/imgs/首页1@2x(2).png'),
          title: '联系客服',
          cont: '400-123-123'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
