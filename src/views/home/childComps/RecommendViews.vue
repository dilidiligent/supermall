<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a href="#" onclick="return false">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeSwiper",
    props: {
      recommends: {
        type: Array,
        default: []
      }
    },
    data() {
        return {}
    },
    components: {}
  }
</script>

<style scoped>
  .recommend{
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 8px solid #EEE;
  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item img{
    width:auto;
    height:auto;
    max-width:90%;
    max-height:90%;
    margin-bottom: 10px;
  }
</style>
