<template>
	<div>
		<div class="module01 swiper-container">
		        <div class="swiper-wrapper">
		            <div class="swiper-slide" v-for="data in datalist" :key="data.id">
		                <img :src="data.bannerImgSrc" class="img" />
		            </div>
		        </div>
		        <div class="swiper-pagination"></div>
		        <div class="swiper-scrollbar"></div>
		</div> 


		<ul>
			<li class="li" v-for="data,index in datalist2">
				<h3>{{data.moduleContent.name}}</h3>
				<p class="p1">{{data.moduleDescription}}</p>
				<div v-if="bigImg(index)">
					<img :src="data.moduleContent.banners[0].bannerImgSrc" class="img2"> 
				</div>
		    <div v-if="products(index)">
		        <div class="module02 swiper-container">
		            <div class="swiper-wrapper">
		              <div class="swiper-slide" v-for="item in datalist2[index].moduleContent.products">
		                <img :src="item.productImg" alt="" class="img3 ">
		                <span>{{item.productName}}....</span>
		                <p class="p2">￥{{item.sellPrice}}</p>
		              </div>
		              
		            </div>
		        </div>
		    </div>
			</li>
		</ul>  
        <ul>
        	<li v-if="length()" class="li2">
        		<h3>{{datalist3[0].moduleContent.name}}</h3>
        		<img v-for="data in datalist3[0].moduleContent.banners" :src="data.bannerImgSrc" alt="" class="img4">
        	</li>
        </ul>
	</div>
</template>

<script>
   import Swiper from "swiper";
   import "swiper/dist/css/swiper.css";

   import axios from "axios";
	  export default{
	  	  name:'house',
	  	  data(){
	  	  	  return {
	  	  	  	  datalist:[],
	  	  	  	  datalist2:[],
	  	  	  	  datalist3:[],
	  	  	  	  datalist4:[]
	  	  	  }
	  	  },
	  	  mounted(){
	  	     axios.get('/v2/page?pageId=1&tabId=10006&_=1542846589482').then(res=>{
	  	     	this.datalist = res.data.data.modules[0].moduleContent.banners
                // console.log(this.datalist)
                this.$nextTick(()=>{
                  new Swiper('.module01',{
                        pagination: {
                          el: '.module01 .swiper-pagination',
                        },
                        loop: true, // 循环模式选项
                        autoplay: {
                            delay: 1000,
                            disableOnInteraction: false,
                        },
                        navigation: {
                          nextEl: '.swiper-button-next',
                          prevEl: '.swiper-button-prev',
                        },
                    })
                    new Swiper('.module02',{
                          pagination: {
                            el: '.module02 .swiper-pagination',
                          },
                          loop: false, // 循环模式选项
                          slidesPerView: 3,
                          spaceBetween: 30,
                          navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                          },
                      });
                 })
                 res.data.data.modules.splice(0,1)
                 this.datalist4 = res.data.data.modules.slice()
                 this.datalist3.push(res.data.data.modules[2])
               
                 res.data.data.modules.splice(2,4) 
                 this.datalist2 = res.data.data.modules
                 console.log(this.datalist2)
                 // console.log(this.datalist2)
	  	     })
	      },
	 
	  methods:{
	  	  bigImg(index){
	  	      if(this.datalist2[index].moduleContent.banners){
	  	          return true
	  	      }else{
	  	          return false
	  	      }
	  	  },
	  	      
	  	  products(index){
	  	         if(this.datalist2[index].moduleContent.products){
	  	            

	  	             return true
	  	         }else{
	  	             return false
	  	         } 
	  	  },
	  	  length(){
               if(this.datalist3.length>=1){
               	   return true
               }
	  	  }
	  }
	}

</script>

<style lang="scss" scoped>
	.img{
		 width:100%;
		 height:30%;
	}
	.img2{
         width:100%;
         height:30%;
	}
	.img3{
		width:100%;
		height:30%;
	}
	h3{
	   text-align:center;
	   margin-bottom: 0.3rem;
	}
	.p1{
	   text-align: center;
	   margin-bottom: 0.3rem;
	   color:#808080;
	   font-size: 0.1rem;
	   line-height: 0.1rem;
	}
	span{
	   font-size: 0.1rem;
	   line-height: 0.2rem;
	   overflow: hidden;
	   text-overflow: ellipsis;
	   display: -webkit-box;
	   -webkit-line-clamp: 1;
	   -webkit-box-orient: vertical;
	   text-align: center;
	}
	.p2{
	    font-size: 0.1rem;
	    line-height: 0.2rem;
	    text-align: center;
	}
	.li{
	   border-bottom: 0.2rem solid #F5F5F5;
	   padding-top: 0.3rem;
	}
	.module01{
	    border-bottom: 0.2rem solid #F5F5F5;
	    margin-top: 0.02rem;
	}
	.img4{
		width:18%;
		height:20%; 
		margin-left: 0.06rem;
	}
	.li2{
		margin-bottom: 0.5rem;
		padding-top: 0.2rem;
		padding-bottom: 0.1rem;
		border-bottom: 0.2rem solid #F5F5F5;
	}
</style>