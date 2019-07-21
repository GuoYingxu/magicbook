<template>
  <div class="full main"> 
    <div  class='enter1' :style = 'enterstyle1' @click='enterhandler1'></div>
     <div  class='enter2' :style = 'enterstyle2' @click='enterhandler2'></div>
      <div  class='enter3' :style = 'enterstyle3' @click='enterhandler3'></div>
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
     enterstyle1:"",
      enterstyle2:"",
       enterstyle3:"",
     style1:"",
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
    this.enterstyle1=`left:${wp*527}px;top:${hp*686}px;width:${wp*408}px;height:${hp*72}px;`
     this.enterstyle2=`left:${wp*1039}px;top:${hp*686}px;width:${wp*263}px;height:${hp*72}px;`
       this.enterstyle3=`left:${wp*886}px;top:${hp*1008}px;width:${wp*136}px;height:${hp*44}px;`
    // this.style1=`width: ${wp*225}px; height:${hp*220}px; left:${wp*709}px; top:${hp*309}px;`
    //  this.style3=`width: ${wp*225}px; height:${hp*220}px; left:${wp*709}px; top:${hp*582}px;`
    //   this.style2=`width: ${wp*225}px; height:${hp*220}px; left:${wp*986}px; top:${hp*309}px;`
    //    this.style4=`width: ${wp*225}px; height:${hp*220}px; left:${wp*986}px; top:${hp*582}px;`
    //     this.style5=`position:absolute;left:0;top:0;z-index:500;  width:${wp*1920}px; height:${hp*1080}px`
    //     this.style6=    `position:absolute;right:${wp*30}px;top:${hp*1010}px;z-index:600`
  },
  methods:{
    enterhandler1:function(){
      this.$router.push('/menu1')
    },
     enterhandler2:function(){
      this.$router.push('/menu2')
    },
     enterhandler3:function(){
      this.$router.push('/')
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

.book{
  background-image: url("~@/assets/1.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%
}
.main{
  background-image: url("~@/assets/umenu.jpg");
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
.enter1{
  position: absolute;
  background-image: url("~@/assets/outer.png");
  background-repeat: no-repeat;
  background-size:100% 100%; 
}
.enter2{
  position: absolute;
  background-image: url("~@/assets/elec.png");
  background-repeat: no-repeat;
  background-size:100% 100%; 
}
.enter3{
  position: absolute;
  background-image: url("~@/assets/home.png");
  background-repeat: no-repeat;
  background-size:100% 100%; 
}
.b1{
  position: absolute;
  background-image: url("~@/assets/b1.png");
  background-repeat: no-repeat;
  background-size:100% 100%; 
  
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
