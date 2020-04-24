<template>
    <div>{{msg}}</div>
    <!--<someComponent></someComponent>-->
</template>

<script>
    //import someComponent from './someComponent'
    export default {
        name: "Category",
        data() {
            return {
                msg: "Hello 分类"
            }
        },
        component: {
            //someComponent
        }
    }
</script>

<style scoped>

</style>
