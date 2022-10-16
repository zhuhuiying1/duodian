import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入axios
import api from './api'
// 引入带定时的localStorage功能
// import localStorage from './utils/localStorage'
// 全局引入rem和reset
import './utils/htmlFont'
import './assets/css/reset.css'
import 'animate.css'
// swiper样式
import '../node_modules/swiper/swiper-bundle.min.css'
// element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// // 全局引入组件
// import ArticleList from './components/ArticleList.vue' // 商品列表
// import TabBar from './components/TabBar.vue' // 筛选导航
// import NumTag from './components/NumTag.vue' // 数量标签
// // loading
import Loading from './components/Loading/index.js'
import Error from './components/ErrorHint/index.js'
import Message from './components/Message/index.js'
// Vue.component('ArticleList', ArticleList)
// Vue.component('TabBar', TabBar)
// Vue.component('NumTag', NumTag)
// 引入自动注册组件和插件的功能插件
import autoComponent from './plugins/autoComponent'
Vue.use(autoComponent)

Vue.use(ElementUI)
Vue.use(Loading)
Vue.use(Error)
Vue.use(Message)

Vue.config.productionTip = false
// 注册axios
Vue.use(api)
// 注册带定时的localStorage功能
// Vue.use(localStorage)

new Vue({
  router,
  store,
  created () {
    // 获取用户信息
    this.$store.dispatch('user/getUserInfo')
    this.$store.commit('map/GET_LOCATION')
    if (Object.keys(this.$store.state.map.location).length <= 0) {
      this.$router.push('/addpressing')
    }
  },
  render: h => h(App)
}).$mount('#app')
