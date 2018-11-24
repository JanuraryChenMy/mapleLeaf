<template>
	<div>
		<header>
			<router-link tag="div" to="/my/information" class="header-left"><</router-link>
			 <h3 class="header-middle">新增收货地址</h3>
			 <router-link tag="div" to="/my/information" class="header-right">确定</router-link>
		</header>
		<ul>
			<li>
				<span class="name">收货人</span>
				<input type="text" name="name" class="zhi" id="name" value="" tabindex="1" placeholder="请输入收货人姓名">
			</li>
			<li>
				<span class="name">手机号</span>
				<input type="text" name="name" class="zhi" id="name" value="" tabindex="1" placeholder="请输入收货人手机号">
			</li>
			<li>
				<span class="name">省市区</span>
				<input type="text" name="name" class="zhi" id="name" value="" tabindex="1" placeholder="请选择地区">
			</li>
			<li>
				<span class="name">详细地址</span>
				<input type="text" name="name" class="zhi" id="name" value="" tabindex="1" placeholder="请输入详细地址">
			</li>
		</ul>
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
	.header-right{
		cursor: pointer;
		display: inline-block;
		position: absolute;
		height: $nav_Height;
		line-height:$nav_Height;
		right:0.1rem;
	}
}
ul{
	box-sizing: border-box;
	display: block;
	li{
		height:$nav_Height;
		line-height:$nav_Height;
		border-bottom:0.01rem solid #f5f5f5;
		padding-left:0.2rem;
		font-size:0.14rem;
		input{
			display: inline-block;
			height:$nav_Height;
			line-height: $nav_Height;
			text-indent: 0.1rem;
			margin-left:0.2rem;
			font-size:0.14rem;
			color:#000;
			border:0;
		}
	}
}
</style>