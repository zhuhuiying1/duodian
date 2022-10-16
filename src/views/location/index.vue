<template>
  <div class="location-page">
    <search :val.sync="searchVal"></search>
    <transition
      enter-active-class="animate__animated animate__fadeInUp"
      leave-active-class="animate__animated animate__fadeOutDown"
    >
      <hint :list="hintList" v-show="hintFlag" @commitHint="getHint"></hint>
    </transition>
    <shipping-address @getLocationHintList="getLocationHintList">
      <template>
        <history></history>
      </template>
    </shipping-address>
    <!-- <transition
      enter-active-class="animate__animated animate__fadeInUp"
      leave-active-class="animate__animated animate__fadeOutDown"
    > -->
      <div class="location-hint" v-show="locationHintFlag" @click.self="locationHintFlag = false">
        <!-- 点击定位到当前位置的提示 -->
        <transition
          enter-active-class="animate__animated animate__slideInUp"
          leave-active-class="animate__animated animate__slideOutDown"
        >
          <hint :list="locationHintList" v-show="locationHintFlag" @commitHint="getLocationHint"></hint>
        </transition>
      </div>
    <!-- </transition> -->
    <router-link to="/addLocation" tag="div" class="add">添加地址</router-link>
  </div>
</template>

<script>
import AMap from 'AMap'
import search from './components/search.vue'
import ShippingAddress from './components/ShippingAddress.vue'
import hint from './components/hint.vue'
import history from './components/history.vue'
export default {
  name: 'location-page',
  components: {
    search,
    ShippingAddress,
    hint,
    history
  },
  data () {
    return {
      searchVal: '',
      hintList: [],
      hintFlag: false,
      locationHintList: [],
      locationHintFlag: false
    }
  },
  mounted () {
    this.searchInit()
  },
  methods: {
    searchInit () {
      AMap.plugin('AMap.Autocomplete', () => {
        var autoOptions = {
          // city 限定城市，默认全国
          city: '全国'
        }
        // 实例化AutoComplete
        this.autoComplete = new AMap.Autocomplete(autoOptions)
      })
    },
    // 根据输入获取位置周边
    commitHint (keyword) {
      // 根据关键字进行搜索
      this.autoComplete.search(keyword, (status, result) => {
        // 搜索成功时，result即是对应的匹配数据
        console.log(result.tips[0])
        this.hintList = result.tips
      })
    },
    // 点击搜索提示地址信息,获取信息内容,提示框关闭
    getHint (val, flag) {
      console.log('点击的地位为' + val)
      this.$store.commit('map/SET_LOCATION', val)
      this.hintFlag = flag
    },
    // 点击物理定位提示信息,获取提示内容,提示框关闭
    getLocationHint (val, flag) {
      console.log('点击的地位为' + val)
      this.$store.commit('map/SET_LOCATION', val)
      this.locationHintFlag = flag
      this.$router.back()
    },
    // 点击定位到当前位置获取提示
    getLocationHintList (res) {
      this.locationHintList = res.pois
      this.locationHintFlag = true
    }
  },
  watch: {
    // 监听输入框内容改变,就获取提示
    searchVal (val) {
      // console.log(val)
      if (val) {
        this.hintFlag = true
        this.commitHint(val)
      } else {
        this.hintFlag = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.location-page {
  @include wh(100vw, 100vh);
  @include flex-column(flex-start, flex-start);
  background: #F8F8F8;
  padding-bottom: 85px;
  box-sizing: border-box;
  .add {
    @include wh(100%, 85px);
    @include flex(center, center);
    background: #fff;
    position: fixed;
    bottom: 0px;
    font-size: 24px;
    color: #FF3232;
  }
  .location-hint {
    @include wh(100%, 100vh);
    background: rgba($color: #000000, $alpha: 0.1);
    position: fixed;
    bottom: 0;
    z-index: 100;
    ::v-deep .hint {
      @include wh(100%, 60vh);
      position: absolute;
      top: auto;
      bottom: 0;
    }
  }
}
</style>
