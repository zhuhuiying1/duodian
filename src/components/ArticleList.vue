<template>
  <div class="article-list-box">
    <router-link tag="dl" :to="`/detail/${item.id}`"
      v-for="(item,index) in list"
      :key="index"
    >
      <dt>
        <img :src="item.img" alt="">
      </dt>
      <dd>
        <div class="cont-top">
          <p class="name">{{item.name}}</p>
          <p class="num">累计{{15000 | filterNum}}份 / 已拼{{13}}份</p>
          <p class="tag">
            <span>自营</span>
            <span>团购</span>
          </p>
        </div>
        <div class="cont-bottom">
          <img src="@/assets/imgs/car@2x.png" alt="">
        </div>
      </dd>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'article-list',
  props: {
    list: Array
  },
  filters: {
    filterNum (val) {
      return val > 10000 ? (val / 10000).toFixed(1) + '万' : val
    }
  }
}
</script>

<style lang="scss" scoped>
.article-list-box {
  @include wh(100%,auto);
  background: #fff;
  dl {
    @include wh(100%,auto);
    display: flex;
    padding: 30px;
    box-sizing: border-box;
    border-top: 1px solid #E2E2E2;
    dt {
      @include wh(240px , 240px);
      flex-shrink: 0;

      img {
        @include wh (100% , 100%);
      }
    }
    dd {
      @include wh(auto, auto);
      @include flex-column(space-between, flex-start);
      flex-grow: 1;
      margin-left: 30px;
      font-size: 24px;
      .cont-top {
        .name {
          @include ellipsis(2);
          color: #111111;
          font-size: 32px;
          font-weight: 400;
        }
        .num {
          padding: 12px 0;
          color: #999999;
        }
        .tag {
          display: flex;
          span {
            @include wh(auto,auto);
            padding: 3px 10px;
            border-radius: 30px;
            font-size: 40px;
            zoom: 0.5;
            color: #fff;
            background-image: linear-gradient(to right,#FD7A00,#FE3113);
            margin-right: 6px;
          }
        }
      }
      .cont-bottom {
        @include wh(66px,66px);
        @include flex(center,center);
        background: #FE3113;
        margin-left: auto;
        margin-right: 0px;
        border-radius: 100%;
        img {
          @include wh (36px,36px);
        }
      }
    }
  }
}
</style>
