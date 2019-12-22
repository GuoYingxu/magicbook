<template>
  <div class='video-page'>
    <!-- <div class='bt_play' :style='play_position' @click="toplay"></div>
    <div class='bt_pause' :style='pause_position' @click="tostop"></div>
    <div class='bt_vup' :style='vup_position' @click="toup"></div>
    <div class='bt_vdown' :style='vdown_position' @click="todown"></div> -->
    <!-- <div class='bt_return2' :style='return_position' @click="toreturn"></div> -->
         <div class='back' :style='backBt' @click="backAction"></div>
    <video :style="videoStyle" id='video' controls="controls"  autoplay  loop='loop'></video>
  </div>  
</template>
<script>
import {mapState} from 'vuex';
import util,{w,h} from '../../util/util.js'
export default {
  
  computed:{
       backBt(){
      return `width:${w(292)}px;height:${h(93)}px;left:${w((1080-292)/2)}px;top:${h(1380)}px`
    },
    ...mapState({
      video: state => state.Pics.video,
      baseUrl: state =>state.Pics.baseUrl
    }),
    videoStyle(){
      return {
        position:'absolute',
        left:w(0)+'px',
        top:h(499)+'px',
        width:w(1080)+'px',
        height:h(1356-499)+'px'
      }
    },
    play_position(){
      return {
        'position':'absolute',
        'left':util.w(627)+'px',
        'top':util.h(899)+'px',
        'width': util.w(116)+'px',
        'height':util.h(111)+'px' 
      }
    },
    pause_position(){
      return {
        'position':'absolute',
        'left':util.w(765)+'px',
        'top':util.h(897)+'px',
        'width': util.w(116)+'px',
        'height':util.h(111)+'px' 
      }
    },
    vup_position(){
      return {
        'position':'absolute',
        'left':util.w(902)+'px',
        'top':util.h(897)+'px',
        'width': util.w(116)+'px',
        'height':util.h(111)+'px' 
      }
    },
    vdown_position(){
      return {
        'position':'absolute',
        'left':util.w(1039)+'px',
        'top':util.h(897)+'px',
        'width': util.w(116)+'px',
        'height':util.h(111)+'px' 
      }
    },
     return_position(){
      return {
        'position':'absolute',
        'left':util.w(1178)+'px',
        'top':util.h(897)+'px',
        'width': util.w(116)+'px',
        'height':util.h(111)+'px' 
      }
    },
  },
  mounted() {
    console.log('===========================',this.video)
    if(this.video){
      this.setUrl(this.video.video)
    }
  },
  watch:{
    video(v){
      console.log('~~~~~~',v)
        this.setUrl(v.video)
    }
  },
  methods:{
    toplay(){
       document.getElementById("video").play()
    },
    tostop(){
       document.getElementById("video").pause()
    },
    toup(){
       document.getElementById("video").volume +=0.1
    },
    todown(){
      document.getElementById("video").volume -=0.1
    },
    setUrl(url){
      let v = document.getElementById('video')
      if(v) v.src='file://'+this.baseUrl+'/'+ url
      console.log(v.src)
      //  document.getElementById("video").play()
    },
    backAction(){
      //  document.getElementById("video").pause()
      this.$router.push('/')
      // this.$store.commit('SET_CURRENT_PAGE','main')
    }
  }
}
</script>

<style>
.bt_play{
  background-image: url('~@/assets/01.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.bt_pause{
  background-image: url('~@/assets/02.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.bt_vup{
  background-image: url('~@/assets/03.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.bt_vdown{
  background-image: url('~@/assets/04.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.bt_return2{
  background-image: url('~@/assets/05.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
 .back{
          position: absolute;
          z-index: 1;
  background-image: url('../assets/返回.png');
  background-size: 100% 100%;
}
  .video-page{
    position: absolute;
    left:0;
    right:0;
    bottom:0;
    top:0;
    background-image: url('~@/assets/05-1.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat
  }
</style>
