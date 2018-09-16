<template>
  <div class="full main">
    <!-- <div class='full' style="backgroundColor:transparent" @click="currentPage ='book'">

    </div> -->
    <webview class ='full' src = 'static/index.swf' plugins ="true"/>
    <div class="full book" v-if="currentPage=='book'">
      <div id="three-container"></div>
    </div>  
    <video :class="placement == 'left' ? 'left-vi':'right-vi'" id='video'  autoplay v-if="showVideo&&currentPage=='book'"  ></video>
  </div>
</template>

<script>
import threeUtil from '../../util/threeUtil.js'
import {mapState} from 'vuex'
export default {
  data(){
    return {
      currentPage:'main', 
      placement:'left',
      showVideo:false
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
          this.doLeft()
        }
        if(message =='right'){
          this.doRight()
        }
        if(message == 'back'){
          this.currentPage = 'main'
        }
        if(message == 'enter'){
          this.currentPage = 'book'
        }
      })
  },
  watch:{
    currentPage(val){
      if(val == 'book'){
        this.$nextTick(()=>{
          threeUtil.init(this.list)
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
      v.src= url
    },
    doLeft(){
      this.showVideo =false
      threeUtil.left()

    }
    ,doRight(){
      this.showVideo =false
      threeUtil.right()
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
  top:360px;
}
.right-vi{
  position: absolute;
  z-index: 1000;
  width: 550px;
  height:300px;
  left:1220px;
  top:360px;
}
.right-bottom{
  position : absolute;
  bottom :50px;
  right:50px
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
