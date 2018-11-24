<template>
	<div>
		<ul class="sort">
			<li v-for="item,idx in dataList" @click="handleClick(idx)" :class="isCurrent===idx?'active':''"> {{item}} </li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				dataList:['上新','销量','价格'],
				isCurrent:0,
			}
		},
		methods:{
			handleClick(idx){
					this.isCurrent = idx
				if(idx===0){
					function timeSort(){
						this.$store.commit('changeOrderBy','onShelfTime')
						this.$store.commit('changeShowList')
						this.$store.dispatch('changeCatalog')
					}
					timeSort.call(this)
				}
				if(idx===1){
					function salesSort(){
						this.$store.commit('changeOrderBy','sales')
						this.$store.commit('changeShowList')
						this.$store.dispatch('changeCatalog')
					}
					salesSort.call(this)
				}
				if(idx===2){
					function priceSort(){
						this.$store.commit('changeOrderBy','price')
						this.$store.commit('changeShowList')
						this.$store.commit('changeSort')
						this.$store.dispatch('changeCatalog')
					}
					priceSort.call(this)
				}
				
			}
			
		},
		computed:{
		}
	}
</script>

<style lang="scss" scoped>
	.sort{
		display: flex;
		li{
			flex: 1;
			height: 0.4rem;
			line-height: 0.38rem;
			text-align: center;
			margin: 0 0.375rem;
			color: #999;
		}
		.active{
			border-bottom: 0.02rem solid #282828;
			font-weight: 800;
			color: #000;
		}
		
	}
</style>
<!-- https://m.wowdsgn.com/pages/category/21?pageNumber=1&orderBy=sales&sort=desc&_=1542866555745
https://m.wowdsgn.com/pages/category/21?pageNumber=1&orderBy=price&sort=asc&_=1542866593173 -->