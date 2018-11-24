<template>
	<div>
		<catalogSwiper></catalogSwiper>
		<sort></sort>
		<ul  v-infinite-scroll="loadMore" infinite-scroll-disabled="list" infinite-scroll-distance="20" infinite-scroll-immediate-check="true">
			<li v-for="item in showList">
				
			</li>
		</ul>
		
	</div>
</template>

<script>
	import catalogSwiper from './catalogSwiper'
	import axios from 'axios';
	import sort from './sort';
	import {mapState} from "vuex";
	import { InfiniteScroll } from 'mint-ui';
	import Vue from 'vue'

	Vue.use(InfiniteScroll);

	export default {
		name:'catalog',
		data(){
			return {
				myId:this.$route.params.productId,
				currentPage:1,
				isMaxPage:false,
			}
		},
		mounted(){
			this.$store.commit('changeNavbar',0)
			this.$store.commit('changeShowList')
			this.$store.commit('changeId',this.myId);
			this.$store.commit('changePage',1)
			this.$store.dispatch('changeCatalog',this.myId).then(()=>{});
			this.$nextTick(()=>{})
		},
		updated(){

		},

		destroyed(){
			this.$store.commit('changeNavbar',1)
		},
		components:{
			catalogSwiper,
			sort,
		},
		computed:{
			...mapState(['catalogList','showList']),
			list(){
				this.isMaxPage = !this.catalogList[0]
				return this.isMaxPage
			}
		},
		methods:{
			loadMore() {
			    this.loading = true;
			    this.currentPage = ++this.currentPage
			    this.$store.commit('changePage',this.currentPage)
			    this.$store.dispatch('changeCatalog').then(()=>{
			  		this.loading = false;
				});
			  
			}
		}
		

	}
</script>

<style lang="scss" scoped>
	ul{
		
		li{
			width: 1.85rem;
			height: 1.85rem;
			float: left;
			background: #ff0;
		}
	}
</style>