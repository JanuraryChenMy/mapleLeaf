<template>
	<div>
		<header>
			 <a href="/home" class="header-left">
			 	<img src="/static/imgs/login_return.png">
			 </a>
			 <h3 class="header-middle">登录</h3>
			 <router-link tag="div" to="/my/register" class="header-right">注册</router-link>
		</header>
		<div id="leftTabBox" class="tabBox">
			<input type="text" name="telephone" placeholder="请输入手机号" class="phone" id="iphone">
			<div class="password">
				<input type="password" name="yanzhengma" placeholder="请输入密码" id="yanzhengma" class="yanzhengma">
				<router-link tag="div" to="/my/forgetpass" class="forget">忘记密码?</router-link>
			</div>
		</div>
		<input type="button" id="login-btn" name="submit" value="确认">
		<router-link tag="div" id="login-btn" to="/my/myself">确认</router-link>
		<div class="bottom">
			<div class="month">
				<input type="radio" name="icon" class="yes">
				<span>一个月内记住密码</span>
			</div>
			<router-link tag="div" to="/my/register" class="bottom-right">快速注册</router-link>
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
			width:1rem;
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
	top:1.59rem;
	left:50%;
	transform: translateX(-50%);
	text-align: center;
}
.bottom{
	box-sizing:border-box;
	position: relative;
	width:80%;
	margin:0 auto;
	margin-top:0.9rem;
	.month{
		position: relative;
		top:0.02rem;
		left:0;
		display: inline-block;
		list-style: none;
		.yes{
			background:#fff;
			width:0.2rem;
			height:0.2rem;
		}
		span{
			position: relative;
			top:-0.02rem;
		}
	}
	.bottom-right{
		position: relative;
		top:0.02rem;
		right:-0.8rem;
		display: inline-block;
	}
}
</style>