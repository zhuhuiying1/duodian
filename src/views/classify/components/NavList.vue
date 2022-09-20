<template>
  <div class="nav-list-box">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <span @click="parentMethod(index)">
          {{item.categoryName}}
        </span>
        <list-children v-if="item.children" v-show="currentIndex.includes(index)" :itemList="item.children"/>
      </li>
    </ul>
  </div>
</template>

<script>
import ListChildren from './ListChildren.vue'
export default {
  name: 'NavList',
  data () {
    return {
      currentIndex: []
    }
  },
  props: {
    list: [Array, String]
  },
  components: {
    ListChildren
  },
  methods: {
    parentMethod (val) {
      const index = this.currentIndex.indexOf(val)
      index === -1 ? this.currentIndex.push(val) : this.currentIndex.splice(index, index + 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-list-box {
  @include wh(172px,calc(100vh - 193px));
  background: #fff;
  position: fixed;
  left: 0;
  top: 98px;
  overflow: auto;
  ul {
    @include wh(100%,auto);
    padding: 0px 38px;
    box-sizing: border-box;
    li {
      @include wh(100%,auto);
      span {
        @include wh(100%,auto);
        text-align: center;
        font-size: 24px;
        line-height: 99px;
      }
    }
  }

}
</style>
