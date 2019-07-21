<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'magicbook',
    mounted(){
    //  this.$store.dispatch('getList')
    }
  }
</script>

<style>
  #app{
    padding:0;
    margin:0
  }
  body{
    padding:0;
    margin:0;
    /* CURSOR: none  */
  }
  /* CSS */
</style>
