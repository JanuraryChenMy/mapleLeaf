<template>
	<div>
		<ul >
			<li v-for="data,index in dataList" :key="data.id">
				<dl>
					<dt>1天前</dt>
					<dd>
						<h3>生活</h3>
						<p>深度:ioufosiufois</p>
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
				dataList:[1],
				loading:false,
				current:1
			}
		},
		methods:{
			// loadMore(){
			//   console.log("到底了")

			//   this.current++;

			//   if(this.current>this.total){
			//     this.loading = true //禁用
			//     this.msg= "到底了";
			//     return ;
			//   }
			//   axios.get(`/v4/api/film/now-playing?page=${this.current}&count=7`).then(res=>{
			//     console.log(res.data);

			//     this.datalist = [...this.datalist,...res.data.data.films] //合并数组
			//   })
			// }
		},
		mounted(){
			axios.get('/message/messageList?msgType=2&currentPage=1&pageSize=10&_=1542800345294').then((res)=>{
				console.log(res.data)
			})
		}
	}
</script>

<style lang="scss" scoped>
	ul{
		li{
			dl{
				dt{
					width:100%;
					text-align:center;
					font-size:0.12rem;
					margin-top:0.1rem;
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