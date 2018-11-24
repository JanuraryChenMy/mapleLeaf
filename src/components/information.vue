<template>
	<div class="box">
		<header>
			 <div @click="homeClick()" class="header-left">
			 	<img src="../assets/home.png">
			 </div>
			 <h3 class="header-middle">个人信息</h3>
			 <router-link tag="div" to="/my/myself" class="header-right"><img src="../assets/me.png"></router-link>
		</header>
		<div class="information-all">
			<div class="name">
				<span class="touxiang">头像</span>
				<span class="userphoto">
					<label>
						<input type="file" class="file" >
						<img src="https://img.wowdsgn.com/%2Fuser%2Favatar%2F2108a2ee-61bb-463e-aba0-c1fb9c8b5927_2dimension_200x200.jpg">
						<span class="icon iconfont">></span>
					</label>
				</span>
			</div>
			<ul>
				<li><div class="a"><span>昵称</span><span>{{this.$store.state.isLog.data.username}}</span><span>></span></div></li>
				<li><div class="a"><span>个性签名</span><span>123</span><span>></span></div></li>
				<li><div class="a" @click="handleClick()"><span>性别</span><span>女</span><span>></span></div></li>
				<li><div class="a" @click="ageClick()"><span>年龄段</span><span>90后</span><span>></span></div></li>
				<li><div class="a" @click="criClick()"><span>星座</span><span>天蝎座</span><span>></span></div></li>
				<li><div class="a"><span>职业</span><span>学生</span><span>></span></div></li>
			</ul>
			
		</div>
		<router-link tag="div" to="/my/address" class="address">
			<span>收货地址</span>
			<span>></span>
		</router-link>
		<mt-popup v-model="popupoVisible" position="bottom" class="popup" >
			<div class="age-cancel">取消</div>
			<div class="age-confirm">确认</div>
			<p>男</p>
			<p>女</p>
			<p>保密</p>
		</mt-popup>
		<mt-popup v-model="popupVisible" position="bottom" class="popup" >
			<div class="age-cancel">取消</div>
			<div class="age-confirm">确认</div>
			<p>保密</p>
			<p>70</p>
			<p>80</p>
			<p>90</p>
			<p>00</p>
		</mt-popup>
		<mt-popup v-model="popupcVisible" position="bottom" class="popup" >
			<div class="age-cancel">取消</div>
			<div class="age-confirm">确认</div>
			<p>天蝎座</p>
			<p>射手座</p>
			<p>白羊座</p>
			<p>双子座</p>
			<p class="blue">双鱼座</p>
			<p>摩羯座</p>
			<p>狮子座</p>
			<p>处女座</p>
			<p>天秤座</p>
			<p>巨蟹座</p>
			<p>射手座</p>
			<p>水瓶座</p>
		</mt-popup>
	</div>
</template>

<script>
	export default {
		name:'information',
		data(){
			return {
				popupVisible:false,
				popupcVisible:false,
				popupoVisible:false,
				closeOnClickModal:true
			}
		},
		methods:{
			handleClick(){
				this.popupoVisible = true;
			},
			ageClick(){
				this.popupVisible = true;
			},
			criClick(){
				this.popupcVisible = true;
			},
			homeClick(){
				this.$router.push('/home');
				this.$store.commit('changeNavbar',1);
			}
		},
		mounted(){
			console.log(this.$store.state.isLog)
		}
	}
</script>

<style lang="scss" scoped>
.box{
	background:#f5f5f5;
	height:100%;
}
$nav_Height:0.4rem;
header{
	box-sizing:border-box;
	height:$nav_Height;
	width:100%;
	background:#fff;
	padding:0 0 0 0.1rem;
	border-bottom:0.01rem solid #f5f5f5;
	position: relative;
	.header-left{
		display: inline-block;
		width:0.32rem;
		height:0.32rem;
		line-height:0.25rem;
		position: absolute;
		left:0.1rem;
		top:50%;
		transform: translateY(-50%);
		img{
			display: block;
			width:0.26rem;
			margin:0.03rem 0;
			border: 0;
		}
	}
	.header-middle{
		position: absolute;
		height:$nav_Height;
		line-height: $nav_Height;
		left:50%;
		transform: translateX(-50%);
	}
	.header-right{
		cursor: pointer;
		display: inline-block;
		position: absolute;
		height: $nav_Height;
		line-height:$nav_Height;
		right:0.1rem;
		img{
			display: block;
			width:0.26rem;
			margin:0.03rem 0;
			border: 0;
		}
	}
}
.information-all{
	box-sizing: border-box;
	width:100%;
	background:#fff;
	padding-left:0.2rem;
	margin:0.2rem 0;
	margin-bottom:0.05rem;
	.name{
		position:relative;
		height:0.75rem;
		border-bottom:solid 1px #eaeaea;
		.touxiang{
			position:absolute;
			left:0;
			top:0.325rem;
		}
		label{
			position:absolute;
			right:0.4rem;
			top:0.125rem;
			height:0.5rem;
			width:0.5rem;
			img{
				width:0.5rem;
				height:0.5rem;
				border-radius:50%;
				position:absolute;
				left:0;
				top:0;
			}
			.file{
				opacity:0;
			}
			span{
				position:absolute;
				right:-0.2rem;
				top:0.15rem;
				font-size:0.17rem;
				color:#808080;
			}
		}
		
	}
	ul{
		padding:0;
		margin:0;
		width:100%;
		li{
			width:100%;
			height:0.5rem;
			line-height:0.5rem;
			border-bottom:0.01rem solid #eaeaea;
			.a{
				width:100%;
				text-decoration: none;
				color:#000;
				display: block;
				position: relative;
				span{
					display: inline-block;
				}
				span:nth-of-type(2){
					position: absolute;
					right:0.45rem;
					color:#808080;
				}
				span:nth-of-type(3){
					position: absolute;
					right:0.2rem;
					color:#808080;
				}
			}
		}
	}

}
.popup{
	width:100%;
	height:2.5rem;
	border:1px solid #eee;
	.age-cancel{
		position:absolute;
		left:0.1rem;
		top:0.1rem;
	}
	.age-confirm{
		position:absolute;
		right:0.1rem;
		top:0.1rem;
	}
	p{
		font-size:0.2rem;
		position: relative;
		top:0.5rem;
		height:0.4rem;
		line-height: 0.4rem;
		border:0.01rem solid #eee;
		text-align: center;
	}
	.blue{
		color:#00f;
	}
}
.address{
	width:100%;
	height:0.5rem;
	line-height:0.5rem;
	position: relative;
	background:#fff;
	/*margin-bottom:0.2rem;*/
	top:0.1rem;
	span{
		margin-left:0.2rem;
	}
	span:nth-of-type(2){
		position: absolute;
		right:0.2rem;
		color:#808080;
	}
}
</style>