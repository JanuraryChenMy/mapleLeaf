<template>
	<div>
		<div class="swiper-container">
		    <div class="swiper-wrapper">
		    	<div class="swiper-slide" v-for="item,idx in furnitureList" :key="item.id"  @click="handleclick(idx)"> {{item.name}} </div>
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
				furnitureList:[]
			}
		},
		mounted(){
			this.furnitureList = this.$store.state.furnitureList
			console.log(this.furnitureList[0].name);
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
				this.$store.commit('changePage',1)
				this.$store.commit('changeShowList')
				this.$store.commit('changeId',this.furnitureList[idx].id)
				this.$store.dispatch('changeCatalog')
				
			},
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
		}
	}
</style>
