<template>
  <div>
    <div class='topPage'>
      <div class='enterButton' :style='enterStyle' @click='enterPage'></div>
    </div>
    <div class='mainMenu' v-show='currentMenu=="mainmenu"'>
      <div class='m1' :style='m1' data-name='文物精粹' @click='currentMenu ="jc"'></div>
      <div class='m2' :style='m2' data-name='捐赠记忆' @click='currentMenu="jy"'></div>
      <div class='m3' :style='m3' data-name='景仁怀德' @click='currentMenu="hd"'></div>
      <div class='m4' :style='m4' data-name='李初梨与革命文学' @click='currentMenu="wx"'></div>
      <div class='menureturn' :style='returnStyle' @click='currentMenu="top"'></div>
    </div>
    <div class='mainMenu2' v-show='currentMenu=="jc"'>
      <div class='mm1' :style='mm1' data-name='瓷器类' data-type='list' @click="menuClick"></div>
      <div class='mm2' :style='mm2' data-name='铜器类' data-type='list'  @click="menuClick"></div>
      <div class='mm3' :style='mm3' data-name='绘画类' data-type='list'  @click="menuClick"></div>
       <div class='mm4' :style='mm4' data-name='书法类' data-type='list'  @click="menuClick"></div>
        <div class='mm5' :style='mm5' data-name='文具类' data-type='list'  @click="menuClick"></div>
         <div class='mm6' :style='mm6' data-name='文献文书' data-type='list'  @click="menuClick"></div>
          <div class='mm7' :style='mm7' data-name='其它金属器' data-type='list'  @click="menuClick"></div>
      <div class='menureturn' :style='returnStyle' @click='currentMenu="mainmenu"'></div>
    </div>
     <div class='mainMenu' v-show='currentMenu=="jy"'>
      <div class='m1m1' :style='m1m1' data-name='工作情况汇报'  data-type='pic'  @click="menuClick"></div>
      <div class='m1m2' :style='m1m2' data-name='宝献乡邦壮国魂'  data-type='pic'  @click="menuClick"></div>
      <div class='m1m3' :style='m1m3' data-name='李初梨捐赠文物展览在渝举行'  data-type='pic'  @click="menuClick"></div>
      <div class='m1m4' :style='m1m4' data-name='清风高节'  data-type='pic'  @click="menuClick"></div>
      <div class='m1m5' :style='m1m5' data-name='了却了我多年夙愿'  data-type='pic'  @click="menuClick"></div>
      <div class='m1m6' :style='m1m6' data-name='高风亮节'  data-type='pic'  @click="menuClick"></div>
      <div class='m1m7' :style='m1m7' data-name='后世楷模'  data-type='pic'  @click="menuClick"></div>
      <div class='m1m8' :style='m1m8' data-name='革命往事'   data-type='video'  @click="menuClick"></div>
      <div class='m1m9' :style='m1m9' data-name='李初梨与吴城怀古轴'   data-type='video'  @click="menuClick"></div> 
      <div class='menureturn' :style='returnStyle' @click='currentMenu="mainmenu"'></div>
    </div>
    <div class='mainMenu' v-show='currentMenu=="wx"'>
      <div class='m3m1' :style='m3m1' data-name='乱舞'  data-type='pic'  @click="menuClick"></div>
      <div class='m3m2' :style='m3m2' data-name='一封公开信'  data-type='pic'  @click="menuClick"></div>
      <div class='m3m3' :style='m3m3' data-name='怎样地建设革命文学'  data-type='pic'  @click="menuClick"></div>
      <div class='m3m4' :style='m3m4' data-name='自然生长性与目的意识性'  data-type='pic' @click="menuClick"></div>
      <div class='menureturn' :style='returnStyle' @click='currentMenu="mainmenu"'></div>
    </div>
    <div class='mainMenu' v-show='currentMenu=="hd"'>
      <div class='m4m1' :style='m4m1' data-name='拜访刘钧女士'  data-type='pic' @click="menuClick"></div>
      <div class='m4m2' :style='m4m2' data-name='恭贺刘老百岁华诞'  data-type='video'  @click="menuClick"></div> 
      <div class='menureturn' :style='returnStyle' @click='currentMenu="mainmenu"'></div>
    </div>
  </div>  
</template>
<script>
import {mapState} from 'vuex'
import util from '../../util/util.js'
export default {
  data(){
    return {
    
      currentMenu:'top'
    }
  },
  methods:{
    enterPage(){
      this.currentMenu = 'mainmenu'
    },
    menuClick(e){
      this.$emit('menuClick',[e.currentTarget.dataset.name, e.currentTarget.dataset.type ])
    }
  },
  computed:{
     m4m1(){
      return {
        position:'absolute',
        left : util.w(689)+'px',
        top:util.h(325)+'px',
        width: util.w(662)+'px',
        height: util.h(106)+'px'
      }
    },
     m4m2(){
      return {
        position:'absolute',
        left : util.w(689)+'px',
        top:util.h(483)+'px',
        width: util.w(662)+'px',
        height: util.h(106)+'px'
      }
    },
     m3m1(){
      return {
        position:'absolute',
        left : util.w(268)+'px',
        top:util.h(442)+'px',
        width: util.w(702)+'px',
        height: util.h(82)+'px'
      }
    },
     m3m2(){
      return {
        position:'absolute',
        left : util.w(1056)+'px',
        top:util.h(442)+'px',
        width: util.w(702)+'px',
        height: util.h(82)+'px'
      }
    },
     m3m3(){
      return {
        position:'absolute',
        left : util.w(268)+'px',
        top:util.h(580)+'px',
        width: util.w(702)+'px',
        height: util.h(82)+'px'
      }
    },
      m3m4(){
      return {
        position:'absolute',
        left : util.w(1056)+'px',
        top:util.h(588)+'px',
        width: util.w(702)+'px',
        height: util.h(82)+'px'
      }
    },
     m1m1(){
      return {
        position:'absolute',
        left : util.w(344)+'px',
        top:util.h(276)+'px',
        width: util.w(622)+'px',
        height: util.h(106)+'px'
      }
    },
     m1m2(){
      return {
        position:'absolute',
        left : util.w(344)+'px',
        top:util.h(391)+'px',
        width: util.w(622)+'px',
        height: util.h(106)+'px'
      }
    },
     m1m3(){
      return {
        position:'absolute',
        left : util.w(344)+'px',
        top:util.h(506)+'px',
        width: util.w(622)+'px',
        height: util.h(106)+'px'
      }
    },
     m1m4(){
      return {
        position:'absolute',
        left : util.w(344)+'px',
        top:util.h(621)+'px',
        width: util.w(622)+'px',
        height: util.h(106)+'px'
      }
    },
     m1m5(){
      return {
        position:'absolute',
        left : util.w(344)+'px',
        top:util.h(737)+'px',
        width: util.w(622)+'px',
        height: util.h(106)+'px'
      }
    },
    m1m6(){
      return {
        position:'absolute',
        left : util.w(1060)+'px',
        top:util.h(275)+'px',
        width: util.w(622)+'px',
        height: util.h(106)+'px'
      }
    },
     m1m7(){
      return {
        position:'absolute',
        left : util.w(1060)+'px',
        top:util.h(390)+'px',
        width: util.w(622)+'px',
        height: util.h(106)+'px'
      }
    },
     m1m8(){
      return {
        position:'absolute',
        left : util.w(1060)+'px',
        top:util.h(503)+'px',
        width: util.w(622)+'px',
        height: util.h(106)+'px'
      }
    },
     m1m9(){
      return {
        position:'absolute',
        left : util.w(1060)+'px',
        top:util.h(618)+'px',
        width: util.w(622)+'px',
        height: util.h(106)+'px'
      }
    },
    mm1(){
      return {
        position:'absolute',
        left : util.w(480)+'px',
        top:util.h(400)+'px',
        width: util.w(251)+'px',
        height: util.h(90)+'px'
      }
    },
     mm2(){
      return {
        position:'absolute',
        left : util.w(740)+'px',
        top:util.h(400)+'px',
        width: util.w(251)+'px',
        height: util.h(90)+'px'
      }
    },
     mm3(){
      return {
        position:'absolute',
        left : util.w(1000)+'px',
        top:util.h(400)+'px',
        width: util.w(251)+'px',
        height: util.h(90)+'px'
      }
    },
     mm4(){
      return {
        position:'absolute',
        left : util.w(1260)+'px',
        top:util.h(400)+'px',
        width: util.w(251)+'px',
        height: util.h(90)+'px'
      }
    },
     mm5(){
      return {
        position:'absolute',
        left : util.w(480)+'px',
        top:util.h(550)+'px',
        width: util.w(251)+'px',
        height: util.h(90)+'px'
      }
    },
     mm6(){
      return {
        position:'absolute',
        left : util.w(740)+'px',
        top:util.h(550)+'px',
        width: util.w(251)+'px',
        height: util.h(90)+'px'
      }
    },
     mm7(){
      return {
        position:'absolute',
        left : util.w(1000)+'px',
        top:util.h(550)+'px',
        width: util.w(251)+'px',
        height: util.h(90)+'px'
      }
    },

    m1(){
      return {
        position:'absolute',
        left : util.w(462)+'px',
        top:util.h(386)+'px',
        width: util.w(330)+'px',
        height: util.h(97)+'px'
      }
    },
     m2(){
      return {
        position:'absolute',
        left : util.w(463)+'px',
        top:util.h(533)+'px',
        width: util.w(330)+'px',
        height: util.h(97)+'px'
      }
    },
     m3(){
      return {
        position:'absolute',
        left : util.w(945)+'px',
        top:util.h(535)+'px',
        width: util.w(315)+'px',
        height: util.h(97)+'px'
      }
    },
     m4(){
      return {
        position:'absolute',
        left : util.w(945)+'px',
        top:util.h(383)+'px',
        width: util.w(511)+'px',
        height: util.h(98)+'px'
      }
    },
    enterStyle(){
      return {
        position:'absolute',
        left : util.w(841)+'px',
        top:util.h(612)+'px',
        width: util.w(188)+'px',
        height: util.h(159)+'px'
      }
    },
    returnStyle(){
       return {
        position:'absolute',
        left : util.w(1754)+'px',
        top:util.h(899)+'px',
        width: util.w(116)+'px',
        height: util.h(111)+'px'
      }
    }
  }
}
</script>

<style>
  .topPage{
    background-image: url('~@/assets/m1.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: absolute;
    left:0;
    right:0;
    top:0;
    bottom: 0
  }
 .m4m1{
    background-image: url('~@/assets/menus/m4/01.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
   .m4m2{
     background-image: url('~@/assets/menus/m4/02.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
   .m3m1{
    background-image: url('~@/assets/menus/m3/01.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
   .m3m2{
     background-image: url('~@/assets/menus/m3/02.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
   .m3m3{
     background-image: url('~@/assets/menus/m3/03.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
   .m3m4{
     background-image: url('~@/assets/menus/m3/04.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
   .m1m1{
    background-image: url('~@/assets/menus/m2/01.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
   .m1m2{
     background-image: url('~@/assets/menus/m2/02.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
   .m1m3{
     background-image: url('~@/assets/menus/m2/03.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
   .m1m4{
     background-image: url('~@/assets/menus/m2/04.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
   .m1m5{
     background-image: url('~@/assets/menus/m2/05.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
   .m1m6{
     background-image: url('~@/assets/menus/m2/06.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
   .m1m7{
     background-image: url('~@/assets/menus/m2/07.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
   .m1m8{
     background-image: url('~@/assets/menus/m2/08.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
   .m1m9{
     background-image: url('~@/assets/menus/m2/09.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
   .mm1{
     background-image: url('~@/assets/menus/m1/01.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
   .mm2{
     background-image: url('~@/assets/menus/m1/02.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
   .mm3{
     background-image: url('~@/assets/menus/m1/03.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
   .mm4{
     background-image: url('~@/assets/menus/m1/04.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
   .mm5{
     background-image: url('~@/assets/menus/m1/05.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
   .mm6{
     background-image: url('~@/assets/menus/m1/06.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
   .mm7{
     background-image: url('~@/assets/menus/m1/07.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .m1{
     background-image: url('~@/assets/menus/01.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
   .m2{
     background-image: url('~@/assets/menus/02.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
   .m3{
     background-image: url('~@/assets/menus/03.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
   .m4{
     background-image: url('~@/assets/menus/04.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .mainMenu{
    background-image: url('~@/assets/m2.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: absolute;
    left:0;
    right:0;
    top:0;
    bottom: 0
  }
  .mainMenu2{
    background-image: url('~@/assets/01-1.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: absolute;
    left:0;
    right:0;
    top:0;
    bottom: 0
  }
  .enterButton{
    background-image: url('~@/assets/enter.png');
    background-size: 100% 100%;
    background-repeat: no-repeat; 
    
  }
  .menureturn{
    background-image:url('~@/assets/return.png');
     background-size: 100% 100%;
    background-repeat: no-repeat;
  }
</style>
