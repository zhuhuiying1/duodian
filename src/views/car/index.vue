<template>
  <div class="car-page">
    <car-list :list="carList" @commitData="commitData"></car-list>
    <settle-accounts @select="allSelect"></settle-accounts>
  </div>
</template>

<script>
import CarList from './components/CarList.vue'
import SettleAccounts from './components/SettleAccounts.vue'
import { mapState } from 'vuex'
export default {
  name: 'CarPage',
  components: {
    CarList,
    SettleAccounts
  },
  computed: {
    ...mapState('car', ['carList'])
  },
  data () {
    return {
    }
  },
  methods: {
    commitData (id, params) {
      this.$api.car.update(id, params).then(() => {
        this.$store.dispatch('car/getCarList')
      })
    },
    allSelect (val) { // 全选按钮事件
      this.$api.car.updateAll({
        id: this.carList.map(item => item.id),
        isActive: val ? '1' : '0' // 反了,不知道为什么,慢一拍,是true就改成1,是false就改成0
      }).then(() => { // 应该是点的时候还没执行好,事件触发的时候isActive还没改变,也就是先执行的这个事件,isActive才更改的
        this.$store.dispatch('car/getCarList')
      })
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
