<template>
  <div class="goodsList">
    <goods-list-item v-for="item in goods" :goods-item="item"></goods-list-item>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem.vue'

  export default {
    name: "GoodsList",
    props: {
      goods: {
        type: Array,
        default: [],
      }
    },
    data() {
      return {}
    },
    components: {
      GoodsListItem,
    }
  }
</script>

<style scoped>
  .goodsList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>
