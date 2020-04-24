<template>
    <div>{{msg}}</div>
    <!--<someComponent></someComponent>-->
</template>

<script>
    //import someComponent from './someComponent'
    export default {
        name: "Cart",
        data() {
            return {
                msg: "Hello 购物车"
            }
        },
        component: {
            //someComponent
        }
    }
</script>

<style scoped>

</style>
