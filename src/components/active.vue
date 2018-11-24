<template>
	<div class="div">
		 <div class="module01 swiper-container">
		         <div class="swiper-wrapper">
		             <div class="swiper-slide" v-for="data in datalist" :key="data.id">
		                 <img :src="data.bannerImgSrc" class="img" />
		             </div>
		         </div>
		     
		         <div class="swiper-pagination"></div>
		         
		       
		         <div class="swiper-scrollbar"></div>
		 </div>
		 <ul class="ul">
		 	<li class="li" v-for="data,index in datalist2">
		 		<h3>{{data.moduleContent.moduleName}}</h3>
		 		<!-- <p class="p1">{{data.moduleDescription}}</p> -->
		 	    <img :src="data.moduleContent.bannerImgSrc" class="img2"> 
		 	

				 <div v-if="products(index)">
				     <h2>{{datalist2[index].moduleContent.name}}</h2>
				     <div class="module02 swiper-container">
				         <div class="swiper-wrapper">
				           <div class="swiper-slide" v-for="item in datalist2[index].moduleContent.products">
				             <img :src="item.productImg" alt="" class="img3 ">
				             <!-- <h2>{{item.moduleContent.name}}</h2> -->
				             <span>{{item.productName}}....</span>
				             <p class="p2">￥{{item.sellPrice}}</p>
				           </div>
				           
				         </div>
				     </div>
				 </div>
		 		
		 	</li>
		 </ul>
	</div>
</template>

<script>
   import Swiper from "swiper";
   import "swiper/dist/css/swiper.css";

   import axios from "axios";


	 export default{
	 	  name:'active',
	 	  data(){
	 	  	 return {
	 	  	 	 datalist:[],
	 	  	 	 datalist2:[]	
	 	  	 } 
	 	  },
	 	  mounted(){
                  axios.get('/v2/page?pageId=1&tabId=10010&_=1542863052940').then(res=>{
                  	  this.datalist = res.data.data.modules[0].moduleContent.banners
                  	  console.log(res.data.data)
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
                  	          slidesPerView: 3,
                  	          spaceBetween: 30,
                  	          loop: true, // 循环模式选项
                  	          navigation: {
                  	            nextEl: '.swiper-button-next',
                  	            prevEl: '.swiper-button-prev',
                  	          }
                  	      })
                  	  })
                      res.data.data.modules.splice(0,1)
                      this.datalist2 = res.data.data.modules
                      // console.log(this.datalist2)
                  })
	 	  },
	 	  methods:{
	 	  	  products(index){
	 	  	  	   if(this.datalist2[index].moduleContent.products){
	 	  	  	   	  return true
	 	  	  	   }else{
	 	  	  	   	  return false
	 	  	  	   }
	 	  	  }
	 	  }

	   }
</script>

<style lang="scss" scoped>
     .module01{
         border-bottom: 0.2rem solid #F5F5F5;
         margin-top: 0.02rem;
     }
	 .img{
	 	 width:100%;
	 
	 }
	 .img2{
	     width:100%;
	     z-index: -1;
	   	 }
	 .img3{
	     width:100%;
	     margin: 0 auto;
	     z-index: -1;
	 }
     .li{
     	font-size: 0.1rem;
     	line-height: 0.2rem;
     	overflow: hidden;
     	text-overflow: ellipsis;
     	display: -webkit-box;
     	-webkit-line-clamp: 1;
     	-webkit-box-orient: vertical;
     	text-align: center;
     	border-bottom: 0.2rem solid #F5F5F5;

     }
     .ul{
     	 margin-bottom: 0.3rem;
     }
</style>
	 	  	  	   	  	            

                  