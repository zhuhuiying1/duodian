<template>
  <div class="classify-box">
    <search></search>
    <tab-bar :list="list" tabName="categoryName" class="left-bar" @change="change"></tab-bar>
    <tab-bar :list="childList" tabName="categoryName" class="child-bar" @change="createArticle"></tab-bar>
    <article-list :list="articleList"></article-list>
  </div>
</template>

<script>
import Search from './components/Search.vue'
import scrollBottom from '@/mixins/scrollBottom' // 引入mixins
export default {
  name: 'ClassifyPage',
  data () {
    return {
      list: [],
      childList: [],
      filterProduct: {
        page: 1,
        page_size: 10,
        categoryId: 1
      },
      articleList: [],
      pagePosition: 0
    }
  },
  mixins: [scrollBottom],
  scroll () {
    this.filterProduct.page += 1
  },
  components: {
    Search
  },
  created () {
    this.getData()
  },
  methods: {
    // axios获取tab切换数据
    async getData () {
      const res = await this.$api.classify.data()
      this.list = res.data
      this.childList = [{
        categoryId: this.list[0].categoryId,
        categoryImgPathReal: '',
        categoryName: '全部',
        parentId: 21
      }].concat(this.list[0].children || [])
    },
    // 点击左侧tab切换获取副tab数据
    change (val) {
      this.childList = [{
        categoryId: this.list[val].categoryId,
        categoryImgPathReal: '',
        categoryName: '全部',
        parentId: 21
      }].concat(this.list[val].children || [])
      this.filterProduct.page = 1
    },
    createArticle (val, categoryId) {
      this.filterProduct.categoryId = categoryId
      this.filterProduct.page = 1
    },
    async axiosArticle (params) {
      const res = await this.$api.product.classify(params)
      if (this.filterProduct.page === 1) {
        this.articleList = res.data
      } else {
        this.articleList = this.articleList.concat(res.data)
      }
    }
  },
  watch: {
    childList: {
      handler (val) {
        this.createArticle(1, val[0].categoryId)
      },
      deep: true
    },
    filterProduct: {
      handler (val) {
        this.axiosArticle(val)
        if (val.page === 1) {
          window.scrollTo({
            top: '0px'
          })
        }
      },
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
.classify-box {
  @include wh(100%, auto);
  min-height: calc(100vh - 95px);
  ::v-deep .left-bar {
    @include wh(172px,calc(100% - 98px - 95px));
    background: transparent;
    position: fixed;
    top: 98px;
    padding: 0px;
    overflow: auto;
    span {
      @include wh(100%, 90px);
      @include flex(center,center);
      &.active {
        background: #fff;
        color: #333;
      }
    }
  }
  ::v-deep .child-bar {
    @include wh(calc(100% - 172px), 55px);
    @include flex(flex-start, center);
    position: fixed;
    right: 0;
    top: 98px;
    overflow: auto;
    span {
      font-size: 24px;
      flex-shrink: 0;
      margin-right: 20px;
      &.active {
        color: #333;
      }
    }
  }
  ::v-deep .article-list-box {
    @include wh(calc(100% - 172px), auto);
    margin-left: 172px;
    margin-top: 153px;
    dl {
      dt {
        @include wh(186px, 186px);
      }
      dd {
        @include wh(calc(100% - 186px - 30px), auto);
        .cont-top {
          @include wh(100%, auto);
          .name {
            @include wh(100%, auto);
            @include ellipsis(1);
            font-size: 24px;
          }
          .num {
            @include wh(auto, auto);
          }
        }
      }
    }
  }
}
</style>
