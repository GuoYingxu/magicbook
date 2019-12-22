<template >
    <div class='page'>
        <div class='bt1' :style="style1" @click="toSchoolList"> </div>
        <div class='bt2' :style="style2" @click='showV'></div>

    </div>
</template>
<script>
import {h,w} from '../../util/util'
export default {
    computed:{
        style1(){
            return `width:${w(318)}px;height:${h(312)}px;left:${w(384)}px;top:${h(1064)}px`
        },
        style2(){
            return `width:${w(318)}px;height:${h(312)}px;left:${w(384)}px;top:${h(1396)}px`

        }
    },
    methods:{
        toSchoolList(){
            this.$router.push('/schoollist')
        },
        showV(){
            this.$router.push('/v')
        }
    }
}
</script>
<style lang="scss" scoped>
    .page{
        position: relative;
        height: 100vh;
        width: 100%;
        background-image: url('../assets/01-1.jpg');
        background-size: 100% 100%; 
    }
    .bt1{
        position: absolute;
        z-index: 1;
        background-image: url('../assets/查询.png');
        background-size: 100% 100%; 
    }
    .bt2{
        position: absolute;
        z-index: 1;
        background-image: url('../assets/影片播放.png') ;
        background-size: 100% 100%; 

    }
</style>