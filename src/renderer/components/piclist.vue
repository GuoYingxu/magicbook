<template>
  <div class='listbg ' >
    <div class='listcon' :style='listconsize'>
     <div v-for='(item,index) in currentPics' v-bind:key = "index"> 
       <div :style="[imgSize ,mr]" class='thumb' @click='toview(index)'>
          <img :src="baseUrl+'/'+item.$.pic"  :style= "imgSize">
       </div>
     </div>
     </div> 
    <div class='bt_pre' :style='pre_position' v-show='page>0' @click="toPre"></div>
    <div class='bt_next' :style='next_position' v-show='page<total-1' @click="tonext"></div>
    <div class='bt_return' :style='return_position' @click="toreturn"> </div> 
  </div>
</template>
<script>
import {mapState} from 'vuex';
import util from '../../util/util.js'
export default {
  data:function(){
    return {
      page:0,
      w:212,
      h:260,
    }
  },
  mounted(){ 
    
  },
  methods:{
    toview(index){
      let n = index+ this.page*24;
      this.$store.commit('SET_CURRENT_INDEX',n);
      this.$store.commit('SET_CURRENT_PAGE','richpic')
    },
    tonext(){
      if(this.page<this.total-1){
        this.page ++
      }
    },
    toPre(){
      if(this.page>0){
        this.page--
      }
    },
    toreturn(){
      this.page = 0
      this.$store.commit('SET_CURRENT_PAGE','main')
    }
  },
  computed:{
    ...mapState({
      pics:state => state.Pics.pagePicAll,
      baseUrl: state => state.Pics.baseUrl,
    }),
    listconsize(){
      return {
        position:'absolute',
        left:util.w(106,window.innerWidth)+'px',
        top:util.h(94,window.innerHeight)+'px',
        width:util.w(218*8,window.innerWidth)+'px',
        height: util.h(788,window.innerHeight) + 'px'
      }
    },
    mr(){
      return {
        'margin-right':util.w(12,window.innerWidth)+'px'
      }
    },
    imgSize(){
      return {
        width:util.w(206,window.innerWidth)+'px',
        height:util.h(255,window.innerHeight)+'px'
      }
    },
    pre_position(){ 
      return {
        'position':'absolute',
        'left':util.w(716,window.innerWidth)+'px',
        'top':util.h(897,window.innerHeight)+'px',
        'width': util.w(116,window.innerWidth)+'px',
        'height':util.h(111,window.innerHeight)+'px' 
      }
    },
     next_position(){
      return {
        'position':'absolute',
        'left':util.w(904,window.innerWidth)+'px',
        'top':util.h(897,window.innerHeight)+'px',
        'width': util.w(116,window.innerWidth)+'px',
        'height':util.h(111,window.innerHeight)+'px' 
      }
    },
     return_position(){
      return {
        'position':'absolute',
        'left':util.w(1090,window.innerWidth)+'px',
        'top':util.h(897,window.innerHeight)+'px',
        'width': util.w(116,window.innerWidth)+'px',
        'height':util.h(111,window.innerHeight)+'px' 
      }
    },
    total(){
      return Math.floor(this.pics.length/24)+ (this.pics.length%24 == 0 ? 0:1)
    },
    currentPics(){ 
     
      if(this.pics){ 
        var start = this.page*24;
        var end =(this.page+1)*24;
        end = end<this.pics.length ? end: this.pics.length
        let list = [];
        for(var i=start;i<end;i++){
         list.push(this.pics[i])
       }
       return list
      }
    },
  
  }
}
</script>
<style>
.thumb{  
  border:none; 
}
 
img{
  border:none;
}
.bt_pre{
  
  background-image: url('~@/assets/pre.png');
  background-size: 100% 100%;
  background-repeat: no-repeat
}
.bt_next{
  
  background-image: url('~@/assets/next.png');
  background-size: 100% 100%;
  background-repeat: no-repeat
}
.bt_return{  
  background-image: url('~@/assets/return.png');
  background-size: 100% 100%;
  background-repeat: no-repeat
}

.listbg{
  position: absolute;
  top:0;
  left:0;
  height: 100%;
  width:100%;
  background-image: url('~@/assets/03.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat
}
.listcon{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; 
  text-align: center; 
}
</style>
