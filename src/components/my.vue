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
		},
		beforeDestroyed(){
			this.$store.commit('changeNavbar',1);
		}
	}
</script>

<style lang="scss" scoped>
	
</style>