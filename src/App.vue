<template>
  <div id="app">
    <nav class="nav" v-if="$store.state.show">
      <router-link tag="div" to="/home" activeClass="active" class="nav-bar">首页</router-link>
      <router-link tag="div" to="/classify" activeClass="active" class="nav-bar">分类</router-link>
      <router-link tag="div" to="/car" activeClass="active" class="nav-bar">购物车<div class="count" v-html="count" v-if="count"></div></router-link>
      <router-link tag="div" to="/message" activeClass="active" class="nav-bar">消息</router-link>
      <router-link tag="div" :to="$store.state.isLog?'/my/myself':'/my/login'" activeClass="active" class="nav-bar" @click="handClick()">我</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

// export default {
//   name: 'App',
//   data(){
//     return{
//       store.state.show:true,
//     }
//   },
//   methods:{
//     handClick(){
//       if(this.store.state.show){
//         this.store.state.show = !this.store.state.show;
//       }
//     }
//   }
// }

  import catalog from './components/catalog'
  import axios from 'axios'
export default {
  name: 'App',
  data(){
    return{
        count:0
    }
  },
  components:{
    catalog
  },
  mounted(){
    if(this.$store.state.isLog){
      axios.get('/api/cart').then(res=>{
        this.$store.commit('changeCartCount',res.data.data.count);
        this.count = this.$store.cartCount;
      })
    }
  }
}

</script>

<style lang="scss">
  html{ font-size:26.66666667vw;height:100%; }
  body{
    font-size:0.16rem;
    height:100%;
  }
  *{
    margin:0;
    padding:0;
  }
  ul,li{
    list-style:none;
  }
  #app{
    height:100%;
  }
 .nav{
    width:100%;
    height:0.44rem;
    display:flex;
    position:fixed;
    bottom:0;
    left:0;
    background:white;
    z-index:100;
    .nav-bar{
      flex:1;
      height:100%;
      text-align:center;
      line-height:0.44rem;
      color:#808080;
      position:relative;
      .count{
        position:absolute;
        right:0;
        top:0.02rem;
        width:0.16rem;
        height:0.16rem;
        background:#FFD444;
        border-radius:50%;
        font-size:0.12rem;
        line-height:0.16rem;
        font-weight:bold;
      }

    }
    .active{
      color:#000;
      font-weight:bold;
    }
  }
  
</style>
