<template>
  <div class="hint">
    <dl
      v-for="item in list"
      :key="item.id"
      @click="commitHint(item.address + item.name)"
    >
      <dt>
        {{item.name || ''}}
      </dt>
      <dd>
        {{item.address || ''}}
      </dd>
    </dl>
  </div>
</template>

<script>
import storage from '@/utils/localStorage'
export default {
  name: 'MapHint',
  props: {
    list: Array
  },
  methods: {
    commitHint (val) {
      // this.$root.$emit('createAddress', val)
      const formData = storage.getItem('fromInput')
      formData.address = val
      storage.setItem('fromInput', formData, 1000 * 60 * 60 * 24) // 保存24小时
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.hint {
  @include wh(100%, 60vh);
  overflow: auto;
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
