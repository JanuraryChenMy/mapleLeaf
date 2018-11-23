<template>
	<div>
		<div class="title_zhanwei"></div>
		<div :class="title_class">
			<router-link to="/" tag="span">主页</router-link>
			<span>商品详情</span>
			<span>搜索</span>
		</div>
		<div class="title_img">
			<img :src="dataList.productImg">
		</div>
		<div class="title_name">
			<p>{{dataList.productTitle}}</p>
			<p style="padding-bottom: 30px; font-size: 18px;">￥{{dataList.originalPrice}}</p>
		</div>
		<ul class="content">
			<li v-for="data,index in itemDetailIntroVoList" class="border">
				<img :src="data.content" v-if="data.type === 2">	
				<p class="border_name" v-if="data.type === 0">
					{{data.content}}
				</p>
				<p class="border_miaoshu" v-if="data.type === 1">
					{{data.content}}
				</p>
			</li>
		</ul>

		<ul class="bottom_nav">
			<router-link to="/car" tag="li">查看我的购物车</router-link>
			<li @click="gogogo(666)">立即购买</li>
			<li @click="gogogo">加入购物车</li>
		</ul>
		<div class="zhanwei"></div>

		<div v-if="carP" class="carPP" @click="close">
			<div class="content_pp" @click.stop="kkk">
				<img :src="dataList.productImg">
				<div class="cons">
					<p class="titlee">{{consts.productTitle}}</p>
					<p class="jiage">￥{{consts.originalPrice}}</p>
					<p class="size">尺寸:{{consts.sizeText}}&nbsp;重量:{{consts.netWeightText}}</p>
				</div>

				<div class="sty">
					<p>款式:</p>
					<button>{{styleList}}</button>
				</div>
				<p class="cccos">数量</p>
				<p class="btn"><button @click="num>1? num--: num">-</button><span>{{num}}</span><button @click="num++">+</button></p>
			</div>
			<div class="thre" @click.stop="TOGO">确定</div>
		</div>	

	</div>
</template>

<script>
import axios from "axios"
import { Toast } from 'mint-ui'
export default {
	data(){
		return{
			id: null,
			dataList: [],
			parentProductId: null,
			itemDetailIntroVoList: null,
			itemSizeImgVoList: null,
			productCommentList: null,
			title_class: 'title',
			carP: false,
			consts: null,
			thisStyle: null,
			num: null,
			just: false
		}
	},
	methods:{
		TOGO(){
			// console.log(typeof(this.num))
			if (this.$store.state.isLog) {
				axios.post(`/api/cart/add`,{
					id: this.id,
					number: this.num
				}).then(res=>{
					if (res.data.jj) {
						// alert('添加购物车成功');
						this.carP = !this.carP;
						Toast({
							message: '添加购物车成功',
							position: 'bottom',
							duration: 1500
						});

						if (this.just) {
							this.just = !this.just;
							this.$router.push('/car');
						}
					}
				})
			}else {
				Toast({
					message: '请先登录',
					position: 'bottom',
					duration: 3000,
					className: '.toast'
				});
			}
			// console.log(this.id)
			// console.log(this.num)
		},
		close(){
			this.carP = !this.carP
		},
		kkk(){

		},
		gogogo(what){
			this.carP = !this.carP;
			if (what === 666) {
				this.just = !this.just;
			}
		},
		flex(){
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
			var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
			  // console.log(scrollTop,scrollHeight,windowHeight);
			if (scrollTop >= windowHeight-100) {
				
				this.title_class = 'title'
			}
			if (scrollTop < windowHeight-100){
				// console.log(555)
				this.title_class = 'title2'
			}
		}
	},
	mounted(){
		window.addEventListener('scroll',this.flex);
		this.id = Number(this.$route.params.id);

		if (this.id) {
			axios.get(`/recommend/item?skuId=${this.id}&_=1542866639732`).then(ress=>{
				// console.log(ress);
				ress.data.data.skuInLists.forEach(res=>{
					if (res.productId === this.id) {
						// console.log(res)

						this.dataList = res;
						this.parentProductId = res.parentProductId;
						// console.log(this.dataList)
						axios.get(`/itemdetail/spec/specific/${this.id}?_=1542943690532`).then(res=>{
							// this.chicun = res.data.data.skuAttrPairs[0]
							// this.zhong = res.data.data.skuAttrPairs[1]
							// console.log(res)
							this.consts = res.data.data
							this.num = this.consts.stockQty
						})
						axios.get(`/itemdetail/spuInfos/${this.parentProductId}?_=1542866639726`).then(res=>{
							// console.log(res)
							this.itemDetailIntroVoList = res.data.data.itemDetailIntroVoList;
							this.itemSizeImgVoList = res.data.data.itemSizeImgVoList;
							this.productCommentList = res.data.data.productCommentList;
							// console.log(res.data.data.itemSizeImgVoList)
							// console.log(str.lastIndexOf(this.dataList.productTitle))
								// console.log(this.productCommentList)
							axios.post(`/api/product`,{
								shopTitle: this.dataList,
								shopInformation: this.itemDetailIntroVoList
							}).then(res=>{
								console.log('Ajax发送成功');
								// console.log(res);
								console.log(res.data.state)
							}).catch(res=>{
								console.log(res);
							})

						});
					}
				})

			});
		}
		this.$store.commit('changeNavbar', 0);
	},
	computed:{
		styleList(){
			var index = this.consts.productTitle.lastIndexOf(' ');
			var style = this.consts.productTitle.slice(index);
			this.thisStyle = style
			return style;
		}
	},
	beforeDestroy(){
		this.$store.commit('changeNavbar', 1);
	}
};
</script>

<style lang="scss" scoped>

.title{
	display: flex;
	position: fixed;
	top: 0;
	width: 100%;
	justify-content: space-between;
	line-height: 43px;
	box-sizing: border-box;
	border-bottom: 1px solid #eee;
	padding: 0 15px;
	z-index: 10px;
	background: rgba(255,255,255,0.8);
}
.title2{
	display: flex;
	width: 100%;
	justify-content: space-between;
	line-height: 43px;
	box-sizing: border-box;
	border-bottom: 1px solid #eee;
	padding: 0 15px;
	z-index: 10px;
	position: absolute;
	top: 0;
	background: rgba(255,255,255,0.8);
}
.title_zhanwei{
	height: .43rem;
	width: 100%;
}
.title_img{
	width: 100%;

	img{
		width: 100%;
	}
}
.title_name{
	padding-left: 18px;
	p{
		line-height:30px;
	}
	p:nth-of-type(2){
		font-weight: 600;
	}
}
.border{
	background-color: #eee;
	width: 100%;
	box-sizing: border-box;
	img{
		width: 100%;
		display: block;
	}
	.border_name{
		padding: 0 25px;
		box-sizing: border-box;	
		padding-bottom: 8px;
		padding-top: 8px;
		text-align: center;
	}
	.border_miaoshu{
		padding: 0 25px;
		box-sizing: border-box;

		padding-top: 8px;
		padding-bottom: 20px;
		color: #777;
		font-size: 12px;

	}
}

.bottom_nav{
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: .44rem;
	position: fixed;
	z-index: 10;
	bottom: 0;
	background-color: #fff;
	li{
		width: 1.25rem;
		text-align:center;
		height: 100%;
		line-height: .44rem;

	}
	li:nth-of-type(1){

	}
	li:nth-of-type(2){
		background-color: #eee;
	}
	li:nth-of-type(3){
		background-color: #FFD444;
	}
}




.zhanwei{
	width: 100%;
	height: .44rem;
}

.carPP{
	width: 100%;
	height: 6.67rem;
	background: rgba(0,0,0,0.7);
	z-index: 100000;
	position: fixed;
	bottom: 0;

	.content_pp{
		height: 5.57rem;
		width: 100%;
		background-color: #fff;
		position: absolute;
		bottom: 0;
		padding: 20px 0 0 20px;
		box-sizing: border-box;
		overflow: hidden;
		img{
			width: .92rem;
			border: .4px solid #ccc;
			display: block;
			float: left;
			margin-right: 10px;
		}
		.cons{
			float: left;
		}
		.titlee{
			font-size: 18px;
			font-weight: 600;
			padding-bottom:10px;
		}
		.jiage{
			font-size: 14px;
			font-weight: 600;
			padding-bottom: 10px;
		}
		.size{
			font-size: 12px;
			color: #aaa;

		}
		.sty{
			display: block;
			width: 100%;
			float: left;
			padding-top: 20px;
			padding-bottom: 20px;
			p{
				font-size: 14px;
				color: #555;
				padding-bottom: 8px;
			}
			button{
				background: #FFD444;
				padding: 10px;
				border: none;
				font-size: 14px;
			}
		}
		.cccos{
			float: left;
			font-size: 14px;
			color: #555;
			padding-bottom: 20px;
		}
		.btn{
			float: left;
			width: 100%;
			button{
				width: 28px;
				height: 40px;
				background-color: #eee;
				font-size: 14;
				line-height: 0px;
				text-align: center;
				color: #444;
			}
			span{
				font-size: 18px;
				padding: 0 50px;
			}
		}
	}
	.content_pp:after{
		clear: both;
		content: '';
		display: block;
		overflow: hidden;
	}
}

.thre{
	width: 100%;
	height: .5rem;
	background-color: #FFD444;
	line-height: .5rem;
	text-align: center;
	color: #444;
	position: fixed;
	bottom: 0;
	z-index: 100000000;
}

.toast{
	z-index: 9999999999900000;
}
</style>