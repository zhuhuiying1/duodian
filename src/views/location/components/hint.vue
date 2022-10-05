<template>
  <div class="hint">
    <dl
      v-for="item in list"
      :key="item.id"
      @click="commitHint(item.district? item.name + item.district : item.name)"
    >
      <dt>
        {{item.name}}
      </dt>
      <dd>
        {{item.district || ''}}
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'hint-com',
  props: {
    list: Array
  },
  methods: {
    commitHint (val) {
      this.$emit('commitHint', val, false)
    }
  }
}
</script>

<style lang="scss" scoped>
.hint {
  @include wh(100%, calc(100vh - 98px));
  overflow: auto;
  position: absolute;
  top: 98px;
  background: rgba($color: #000000, $alpha: 0.1);
  dl {
    @include wh(100%, auto);
    padding: 15px 20px;
    border-top: 1px solid #ccc;
    background: #fff;
    box-sizing: border-box;
    dt {
      @include ellipsis(1);
      font-size: 28px;
    }
    dd {
      @include ellipsis(1);
      font-size: 24px;
      color: #999;
    }
  }
}
</style>
