<template>
  <div class="history">
    <div class="title">
      历史记录
    </div>
    <div class="cont">
      <ul>
        <li
          v-for="item in userAddress"
          :key="item.id"
        >
          <input type="checkbox" :checked="item.isDefault == '1'" @change="change($event, item)">
          <div>
            <p>
              {{item.name}}
            </p>
            <p>
              {{item.phone}}
            </p>
            <p>
              {{item.address}} {{item.minutelyAddress}}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'history-view',
  computed: {
    ...mapState('user', ['userAddress'])
  },
  methods: {
    change (e, item) {
      this.$api.address.update(item.id, { // 更新后端的isDefault(默认选择地址)
        isDefault: e.target.checked ? '1' : '0'
      }).then(() => {
        this.$store.dispatch('user/getUserAddress') // 信息改变要重新触发下vuex信息更新
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.history {
  @include wh(100%, 100%);
  overflow: auto;
  .title {
    @include wh(100%, auto);
    font-size: 24px;
    padding-left: 21px;
    padding-top: 41px;
    padding-bottom: 20px;
    box-sizing: border-box;
  }
  .cont {
    @include wh(100%, auto);
    ul {
      @include wh(100%, auto);
      overflow-y: auto;
      li {
        @include wh(100%, auto);
        @include flex(flex-start, center);
        padding: 10px 0px;
        font-size: 28px;
        background: #fff;
        input {
          margin-right: 20px;
          margin-left: 20px;
        }
      }
    }
  }
}
</style>
