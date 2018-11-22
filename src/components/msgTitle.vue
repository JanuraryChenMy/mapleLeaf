<template>
	<div>
		<ul class="columnList" v-if="messageList.length===0?false:true">
			<li v-for="data,index in messageList" :key="data.targetId">
				<img :src="messageIcon[index]" alt="">
				<dl>
					<dt>
						<p v-html="messageTitle[index]"></p>
						<i class="iconfont icon-more" @click="goMessageList(messageTitle[index],data)"></i>
					</dt>
					<dd>
						<p>{{data.msgContent}}</p>
						<p>{{getTime[index]}}小时前</p>
						<div class="point"></div>
					</dd>
				</dl>
			</li>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
			name:'message',
			data(){
				return {
					messageList:[],
					messageTitle:['尖叫精选','系统通知'],
					messageIcon:[require('../assets/official_message.png'),require('../assets/system_message.png')]
				}
			},
			mounted(){
				axios.get('/message/messageMain?_=1542763527726').then((res)=>{
					this.messageList = res.data.data.messageLists;
					this.$store.commit('changeNavbar',0);
				})
			},
			computed:{
				getTime(){
					var array = [];
					for(var i =0;i<this.messageList.length;i++){
						var d = new Date(this.messageList[i].createTime);
						var time = new Date().getTime() - d.getTime();
						var hours = Math.floor(time/(60*60*1000));
						array.push(hours)
					}
					return array;
				}
			},
			methods:{
				goMessageList(data,msg){
					this.$router.push('/message/msglist');
					this.$emit('changetitle',data);
					this.$store.commit('changeMessage',msg.msgType);
				}
			}
		}
</script>

<style lang="scss" scoped>
	.columnList{
		background:white;
		width:100%;
		padding-top:0.32rem;
		padding-left:0.25rem;
		padding-right:0.25rem;
		padding-bottom:0.3rem;
		box-sizing:border-box;
		li{
			overflow:hidden;
			margin-bottom:0.30rem;
			img{
				width:0.22rem;
				height:0.22rem;
				float:left;
			}
			dl{
				float:right;
				width:2.85rem;
				background:white;
				dt{
					height:0.4rem;
					border-bottom:solid 1px #EAEAEA;
					p{
						float:left;
						font-size:0.13rem;
						color:#65686C;
						font-weight:bold;
					}
					i{
						float:right;
						font-size:0.2rem;
						color:#65686C;
					}
				}
				dd{
					font-size:0.13rem;
					position:relative;
					padding-bottom:0.1rem;
					p:first-of-type{
						color:#65686C;
						margin-top:0.1rem;
						margin-bottom:0.13rem;
						width:2.8rem;
					}
					p:last-of-type{
						color:#ccc;
					}
					.point{
						position:absolute;
						right:0.05rem;
						top:0rem;
						height:0.07rem;
						width:0.07rem;
						background:yellow;
						border-radius:50%;
					}
				}
			}

		}
	}
</style>