<template>
  <div class="box">
    <search></search>
    <banner :list="banner"></banner>
    <mall-nav :list="mall_nav"></mall-nav>
    <div ref="tab">
      <tab-bar :list="hot_nav" @change="change"></tab-bar>
      <article-list :list="articleList"></article-list>
    </div>
  </div>
</template>

<script>
// import jsonp from '@/utils/JSONP.js'
import Search from './components/search' // 搜索框
import Banner from './components/banner' // 轮播图
import MallNav from './components/MallNav' // 金刚位导航
import scrollBottom from '@/mixins/scrollBottom' // 引入mixins
export default {
  name: 'HomePage',
  components: {
    Search,
    Banner,
    MallNav
  },
  mixins: [scrollBottom],
  scroll () {
    this.filterProduct.page += 1
  },
  data () {
    return {
      banner: [],
      mall_nav: [],
      hot_nav: [],
      articleList: [],
      filterProduct: {
        page: 1,
        page_size: 10,
        classId: 1
      },
      pagePosition: 0
    }
  },
  created () {
    // jsonp('http://localhost:7001/api/home').then((res) => {
    //   console.log(res)
    // }).catch((e) => {
    //   console.log(e)
    // })
    this.$api.home.base().then((res) => {
      this.banner = res.data.banner
      this.mall_nav = res.data.mall_nav
      this.hot_nav = res.data.hot_nav
    })
  },
  methods: {
    change (val) {
      this.$set(this.filterProduct, 'classId', val + 1)
      this.filterProduct.page = 1
    },
    async createProduct () {
      const res = await this.$api.product.data(this.filterProduct)
      if (this.filterProduct.page === 1) {
        this.articleList = res.data
        if (this.$refs.tab.offsetTop < document.documentElement.scrollTop) {
          window.scrollTo(0, this.$refs.tab.offsetTop)
        }
      } else {
        this.articleList = this.articleList.concat(res.data)
      }
    }
  },
  watch: {
    filterProduct: {
      handler: 'createProduct',
      deep: true,
      immediate: true
    }
  },
  deactivated () {
    this.pagePosition = document.documentElement.scrollTop
  },
  activated () {
    window.scrollTo({
      top: this.pagePosition
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
