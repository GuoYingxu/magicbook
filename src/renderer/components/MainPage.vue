<template>
  <div class="full main">
    <!-- <div class='full' style="backgroundColor:transparent" @click="currentPage ='book'">

    </div> -->
    <webview class ='full' src = 'static/index.swf' plugins ="true"/>
    <div class="full book"  :style="{display:(currentPage=='book'?'':'none')}">
      <div id="three-container"></div>
    </div>  
    <video :class="placement == 'left' ? 'left-vi':'right-vi'" id='video'  autoplay v-if="showVideo&&currentPage=='book'" loop='loop' ></video>
    <div class='bottom-down'  :style="{display:(currentPage=='book'?'':'none')}">
      {{index+1}}/ {{list.length}}
    </div>
  </div>
</template>

<script>
import threeUtil from '../../util/threeUtil.js'
import {mapState} from 'vuex'
import { setTimeout, clearTimeout } from 'timers';
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
      originData: state => state.Pics.originData
    }) ,
   
  },
  mounted(){
     require('electron').ipcRenderer.on('key', (event, message) => {
        console.log(message) // Prints 'whoooooooh!'
        if(message == 'left'){
          this.startTimer()
          if(this.currentPage == 'main'){
            this.index=this.list.length-1
            this.currentPage = 'book'
          }else{
            console.log('currentIndex ==',this.index)
            if(this.index <=0){
              this.currentPage = 'main'
            }else{
              let vs = this.doLeft()
              if(vs!=null)
              this.index=vs
            }
          }
        }
        if(message =='right'){
          this.startTimer()
          if(this.currentPage =='main'){
            this.index= 0
            this.currentPage = 'book'
          }else{
            if(this.index == this.list.length -1){
              this.currentPage = 'main'
              this.index=0
            }else{
              let vs=this.doRight()
              if(vs!=null)
              this.index=vs
            }
          }
        }
        if(message == 'back'){
          if(this.timer) clearTimeout(this.timer)
          this.currentPage = 'main'
        }
        // if(message == 'enter'){
        //   this.currentPage = 'book'
        // }
      })
  },
  watch:{
    currentPage(val){
      if(val == 'book'){
        //this.index=0
        this.startTimer()
        this.$nextTick(()=>{ 
          threeUtil.init(this.list,this.index)
          var index =threeUtil.getIndex()
          var d = this.originData[index]
          if(d.video){
          this.placement =d.placement
            this.showVideo =true;
            this.$nextTick(()=>{
              this.setUrl(d.video)
            })
          }
        })
      }
    },
    // list(val){
    //   if(val.length> 0){
    //     this.setUrl(this.originData[threeUtil.getIndex()].video)
    //   }
    // }
  },
  created(){
    threeUtil.listen(this.transEnd)
  },
  methods:{
    startTimer(){
      if(this.timer ){
        clearTimeout(this.timer)
      } 

        this.timer= setTimeout(()=>{
          console.log('=======timerEnd')
          this.currentPage ='main'
        },5*1000*60)
    },
    transEnd(){
      // console.log('transEnd')
      var index =threeUtil.getIndex()
      var d = this.originData[index]

      if(d.video){
        this.showVideo =true;
        this.placement = d.placement;
        this.$nextTick(()=>{
          this.setUrl(d.video)
        })
      }
    },
    setUrl(url){
      if(!url || url.length ==0) return
      let v = document.getElementById('video')
      if(v) v.src= url
    },
    doLeft(){
      this.showVideo =false
      return threeUtil.left()
    }
    ,doRight(){
      this.showVideo =false
      return threeUtil.right()
    }
  }
}
</script>

<style scoped>

.book{
  background-image: url("~@/assets/book.png");
  background-repeat: no-repeat;
  background-size: 100% 100%
}
.main{
  background-image: url("~@/assets/mainpage.jpg");
  background-repeat: no-repeat;
  background-size:100% 100%
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
  top:10px;
  right:10px;
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
