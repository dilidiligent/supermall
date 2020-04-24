<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "TabBar",
        data() {
            return {

            }
        },
        component: {

        }
    }
</script>

<style scoped>
  #tab-bar{
    display: flex;
    background-color: #F7F7F7;
    /*绝对定位到底部，左边0，右边0 ，底部0*/
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    /*为了好看，搞个阴影*/
    box-shadow: 0 -3px 1px rgba(100,100,100,.07);
  }

</style>
