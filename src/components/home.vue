<template>
	<div>
		<header>
		     <ul>
		     	 <li class="search">
		     	 	 <span class="span">尖叫设计</span>
		     	 </li>
		          	
		          
		          <li class="search">

		          <span class="tubiao"><i class="iconfont icon-originalimage"></i></span>
		          <input class="input" type="text" placeholder="搜索我的尖叫好物" @click="search">
		          </li>
		     </ul>
		</header>
		<nav>
			<ul class="nav-list">
				<router-link tag="li" to="/home/common" activeClass="active" class="nav-bar"><span>推荐</span ></router-link>
				<router-link tag="li" to="/home/furniture" activeClass="active" class="nav-bar"><span>家具</span></router-link>
				<router-link tag="li" to="/home/house" activeClass="active"  class="nav-bar"><span>家居</span></router-link>
				<router-link tag="li" to="/home/active" activeClass="active" class="nav-bar"><span>活动</span></router-link>
			</ul>
		</nav>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name:'home',
		data(){
			return {
				
			}
		},
		methods:{
			search(){
				 this.$router.push('/search')
			}
		}
	}
</script>

<style lang="scss" scoped>
	$nav_Height:0.4rem;
	header{
		width:100%;
		height:0.44rem;
		ul{
		    clear:both;
			li{
				float:left;
				position: relative;
			}
		}
	}
	.span{
		font-size:0.16rem;
		color:black;
		font-weight: bold;
		line-height: 0.48rem;
		margin-left: 0.1rem;
		margin-right: 0.1rem; 
		font-family: "SimHei";
	}
		
	.input{
		   padding-left:0.25rem;
           margin-top:0.1rem;
           border-radius: 0.5rem;
           border:none;
           height:0.26rem;
           width:2.4rem;
           background:#F5F5F5;
           outline:none;
	}
	.tubiao{
		position:absolute;
		top:0.12rem;
		left:0.05rem;
	}
	.nav-list{
		width:100%;
		height:$nav_Height;
		display:flex;
		.nav-bar{
			flex:1;
			text-align:center;
			height:$nav_Height;
			line-height:$nav_Height;
			color:#808080;
		}
		.active{
			color:black;
			border-bottom:solid 0.02rem #000;
		}
	}

</style>