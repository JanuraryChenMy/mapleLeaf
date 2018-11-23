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
	</div>
</template>
<script>
	 export default{
	 	  name:'result',
	 	  data(){
	 	  	 return {
                value:''
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
</style>