<template>
  <div class="man" @click="handleClick">
    <div class="man-img">
      <img :src="item.pic">
    </div>
    <div class="man-title">
      <span class='man-name'>{{item.name}}</span>
      <span class='man-time'>{{item.time}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props:['item'],
  methods:{
    handleClick(){
      this.$router.push('/item/'+this.item.guid)
    }
  }
}
</script>
<style>
.man{
  cursor: pointer;
  width: 188px;
  height:336px;
  background: #FFA200;
  position: relative;
  padding-top:10px;
  margin-right:93px;
}
.man-img{
  width: 165px;
  height: 229px;
  background: #fff;
  margin-left:10px;
  position: relative;
}
.man-img img{
  width:161px;
  height:225px;
  position: absolute;
  left:2px;
  top:2px;
}
.man-title{
  border:1px solid #000;
  background: #F9B747;
  height:100px;
  margin-top:10px;
  position: relative;
  text-align: center;
}
.man-name{
  text-align: center; 
  font-size: 30px;
  line-height: 55px;
  font-weight: bold;
}
.man-time{
  text-align: center;
  font-size:18px;
}
</style>

