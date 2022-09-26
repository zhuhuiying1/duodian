<template>
  <div class="search-wrap">
    <div class="search-box">
      <div class="search">
        <i class="el-icon-search"></i>
        <input type="text" v-model="inputVal" @keydown.enter="search(true)" @input="input">
        <span @click="inputVal='';search(false)" v-if="inputVal">×</span>
      </div>
      <div v-if="inputVal" class="btn" @click="search(true)">搜索</div>
      <div v-if="!inputVal" @click="$router.back()" class="btn">取消</div>
    </div>
    <div class="cont-box">
      <slot>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'search-box',
  data () {
    return {
      inputVal: '',
      flag: false,
      throttle: null
    }
  },
  props: {
    inputRes: String
  },
  watch: {
    inputVal (val) { // 输入事件
      // const newVale = val.trim()
      // this.$emit('input', newVale)
    },
    inputRes (val) {
      this.inputVal = val
    },
    flag (val) {
      console.log(val)
    }
  },
  methods: {
    search (flag) {
      this.flag = flag
      this.$emit('search', this.inputVal, this.flag)
    },
    input () {
      if (this.throttle) {
        clearTimeout(this.throttle)
      }
      this.throttle = setTimeout(() => {
        this.$emit('input', this.inputVal, true)
      }, 400)
    }
  }
}
</script>

<style lang="scss" scoped>
.search-wrap {
  @include wh(100%, auto);
  position: absolute;
  .search-box {
    @include wh(100%, auto);
    @include flex(space-around,center);
    position: fixed;
    top: 0;
    z-index: 100;
    background: #fff;
    .search {
      @include wh(604px, 64px);
      @include flex(space-between,center);
      border: 2px solid #D5D5D5;
      border-radius: 32px;
      font-size: 22px;
      color: #565656;
      padding: 0px 30px;
      box-sizing: border-box;
      i {
        flex-shrink: 0;

      }
      input {
        flex: 1;
        outline: none;
        border: 0px solid transparent;
        background: transparent;
      }
      span {
        flex-shrink: 0;
      }
    }
    .btn {
      font-size: 28px;
    }
  }
  .cont-box {
    @include wh(100%, auto);
    // min-height: calc(100vh - 64px);
    // overflow: auto;
    // background: rgba(1,1,1,0.1);
  }
}
</style>
