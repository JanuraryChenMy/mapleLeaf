<template>
	<div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name:'my',
		data(){
			return {

			}
		},
		mounted(){
			this.$store.commit('changeNavbar',0);
		}
	}
</script>

<style lang="scss" scoped>
	
</style>