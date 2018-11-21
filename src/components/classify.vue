<template>
	<div class="classify">
		<div class="search">
			<i class="iconfont icon-originalimage"></i>
			<input type="text">
		</div>
		<ul class="furniture" v-if="isFurnitureShow">
			<li class="furnitureimg"><img src="../assets/furniture.png" alt=""></li>
			<router-link :to="`/catalog/${item.id}`" tag="li" v-for="item in furnitureList" :key="item.id"> {{item.name}} </router-link>
		</ul>
		<ul class="house" v-if="isHouseShow">
			<li class="household"><img src="../assets/household.png" alt=""></li>
			<router-link :to="`/cataog/${item.id}`" tag="li" v-for="item in houseList" :key="item.id"> {{item.name}} </router-link>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
	import iconCss from '../../static/iconfont/iconfont.css'
	import iconJs from '../../static/iconfont/iconfont.js'
	export default {
		name:'home',
		data(){
			return {
				isFurnitureShow:true,
				isHouseShow:true,
				furnitureList:[
					{
						name:'沙发',
						id:20
					},{
						name:'椅凳',
						id:21
					},{
						name:'桌几',
						id:22
					},{
						name:'床',
						id:2310
					},{
						name:'柜架',
						id:24
					},{
						name:'餐桌',
						id:2210
					},{
						name:'茶几和边桌',
						id:2211
					},{
						name:'书桌',
						id:2212
					},{
						name:'隔断',
						id:2414
					},
				],
				houseList:[
					{
						name:'灯具',
						id:25
					},{
						name:'用餐',
						id:26
					},{
						name:'时尚生活',
						id:32
					},{
						name:'烹饪',
						id:27
					},{
						name:'纺织品',
						id:28
					},{
						name:'家饰',
						id:29
					},{
						name:'卫浴',
						id:31
					}
				]
			}

		},
		mounted(){
			
		},
		components:{

		},
		methods:{

		}
	}
</script>

<style lang="scss" scoped>
	.classify{
		padding:0.14rem;
		padding-bottom: 0.6rem;
		.search{
			position: relative;
			margin-bottom: 0.1rem;
			i{
				font-size:0.16rem;
				color:black;
				font-weight: bold;
				line-height: 0.48rem;
				margin-left: 0.1rem;
				margin-right: 0.1rem;
				height: 0.26rem;
				line-height:0.31rem;
				position: absolute; 
			}
				
			input{
				padding-left:0.25rem;
	        	border-radius: 0.5rem;
	        	border:none;
	        	height:0.26rem;
	        	width:2.4rem;
	        	background:#F5F5F5;
	        	outline:none;
			}
		}
		li{
			height: 0.46rem;
			width: 100%;
			line-height:0.46rem;
			border-bottom: 1px solid #ccc;
			img{
				width: 100%;
			}
		}
		.furnitureimg{
			height: 1.15rem;
		}
		.household{
			height: 1.15rem;
		}
	}
</style>