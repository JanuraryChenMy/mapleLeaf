<template>
	<div>
		<header class="register">
			 <h3 class="register-middle">注册</h3>
			 <router-link tag="div" to="/my/login" class="register-right">登录</router-link>
		</header>
		<div id="leftTabBox" class="tabBox">
			<input type="text" name="username" placeholder="请输入用户名" class="phone" id="username" @blur="checkUser()" v-model="username">
			<input type="text" name="telephone" placeholder="请输入手机号" class="phone" id="iphone" @blur="checkPhone()" v-model="phone">
			<div class="password">
				<input type="password" name="yanzhengma" placeholder="请输入密码" id="yanzhengma" class="yanzhengma" v-model="password" @blur="checkPassword()">
			</div>
		</div>
		<!-- <router-link tag="div" id="login-btn" to="/my/login">注册</router-link> -->
		<button @click="commitClick()" id="login-btn">注册</button>
	</div>
</template>

<script>
	import axios from 'axios'
	import { Toast } from 'mint-ui'
	export default {
		name:'register',
		data(){
			return {
				username:'',
				phone:'',
				password:'',
				pc:false,
				uc:true,
				pwc:false
			}
		},
		methods:{
			checkUser(){
				var reg = /^[\u4e00-\u9fa50-9a-zA-Z_]{4,10}$/
				if(reg.test(this.username)){
					this.uc = true;
				} else{
					this.uc = false;
					Toast({
						message:'用户名长度4-10位，仅包含中文，数字，字母，下划线。',
						position:'bottom',
						duration:1000
					})
				}
			},
			checkPhone(){
				var reg = /^1[34578]\d{9}$/;
				if(reg.test(this.phone)){
					// console.log(1111);
					axios.post('/api/register/check',{phone:this.phone}).then((res)=>{
						if(res.data.state === 1){
							// console.log(true,res)
							this.pc = true;
						} else if(res.data.state === 0) {
							// console.log(false)
							this.pc = false;
							Toast({
								message: '手机已注册过',
								position: 'bottom',
								duration: 1000
							});
						}
					})
				} else{
					this.pc = false;
					Toast({
						message: '手机格式不正确',
						position: 'bottom',
						duration: 1000
					});
				}
			},
			checkPassword(){
				var reg = /^[a-zA-Z0-9_.]{6,20}$/;
				if(reg.test(this.password)){
					// console.log(1111)
					this.pwc = true;
				} else {
					this.pwc = false;
					Toast({
						message: '密码大于六位，仅包含数字，字母，下划线，. ，_ 。',
						position: 'bottom',
						duration: 1000
					});
				}
			},
			commitClick(){
				if(this.pc && this.uc && this.pwc){
					axios.post('/api/register',{username:this.username,phone:this.phone,password:this.password}).then((res)=>{
						// console.log(res);
						if(res.data.state === 2){
							this.$router.push('/my/login');
						}
					})
				}
			}
		}
	}
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