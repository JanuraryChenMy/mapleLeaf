<template>
	<div>
		<header>
			<router-link tag="div" to="/home" class="header-left">
			 	<img src="../assets/home.png">
			</router-link>
			 <h3 class="header-middle">我的收藏</h3>
			 <router-link tag="div" to="/my/myself" class="header-right">
			 	<img src="../assets/me.png">
			 </router-link>
		</header>
		<div id="leftTabBox" class="tabBox">
            <div class="hd">
                <ul>
                    <li v-for="data,index in datalist" :key="data.id" :class="current==index?'special':''" @click="handleClick(index)">
						{{data}}
                    </li>
                </ul>
            </div>
        </div>
	</div>
</template>

<script>
	export default {
		name:'order',
		data(){
			return {
				current:0,
				datalist:[
					"单品",
					"品牌",
					"设计师"
				]
			}
		},
		methods:{
			handleClick(index){
				this.current = index;
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
#leftTabBox{
	box-sizing: border-box;
	.hd{
		height:0.4rem;
		line-height: 0.4rem;
		font-size:0.16rem;
		background:#fff;
		position: relative;
		margin-bottom:0.23rem;
		ul{
			position: absolute;
			top:0;
			overflow: hidden;
			width:100%;
			li{
				float: left;
				color:#000;
				width:0.75rem;
				text-align: center;
				display: flex;
				justify-content: space-around;
				margin:0 0.25rem;
			}
		}
	}
}
.special{
	border-bottom:0.02rem solid #000;
}
</style>