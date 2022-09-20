<template>
  <div class="classify-box">
    <search></search>
    <nav-list :list="list"></nav-list>
  </div>
</template>

<script>
import Search from './components/Search.vue'
import NavList from './components/NavList.vue'
export default {
  name: 'ClassifyPage',
  data () {
    return {
      list: ''
    }
  },
  components: {
    Search,
    NavList
  },
  created () {
    this.$api.classify.data().then((res) => {
      this.list = res.data.data
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
