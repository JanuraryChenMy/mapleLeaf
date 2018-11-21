<template>
	<div>
		{{dataList.aaa}}
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name:'catalog',
		data(){
			return {
				dataList:{
					aaa:111
				}
			}
		},
		mounted(){
			console.log(this.$route);
			axios.get("/pages/category/inner?categoryId=20").then(res=>{
				console.log(res);
			}).catch(err=>{
				console.log(err);
			})
		},

	}
</script>

<style lang="scss" scoped>
	
</style>