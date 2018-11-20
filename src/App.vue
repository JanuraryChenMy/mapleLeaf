<template>
  <div id="app">
    <nav class="nav" v-if="$store.state.show">
      <router-link tag="div" to="/home" activeClass="active" class="nav-bar">首页</router-link>
      <router-link tag="div" to="/classify" activeClass="active" class="nav-bar">分类</router-link>
      <router-link tag="div" to="/car" activeClass="active" class="nav-bar">购物车</router-link>
      <router-link tag="div" to="/message" activeClass="active" class="nav-bar">消息</router-link>
      <router-link tag="div" to="/my" activeClass="active" class="nav-bar">我</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{

    }
  }
}
</script>

<style lang="scss">
  html{ font-size:26.66666667vw; }
  body{
    font-size:0.16rem;
  }
  *{
    margin:0;
    padding:0;
  }
  ul,li{
    list-style:none;
  }
 .nav{
    width:100%;
    height:0.44rem;
    display:flex;
    position:fixed;
    bottom:0;
    left:0;
    .nav-bar{
      flex:1;
      height:100%;
      text-align:center;
      line-height:0.44rem;
      color:#808080;
    }
    .active{
      color:#000;
      font-weight:bold;
    }
  }
  
</style>
