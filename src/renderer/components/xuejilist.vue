<template>
  <div id ='test' class="full main">
     <div :class="showkeyboard || inputText ? 'fsearch':'search'" :style='searchStyle'>
        <Input type='text'  class="search-input" @on-focus="showk" v-model="inputText" @on-change="search"/>
        <div class="search-btn" @click="search">
        </div>
     </div>
     <div class='man-list-content' :style="containerStyle">
      <Carousel v-model="index"  :style="ch">
        <CarouselItem v-for='num in totalPage' :key='num'>
            <div class='list1'>
              <template v-for = 'item in  getList1(num)' > 
                <Stu :item = "item" :key='item.guid'/>
              </template>
            </div>
            <div class='list2'>
              <template v-for = 'item in  getList2(num)' > 
                <Stu :item = "item" :key='item.guid'/>
              </template>
            </div>
        </CarouselItem>
      </Carousel>
      </div> 
     <div class='back' :style='backBt' @click="backAction">
     </div>
      <div class='keyboardcontainer' :style='keyboardStyle' v-show = "showkeyboard">
        <div class="closekeyboard" @click="showkeyboard=false">x</div>
        <Keyboard
          v-model="inputText"
          @custom="custom"
          @input="changed"
          :layouts="[
            '1234567890{delete:backspace}|qwertyuiop|asdfghjkl|{shift:goto:1}zxcvbnm|{space:space}{custom:custom}',
            '!@#$%^&*(){delete:backspace}|QWERTYUIOP|ASDFGHJKL|{shift:goto:0}ZXCVBNM|{space:space}{custom:custom}'
          ]"
          :maxlength="16"
        ></keyboard>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import _ from 'lodash'
import { setTimeout, clearTimeout } from 'timers';
import {w,h} from '../../util/util'
import Keyboard from './Keyboard';
import Stu from './Stu'
export default {
  data(){
    return {
      currentPage:'main',  
      showVideo:false,
      index:0,
      timer:null,
      inputText:"",
      filterString:'',
      showkeyboard:false,
    }
  },
  computed:{
    containerStyle(){
      return `margin-top:${h(520)}px;`
    },
    searchStyle(){
      return `width:${w(435)}px;height:${h(71)}px;top:${h(365)}px;left:${w((1080-435)/2)}px;border-radius:${h(35)}px;` 
    },
    keyboardStyle(){
      return `top:${h(465)}px;left:${w(240)}px` 
    },
    backBt(){
      return `width:${w(292)}px;height:${h(93)}px;margin:auto;margin-top:40px`
    },
    ch(){
      return `height:${h(880)}px`
    },
   
    list() {
      return this.$route.params.id == 1 ? this.$store.state.Pics.pics1 :  this.$store.state.Pics.pics2
    },
    filterList(){
      var res = []
      if(this.filterString.length>0){
        res = this.list.filter(item=> item.py.indexOf(this.filterString)>=0)
      }else{
        res= this.list;
      }
      return res
    },
    totalPage(){
      console.log(this.list)
      return parseInt(this.list.length/6) + (this.list.length %6 == 0 ? 0: 1)
    },
    list1(){
      
    }
  
  },
  components:{
    Stu,
    Keyboard
  },
  mounted(){
    this.index = 0
    this.inputText = ''
    console.log(this.$store)
    var hammerTest = new Hammer(document.getElementById('test'));
    hammerTest.on('swipeleft swiperight ', (ev)=> {
        console.log(ev.type);
        if(ev.type=='swiperight'){
          if(this.index>0){
            this.index = this.index-1

          }else{
            this.index =0
          }
          console.log(this.index)
        }
        if(ev.type=='swipeleft'){
          console.log(this.index,this.totalPage)
          if(this.index<this.totalPage -1){
            this.index = this.index+1
          }else{
            this.index = this.totalPage -1
          }
          console.log(this.index)
          
        }
    });


    // var hammertime = new Hammer(document.getElementById('test'));
    // hammertime.on('swipleft', function(ev) {
    //     if(this.index>0){
    //       this.index --
    //     }
    // });
    // hammertime.on('swipright',function(ev){
    //   if(this.index< this.totalPage-1){
    //     this.index++
    //   }
    // })
  },
  watch:{
     
  },
  created(){
     
  },
  methods:{ 
    backAction(){
      this.$router.push('/schoollist')
    },
    showk(){
      if(this.showkeyboard==false){
        this.showkeyboard =true
      }
    },
   changed(value) {
     this.filterString = value.trim()
      console.log('Value ' + value);
    },

    custom(keyboard) {
      console.log(keyboard.value);
    },

    search(){

      this.filterString = this.inputText.trim();
    },
    getList1(page){
      var start = (page-1)*6
      var end = start + 3
      if(start> this.filterList.length){
        return []
      }
      if(end > this.filterList.length){
        end =this.filterList.length 
      }
      var res = []
      for(var i = start; i<end; i++){
        res.push(this.filterList[i])
      }
      return res
    },
    getList2(page){
      var start = (page-1)*6 +3
      var end = start + 3;
      if(start > this.filterList.length){
        return []
      }
      if(end> this.filterList.length){
        end = this.filterList.length
      }
      var res = []
      for(var i =start; i<end;i++){
        res.push(this.filterList[i])
      }
      return res 
    }
  }
}
</script>

<style>
/* @import './keyboard.css'; */
.search{
  position: absolute;
  /* background: rgb(206,93,87); */
  /* border:1px solid rgba(151,70,66); */
  display: flex;
  flex-direction: row;
  /* padding-left:30px; */
  background-image: url('../assets/检索.png');
  background-size: 100% 100%
}
.fsearch{
  position: absolute;
  /* background: rgb(206,93,87); */
  /* border:1px solid rgba(151,70,66); */
  display: flex;
  flex-direction: row;
  /* padding-left:30px; */
  background-image: url('../assets/检索-1.png');
  background-size: 100% 100%
}
.back{
  background-image: url('../assets/返回.png');
  background-size: 100% 100%;
}
.search-input .ivu-input{
  line-height: 50px;
  height:50px;
  border-radius:5px;
  width: 314px;
  font-size:25px;
  margin-left:50px;
  background: transparent;
  border:none;
}
.ivu-input:focus{
  border:none
}
.closekeyboard{
  position: absolute;
  right:10px;
  top:-3px;
  font-size: 30px
}
.keyboardcontainer{
  position: absolute;
  z-index: 10;
  width: 600px; 

}
.search-btn{
  height:54px;
  width: 100px;
  background-image: 
}
 
.main{
  background-image: url("~@/assets/03-1.jpg");
  background-repeat: no-repeat;
  background-size:100% 100%
}
.list1 ,.list2{
  display:  flex;
  flex-direction: row;
  margin-bottom:20px;
}

.full{
  position:absolute;
  left:0;
  right:0;
  bottom:0;
  top:0;
  overflow: hidden;
  z-index: 0;
}
.left-vi{
  position: absolute;
  z-index: 1000;
  width: 550px;
  height:300px;
  left:300px;
  top:240px;
}
.right-vi{
  position: absolute;
  z-index: 1000;
  width: 550px;
  height:300px;
  left:1180px;
  top:240px;
}
.right-bottom{
  position : absolute;
  bottom :50px;
  right:50px
}
.bottom-down{
  position: absolute;
  bottom:10px;
  left:60px;
  text-align: right;
  font-size: 50px;
  color:white
}
canvas {
	background-image: radial-gradient(#666, #333);
}

#instructions {
	position: absolute;
	color: #fff;
	bottom: 0;
	padding-bottom: 6px;
	font-family: sans-serif;
	width: 100%;
	text-align: center;
	pointer-events: none;
}

.ivu-carousel-arrow-hover {
    display: inherit;
    opacity: 1;
}
.ivu-carousel-item{
  padding-left:100px
}
</style>
