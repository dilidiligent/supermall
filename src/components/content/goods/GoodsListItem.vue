<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img" alt="" />
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default: {},
      }
    },
    data() {
      return {}
    },
    components: {}
  }
</script>

<style scoped>
  .goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }
  .goods-item img {
    width: 100%;
    border-radius: 5%;
  }
  .goods-info {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 5px;
    font-size: 12px;
    text-align: center;
    overflow: hidden;
  }
  .goods-info p{
    overflow: hidden;
    /* 隐藏文本... */
    text-overflow: ellipsis;
    /* 文本不进行换行 */
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price{
    margin-right: 20px;
    color: var(--color-high-text);
  }
  .goods-info .collect {
    position:relative;
  }
  .goods-info .collect::before{
    position: absolute;
    content: "";
    top: -1px;
    left: -16px;
    width: 14px;
    height: 14px;
    background: url("/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
