<template>
	<div>
		<ul>
			<li v-for="item in dataList.products">{{item.productName}}</li>
		</ul>
		
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name:'catalog',
		data(){
			return {
				dataList:{},
				list:'mytext',
				myId:this.$route.params.productId
			}
		},
		mounted(){
			console.log(this.$route.params.productId);
			axios.get(`/pages/category/${this.myId}?pageNumber=1&orderBy=onShelfTime&sort=desc&_=154`)
			.then(res=>{
				console.log(res.data.data.products);
				if(res.data.data.products[0]){
					return
				}
				this.dataList = res.data.data
				this.$nextTick(()=>{});
				this.$store.commit('changeNavbar',0)
			}).catch(err=>{
				console.log(err);
			})
		},
		updated(){
			console.log('aaa')
		},
		destroyed(){
			this.$store.commit('changeNavbar',1)
		},
		computed:{
			
		}
		

	}
</script>

<style lang="scss" scoped>
	
</style>