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
			<li>立即购买</li>
			<li @click="gogogo">加入购物车</li>
		</ul>
		<div class="zhanwei"></div>
	</div>
</template>

<script>
import axios from "axios"
export default {
	data(){
		return{
			id: null,
			dataList: [],
			parentProductId: null,
			itemDetailIntroVoList: null,
			itemSizeImgVoList: null,
			productCommentList: null,
			title_class: 'title'
		}
	},
	methods:{
		gogogo(){
			// axios.get()
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
				console.log(555)
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
						axios.get(`/itemdetail/spuInfos/${this.parentProductId}?_=1542866639726`).then(res=>{
							this.itemDetailIntroVoList = res.data.data.itemDetailIntroVoList;
							this.itemSizeImgVoList = res.data.data.itemSizeImgVoList;
							this.productCommentList = res.data.data.productCommentList;
							console.log(this.dataList)
							console.log(this.itemDetailIntroVoList)
							// console.log(str.lastIndexOf(this.dataList.productTitle))
							axios.post(`/api/product`,{
								shopTitle: this.dataList,
								shopInformation: this.itemDetailIntroVoList
							}).then(res=>{
								console.log('Ajax发送成功');
								console.log(res);
								// alert(res.data.state)
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
</style>