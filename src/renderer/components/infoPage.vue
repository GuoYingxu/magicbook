<template>
  <div class='full infopage'>
    <!-- <div class='wi1'>
      <div class= 'text-content1'>
        <img :src="item.pic" class='content-img'>
        <div>{{item && item.content}}</div>
      </div>
    </div>
    <div class='wi2'>
    <div class= 'text-content2 ' ref='page2'>
      <img :src="item.pic" class='content-img'>
       <div>{{item && item.content}}</div>
    </div>
    </div>
    <div class='wi3'>

    <div class= 'text-content3' ref ="page3">
      <img :src="item.pic" class='content-img'>
       <div>{{item && item.content}}</div>
    </div>
    </div> -->
    
    <div class='img-l' v-for = '(pic,index) in pics' :key = 'index' v-show = "index==currentIndex" >
      <img :src = "pic" width="100%" height="100%">
    </div>
    <div class='next-btn' @mousedown="nextDown" @mouseup="nextup" @mouseleave="nextleave"  v-show= "currentIndex < pics.length-1">
    </div>
    <div class='pre-btn' @mousedown="preDown" @mouseup="preup" @mouseleave="preleave"  v-show="currentIndex>0">
    </div>
    <div class='return-btn' @mousedown="returnDown" @mouseup="returnup" @mouseleave="returnleave" >
    </div>
  </div>
  
</template>
<script>
import { mapState } from 'vuex';
import _ from 'lodash'
export default {
  data(){
    return {
      currentIndex: 0,
      isNextPressDown:false,
      isPrePressDown:false,
      isReturnPressDown:false,
      item:null
    }
  },
  mounted(){
    var id = this.$route.params.id
    var item = _.find(this.list, t=> t.guid == id)
    if(item){
      this.item = item
      console.log(item)
    }
  },
  watch:{
    $route(val){
      var id = this.$route.params.guid
      var item = _.find(this.list, t=> t.guid == id)
      if(item){
        this.item = item
      }
      console.log(this.item)
    }
  },
  computed:{
    ...mapState({
      list: state => state.Pics.json
    }),
    pics(){
      if(this.item){
        return this.item.pics;
      }else{
        return []
      }
    }
  },
  methods:{
    returnDown(){
      this.isReturnPressDown=true;
    },
    returnup(){
      if(this.isReturnPressDown){

        this.returnfunc()
      } 
      this.isReturnPressDown =false
    },
    returnleave(){
      this.isReturnPressDown = false
    },
    nextDown(){
      this.isNextPressDown = true
    },
    nextup(){
      if(this.isNextPressDown === true){
        this.nextfunc()
      }
      this.isNextPressDown = false
    },
    nextleave(){
      this.isNextPressDown = false
    },

    preDown(){
      this.isPrePressDown = true
    },
    preup(){
      if(this.isPrePressDown === true){
        this.prefunc()
      }
      this.isPrePressDown = false
    },
    preleave(){
      this.isPrePressDown = false
    }, 
    returnfunc(){
      this.$router.go(-1)
    },
    prefunc(){
      if(this.currentIndex>0){
        this.currentIndex --
      }
    },
    nextfunc(){
      if(this.currentIndex< this.item.pics.length-1){
        this.currentIndex ++
      }
    }
  }

}
</script>
<style>
.infopage{
  background-image: url("~@/assets/info.jpg");
  background-repeat: no-repeat;
  background-size:100% 100%
}
.return-btn{
  position: absolute;
  right:43px;
  bottom:43px;
  z-index:5;
  background-image: url("~@/assets/professor/return.png");
  background-repeat: no-repeat;
  width:147px;
  height:52px;
}
.return-btn-active{
  position: absolute;
  right:43px;
  bottom:43px;
  z-index:5;
  background-image: url("~@/assets/professor/return_1.png");
  background-repeat: no-repeat;
  width:147px;
  height:52px;
}
.pre-btn{
  z-index: 5;
  position:absolute;
  bottom: 43px;
  right:403px;
  background-image: url("~@/assets/professor/pre.png");
  background-repeat: no-repeat;
  width:147px;
  height:52px;
}
.pre-btn-active{
  z-index: 5;
  position:absolute;
  bottom: 43px;
  right:403px;
  background-image: url("~@/assets/professor/pre_1.png");
  background-repeat: no-repeat;
  width:147px;
  height:52px;
}
.next-btn{
  position: absolute;
  z-index:5;
  right:223px;
  bottom:43px;
   background-image: url("~@/assets/professor/next.png");
  background-repeat: no-repeat;
  width:147px;
  height:52px;
}
.next-btn-active{
  position: absolute;
  z-index:5;
  right:223px;
  bottom:43px;
   background-image: url("~@/assets/professor/next_1.png");
  background-repeat: no-repeat;
  width:147px;
  height:52px;
}
.img-l{
  position: absolute;
  left:0;
  top:0;
  width: 1920px;
  height:1080px;
  z-index: 2
}
.wi1{
  width:550px;
  left:120px;
  top:214px;
  position: absolute;
  overflow: hidden;
  height: 660px;

}
.text-content1{
  width:530px;
  left:10px;
  top:10px;
  position: absolute;
  overflow: hidden;
  height: 660px;
  line-height: 1.5;
}
.content-img{
  width:231px;
  height:313px;
  float: left; 
  margin-right: 10px;
}
.wi2{
  width:550px;
  left:721px;
  top:214px;
  position: absolute;
  overflow: hidden;
  height: 660px;
}
.text-content2{
  width:530px;
  left:10px;
  top:-655px;
  position: absolute;
  padding:10px;
  overflow: hidden;
  height: 660px;
  line-height: 1.5;
}
.wi3{
  width:550px;
  left:1309px;
  top:214px;
  position: absolute;
  overflow: hidden;
  height: 660px;
}

.text-content3{
  width:530px;
  left:10px;
  top:-1330px;
  position: absolute;
  padding:10px;
  overflow: hidden;
  height: 660px;
  line-height: 1.5;
}

</style>

