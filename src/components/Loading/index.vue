<template>
  <div class="loading" v-show="show">
    <div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading-view',
  data () {
    return {
      show: false
    }
  }
}
</script>

<style lang="scss" scoped>
.loading {
  @include wh(100%, 100vh);
  @include flex(center, center);
  background: rgba($color: #000000, $alpha: 0.1);
  position: fixed;
  top: 0;
  left: 0;
  div {
    @include wh(140px, 140px);
    background-image: url(https://img.dmallcdn.com//dshop/201903/40208262-8001-4c19-ad20-370a039ed243);
    background-repeat: no-repeat;
    background-size: cover;
    animation: loading .9s steps(25) infinite ;
  }
  @keyframes loading {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: -3500px 0;
    }
  }
}
</style>
