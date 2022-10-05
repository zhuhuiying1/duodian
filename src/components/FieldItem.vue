<template>
  <div class="filed-item">
    <label>
      <span v-if="label">{{label}}</span>
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  name: 'field-item',
  props: {
    label: String
  }
}
</script>

<style lang="scss" scoped>
.filed-item {
  @include wh(calc(100% - 30px), 92px);
  margin: 0 15px;
  border-bottom: 1px solid #ccc;
  label {
    @include wh(100%, 100%);
    @include flex(flex-start, center);
    span {
      @include wh(199px, auto);
      flex-shrink: 0;
      font-size: 26px;
      color: #797979;
    }
  }
}
</style>
