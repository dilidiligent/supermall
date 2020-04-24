<template>
    <div>{{msg}}</div>
    <!--<someComponent></someComponent>-->
</template>

<script>
    //import someComponent from './someComponent'
    export default {
        name: "Home",
        data() {
            return {
                msg: "Hello 首页"
            }
        },
        component: {
            //someComponent
        }
    }
</script>

<style scoped>

</style>
