<template>
  <div class="location-hint">
    <dl>
      <dt>

      </dt>
      <dd>

      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'location-hint'
}
</script>

<style lang="scss" scoped>
.location-hint {
  @include wh(100vw, 100vh);
  position: fixed;
  bottom: 0;
  background: rgba($color: #000000, $alpha: 0.1);
  dl {
    @include wh(100%, auto);
    padding: 15px 20px;
    border-top: 1px solid #ccc;
    background: #fff;
    dt {
      font-size: 28px;
    }
    dd {
      font-size: 24px;
      color: #999;
    }
  }
}
</style>