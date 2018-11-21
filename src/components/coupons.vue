<template>
	<div>
		<header>
			<router-link tag="div" to="/home" class="header-left">
			 	<img src="../assets/home.png">
			</router-link>
			 <h3 class="header-middle">优惠券</h3>
			 <router-link tag="div" to="/my/myself" class="header-right">
			 	<img src="../assets/me.png">
			 </router-link>
		</header>
		<div id="discount">
			<div class="countBox">
				<div class="search">
					<input type="text" id="redemptionCode" name="text" placeholder="请输入兑换码" class="words">
					<input type="button" name="button" value="兑换" @click="getCoupon()" class="exchange">
				</div>
				<ul class="rmb">
					<li v-for="data in datalist" class="zhengti">
						<h3>{{data.deduction}}元</h3>
						<ul class="right">
							<li class="one">{{data.title}}</li>
							<li class="two">{{data.limitDesc}}</li>
							<li class="three">{{data.effectiveFrom}}至{{data.effectiveTo}}</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>

import axios from "axios";
export default {
	name:'rmb',
	data(){
		return{
			datalist:[],
		}
	},
	methods:{
		
	},
	mounted(){
		axios.get("/marketing/allMyCoupons?currentPage=1&pageSize=10&_=1542789657446").then(res=>{
			console.log(res.data);
			console.log(res.data.data);
			this.datalist = res.data.data;
			// this.datalist = res.data.data.coupons
		})
	}
}

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
#discount{
	box-sizing: border-box;
	display: block;
	padding: 0;
	margin:0;
	overflow: hidden;
	.countBox{
		width:90%;
		padding:0.2rem;
		.search{
			height:0.6rem;
			background:#fff;
			text-align: center;
			font-size:0.3rem;
			line-height: 0.6rem;
			.words{
				padding-left:0.16rem;
				width:2rem;
				height:0.5rem;
				background:#fff;
				float: left;
				border:0;
				border:0.01rem solid #eee;
			}
			.exchange{
				width:0.85rem;
				height:0.5rem;
				line-height:0.5rem;
				background:#ffd444;
				color:#000;
				border:0;
				position: relative;
				top:-0.1rem;
			}
		}
		.rmb{
			.zhengti{
				width:95%;
				height:1rem;
				background:#fff;
				position: relative;
				margin-bottom:0.24rem;
				border:0.01rem solid #eee;
				h3{
					width:0.9rem;
					height:1rem;
					line-height: 1rem;
					font-style: 0.4rem;
					text-align: center;
					border-right:0.01rem dashed #ccc;
				}
				.right{
					width:3rem;
					list-style: none;
					margin:0;
					padding:0;
					position: absolute;
					left:1.1rem;
					top:50%;
					transform: translateY(-50%);
					.two{
						color:#ff7070;
						font-size:0.13rem;
					}
					.three{
						color:#808080;
						font-size:0.13rem;
					}
				}
			}
		}
	}
}
</style>