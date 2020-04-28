<template>
  <div class="backTop">
    <img src="/img/common/top.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "BackTop",
    data() {
      return {}
    },
    methods: {

    }
  }
</script>

<style scoped>
  .backTop {
    position: fixed;
    right: 8px;
    bottom: 55px;

  }
  .backTop img{
    height: 43px;
    width: 43px;
  }
</style>
