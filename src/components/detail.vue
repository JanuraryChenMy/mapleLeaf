<template>
	<div>
		<div class="title">
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
	</div>
</template>

<script>
import axios from "axios"
export default {
	data(){
		return{
			id: 14044,
			dataList: [],
			parentProductId: null,
			itemDetailIntroVoList: null,
			itemSizeImgVoList: null,
			productCommentList: null,
		}
	},
	methods:{
		gogogo(){
			
		}
	},
	mounted(){
		axios.get(`/recommend/item?skuId=${this.id}&_=1542866639732`).then(ress=>{
			// console.log(ress)
			ress.data.data.skuInLists.forEach(res=>{
				if (res.productId === this.id) {
					console.log(res)
					this.dataList = res;
					this.parentProductId = res.parentProductId;
					axios.get(`/itemdetail/spuInfos/${this.parentProductId}?_=1542866639726`).then(res=>{
						this.itemDetailIntroVoList = res.data.data.itemDetailIntroVoList;
						this.itemSizeImgVoList = res.data.data.itemSizeImgVoList;
						this.productCommentList = res.data.data.productCommentList;
					});
				}
			})

		});
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
	justify-content: space-between;
	line-height: 43px;
	border-bottom: 1px solid #eee;
	padding: 0 15px;

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

</style>