<template>
	<div>
		<div class="swiper-container">
		    <div class="swiper-wrapper">
		    	<div class="swiper-slide" v-for="item,idx in furnitureList" :key="item.id"  @click="handleclick(idx)"
		    	:class="isCurrent===idx?'active':''"><p>{{item.name}}</p> </div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import Swiper from 'swiper'
	export default{
		data(){
			return {
				iscurrent:false,
				furnitureList:[{name:'全部',id:35}],
				isCurrent:0
			}
		},
		mounted(){
			this.furnitureList.push(...this.$store.state.furnitureList)
			this.$nextTick(()=>{
				var mySwiper = new Swiper('.swiper-container',{
					slidesPerView : 3,
					spaceBetween : 20,
				})
			})
		},
		updated(){
			
		},
		methods:{
			handleclick(idx){
				this.isCurrent = idx
				this.$store.commit('changePage',1)
				this.$store.commit('changeShowList')
				this.$store.commit('changeId',this.furnitureList[idx].id)
				this.$store.dispatch('changeCatalog')
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.swiper-container{
		background: url(https://img.wowdsgn.com/category/background/10.jpg?imageslim) no-repeat left center;
		padding:0.15rem 0;
		.swiper-slide{
			width:0.76rem !important;
			height: 0.76rem;
			border: 1px solid #ccc;
			margin-left: 0.15rem;
			margin-right: 0 !important;
			font-weight: bold;
			text-align: center;
			line-height: 0.76rem;
			p{
				color: #fff;
			}
		}
		.active{
			border: 2px solid #fff;
			display: inline-block;
			width: 100%;
			height: 100%;
			background-color: rgba(255,255,255,0.2);
		}
	}
</style>
