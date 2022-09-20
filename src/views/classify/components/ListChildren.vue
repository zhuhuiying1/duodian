<template>
  <div class="list-children-box">
    <ul>
      <li v-for="(item,index) in itemList" :key="index">
        {{item.categoryName}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ListChildren',
  props: {
    itemList: Array
  }
}
</script>

<style lang="scss" scoped>
.list-children-box {
  font-size: 24px;
  ul {
    li {
      padding-left: 30px;
    }
  }
}
</style>
