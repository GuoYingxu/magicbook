<template >
  <div class="full main">
    <!-- <div class='full' style="backgroundColor:transparent" @click="currentPage ='book'">
    
    </div> --> 
    <MenuPage @menuClick='onMenuHandle'/>
    <!-- <webview id="flashview" class='full' style="background:#000" ref='flashview' src="static/swf.html" plugins="true" nodeintegration="true"/> -->
    <PicList v-show="currentPage=='list'"></PicList>
    <Pic v-if='currentPage=="pic"'></Pic>
    <Vpage v-if='currentPage=="video"'></Vpage>
    <RichPic v-if='currentPage=="richpic"'></RichPic>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import { setTimeout, clearTimeout } from 'timers';
import PicList from './piclist'
import Pic from './Pic'
import Vpage from './videoPage'
import RichPic from './RichPic'
import util from '../../util/util.js'
import MenuPage from './MenuPage'
export default {
  data(){
    return {
    
      placement:'left',
      showVideo:false,
      index:0,
      timer:null
    }
  },
  components:{
    PicList,
    Pic,
    Vpage,
    RichPic,
    MenuPage
  },
  computed:{
    ...mapState({
      list:state=> state.Pics.json,
      originData: state => state.Pics.originData,
      currentPage: state => state.Pics.currentPage
    }) ,
  },
  mounted(){
  //  console.log('=========lic mounted',document.getElementById('flashview'))
  //   var webview = document.getElementById("flashview");
  //   webview.addEventListener('ipc-message',(event)=>{
  //     console.log(event)
  //     console.log(event.args)
  //     if(event.channel == 'dddd' ){ 
  //       if(event.args[1]=='pic'){ 
  //         let name= event.args[0];
  //         let pics = util.findNodeList(name, this.list)
         
  //         this.$store.commit('SET_CURRENT_ALL',pics)
  //         this.$store.commit('SET_CURRENT_PAGE','list')  

  //       } 
  //       if(event.args[1]=='rich'){
  //         let name= event.args[0];
  //         let pics = util.findNodeList(name, this.list) 
  //         console.log(pics)
  //         this.$store.commit('SET_CURRENT_ALL',pics)
  //         this.$store.commit('SET_CURRENT_PAGE','pic')
          
  //       }
  //       if(event.args[1]=='video'){
  //         let name= event.args[0];
  //         let pics = util.findNode(name, this.list) 
  //         console.log(pics)
  //         this.$store.commit('SET_CURRENT_NODE',pics)
  //         this.$store.commit('SET_CURRENT_PAGE','video')
  //       } 
  //     }
   // })
    //  require('electron').ipcRenderer.on('key', (event, message) => {
    //     console.log(message) // Prints 'whoooooooh!'
       
       
    //   })
  },
  watch:{
   
   
  },
  created(){
     
  },
  methods:{
    onMenuHandle(args){
       if(args[1]=='list'){ 
          let name=  args[0];
          let pics = util.findNodeList(name, this.list)
         
          this.$store.commit('SET_CURRENT_ALL',pics)
          this.$store.commit('SET_CURRENT_PAGE','list')  

        } 
        if( args[1]=='pic'){
          let name=  args[0];
          let pics = util.findNodeList(name, this.list) 
          console.log(pics)
          this.$store.commit('SET_CURRENT_ALL',pics)
          this.$store.commit('SET_CURRENT_PAGE','pic')
          
        }
        if( args[1]=='video'){
          let name= args[0];
          let pics = util.findNode(name, this.list) 
          console.log(pics)
          this.$store.commit('SET_CURRENT_NODE',pics)
          this.$store.commit('SET_CURRENT_PAGE','video')
        } 

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
  
}

.full{
  position:absolute;
  left:0;
  right:0;
  bottom:0;
  top:0;
  overflow: hidden;
  background:#f00
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
