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
						<input type="file" class="file">
						<img src="https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLliav3HOMFfLRaddtdtkicT7kOo77fxBOJGaGb8WVub1T9yDXxxZ31hkLIoCmBQKyDB3QwaePhys3A/132">
						<span class="icon iconfont">></span>
					</label>
				</span>
			</div>
			<ul>
				<li><div class="a"><span>昵称</span><span>{{this.$store.state.isLog.data.username}}</span><span>></span></div></li>
				<li><div class="a"><span>个性签名</span><span>123</span><span>></span></div></li>
				<li><div class="a" @click="handleClick()"><span>性别</span><span>女</span><span>></span></div></li>
				<li><div class="a"><span>年龄段</span><span>95后</span><span>></span></div></li>
				<li><div class="a"><span>星座</span><span>天蝎座</span><span>></span></div></li>
				<li><div class="a"><span>职业</span><span>学生</span><span>></span></div></li>
			</ul>
			
		</div>
		<router-link tag="div" to="/my/address" class="address">
			<span>收货地址</span>
			<span>></span>
		</router-link>
		<mt-popup v-model="popupVisible" position="bottom" class="popup" >
			<div class="age-cancel">取消</div>
			<div class="age-confirm">确认</div>
			<p>男</p>
			<p>女</p>
			<p>保密</p>
		</mt-popup>
	</div>
</template>

<script>
	export default {
		name:'information',
		data(){
			return {
				popupVisible:false,
				closeOnClickModal:true,
				
			}
		},
		methods:{
			handleClick(){
				this.popupVisible = true;
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
	background:yellow;
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
		font-size:30px;
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