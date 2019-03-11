<template>
  <div class='rich-page'>
    <div class='img-content' :style='richpiccon'>
      <img id ='img-pin1' :src='baseUrl+"/"+ currentNode.$.pic' class='img-size' />
    </div>
    <div :style="styleName" > {{currentNode.$.name}}</div>
    <div :style='styleC'>{{currentNode.$.c}}</div>
    <div :style='styleTime'>{{currentNode.$.time}}</div>
    <div :style='styleGrid'>{{currentNode.$.grid}}</div>
    <div class='bt_pre' :style='pre_position' v-show='currentIndex>0' @click="toPre"></div>
    <div class='bt_next' :style='next_position' v-show='currentIndex<total-1' @click="tonext"></div>
    <div class='bt_return' :style='return_position' @click="toreturn"></div>
      
  </div>
</template>
<script>
import {mapState} from 'vuex';
import util from '../../util/util.js'
export default {
  mounted(){
    var img = document.getElementById('img-pin1')
    img.style.transform = 'scale(1)'
    var hammertime = new Hammer(img);
    //var hammertime = new Hammer(document.getElementById("test"));
    hammertime.get('pinch').set({ enable: true });
    hammertime.add(new Hammer.Pinch());
    hammertime.get('pinch').set({ enable: true });
    hammertime.on("pinch",e => {
     img.style.transform = "scale("+e.scale+")";
    });
    var trx_length = 0;
//     hammertime.on("pan", function (e) {
//                 //e.deltaX; 移动距离 left :-, right: + 
// //                 let trx_length = trx_length + e.deltaX*0.2; //0.2 减慢速度
// //                 if(trx_length < 10 )
// //                 {
// //                     transform = "translateX(" +  trx_length + "px)";  
// //                    img.style.transform = transform; 
// //                 }
//               var dX =   e.deltaX;
//         var dY =   e.deltaY;
//         Velocity.hook( img, 'translateX', dX + 'px');
//         Velocity.hook( img, 'translateY', dY + 'px');  
//              });  
 
  },
  methods:{
    toPre(){
      if(this.currentIndex>0){
        this.$store.commit('SET_CURRENT_INDEX',this.currentIndex -1)
         document.getElementById('img-pin1').style.transform = 'scale(1)'
      }
    },
    tonext(){
      if(this.currentIndex < this.total -1){
        this.$store.commit('SET_CURRENT_INDEX',this.currentIndex +1)
         document.getElementById('img-pin1').style.transform = 'scale(1)'
      }
    },
    toreturn(){
      document.getElementById('img-pin1').style.transform = 'scale(1)'
      this.$store.commit('SET_CURRENT_PAGE','list')
    }
  },
  computed:{
    ...mapState({
      list:state =>state.Pics.pagePicAll,
      currentIndex: state => state.Pics.currentIndex,
      baseUrl: state => state.Pics.baseUrl
    }),
    total(){
      return this.list.length
    },
    currentNode(){
      return this.list[this.currentIndex]
    },
    styleName(){
      return {
        position: 'absolute',
        left:util.w(1457)+'px',
        top:util.h(133)+'px',
        color: "#fff",
        fontSize:util.w(24)+'px',
         lineHeight: util.w(24)+'px',
        width:util.w(282)+'px'
      }
    },
     styleC(){
      return {
        position: 'absolute',
        left:util.w(1457)+'px',
        top:util.h(190)+'px',
        color: "#fff",
        fontSize:util.w(24)+'px',
        lineHeight: util.w(24)+'px',
        width:util.w(282)+'px'
      }
    },
     styleTime(){
      return {
        position: 'absolute',
        left:util.w(1457)+'px',
        top:util.h(245)+'px',
        color: "#fff",
        lineHeight: util.w(24)+'px', 
        fontSize:util.w(24)+'px',
        width:util.w(282)+'px'
      }
    },
     styleGrid(){
      return {
        position: 'absolute',
        left:util.w(1457)+'px',
        top:util.h(302)+'px',
        color: "#fff",
        fontSize:util.w(26)+'px',
        width:util.w(282)+'px'
      }
    },
    richpiccon(){
      return {
        'position':'absolute',
        'left':util.w(179)+'px',
        'top':util.h(100)+'px',
        'width': util.w(1164)+'px',
        'height':util.h(750)+'px' 
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
  .rich-page{
    position: absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    background-image: url('~@/assets/10.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
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
</style>
