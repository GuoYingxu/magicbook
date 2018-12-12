<template>
  <div id ='test' class="full main">
    <Carousel v-model ="index" >
      <CarouselItem v-for="(num) in totalPage" :key="num">
        <div class='man-list-content'>
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
        </div>
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import _ from 'lodash'
import { setTimeout, clearTimeout } from 'timers';
import Man from './Man'
export default {
  data(){
    return {
      currentPage:'main', 
      placement:'left',
      showVideo:false,
      index:0,
      timer:null
    }
  },
  computed:{
    ...mapState({
      list:state=> state.Pics.pics,
    }) ,
    totalPage(){
      return parseInt(this.list.length/12) + (this.list.length %12 == 0 ? 0: 1)
    },
    currentList(){
      var start = this.index * 12 
      var end = (this.index + 1) *12 
      if(end> this.list.length){
        end = this.list.length
      }
      var res = []
      for(var i = start; i< end; i++){
        res.push(this.list[i])
      }
      return res
    },
    list1(){
      if(this.currentList.length>=6){
        return [
          this.currentList[0],
          this.currentList[1],
          this.currentList[2],
          this.currentList[3],
          this.currentList[4],
          this.currentList[5]
        ]
      }else{
        return this.currentList
      }
    },
    list2(){
      if(this.currentList.length <=6){
        return []
      }else{
        var res = []
        for(var i = 6;i<this.currentList.length; i++){
          res.push(this.currentList[i])
        }
        return res
      }
    }
  },
  components:{
    Man
  },
  mounted(){
  },
  watch:{
    currentList(val){
      if(val == 'book'){
        //this.index=0
         
      }
    },
    // list(val){
    //   if(val.length> 0){
    //     this.setUrl(this.originData[threeUtil.getIndex()].video)
    //   }
    // }
  },
  created(){
     
  },
  methods:{
    getList1(page){
      var start = (page-1)* 12;
      var end = start + 6
      if(end> this.list.length){
        end = this.list.length
      }
      var res = []
      for(var i = start  ;i<end; i++){
        res.push(this.list[i])
      }
      return res
    },
     getList2(page){
      var start = (page-1)* 12 + 6;
      var end = start + 6
      if(start > this.list.length){
        return []
      }
      if(end> this.list.length){
        end = this.list.length
      }
      var res = []
      for(var i = start  ;i<end; i++){
        res.push(this.list[i])
      }
      return res
    }
    
  }
}
</script>

<style>

 
.main{
  background-image: url("~@/assets/mp.jpg");
  background-repeat: no-repeat;
  background-size:100% 100%
}
.man-list-content{
  position: absolute;
  left:175px;
  top: 192px;
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
