<template>
	<div class="box">
		<ul v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-immediate-check= "false"
  infinite-scroll-distance="800">
			<li v-for="data,index in dataList" :key="data.id">
				<dl>
					<dt v-html="index===0?'一天前':data.createTime"></dt>
					<dd>
						<h3>{{data.msgTitle}}</h3>
						<p>{{data.msgContent}}</p>
						<i class="iconfont icon-more"></i>
					</dd>
				</dl>
			</li>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name:'messageList',
		data(){
			return{
				dataList:[],
				loading:false,
				current:1
			}
		},
		methods:{
			loadMore(){
			  this.current++;
			  if(this.current > 17){
			  		this.loading = true;
			  		return;
			  }
			  axios.get(`/message/messageList?msgType=${this.$store.state.msgType}&currentPage=${this.current}&pageSize=10&_=1542800345294`).then(res=>{
			    console.log(res.data);
			    this.dataList = [...this.dataList,...res.data.data.messageLists]
			  })
			}
		},
		mounted(){
			this.$store.commit('changeNavbar',0);
			console.log(this.$store.state.msgType);
			axios.get(`/message/messageList?msgType=${this.$store.state.msgType}&currentPage=1&pageSize=10&_=1542800345294`).then((res)=>{
				console.log(res.data.data.messageLists);
				this.dataList = res.data.data.messageLists;
			})
		}
	}
</script>

<style lang="scss" scoped>
	ul{
		background:#f5f5f5;
		padding-bottom:1rem;
		li{
			margin-top:0.1rem;
			background:#f5f5f5;
			dl{
				dt{
					width:100%;
					text-align:center;
					font-size:0.12rem;
					
				}
				dd{
					width:3.25rem;
					background:white;
					margin:0 auto;
					margin-top:0.1rem;
					position:relative;
					padding-top:0.1rem;
					padding-left:0.1rem;
					padding-bottom:0.15rem;
					h3{
						color:#65686C;
						font-size:0.13rem;
						font-weight:bold;

					}
					p{
						color:#65686C;
						font-size:0.13rem;
						margin-top:0.15rem;
						width:95%;
					}
					i{
						position:absolute;
						right:0.05rem;
						top:0.05rem;
						font-size:0.2rem;
						font-weight:bold;
						color:#65686C;
					}
				}
			}
		}
	}
</style>