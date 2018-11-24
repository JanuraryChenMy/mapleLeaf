<template>
	<div>
		<div class="thisTitle">
			<router-link to="/home" tag="i" class="iconfont icon-skip"></router-link>
			<div> {{showTitle}} </div>
			<router-link to="/classify" tag="i" class="iconfont icon-viewgallery"></router-link>
		</div>
		<router-view></router-view>
		<catalogSwiper></catalogSwiper>
		<sort></sort>
		<ul  v-infinite-scroll="loadMore" infinite-scroll-disabled="list" infinite-scroll-distance="10" infinite-scroll-immediate-check="true">
			<li v-for="item in showList">
				<img :src="item.productImg" alt="">
				<p class="name"> {{item.productTitle}} </p>
				<p class="price"> ￥{{item.sellPrice}} </p>
			</li>
		</ul>
		
	</div>
</template>

<script>
	import iconCss from '../../static/iconfont/iconfont.css'
	import iconJs from '../../static/iconfont/iconfont.js'
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
				thisTitle:''
			}
		},
		mounted(){
			this.$store.commit('changeNavbar',0)
			this.$store.commit('changeShowList')
			this.$store.commit('changeId',this.myId);
			this.$store.commit('changePage',1)
			this.$store.dispatch('changeCatalog',this.myId).then(()=>{});
			this.$nextTick(()=>{

			})
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
			...mapState(['catalogList','showList','furnitureList','id']),
			list(){
				this.isMaxPage = !this.catalogList[0]
				return this.isMaxPage
			},
			showTitle(){
				console.log(this.$store.state.id);
				this.furnitureList.forEach(item=>{
					if(parseInt(item.id) === parseInt(this.id)){
						console.log(this.id);
						this.thisTitle = item.name
					}
					if(parseInt(this.id)===35){
						this.thisTitle = '全部'
					}
				})
				console.log(this.thisTitle);
				return this.thisTitle
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
			height: 2.74rem;
			float: left;
			border-right: 1px solid #F7F7F7;
			border-bottom:1px solid #F7F7F7;
			img{
				width: 1.85rem;
				height: 1.85rem;

			}
			.name{
				font-size: 12px;
				color: #676767;
				text-align: center;
			}
		}
	}
	.thisTitle{
		width:3.55rem;
		height: 0.43rem;
		padding: 0 0.15rem;
		display: flex;
		i{
			width: 0.43rem;
			height: 0.43rem;
			text-align: center;
			line-height: 0.43rem;
			font-size: 0.24rem;
		}
		.icon-viewgallery{
			right: 0.15rem;

		}
		div{
			flex: 1;
			text-align: center;
			line-height: 0.43rem;
			font-weight: bold;
			font-size: 20px;
		}
	}
</style>