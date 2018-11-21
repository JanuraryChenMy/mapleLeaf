<template>
	<div class="box">
		<header>
			<i i class="iconfont icon-back" @click="goHome()"></i>
			<i i class="iconfont icon-account" @click="goMy()"></i>
			<p>{{title}}</p>
		</header>
		<router-view msgTitle="messageList"></router-view>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name:'message',
		data(){
			return {
				title:'消息中心'
			}
		},	
		methods:{
			goHome(){
				this.$router.push('/home');
				this.$store.commit('changeNavbar',1);
			},
			goMy(){
				this.$router.push('/My');
				this.$store.commit('changeNavbar',1);
			}
		}
	}
</script>

<style lang="scss" scoped>
	$headerHeight:0.43rem;
	.box{
		background:#f5f5f5;
		height:100%;
	}
	header{
		width:100%;
		height:$headerHeight;
		padding:0 0.1rem;
		position:relative;
		border-bottom:solid 1px #f5f5f5;
		box-sizing:border-box;
		background:white;
		.icon-back{
			font-size:0.2rem;
			line-height:$headerHeight;
			height:$headerHeight;
			cursor:pointer;
		}
		.icon-account{
			display:block;
			position:absolute;
			right:.2rem;
			top:0;
			font-size:0.18rem;
			line-height:$headerHeight;
			height:$headerHeight;
			cursor:pointer;
		}
		p{
			position:absolute;
			top:0;
			left:50%;
			margin-left:-0.4rem;
			width:0.8rem;
			height:$headerHeight;
			line-height:$headerHeight;
			font-size:0.17rem;
			font-weight:bold;
		}
	}
</style>