<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0,
      },
      pullUpLoad: {
        type: Boolean,
        default: false,
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted(){
      this.scroll = new BScroll(this.$refs.wrapper,{
        // 开启原生点击
        click: true,
        // 侦听类型
        probeType: this.probeType,
        // 开启上拉加载
        pullUpLoad: this.pullUpLoad
      })

      //2、监听滚动对象的位置
      this.scroll.on('scroll',(position) => {
        //console.log(position)
        this.$emit('scroll',position)
      })

      //3、监听上拉事件
      this.scroll.on('pullingUp',()=>{
        this.$emit('pullingUp')
      })
    },
    components: {},
    methods: {
      scrollTo(x,y,time=500) {
        this.scroll.scrollTo(x,y,time)
      },
      finishPullUp() {
        this.scroll.finishPullUp()
      }
    }
  }
</script>

<style scoped>

</style>
