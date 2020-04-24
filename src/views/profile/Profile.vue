<template>
    <div>{{msg}}</div>
    <!--<someComponent></someComponent>-->
</template>

<script>
    //import someComponent from './someComponent'
    export default {
        name: "Profile",
        data() {
            return {
                msg: "Hello 我的"
            }
        },
        component: {
            //someComponent
        }
    }
</script>

<style scoped>

</style>
