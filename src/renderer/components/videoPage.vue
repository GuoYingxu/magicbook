<template>
  <div class='video-page'>
    <div class='bt_play' :style='play_position' @click="toplay"></div>
    <div class='bt_pause' :style='pause_position' @click="tostop"></div>
    <div class='bt_vup' :style='vup_position' @click="toup"></div>
    <div class='bt_vdown' :style='vdown_position' @click="todown"></div>
    <div class='bt_return2' :style='return_position' @click="toreturn"></div>
    <video :style="videoStyle" id='video' controls="controls"  autoplay  loop='loop'></video>
  </div>  
</template>
<script>
import {mapState} from 'vuex';
import util from '../../util/util.js'
export default {
  
  computed:{
    ...mapState({
      currentNode: state => state.Pics.currentNode,
      baseUrl: state =>state.Pics.baseUrl
    }),
    videoStyle(){
      return {
        position:'absolute',
        left:util.w(51)+'px',
        top:util.h(75)+'px',
        width:util.w(1821)+'px',
        height:util.h(822)+'px'
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
    if(this.currentNode){
      this.setUrl(this.currentNode.$.video)
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
      if(!url || url.length ==0) return
      let v = document.getElementById('video')
      if(v) v.src=this.baseUrl+'/'+ url
    },
    toreturn(){
      this.$store.commit('SET_CURRENT_PAGE','main')
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
  .video-page{
    position: absolute;
    left:0;
    right:0;
    bottom:0;
    top:0;
    background-image: url('~@/assets/08.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat
  }
</style>
