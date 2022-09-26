<template>
  <div class="indent-car-box">
    <div class="title">
      <span>我的订单</span>
      <span>查看全部 ></span>
    </div>
    <div class="list">
      <num-tag v-for="(item, index) in list" :key="index" :num="index">
        <dl>
          <dt>
            <img :src="item.icon" alt="">
          </dt>
          <dd>
            {{item.text}}
          </dd>
        </dl>
      </num-tag>
    </div>
  </div>
</template>

<script>
export default {
  name: 'indent-car',
  data () {
    return {
    }
  },
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
.indent-car-box {
  @include wh(690px, 299px);
  @include flex-column(space-between, center);
  background: #fff;
  border-radius: 12px;
  box-shadow: 0px 33px 20px -20px rgba(0,0,0,0.11), 0px 0px 17px -3px rgba(0,0,0,0.06);
  transform: translateY(-48px);
  margin: 0 auto;
  padding: 40px 0;
  box-sizing: border-box;
  .title {
    @include wh(100%, auto);
    @include flex(space-between, center);
    padding-left: 30px;
    padding-right: 20px;
    box-sizing: border-box;
    span {
      &:first-child {
        font-size: 28px;
      }
      &:last-child {
        font-size: 24px;
        color: #999999;
      }
    }
  }
  .list {
    @include wh(100%, auto);
    @include flex(space-around, center);
    dl {
      @include wh(auto,auto);
      @include flex-column(center,center);
      dt {
        @include wh(74px, 60px);
        img {
          @include wh(100%, 100%);
          object-fit: cover;
        }
      }
      dd {
        font-size: 24px;
      }
    }
    ::v-deep(.tag-box:nth-of-type(1)) {
      dl {
        dt {
          @include wh (55px, 45px);
          padding: 25px 7px 6px;
        }
      }
    }
    ::v-deep(.tag-box:not(:nth-of-type(1))) {
      dl {
        dt {
          padding: 5px;
        }
      }
    }
  }
}
</style>
