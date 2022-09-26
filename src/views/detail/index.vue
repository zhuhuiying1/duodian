<template>
  <div class="detail-page">
    <banner :list="imgs"></banner>
    <detail :list="details"></detail>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'
import Detail from './components/Detail.vue'
export default {
  name: 'detail-view',
  data () {
    return {
      imgs: [],
      details: []
    }
  },
  components: {
    Banner,
    Detail
  },
  created () {
    this.dataInit()
  },
  methods: {
    async dataInit () {
      const res = await this.$api.product.detail(this.$route.params.id)
      this.imgs = JSON.parse(res.data[0].images)
      console.log(res.data[0].detail)
      this.detail = JSON.parse(res.data[0].detail)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
