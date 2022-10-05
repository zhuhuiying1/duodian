<template>
  <div class="search-page">
    <search @search="search" :inputRes="inputRes"  @input="input">
      <template>
        <transition class="animate__animated animate__bounce">
          <hint :list="hintList" :inputVal="inputRes" v-if="hintList.length" @search="hintSearch"></hint>
        </transition>
        <article-list :list="articleList" v-if="flag"></article-list>
      </template>
    </search>
    <history :list="historyList" @search="hintSearch" @clear="clearHistory"></history>
  </div>
</template>

<script>
import search from './components/search.vue'
import hint from './components/hint.vue'
import history from './components/history.vue'
import scrollBottom from '@/mixins/scrollBottom' // 引入mixins
export default {
  name: 'search-view',
  data () {
    return {
      inputRes: '',
      hintList: [],
      articleList: [],
      filterProduct: {
        page: 1,
        page_ize: 10,
        classId: 1
      },
      flag: false,
      hintFlag: false,
      historyList: []
    }
  },
  mixins: [scrollBottom],
  scroll () {
    this.filterProduct.page += 1
  },
  components: {
    search,
    hint,
    history
  },
  watch: {
    // 输入内容改变,并且flag是false,会获取hintList的内容
    inputRes (val) {
      if (this.hintFlag) {
        console.log('hintFlag是true')
        this.getHintList(val)
      }
    },
    // 如果flag是true,就把hintList清空,提示就会隐藏了,然后获取商品列表的内容
    flag (val) {
      if (val) {
        this.hintList = []
      }
    },
    hintFlag (val) {
      if (!val) {
        this.hintList = []
      }
    },
    'filterProduct.page' (val) {
      if (val === 1) {
        window.scrollTo({
          top: 0
        })
      }
      this.createProduct()
    }
  },
  methods: {
    search (val, flag, hintFlag) {
      // val为input的返回值
      this.inputRes = val
      this.flag = flag
      this.hintFlag = hintFlag
      if (this.articleList) {
        this.hintList = []
      }
      // 如果flag是true就自己跳自己,为了保留历史记录
      if (flag) {
        this.$router.push({
          path: '/search',
          query: {
            val
          }
        })
      }
      this.addHistory(val)
      this.filterProduct.page = 1
      this.createProduct()
    },
    input (val, hintFlag) {
      this.inputRes = val
      this.hintFlag = hintFlag
      // this.getHintList(val)
    },
    hintSearch (val, flag, hintFlag) {
      this.inputRes = val
      this.flag = flag
      this.hintFlag = hintFlag
      this.$router.push({
        path: '/search',
        query: {
          val
        }
      })
      this.addHistory(val)
      this.filterProduct.page = 1
      this.createProduct()
    },
    // 获取提示信息
    async getHintList (val) {
      const res = await this.$api.product.search({ val })
      this.hintList = res.data
    },
    // 获取商品列表数据
    async createProduct () {
      const res = await this.$api.product.data(this.filterProduct)
      if (this.filterProduct.page === 1) {
        this.articleList = res.data
      } else {
        this.articleList = this.articleList.concat(res.data)
      }
    },
    // 获取历史搜索记录
    addHistory (val) {
      if (val) {
        let history = JSON.parse(window.localStorage.getItem('history'))
        if (history) {
          history = [...(new Set(history).add(val))]
        } else {
          history = [val]
        }
        window.localStorage.setItem('history', JSON.stringify(history))
        this.getHistory()
      }
    },
    getHistory () {
      const historList = JSON.parse(window.localStorage.getItem('history'))
      if (historList) {
        this.historyList = historList
      }
    },
    clearHistory () {
      window.localStorage.setItem('history', JSON.stringify([]))
      this.historyList = []
    }
  },
  created () {
    this.getHistory()
  }
}
</script>

<style lang="scss" scoped>
.search-page {
  @include wh(100%, auto);
  min-height: 100vh;
  ::v-deep .article-list-box {
    position: relative;
    top: 72px;
  }
  ::v-deep .hint-box {
    z-index: 1000;
  }
}
</style>
