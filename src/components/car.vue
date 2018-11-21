<template>
	<div>
		<ul class="cartShow" v-if="dataList">
			<li v-for="data,index in dataList" class="li">
				<div class="select">
					<div class="check">
						<input type="checkbox" :key="data.id" :value="data" v-model="isList">
					</div>
					<div class="LeftAndRight">
						<button @click="clickJ(index)">-</button>
						<input type="text" v-model="data.number" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')">
						<button @click="clickZ(index)">+</button>
					</div>
				</div>
				<div class="show">
					<div class="img">
						<img :src="data.img">
					</div>
					<ul class="cartContent">
						<li class="name">{{data.name}}</li>
						<li class="style">
							<span v-for="dataCon,index in data.style" class="styleSpan">{{dataCon}}</span>
						</li>
						<li class="nulll"></li>
						<li class="price">
							<span class="span1">￥{{data.price}}</span>
							<span class="span2">x{{data.number}}</span>
						</li>
					</ul>
				</div>
			</li>
		</ul>
		{{isList}}
		<!-- {{dataList}} -->
		<div class="bottom_nav">
			<div class="b_nav_left">
				<jj><input type="checkbox" :name="dataList" v-model="isAll">全选</jj>
				<span>合计：{{allPrice}}</span>
			</div>
			<button @click="submilt">提交订单</button>
		</div>
		<div class="zhanwei"></div>
	</div>
</template>

<script>

export default {
	name: 'car',
	data(){
		return{
			dataList: 'null',
			isList: []
		}
	},
	methods: {
		clickZ(index){
			this.dataList[index].number++
		},
		clickJ(index){
			this.dataList[index].number>1?this.dataList[index].number--:this.dataList[index].number
		},
		submilt(){

		}
	},
	mounted(){
		setTimeout(()=>{
			this.dataList = [
				{
					id: 1,
					img: 'fsdfsgfsdag.jpg',
					name: 'Nox晚安音乐灯灰白色',
					style: [
						'白色',
						'黑色',
						'红色'
					],
					price: '349',
					number: 1
				},
				{
					id: 2,
					img: 'fsdfsgfsdag.jpg',
					name: 'Nox晚安音乐灯灰绿色',
					style: [
						'白色',
						'黑色',
						'红色'
					],
					price: '1224',
					number: 2
				},
				{
					id: 3,
					img: 'fsdfsgfsdag.jpg',
					name: '窗帘',
					style: [
						'白色',
						'黑色',
						'红色'
					],
					price: '999',
					number: 5
				}
			]
		},500)
	},
	computed:{
		isAll:{
			get(){
				if (this.dataList.length === this.isList.length) {
					return true
				}else{
					return false
				}
			},
			set(data){
				if (data) {
					this.isList = this.dataList
				}else{
					this.isList = []
				}
			}
		},
		allPrice(){
			let sun = 0;
			this.isList.forEach((data)=>{
				sun+= data.number * data.price
			})
			return sun
		}
	}
};

</script>

<style lang="scss" scoped>
.cartShow{
	width: 100%;
	height:auto;
	.li{
		margin: 0 auto;
		width: 3.45rem;
		height: auto;
		padding: 0 0 0 0;
		box-sizing: border-box;
		.show:after{
			clear: both;
			content:"";
			display: block;
		}
		.show{
			border-top: 1px solid #ccc;
			border-bottom: 1px solid #ccc;
			padding-top: .1rem;
			width: 100%;
		}
		.img{
			float: left;
			width: .8rem;
			height: .8rem;
			background-color: red;
			margin-left: .2rem;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.select{
			padding:.1rem 0;
			.check{
				float:left;
				input{
				}

			}
			.LeftAndRight{
				float: right;
				input{
					width: .2rem;
					text-align: center
				}
				button{
					background-color: #eee;
					width: .25rem;
					height: .25rem;
				}
			}
		}
		.select:after{
			clear: both;
			content:"";
			display: block;
		}
		.cartContent{
			float: left;
			margin-left: .15rem;
			width: 2.1rem;
			font-size: .14rem;
			li{
				height: .24rem
			}
			.styleSpan{
				padding: 0 .08rem .02rem .08rem;
				font-size: .12rem;
				border-radius: .06rem;
				margin-right: .07rem;
				background-color: #eee;
				color: #555;
			}
			.price{
				.span1{
					float: left;
				}
				.span2{
					float: right;
					font-size: .12rem;
					color: #aaa;
				}
			}
		}
	}
	.li:after{
		clear: both;
		content:"";
		display: block;
	}
}
.bottom_nav{
	width: 100%;
	height: .6rem;
	background-color: #fff;
	position: fixed;
	bottom: 0;
	z-index: 10;
	.b_nav_left{
		display: flex;
		justify-content:space-between;
		width: 2.65rem;
		float: left;

		span{
		display: inline-block;
		height: 100%;
		}

		input{
			
		}
	}
	button{
		height: 100%;
		background-color: #FFD444;
		padding: 0 .2rem;
		font-size: .16rem;
		float: right;
	}
	
}
.bottom_nav:after{
		clear: both;
		content:"";
		display: block;
	}
.zhanwei{
	width: 100%;
	height: .6rem;
}
</style>