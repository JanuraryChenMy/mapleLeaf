<template>
	<div>
		<header>
			 <a href="/home" class="header-left">
			 	<img src="../assets/home.png">
			 </a>
			 <h3 class="header-middle">管理收货地址</h3>
			 <router-link tag="div" to="/my/information" class="header-right"><img src="../assets/me.png"></router-link>
		</header>
		<div class="middle">您还没有收货地址，添加一个吧</div>
		<router-link tag="p"></router-link>
		<p class="add">添加收货地址</p>
	</div>
</template>

<script>
	
</script>

<style lang="scss" scoped>
$nav_Height:0.4rem;
header{
	box-sizing:border-box;
	height:$nav_Height;
	width:100%;
	background:#fff;
	padding:0 0 0 0.1rem;
	border-bottom:0.01rem solid #f5f5f5;
	position: relative;
	.header-left{
		display: inline-block;
		width:0.32rem;
		height:0.32rem;
		line-height:0.25rem;
		position: absolute;
		left:0.1rem;
		top:50%;
		transform: translateY(-50%);
		img{
			display: block;
			width:0.26rem;
			margin:0.03rem 0;
			border: 0;
		}
	}
	.header-middle{
		position: absolute;
		height:$nav_Height;
		line-height: $nav_Height;
		left:50%;
		transform: translateX(-50%);
	}
	.header-right{
		cursor: pointer;
		display: inline-block;
		position: absolute;
		height: $nav_Height;
		line-height:$nav_Height;
		right:0.1rem;
		img{
			display: block;
			width:0.26rem;
			margin:0.03rem 0;
			border: 0;
		}
	}
}
.middle{
	text-align: center;
	height:5.2rem;
	line-height: 5.2rem;
}
.add{
	position: fixed;
	bottom:0;
	display: block;
	background:#000;
	color:#fff;
	height:0.4rem;
	line-height: 0.4rem;
	text-align: center;
	width:100%;
}
</style>