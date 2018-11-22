<template>
	<div>
		<header class="register">
			 <h3 class="register-middle">注册</h3>
			 <router-link tag="div" to="/my/login" class="register-right">登录</router-link>
		</header>
		<div id="leftTabBox" class="tabBox">
			<input type="text" name="telephone" placeholder="请输入用户名" class="phone" id="iphone">
			<input type="text" name="telephone" placeholder="请输入手机号" class="phone" id="iphone">
			<div class="password">
				<input type="password" name="yanzhengma" placeholder="请输入密码" id="yanzhengma" class="yanzhengma">
			</div>
		</div>
		<router-link tag="div" id="login-btn" to="/my/login">注册</router-link>
	</div>
</template>

<script>
	
</script>

<style lang="scss" scoped>
$nav_Height:0.4rem;
.register{
	box-sizing:border-box;
	height:$nav_Height;
	width:100%;
	background:#fff;
	padding:0 0 0 0.1rem;
	border-bottom:0.01rem solid #f5f5f5;
	position: relative;
	.register-middle{
		position: absolute;
		height:$nav_Height;
		line-height: $nav_Height;
		left:50%;
		transform: translateX(-50%);
	}
	.register-right{
		cursor: pointer;
		display: inline-block;
		position: absolute;
		height: $nav_Height;
		line-height:$nav_Height;
		right:0.1rem;
	}
}
#leftTabBox{
	box-sizing:border-box;
	position: relative;
	overflow: hidden;
	width:70%;
	margin:0 auto;
	background:#fff;
	border:0.01rem solid #eee;
	margin-top:0.3rem;
	padding:0 0.3rem;
	.phone{
		width:100%;
		height:0.4rem;
		line-height: 0.4rem;
		border:0;
		border-bottom:0.01rem solid #eaeaea;
		font-size:0.18rem;
		color:#000;
	}
	.password{
		position: relative;
		overflow: hidden;
		.yanzhengma{
			border:0;
			height:0.4rem;
			line-height: 0.4rem;
			font-size:0.18rem;
			color:#000;
			float:left;
			width:100%;
		}
	}
}
#login-btn{
	box-sizing:border-box;
	position: absolute;
	width:70%;
	margin:0 auto;
	background:#fff;
	border:none;
	margin-top:0.3rem;
	padding:0 0.3rem;
	height:$nav_Height;
	line-height:$nav_Height;
	background:#ffd444;
	top:2rem;
	left:50%;
	transform: translateX(-50%);
	text-align: center;
}
</style>