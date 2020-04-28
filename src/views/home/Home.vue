<template>
  <div id="home">
    <!--第一部分：导航栏开始-->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!--第一部分：导航栏结束-->

    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            :pull-up-load="true"
            @scroll="contentScroll"
            @pullingUp="loadMore">
      <!--第二部分：轮播图开始-->
      <home-swiper :banners="banners"></home-swiper>
      <!--第二部分：轮播图结束-->

      <!--第三部分：推荐功能模块开始-->
      <recommend-views :recommends="recommends"></recommend-views>
      <!--第三部分：推荐功能模块结束-->

      <!--第三部分：特色功能模块开始-->
      <feature-view></feature-view>
      <!--第三部分：特色功能模块结束-->

      <!--第四部分：标签控制功能模块开始-->
      <tab-control :titles="['流行','新款','精选']" class="tabControl" @tabClick="tabClick"></tab-control>
      <!--第四部分：标签控制功能模块结束-->

      <!--第五部分：商品展示功能模块开始-->
      <goods-list :goods="showGoods" class="goodsList"></goods-list>
      <!--第五部分：商品展示功能模块结束-->
    </scroll>

    <!--回到顶部-->
    <back-top @click.native="backClick" v-show="isShow"></back-top>


  </div>

</template>

<script>
    import NavBar from 'components/common/navbar/NavBar'
    import Scroll from 'components/common/scroll/Scroll'
    import TabControl from 'components/content/tabControl/TabControl'
    import GoodsList from 'components/content/goods/GoodsList'
    import BackTop from 'components/content/backtop/BackTop'

    import HomeSwiper from './childComps/HomeSwiper.vue'
    import RecommendViews from './childComps/RecommendViews.vue'
    import FeatureView from './childComps/FeatureView.vue'

    import {getHomeMultidata,getHomeGoods} from 'network/home.js'

    export default {
      name: "Home",
      data() {
        return {
          result: '',
          banners: [],
          recommends: [],
          goods: {
            'pop': {page: 0,list: []},
            'new': {page: 0,list: []},
            'sell': {page: 0,list: []},
          },
          currentType: 'pop',
          isShow: false,
          bottom: null,
        }
      },
      computed: {
        showGoods(){
          return this.goods[this.currentType].list
        }
      },
      components: {
        NavBar,
        Scroll,
        TabControl,
        GoodsList,
        HomeSwiper,
        RecommendViews,
        FeatureView,
        BackTop,
      },
      created() {
        this.getHomeMultidata()
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')
      },
      methods: {
        /**
         * 事件监听相关方法
         */

        tabClick(index) {
          switch (index){
            case 0:
              this.currentType = 'pop'
              break
            case 1:
              this.currentType = 'new'
              break
            case 2:
              this.currentType = 'sell'
              break
          }
        },

        backClick() {
          //console.log('backClick')
          this.$refs.scroll.scrollTo(0,0)
        },

        contentScroll(position) {
          //console.log(position)
          this.isShow = position.y < -1000
        },

        loadMore() {
          this.getHomeGoods(this.currentType)
        },




        /**
         * 网络请求相关方法
         * */

        //1、请求多个数据
        getHomeMultidata() {
          getHomeMultidata().then(res=>{
            console.log(res)
            this.result = res
            this.banners = res.data.banner.list
            //this.banners = res.data[BANNER].list
            this.recommends = res.data.recommend.list
          })
        },
        //2、请求商品数据
        getHomeGoods(type) {
          const page = this.goods[type].page + 1
          getHomeGoods(type,page).then(res=>{
            console.log(res)
            //ES6语法：Array.push(...Lists)  相当于 for遍历List，把数组中的单条数据push到Array里
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page += 1

            this.$refs.scroll.finishPullUp()
          })
        }
      }
    }
</script>

<style scoped>
  /*把轮播图显示完整，导航栏定位后，轮播图上移了44PX*/
  #home{
    padding-top: 44px;
    height:100vh;
    position: relative;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #FFF;

    /*对导航栏：绝对定位,脱离文档流，浮在文档流之上*/
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  /*tab-contrl的吸顶效果实现*/
  .tabControl{
    position: sticky;
    top: 44px;
    z-index: 9;
  }

  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
    overflow: hidden;
  }

/*  .content{
    height: calc(100% - 93px);
  }*/
</style>
