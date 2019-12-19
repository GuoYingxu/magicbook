<template >
    <div class='page'>
        <div class='bt1' :style="style1" @click="toList('1')"> </div>
        <div class='bt2' :style="style2" @click="toList('2')"></div>

    </div>
</template>
<script>
import {h,w} from '../../util/util'
export default {
    computed:{
        style1(){
            return `width:${w(318)}px;height:${h(312)}px;left:${w(384)}px;top:${h(520)}px`
        },
        style2(){
            return `width:${w(318)}px;height:${h(312)}px;left:${w(384)}px;top:${h(975)}px`
        }
    },
    methods:{
        toList(id){

        }
    }
}
</script>
<style lang="scss" scoped>
    .page{
        position: relative;
        height: 100vh;
        width: 100%;
        background-image: url('../assets/02-1.jpg');
        background-size: 100% 100%; 
    }
    .bt1{
        position: absolute;
        z-index: 1;
        background-image: url('../assets/国立.png');
        background-size: 100% 100%; 
    }
    .bt2{
        position: absolute;
        z-index: 1;
        background-image: url('../assets/十七中.png') ;
        background-size: 100% 100%; 

    }
</style>