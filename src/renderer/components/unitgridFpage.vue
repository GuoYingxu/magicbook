<template>
  <div class="full main"> 
      <div  class='back' :style = 'backstyle' @click='enterhandler'></div>
      <div class="s1" :style="s1style">
          <video  style="position:relative" autoplay loop :width="(wp*763)+'px'" :height="(hp*385)+'px'"  id="myVideo1"  >
			<source src="/static/v/f01.mp4" type="video/mp4"/>
         </video>
      </div>

      <div class="s1" :style="s2style">
          <video   style="position:relative" autoplay loop :width="(wp*763)+'px'" :height="(hp*385)+'px'"  id="myVideo2"  >
			<source src="/static/v/f02.mp4" type="video/mp4"/>
         </video>
      </div>

      <div class="s1" :style="s3style">
          <video  style="position:relative" autoplay loop :width="(wp*763)+'px'" :height="(hp*385)+'px'"  id="myVideo3"  >
			<source src="/static/v/f03.mp4" type="video/mp4"/>
         </video>
      </div>

      <div class="s1" :style="s4style">
          <video  style="position:relative" autoplay loop :width="(wp*763)+'px'" :height="(hp*385)+'px'"  id="myVideo4"  >
			<source src="/static/v/f04.mp4" type="video/mp4"/>
         </video>
      </div>
    <!-- <div class="b1" :style="style1" @click="b"></div>
    <div class="b2"  :style="style2" @click="b2"></div>
    <div class="b3" :style="style3" @click="b3"></div>
    <div class="b4" :style="style4" @click="b4"></div> 
    <webview id='web'  v-if="webvisible" :src ="url"  :style="style5"></webview>
    <div :style="style6" v-if="webvisible"> 
        <Button type="primary" shape="circle" icon="md-arrow-round-back"  @click="webvisible=false" ></Button>
    </div> -->
  </div>
</template>

<script> 
import {mapState} from 'vuex'
import { setTimeout, clearTimeout } from 'timers';  
export default {
  data(){
    return {
     webvisible:false ,
     name:'anc',
     url:"http://www.esgcc.com.cn",
     enterstyle:"",
     hp:"",
     wp:"",
     backstyle:"",
    s1style:"",
    s2style:"",
    s3style:"",
    s4style:"",
     style2:"",
     style3:"",
     style4:"",
     style5:"position:absolute;left:0;top:0;z-index:500;  width:1920px; height:1080px",
     style6:"position:absolute;right:30px;top:1010px;z-index:600"
    }
  },
  computed:{ 
  },  
  created(){ 
  }, 
  mounted(){ 
    let hp = document.getElementsByClassName('full')[0].clientHeight/1200
    let wp =document.getElementsByClassName('full')[0].clientWidth/1920
    this.hp=hp;
    this.wp=wp;
    this.enterstyle=`left:${wp*808}px;top:${hp*809}px;width:${wp*144}px;height:${hp*144}px;`
     this.s1style=`left:${wp*116}px;top:${hp*218}px;width:${wp*763}px;height:${hp*385}px;`
      this.s2style=`left:${wp*898}px;top:${hp*218}px;width:${wp*763}px;height:${hp*385}px;`
       this.s3style=`left:${wp*116}px;top:${hp*619}px;width:${wp*763}px;height:${hp*385}px;`
        this.s4style=`left:${wp*898}px;top:${hp*619}px;width:${wp*763}px;height:${hp*385}px;`
         this.backstyle=`left:${wp*832}px;top:${hp*1077}px;width:${wp*137}px;height:${hp*45}px;`
    // this.style1=`width: ${wp*225}px; height:${hp*220}px; left:${wp*709}px; top:${hp*309}px;`
    //  this.style3=`width: ${wp*225}px; height:${hp*220}px; left:${wp*709}px; top:${hp*582}px;`
    //   this.style2=`width: ${wp*225}px; height:${hp*220}px; left:${wp*986}px; top:${hp*309}px;`
    //    this.style4=`width: ${wp*225}px; height:${hp*220}px; left:${wp*986}px; top:${hp*582}px;`
    //     this.style5=`position:absolute;left:0;top:0;z-index:500;  width:${wp*1920}px; height:${hp*1080}px`
    //     this.style6=    `position:absolute;right:${wp*30}px;top:${hp*1010}px;z-index:600`
  },
  methods:{
    enterhandler:function(){
      this.$router.push('/menu')
    },
      greet: function (event) {
      // `this` 在方法里指向当前 Vue 实例
      alert('Hello ' + this.name + '!')
      // `event` 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName)
      }
    },
    b:function(event){ 
        this.webvisible =true;
        this.url="http://www.sgcc.com.cn"
        // this.$nextTick(()=>{
        //    url="http://www.baidu.com"
        // })
    },
     b2: function(event) {
        
        this.webvisible =true;
        this.url="http://www.esgcc.com.cn/"
         
    },
     b3: function(event) {
        
        this.webvisible =true;
         this.url="http://www.95598.cn/person/index.shtml"
    },
     b4: function(event) {
        
        this.webvisible =true;
         this.url="https://www.pgyer.com/0bbE"
    }
  }
}
</script>

<style scoped>
video {
    object-fit:fill;
}
.book{
  background-image: url("~@/assets/1.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%
}
.main{
  background-image: url("~@/assets/fp.jpg");
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
.back{
  position: absolute;
  background-image: url("~@/assets/back.png");
  background-repeat: no-repeat;
  background-size:100% 100%; 
}
.b1{
  position: absolute;
  background-image: url("~@/assets/b1.png");
  background-repeat: no-repeat;
  background-size:100% 100%; 
  
}
.s1{
  position: absolute;   
}

.b3{
  position: absolute;
   background-image: url("~@/assets/b3.png");
  background-repeat: no-repeat;
  background-size:100% 100%;
  
}
.b4{
  position: absolute;
   background-image: url("~@/assets/b4.png");
  background-repeat: no-repeat;
  background-size:100% 100%;
 
  
}
.b2{
  position: absolute;
   background-image: url("~@/assets/b2.png");
  background-repeat: no-repeat;
  background-size:100% 100%;
 
 
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
