<template>
  <div class='pic_page'>
    <div :style='imgcontent' class='img-content'>
      <img :src ='baseUrl+"/"+ currentPic.$.pic' class='img-size' id = 'pinch1'>
    </div> 
    <div class='bt_pre' :style='pre_position' v-show='index>0' @click="toPre"></div>
    <div class='bt_next' :style='next_position' v-show='index<total-1' @click="tonext"></div>
    <div class='bt_return' :style='return_position' @click="toreturn"></div> 
  </div>
</template>

<script>
import util from '../../util/util.js'
import {mapState} from 'vuex'
export default {
  data(){
    return {
      index:0
    }
  },
  mounted(){
    var img = document.getElementById('pinch1')
    var hammertime = new Hammer(img);
    //var hammertime = new Hammer(document.getElementById("test"));
    hammertime.get('pinch').set({ enable: true });
    hammertime.add(new Hammer.Pinch());
    hammertime.get('pinch').set({ enable: true });
    hammertime.on("pinch",e => {
     img.style.transform = "scale("+e.scale+")";
    }); 
  },
  methods:{
    toPre(){
      if(this.index>0){
        this.index--;
        document.getElementById('pinch1').style.transform = 'scale(1)'
      }
    },
    tonext(){
      if(this.index < this.total -1){
        this.index++
         document.getElementById('pinch1').style.transform = 'scale(1)'
      }
    },
    toreturn(){
      this.index = 0;
       document.getElementById('pinch1').style.transform = 'scale(1)'
      this.$store.commit('SET_CURRENT_PAGE','main')
    }
  },
  computed:{
    ...mapState({
      list: state=> state.Pics.pagePicAll,
      baseUrl : state => state.Pics.baseUrl
    }),
    currentPic(){
      return this.list[this.index]
    },
    total(){
      return this.list.length
    },
    imgcontent(){
      return {
        position: 'absolute',
        left:util.w(346)+'px',
        top:util.h(90)+'px',
        width:util.w(1230)+'px',
        height:util.h(805)+'px'
      }
    },
    pre_position(){ 
      return {
        'position':'absolute',
        'left':util.w(716)+'px',
        'top':util.h(897)+'px',
        'width': util.w(116)+'px',
        'height':util.h(111)+'px' 
      }
    },
     next_position(){
      return {
        'position':'absolute',
        'left':util.w(904)+'px',
        'top':util.h(897)+'px',
        'width': util.w(116)+'px',
        'height':util.h(111)+'px' 
      }
    },
     return_position(){
      return {
        'position':'absolute',
        'left':util.w(1090)+'px',
        'top':util.h(897)+'px',
        'width': util.w(116)+'px',
        'height':util.h(111)+'px' 
      }
    },
  }
}
</script>

<style>
.img-content{
  display: flex; 
}
.img-size{
  width: auto;
	height: auto;
	max-width: 100%;
	max-height: 100%;
  margin:auto;
}
.pic_page{
  position: absolute;
  left:0;
  top:0;
  right:0;
  bottom: 0;
  background-image: url('~@/assets/07.jpg');
  background-size:100% 100%;
  background-repeat:  no-repeat;
}
</style>
