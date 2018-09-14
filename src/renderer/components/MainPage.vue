<template>
  <div class="full main">
    <!-- <div class='full' style="backgroundColor:transparent" @click="currentPage ='book'">

    </div> -->
    <webview class ='full' src = 'static/index.swf' plugins ="true"/>
    <div class="full book" v-if="currentPage=='book'">
      <div id="three-container"></div>
    </div> 
  </div>
</template>

<script>
import threeUtil from '../../util/threeUtil.js'
import {mapState} from 'vuex'
export default {
  data(){
    return {
      currentPage:'main'
    }
  },
  computed:{
    ...mapState({
      list:state=> state.Pics.pics
    })
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
          
        })
      }
    }
  },
  methods:{
    doLeft(){
      threeUtil.left()
    }
    ,doRight(){
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
