<template>
  <div id ='test' class="full main">
     <div class='man-list-content'>
      <Carousel v-model="index"  style="height:1080px">
        <CarouselItem v-for='num in totalPage' :key='num'>
            <div class='list1'>
              <template v-for = 'item in  getList1(num)' > 
                <Man :item = "item" :key='item.guid'/>
              </template>
            </div>
            <div class='list2'>
              <template v-for = 'item in  getList2(num)' > 
                <Man :item = "item" :key='item.guid'/>
              </template>
            </div>
        </CarouselItem>
      </Carousel>
      </div> 
      <div class='search'>
        <Input type='text'  class="search-input" @on-focus="showk" v-model="inputText" @on-change="search"/>
        <div class="search-btn" @click="search">
        </div>
      </div>
      <div class='keyboardcontainer' v-show = "showkeyboard">
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

import Keyboard from './Keyboard';
import Man from './Man'
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
    ...mapState({
      list:state=> state.Pics.json,
    }) ,
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
      return parseInt(this.list.length/12) + (this.list.length %12 == 0 ? 0: 1)
    },
  
  },
  components:{
    Man,
    Keyboard
  },
  mounted(){
    this.index = 0
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
      var start = (page-1)*12
      var end = start + 6
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
      var start = (page-1)*12 +6
      var end = start + 6;
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
  bottom:75px;
  left:761px;
  height:54px;
}
.search-input .ivu-input{
  line-height: 50px;
  height:50px;
  border-radius:5px;
  border:1px solid #ff0;
  width: 314px;
  font-size:35px;
  border:none;
  float:left;
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
  bottom: 135px;
  width: 600px; 
  left:660px;

}
.search-btn{
  height:54px;
  background: rgba(0,0,0,0);
  width: 100px;
  float:left;
}
 
.main{
  background-image: url("~@/assets/mp.jpg");
  background-repeat: no-repeat;
  background-size:100% 100%
}
.man-list-content{
  padding-left:175px;
  padding-top: 192px;
  z-index: 1;
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
</style>
