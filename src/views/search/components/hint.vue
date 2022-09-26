<template>
  <div class="hint-box">
    <ul class="hint">
      <li
        v-for="(item, index) in list"
        :key="index"
        @click="search(item.title)"
        v-html="highlight(item.title)"
      >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hint-view',
  data () {
    return {}
  },
  props: {
    list: Array,
    inputVal: String
  },
  methods: {
    search (val) {
      this.$emit('search', val, true, false)
    },
    highlight (val) {
      console.log(this.inputVal)
      return val.replace(this.inputVal, `<span>${this.inputVal}</span>`)
    }
  }
}
</script>

<style lang="scss" scoped>
.hint-box {
  @include wh(100%, calc(100vh - 64px));
  background: rgba($color: #000000, $alpha: 0.1);
  position: fixed;
  top: 64px;
  .hint {
    background: #fff;
    font-size: 24px;
    li {
      @include wh(100%, auto);
      padding: 20px;
      padding-right: 0px;
      padding-left: 30px;
      box-sizing: border-box;
      ::v-deep span {
        color: red;
      }
    }
  }
}
</style>
