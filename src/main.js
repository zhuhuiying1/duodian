import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入axios
import api from './api'
// 全局引入rem和reset
import './utils/htmlFont'
import './assets/css/reset.css'
// swiper样式
import '../node_modules/swiper/swiper-bundle.min.css'
// element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 全局引入组件
import ArticleList from './components/ArticleList.vue' // 商品列表
import TabBar from './components/TabBar.vue' // 筛选导航
import NumTag from './components/NumTag.vue' // 数量标签
Vue.component('ArticleList', ArticleList)
Vue.component('TabBar', TabBar)
Vue.component('NumTag', NumTag)

Vue.use(ElementUI)

Vue.config.productionTip = false
// 注册axios
Vue.use(api)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
