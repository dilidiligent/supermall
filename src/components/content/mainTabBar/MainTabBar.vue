<template>
  <tab-bar >
    <tab-bar-item v-for="item of tabBarList" :path="item.path">
      <img :src="item.img" alt="" slot="item-icon">
      <img :src="item.imgActive" alt="" slot="item-icon-active">
      <div slot="item-text">{{item.name}}</div>
    </tab-bar-item>

    <!--<tab-bar-item path="/home">
      <img src="./assets/img/tabbar/home.svg" alt="" slot="item-icon">
      <img src="./assets/img/tabbar/home_active.svg" alt="" slot="item-icon-active">
      <div slot="item-text">首页</div>
    </tab-bar-item>-->
  </tab-bar>
</template>

<script>
    import TabBar from 'components/common/tabbar/TabBar'
    import TabBarItem from 'components/common/tabbar/TabBarItem'

    export default {
        name: "MainTabBar",
        data() {
            return {
              tabBarList: [{
                name: '首页',
                path: '/home',
                img: '/img/tabbar/home.svg',
                imgActive: '/img/tabbar/home_active.svg'
              },{
                name: '分类',
                path: '/category',
                img: '/img/tabbar/category.svg',
                imgActive: '/img/tabbar/category_active.svg'
              },{
                name: '购物车',
                path: '/cart',
                img: '/img/tabbar/cart.svg',
                imgActive: '/img/tabbar/cart_active.svg'
              },{
                name: '我的',
                path: '/profile',
                img: '/img/tabbar/profile.svg',
                imgActive: '/img/tabbar/profile_active.svg'
              },{
                name: '我的',
                path: '/profile',
                img: '/img/tabbar/profile.svg',
                imgActive: '/img/tabbar/profile_active.svg'
              }]
            }
        },
        components: {
          TabBar,
          TabBarItem
        }
    }
</script>

<style scoped>

</style>
