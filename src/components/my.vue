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
			this.$store.commit('changeNavbar',1);
		},
		beforeDestroyed(){
			this.$store.commit('changeNavbar',1);
		}
	}
</script>

<style lang="scss" scoped>
	div{
		height:100%;
		overflow-x:hidden;
	}
</style>