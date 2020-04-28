<template>
      <div class="tab-bar-item" @click="itemClick">
        <slot v-if="!isActive" name="item-icon"></slot>
        <slot v-else name="item-icon-active"></slot>
        <div :style="activeStyle">
          <slot name="item-text"></slot>
        </div>


        <!--<img src="../../assets/img/tabbar/home.svg" alt="">-->
        <!--<div>首页</div>-->

      </div>
</template>

<script>

    export default {
      name: "TabBarItem",
      props: {
        path: String,
        activeColor: {
          type: String,
          default: '#ff5777',
        }
      },
      data() {
          return {

          }
      },
      computed:{
        isActive() {
          return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle() {
          return this.isActive ? {color: this.activeColor} : {}
        }
      },
      methods: {
        itemClick() {
          console.log(this.path);
          this.$router.replace(this.path)
        }

      }
    }
</script>

<style scoped>
  .tab-bar-item{
    text-align: center;
    height: 49px;
    flex: 1;
    font-size: 14px;
  }

  /*图标图像的样式*/
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }

  /*活动状态字体颜色*/
  /*.active{
    color: #ff5777;
  }*/

</style>
