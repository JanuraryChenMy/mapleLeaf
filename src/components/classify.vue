<template>
	<div class="classify">
		<router-link to="/search" class="search" tag="div">
			<i class="iconfont icon-originalimage"></i>
			<input type="text">
		</router-link>
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
				furnitureList:null,
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
			this.furnitureList = this.$store.state.furnitureList
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