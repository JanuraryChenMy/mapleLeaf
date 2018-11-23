<template>
	<div> 
	     <ul class="ul">
	     	<li class="li">
	     		<span class="tubiao"><i class="iconfont icon-originalimage"></i></span>
		 		<input class="input" type="text" placeholder="搜索我的尖叫好物" v-model="value">
	     	</li>
	     	<li>
	     	  <router-link to="/home">
	     		<span class="tubiao2"><i class="iconfont icon-store"></i></span>
	     	</router-link>
	     	</li>	
	     </ul>
	     <ul class="ul2">
             <li class="li2">
             	<div class="span">热门搜索</div>
                <div class="div" v-for="data in datalist" @click="click(data)">{{data}}</div>
             </li> 
             <li class="li3">
             	<div class="div2">历史搜索</div>
             	<div class="div3" v-for="data in datalist2">{{data}}</div>
             	<i class="iconfont icon-close"></i>
             </li> 
	     </ul>
	     
	</div>
</template>
<script>
    import axios from 'axios';


	 export default{
	 	   name:'search',
	 	   data(){
	 	   	   return {
	 	         value:'',
	 	         datalist:['尖叫设计','暖手宝','沙发','被子','餐具','茶具','吊灯','厨房','儿童','HAY','Arebia','家饰','收纳','床上用品','旅行'],
	 	         datalist2:[]
	 	   	   }
	 	   },
	 	   mounted(){
	 	   	   // click(){
          //          axios.get(``)
	 	   	   // }
	 	   },
	 	   methods:{
               click(data){
               	   var id = window.encodeURIComponent(data);
               	   console.log(id)
               	   this.$router.push('/result/'+id)
               }
	 	   }
	 }
</script>
<style lang="scss" scoped>
	 $nav_Height:0.4rem;
	 .li{
	 	   margin-left: 0.2rem;
	 	   margin-top: 0.1rem;
          .tubiao{
          	position:absolute;
          	left:0.26rem;
          	top:0.12rem;
          }
          .input{
          	height:0.26rem;
          	width:2.4rem;
          	padding-left: 0.3rem;
          	background:#F5F5F5;
          	outline:none;
          	border:none;
          	border-radius: 0.5rem;
          }
	 }
	 .tubiao2{
	 	  position:absolute;
	 	  right:0.12rem;
	 	  top:0.12rem; 
	 	  i{
               font-size: 0.2rem;
	 	  }
	 	
	 }
    .ul{
    	padding-bottom: 0.08rem;
        border-bottom:1px solid #F5F5F5;  	 
    }
     .li2{
     	  margin-top: 0.2rem;
     	  margin-left: 0.13rem;
     	  overflow:hidden;
          .div{
          	 margin-top: 0.2rem;
          	 float:left;
          	 background:#F5F5F5;
          	 font-size: 0.14rem;
          	 line-height: 0.36rem;
          	 margin-right:0.2rem;
          	 padding-left: 0.2rem;
          	 padding-right:0.2rem; 
          }
     }
     .span{
     	 color:#808080;
     	 font-size: 0.12rem;
     	 margin-top: 0.2rem;
     }
     .li3{
     	margin-top: 0.3rem;
     	margin-left: 0.13rem;
     	position:relative;
        .div2{
        	color:#808080;
        	font-size: 0.12rem;
        	line-height: 0.24rem;
        	margin-top: 0.2rem;
        }
        .div3{
          	 margin-top: 0.2rem;
          	 float:left;
          	 background:#F5F5F5;
          	 font-size: 0.14rem;
          	 line-height: 0.36rem;
          	 margin-right:0.2rem;
          	 padding-left: 0.2rem;
          	 padding-right:0.2rem; 
          }
          .icon-close{
          	  font-size: 0.15rem;
          	  position:absolute;
          	  right: 0.3rem;
          	  top:0.05rem;	
          }
     }
     	
</style>
