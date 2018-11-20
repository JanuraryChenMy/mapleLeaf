<template>
	<div>
		<header>
			111
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
		}
	}
</script>

<style lang="scss" scoped>
	$nav_Height:0.4rem;
	header{
		width:100%;
		height:0.44rem;
		background:red;
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