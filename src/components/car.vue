<template>
	<transition appear name="slide-fade">
	<div style="overflow: hidden">
		<div class="iii"></div>
		<div class="title">
			<router-link to="/" tag="span">主页</router-link>
			<span @click="kkkkk">购物车</span>
			<span @click="whatIns">{{insCon}}</span>
		</div>
		<transition appear name="slide-fade">
		<p v-if="!dataList[0]" style="text-align: center; font-size: 14px;padding: 40px 0 0 0; color: #777;">您的购物车为空，请尽情去添加您喜欢的商品吧！</p>
		</transition>
		<transition appear name="slide-fade">
		<p v-if="!dataList[0]" style="text-align: center; font-size: 14px;padding: 0 0 40px 0; color: #000;">~.~</p>
		</transition>
		<transition appear name="slide-fade">
			<transition-group appear name="slide-fade" class="cartShow" v-if="dataList.length===0? false: true" tag="ul">
				

				<li v-for="data,index in dataList" class="li" :key="data.productId">
					<div class="select">
						<div class="check">
							<input type="checkbox" :key="data.productId" :value="data" v-model="isList">
						</div>
						<div class="LeftAndRight">
							<button @click="clickJ(index)">-</button>
							<input type="text" v-model="count[index]" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')" @blur="leave(index)">
							<button @click="clickZ(index)">+</button>
						</div>
						
					</div>
					<div class="show">
						<div class="img">
							<img :src="data.proImg" @click="tiaozhuan(data.productId)">
						</div>
						<ul class="cartContent">
							<li class="name" style="overflow: hidden; height: .20rem;">{{data.proName}}</li>
							<li class="style">
								<span class="styleSpan">{{data.proStyle}}</span>
							</li>
							<li class="nulll"></li>
							<li class="price">
								<span class="span1">￥{{data.proPrice}}</span>
								<span class="span2">x{{count[index]}}</span>
							</li>
						</ul>
					</div>
				</li>

	
			</transition-group>
		<!-- {{dataList}} -->
		</transition>
		<!-- <transition appear name="slide-fade"> -->
		<div class="bottom_nav">
			<div class="b_nav_left">
				<i><input type="checkbox" :name="dataList" v-model="isAll">全选</i>
				<transition appear name="slide-fade">
				<span v-if="ins">合计：{{allPrice}}</span>
				</transition>
			</div>
			<transition appear name="slide-fade">
				<button @click="submilt" v-if="ins">提交订单</button>
				<button @click="deleteLi" class="del" v-if="!ins">删除</button>
			</transition>
		</div>
		<p class="pp">-&nbsp;为您推荐&nbsp;-</p>
		<ul class="cureList">
			<transition-group appear name="slide-fade" >
				<li @click="tuijianlianjie(data.productId)" v-for="data,index in cure" :key="data.productId">
					<div class="img">
						<img :src="data.productImg">
					</div>
					<p>{{data.productTitle}}</p>
					<p>￥{{data.originalPrice}}</p>
					<p>{{data.prizeOrSlogan}}</p>
				</li>
			</transition-group>
		</ul>
		<p>正在加载...</p>
		<div class="zhanwei"></div>
	</div>
</transition>
</template>

<script>
import axios from "axios"
import { Toast } from 'mint-ui'
import Vue from 'Vue'
export default {
	name: 'car',
	data(){
		return{
			dataList: [],
			isList: [],
			page: 1,
			ins: true,
			cure: [],
			count: null,
			deletee: []
		}
	},
	methods: {
		tiaozhuan(id){
			console.log(id)
			this.$router.push("/detail/" + parseInt(id))
		},
		clickZ(index){
			console.log(typeof(this.dataList[index].productId))
			axios.post(`/api/cart/cad`,{
				id: parseInt(this.dataList[index].productId)
			}).then(res=>{
				// console.log(res)
				if (res.data.state === 1) {
					var indexx = parseInt(this.count[index])+1;
					parseInt(Vue.set(this.count,index,indexx));
					console.log(666)
					console.log(this.dataList[index].productId)
				}
			})
		},
		clickJ(index){
			axios.post(`/api/cart/cre`,{
				id: this.dataList[index].productId
			}).then(res=>{
				// console.log(res)
				if (res.data.state === 1) {
					var indexx = this.count[index];

					parseInt(this.count[index]) > 1  ?  parseInt(Vue.set(this.count,index,indexx-1)) : parseInt(this.count[index]);
				}
			})
		},
		kkkkk(){
			console.log(this.isList)
		},
		leave(index){
			axios.post(`/api/cart/change`,{
				id: this.dataList[index].productId,
				count: parseInt(this.count[index])
			}).then(res=>{
				// console.log(res)
				if (res.data.state === 1) {
					console.log(666)
				}
			})
		},
		submilt(){

		},
		tuijianlianjie(id){
			this.$router.push("/detail/" + parseInt(id))
		},
		deleteLi(){
			this.isList.forEach(res=>{
				this.deletee.push(res.productId)
			})
			if (this.isList.length === this.deletee.length) {
				console.log(this.deletee);//666
				axios.post('/api/cart/delete',{
					id: this.deletee
				}).then(res=>{

					if (res.data.state === 1) {
						console.log(this.dataList.length,this.isList.length)
						if (this.dataList.length === this.isList.length) {
							// this.dataList = [];
							for(var i=this.dataList.length; i>=0; i-- ){
								this.dataList.splice(i, 1);
							}
							this.isList = [];
							this.ins = !this.ins;
							this.isList = [];
							this.deletee = [];
							Toast({
								message: '清空购物车',
								position: 'bottom',
								duration: 2000,
								className: '.toast'
							});
							return;
						}

						this.isList.forEach((islist,ind)=>{
							console.log(111)
							this.dataList.forEach((datalist,index)=>{
								console.log(222)
								if (islist.productId === datalist.productId) {
									this.dataList.splice(index, 1);
									// this.isList.splice(ind, 1);
									console.log(3333)
									this.isList = [];
									this.deletee = [];
								}
							})
						})
						Toast({
							message: '删除成功',
							position: 'bottom',
							duration: 2000,
							className: '.toast'
						});
					}
				})
				
			}
			
			
			// this.deletee = []
			console.log(this.deletee)
			// this.isList = [];
			this.ins = !this.ins;
			// console.log(2)
		},
		whatIns(){
			this.ins = !this.ins;
		},
		scrolled(){
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
			var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
			  // console.log(scrollTop,scrollHeight,windowHeight);
			if (scrollTop + windowHeight >= scrollHeight) {
				console.log('到底了，正在发送ajax');
				this.page++
				axios.get(`/recommend/cart?currentPage=${this.page}&_=1542845286709`).then(res=>{
					// console.log(res);
						res.data.data.forEach(data=>{
							this.cure.push(data)
						})
					// console.log(this.cure);
				})
			}
		}
	},
	mounted(){
		if (!this.$store.state.isLog) {
			this.$router.push('/my/login');
			Toast({
				message: '请先登录',
				position: 'bottom',
				duration: 1500
			});
			return;
		}
		axios.get('/api/cart').then(res=>{
			console.log(res.data.data)
			this.count = res.data.data.count;
			this.dataList = res.data.data.information;
		})
		// setTimeout(()=>{
		// 	this.dataList = [
		// 		{
		// 			id: 1,
		// 			img: 'fsdfsgfsdag.jpg',
		// 			name: 'Nox晚安音乐灯灰白色',
		// 			style: [
		// 				'白色',
		// 				'黑色',
		// 				'红色'
		// 			],
		// 			price: '349',
		// 			number: 8000
		// 		},
		// 		{
		// 			id: 2,
		// 			img: 'fsdfsgfsdag.jpg',
		// 			name: 'Nox晚安音乐灯灰绿色',
		// 			style: [
		// 				'白色',
		// 				'黑色',
		// 				'红色'
		// 			],
		// 			price: '1224',
		// 			number: 2
		// 		},
		// 		{
		// 			id: 3,
		// 			img: 'fsdfsgfsdag.jpg',
		// 			name: '窗帘',
		// 			style: [
		// 				'白色',
		// 				'黑色',
		// 				'红色'
		// 			],
		// 			price: '999',
		// 			number: 5
		// 		},
		// 		{
		// 			id: 4,
		// 			img: 'fsdfsgfsdag.jpg',
		// 			name: '窗帘',
		// 			style: [
		// 				'白色',
		// 				'黑色',
		// 				'红色'
		// 			],
		// 			price: '999',
		// 			number: 5
		// 		},
		// 		{
		// 			id: 5,
		// 			img: 'fsdfsgfsdag.jpg',
		// 			name: '窗帘',
		// 			style: [
		// 				'白色',
		// 				'黑色',
		// 				'红色'
		// 			],
		// 			price: '999',
		// 			number: 5
		// 		}
		// 	]
		// },500);
		axios.get(`/recommend/cart?currentPage=1&_=1542845286709`).then(res=>{
			// console.log(this.cure);
			res.data.data.forEach(data=>{
				this.cure.push(data)
			});
		});
		this.$store.commit('changeNavbar', 0);
		window.addEventListener('scroll',this.scrolled);

	},
	beforeDestroy(){
		this.$store.commit('changeNavbar', 1);
	},
	destroyed () {
	  window.removeEventListener('scroll', this.scrolled)
	},
	computed:{
		isAll:{
			get(){
				if (this.dataList.length === this.isList.length && this.isList.length!==0) {
					return true
				}else{
					return false
				}
			},
			set(data){
				if (data) {
					this.isList = this.dataList;
					return true
				}else{
					this.isList = [];
					return false
				}
			}
		},
		allPrice(){
			let sun = 0;
			this.isList.forEach((data,index)=>{
				// data.productId
				this.dataList.forEach((da, ind)=>{
					if (data.productId === da.productId) {
						sun+= data.proPrice * this.count[ind]
					}
				})
				
			
			})
			return sun;
		},
		insCon(){
			if (this.ins) {
				return "编辑";
			}else{
				return "完成";
			}
		}

	}
};

</script>

<style lang="scss" scoped>
.iii{
	width: 100%;
	height: .33rem;
	background-color: #fff;
}
button{
	margin: 0;
	padding: 0;
	border: 1px solid transparent;
	outline: none; 
}
.cartShow{
	width: 100%;
	height:auto;
	border-bottom: 20px solid #eee;
	.li{
		margin: 0 auto;
		width: 3.45rem;
		height: auto;
		padding: 0 0 0 0;
		box-sizing: border-box;
		.show:after{
			clear: both;
			content:"";
			display: block;
		}
		.show{
			
			border-bottom: 1px solid #eee;
			padding-top: .2rem;
			width: 100%;
			padding-bottom: .2rem;
		}
		.img{
			float: left;
			width: .8rem;
			height: .8rem;
			margin-left: .2rem;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.select{
			padding:.1rem 0;
			border-bottom: 1px solid #eee;
			.check{
				float:left;
				input{
				}

			}
			.LeftAndRight{
				float: right;
				input{
					width: .2rem;
					text-align: center
				}
				button{
					background-color: #eee;
					border-radius: 2px;
					width: .25rem;
					height: .25rem;
				}
			}
		}
		.select:after{
			clear: both;
			content:"";
			display: block;
		}
		.cartContent{
			float: left;
			margin-left: .15rem;
			width: 2.1rem;
			font-size: .14rem;
			li{
				height: .24rem
			}
			.styleSpan{
				padding: 0 .08rem .02rem .08rem;
				font-size: .12rem;
				border-radius: .06rem;
				margin-right: .07rem;
				background-color: #eee;
				color: #555;
			}
			.price{
				.span1{
					float: left;
				}
				.span2{
					float: right;
					font-size: .12rem;
					color: #aaa;
				}
			}
		}
	}
	.li:after{
		clear: both;
		content:"";
		display: block;
	}
}
.pp{
	text-align: center;
	padding: 20px 0;
	font-weight: 600;
	border-bottom: 1px solid #eee;
}
.cureList{
	width: 100%;
	height: auto;
	box-sizing: border-box;
	overflow: hidden;
	li{
		width: 50%;
		height: 2.7rem;
		float: left;
		box-sizing: border-box;
		font-size: 12px;
		border: .1px solid #eee;
		padding-left: 5px;
		img{
			width: 100%;
			height: 100%;
			display: block;
		}
	}
}
.cureList:before{
	clear: both;
	content:"";
	display: block;
	overflow: hidden;
	height: 0;
}
.bottom_nav{
	width: 100%;
	height: .6rem;
	background-color: #fff;
	position: fixed;
	overflow: hidden;
	align-items: center;
	justify-content:space-between;
	bottom: 0;
	z-index: 10;
	display: flex;
	.b_nav_left{
		display: flex;
		justify-content:space-between;
		align-items: center;
		padding: 0 .16rem;
		box-sizing: border-box;
		width: 2.65rem;
		span{
			align-self: center;
		}

		input{
			
		}
	}
	button{
		height: 100%;
		background-color: #FFD444;
		padding: 0 .2rem;
		font-size: .16rem;
	}
	.del{
		background-color: #000;
		color: #fff;
		height: 100%;
		width: 1.06rem;
	}
}
.bottom_nav:before{
		clear: both;
		content:"";
		display: block;
		overflow: hidden;
		height: 0;
	}
.zhanwei{
	width: 100%;
	height: .6rem;
}
.title{
	width: 100%;
	box-sizing: border-box;
	height: .33rem;
	position: fixed;
	background-color: #fff;
	top: 0;
	display: flex;
	justify-content:space-between;
	padding: .05rem .12rem;
	font-size: 16px;
	span:nth-of-type(2){
		font-size: 18px;
		font-weight: 600;
	}
}



.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(10%);
  opacity: 0;
}
</style>