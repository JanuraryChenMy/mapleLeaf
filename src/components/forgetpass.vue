<template>
	<div>
		<header>
			  <router-link tag="div" to="/my/login" class="header-left"><</router-link>
			 <h3 class="header-middle">忘记密码</h3>
		</header>
		<div id="leftTabBox" class="tabBox">
			<input type="text" name="telephone" placeholder="请输入手机号" class="phone" id="iphone">
			<div class="password">
				<input type="password" name="yanzhengma" placeholder="请输入验证码" id="yanzhengma" class="yanzhengma">
				<div class="forget">获取验证码</div>
			</div>
			<input type="text" name="telephone" placeholder="设置密码（6-20位）" class="phone" id="pw">
			<input type="text" name="telephone" placeholder="再输入一次" class="phone" id="cpw">
		</div>
		<router-link tag="div" id="login-btn" to="/my/login">确认</router-link>
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
	}
	.header-middle{
		position: absolute;
		height:$nav_Height;
		line-height: $nav_Height;
		left:50%;
		transform: translateX(-50%);
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
		border-bottom:0.01rem solid #eaeaea;
		.yanzhengma{
			border:0;
			height:0.4rem;
			line-height: 0.4rem;
			font-size:0.18rem;
			color:#000;
			float:left;
			width:1.1rem;
		}
		.forget{
			border:0;
			height:0.4rem;
			line-height: 0.4rem;
			font-size:0.18rem;
			color:#000;
			float:right;
			background:#fff;
			position: relative;
			top:0;
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
	top:2.29rem;
	left:50%;
	transform: translateX(-50%);
	text-align: center;
}
</style>