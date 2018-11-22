<template>
	<div>
		<header>
			 <a href="/home" class="header-left">
			 	<img src="../assets/home.png">
			 </a>
			 <h3 class="header-middle">个人信息</h3>
			 <router-link tag="div" to="/my/myself" class="header-right"><img src="../assets/me.png"></router-link>
		</header>
		<div class="information-all">
			<div class="name">
				<span>头像</span>
				<a href="">
					<img src="https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLliav3HOMFfLRaddtdtkicT7kOo77fxBOJGaGb8WVub1T9yDXxxZ31hkLIoCmBQKyDB3QwaePhys3A/132">
					<span class="icon iconfont">></span>
				</a>
			</div>
			<ul>
				<li><div class="a"><span>昵称</span><span>九歌</span><span>></span></div></li>
				<li><div class="a"><span>个性签名</span><span>123</span><span>></span></div></li>
				<li><div class="a"><span>性别</span><span>女</span><span>></span></div></li>
				<li><div class="a"><span>年龄段</span><span>95后</span><span>></span></div></li>
				<li><div class="a"><span>星座</span><span>天蝎座</span><span>></span></div></li>
				<li><div class="a"><span>职业</span><span>学生</span><span>></span></div></li>
			</ul>
			<router-link tag="div" to="/my/address" class="address">
				<span>收货地址</span>
				<span>></span>
			</router-link>
		</div>
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
.information-all{
	box-sizing: border-box;
	width:100%;
	background:#fff;
	padding-left:0.2rem;
	margin:0.2rem 0;
	.name{
		box-sizing:border-box;
		width:100%;
		height:1rem;
		background:#fff;
		margin:0.2rem 0;
		position: relative;
		padding: 0;
		border-bottom:0.01rem solid #eaeaea;
		span{
			display: inline-block;
			height:1rem;
			line-height:1rem;
			position: relative;
			top:-0.3rem;
		}
		a{	
			position: relative;	
			height: 1rem;
			line-height:1rem;
			right:-1.7rem;
			text-decoration: none;
			img{
				display: inline-block;
				width:0.6rem;
				height:0.6rem;
				margin:0.2rem 0.2rem;
				border-radius:50%;
				position: relative;
				top:40%;
				transform: translateY(-50%);
			}
			.iconfont{
				color:#ccc;
				font-size:0.36rem;
			}
		}
	}
	ul{
		padding:0;
		margin:0;
		width:100%;
		li{
			width:100%;
			height:0.5rem;
			line-height:0.5rem;
			border-bottom:0.01rem solid #eaeaea;
			.a{
				width:100%;
				text-decoration: none;
				color:#000;
				display: block;
				position: relative;
				span{
					display: inline-block;
				}
				span:nth-of-type(2){
					position: absolute;
					right:0.45rem;
					color:#808080;
				}
				span:nth-of-type(3){
					position: absolute;
					right:0.2rem;
					color:#808080;
				}
			}
		}
	}
	.address{
		width:100%;
		height:0.5rem;
		line-height:0.5rem;
		position: relative;
		background:#fff;
		margin-bottom:0.2rem;
		top:0.1rem;
		span:nth-of-type(2){
			position: absolute;
			right:0.2rem;
			color:#808080;
		}
	}
}
</style>