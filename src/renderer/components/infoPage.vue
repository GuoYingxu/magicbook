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
    </div>
     -->
    <div class='img-l' v-for = '(pic,index) in pics' :key = 'index' v-show = "index==currentIndex" >
      <img :src = "pic" width="100%" height="100%">
    </div>
    <div class='next-btn' @click="nextfunc" v-show= "currentIndex < pics.length-1">
    </div>
    <div class='pre-btn' @click="prefunc" v-show="currentIndex>0">
    </div>
    <div class='return-btn' @click="returnfunc">
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
      item:null
    }
  },
  mounted(){
    var id = this.$route.params.id
    var item = _.find(this.list, t=> t.guid == id)
    if(item){
      this.item = item
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
      list: state => state.Pics.pics
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
  background-image: url("~@/assets/return.png");
  background-repeat: no-repeat;
  width:147px;
  height:52px;
}
.pre-btn{
  z-index: 5;
  position:absolute;
  bottom: 43px;
  right:403px;
   background-image: url("~@/assets/pre.png");
  background-repeat: no-repeat;
  width:147px;
  height:52px;
}
.next-btn{
  position: absolute;
  z-index:5;
  right:223px;
  bottom:43px;
   background-image: url("~@/assets/next.png");
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

