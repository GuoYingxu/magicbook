<template>
  <div class='full infopage'>
    <div class='wi1'>
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
    <div class='return-btn' @click="returnfunc">
      <img src="/static/return.png">
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import _ from 'lodash'
export default {
  data(){
    return {
      item:null
    }
  },
  mounted(){
    var id = this.$route.params.id
    var item = _.find(this.list, t=> t.guid == id)
    if(item){
      this.item = item
    }
    this.refs.page2.scrollTop(660)
  },
  watch:{
    $route(val){
       var id = this.$route.params.guid
      var item = _.find(this.list, t=> t.guid == id)
      if(item){
        this.item = item
      }
    this.refs.page2.scrollTop =660

      
    }
  },
  computed:{
    ...mapState({
      list: state => state.Pics.pics
    })
  },
  methods:{
    returnfunc(){
      this.$router.go(-1)
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

