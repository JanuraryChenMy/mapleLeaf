<template>
	<div class="box">
		<header>
			<div class="header-left" @click="homeClick()">
			 	<img src="../assets/home.png">
			 </div>
			 <h3 class="header-middle">我</h3>
		</header>
		<router-link tag="div" to="/my/information" class="name">
			<img src="https://img.wowdsgn.com/%2Fuser%2Favatar%2F2108a2ee-61bb-463e-aba0-c1fb9c8b5927_2dimension_200x200.jpg">
			<div class="user">
				<p class="username">{{username}}</p>
				<p class="usershow">{{usershow}}</p>
			</div>
			<span class="icon iconfont you">></span>
		</router-link>
		<div class="order-all">
			<router-link tag="div" to="/my/order/orderall" class="all-status">全部订单</router-link>
			<ul>
				<router-link tag="li" to="/my/order/orderpay" class="order">
					<img src="../assets/waite-pay.png">
					<div class="order-bottom">
						待付款
						<span class="symbol">></span>
					</div>
				</router-link>
				<router-link tag="li" to="/my/order/orderdelivery" class="order">
					<img src="../assets/waite-delivery.png">
					<div class="order-bottom">
						待发货
						<span class="symbol">></span>
					</div>
				</router-link>
				<router-link tag="li" to="/my/order/orderreceived" class="order">
					<img src="../assets/waite-goods.png">
					<div class="order-bottom">
						待收货
						<span class="symbol">></span>
					</div>
				</router-link>
				<router-link tag="li" to="/my/order/ordercomment" class="order">
					<img src="../assets/finished.png">
					<div class="order-bottom">
						待评论
						<span class="symbol">></span>
					</div>
				</router-link>
				<router-link tag="li" to="/my/exitgood" class="order">
					<img src="../assets/returns.png">
					<div class="order-bottom last-bottom">
						退换货
						<span class="symbol">></span>
					</div>
				</router-link>
			</ul>
		</div>
		<div class="three">
			<ul>
				<router-link tag="li" to="/my/collection" class="collection">我的收藏<span class="symbol">></span></router-link>
				<router-link tag="li" to="/my/coupons" class="collection">我的礼券<span class="symbol">></span></router-link>
			</ul>
		</div>
		<!-- <router-link tag="div" to="/my/login" class="exit">退出登录</router-link> -->
		<div class="exit" @click="exitClick()">退出登录</div>
		<div class="kongbai"></div>
	</div>
</template>

<script>
	import axios from 'axios'
	import { Toast } from 'mint-ui'
	export default{
		name:'myself',
		data(){
			return{
				username:"nine",
				usershow:"123"
			}
		},
		methods:{
			exitClick(){
				console.log(1111)
				axios.get('api/logout').then((res)=>{
					if(res.data.state === 0){
						this.$router.push('/my/login');
						this.$store.commit('changeLog','')
						Toast({
							message: '注销成功',
							position: 'bottom',
							duration: 1500,
							className: '.toast'
						});
					}
				})
			},
			homeClick(){
				this.$router.push('/home');
				this.$store.commit('changeNavbar',1);
			}
		},
		mounted(){
			this.$store.commit('changeNavbar',1);
			axios.get('api/login').then((res)=>{
				console.log(res.data);
				this.username = res.data.data.username;
				this.$store.commit('changeLog',res.data)
			})
		}
		
	}
</script>

<style lang="scss" scoped>
body{
	background:#ccc;
}
$nav_Height:0.4rem;
.box{
	height:100%;
	background:#f5f5f5;
}
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
}
.name{
	box-sizing:border-box;
	width:100%;
	height:0.8rem;
	background:#fff;
	margin:0.15rem 0;
	position: relative;
	padding: 0;
	img{
		display: inline-block;
		width:0.6rem;
		height:0.6rem;
		margin:0.1rem 0.1rem;
		border-radius:50%;
	}
	.user{
		display: inline-block;
		height:0.8rem;
		position: relative;
		top:-0.25rem;
	}
	.iconfont{
		color:#ccc;
		font-size:0.36rem;
		position: absolute;
		right:0.3rem;
		top:50%;
		transform: translateY(-50%);
	}
}
.order-all{
	overflow: hidden;
	box-sizing:border-box;
	width:100%;
	background:#fff;
	padding-left:0.3rem;
	margin-bottom:0.3rem;
	.all-status{
		width:100%;
		height:0.5rem;
		line-height:0.5rem;
		font-size:0.2rem;
		border-bottom:1px solid #eaeaea;
	}
	ul{
		padding:0;
		margin:0;
		.order{
			height:0.5rem;
			line-height:0.5rem;
			position: relative;
			img{
				width:0.25rem;
				height:0.25rem;
				margin-right:0.1rem;
				position: relative;
				top:0.07rem;
			}
			.order-bottom{
				border-bottom:1px solid #eaeaea;
				height:0.5rem;
				line-height:0.5rem;
				position: relative;
				right:-0.5rem;
				top:-0.5rem;
				.symbol{
					position: relative;
					right:-1.9rem;
				}
			}
			.last-bottom{
				border:0;
			}	
		}
	}
}
.three{
	box-sizing:border-box;
	width:100%;
	background:#fff;
	padding-left:0.3rem;
	margin-bottom:0.3rem;
	ul{
		padding:0;
		margin:0;
		.collection{
			height:0.5rem;
			line-height:0.5rem;
			position: relative;
			border-bottom:1px solid #eaeaea;
			.symbol{
				position: relative;
				right:-2.3rem;
			}
		}
	}
}
.exit{
	width:100%;
	height:$nav_Height;
	line-height: $nav_Height;
	font-size:0.2rem;
	color:#fff;
	text-align: center;
	background:#6d2121;
	border-radius:5px;
	box-shadow: 0 5px 20px #000;

}
.kongbai{
	width:100%;
	height:0.80rem;	
}
</style>