<template>
  <div class="man" @click="handleClick" :style="stuStyle">
    <div style="border:1px solid red;border-radius:4px;background:white;padding:8px;display:flex; flex-direction:column;height:100%"> 
      <div class="man-img"  :style="imageStyle">
        <img :src="item.pic" width="100%" >
      </div>
      <div class="man-title" style='flex:1;margin-top:4px'>
        <span class='man-name'>{{item.school}}</span>
        <span class='man-time'>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import {w,h} from '../../util/util'
export default {
  props:['item'],
  computed:{
    stuStyle(){
      return `width:${w(259)}px;height:${h(386)}px`
    },
    imageStyle(){
      return `height:${h(262)}px;width:100%`
    }
  },
  mounted(){
    console.log(this.item)
  },
  methods:{
    handleClick(){
      this.$router.push('/xj/'+this.item.guid)
    }
  }
}
</script>
<style>
.man{
  cursor: pointer;
  background: transparent;
  position: relative;
  border:1px dashed red;
  border-radius: 4px;
  padding:8px;
  margin: 8px;
}
.man-img{
  background: #fff;
}
.man-img img{ 
  width:100%;
  height: 100%;
}
.man-title{
  border:1px solid rgba(0,0,0,0.2);
  background: rgba(200,200,200);
  height:100px;
  margin-top:10px;
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
}
.man-name{
  text-align: center; 
  font-size: 20px;
  color:red;
}
.man-time{
  text-align: center;
  font-size:20px;
  color:red
}
</style>

