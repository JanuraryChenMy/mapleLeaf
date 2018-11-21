<template>
	<div>
		<div class="module01 swiper-container">
		        <div class="swiper-wrapper">
		            <div class="swiper-slide" v-for="data in datalist" :key="data.id">
		                <img :src="data.bannerImgSrc" class="img" />
		            </div>
		        </div>
		        <!-- 如果需要分页器 -->
		        <div class="swiper-pagination"></div>
		        
		        <!-- 如果需要导航按钮 -->
		      <!--   <div class="swiper-button-prev"></div>
		        <div class="swiper-button-next"></div> -->
		        
		        <!-- 如果需要滚动条 -->
		        <div class="swiper-scrollbar"></div>
		</div>
          <ul>
          	<li v-for="data,index in datalist2">
          		<h3>{{data.moduleContent.name}}</h3>
          		<p class="p1">{{data.moduleDescription}}</p>
          		<div v-if="bigImg(index)">
          			<img :src="data.moduleContent.banners[0].bannerImgSrc" class="img2"> 
          		</div>
              <div v-if="products(index)">
                    <!-- <img v-for="item in datalist3" :src="item." alt=""> -->
                  <!--   <ul class="ul">
                      <li >
                        <img v-for="item in datalist2[index].moduleContent.products" :src="item.productImg" alt="" class="img3">
                       </li>
                    </ul> <-->
              <!--    <div class="module02 swiper-container">
                     <div class="swiper-wrapper">
                       <div class="swiper-slide"  v-for="item in datalist2[index].moduleContent.products">
                         <img :src="item.productImg" alt="" class="img3 ">
                       
                       </div>
                     </div>
                   </div> -->
                  <div class="module02 swiper-container">
                      <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="item in datalist2[index].moduleContent.products">
                          <img :src="item.productImg" alt="" class="img3 ">
                          <span>{{item.productName}}....</span>
                          <p class="p2">￥{{item.sellPrice}}</p>
                        </div>
                        
                      </div>
                      <!-- Add Pagination -->
                      <!-- <div class="swiper-pagination"></div> -->
                  </div>
              </div>
          	</li>
          </ul>
	</div>
</template>

<script>
    import Swiper from "swiper";
    import "swiper/dist/css/swiper.css";
    
    import Vue from"vue";
   
    import axios from 'axios'



	  export default{
	  	 name:'common',
	  	 data(){
	  	 	return {
	  	 		isShow:true, 
	  	 		datalist:[],
	  	 		datalist2:[],
          
	  	 	}
	  	 },
	  	 mounted(){
              axios.get('/v2/page?pageId=1&tabId=1&_=1542764728181').then(res=>{
              	  // console.log(res.data.data.modules[2].moduleContent.banners)
              	  this.datalist = res.data.data.modules[0].moduleContent.banners
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
                      });
                    new Swiper('.module02 ',{
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
              	 
                  this.datalist2 = res.data.data.modules
                  console.log(this.datalist2)
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
           } 

       },
       // computed:{
       // }

	  }
</script>

<style lang="scss" scoped>
	  .img{
	  	 width:100%;
	  }
     .img2{
         width:100%;
     }
     .img3{
         width:100%;
         margin: 0 auto;
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
     li{
        border-bottom: 0.2rem solid #F5F5F5;
        padding-top: 0.3rem;
     }
     .module01{
         border-bottom: 0.2rem solid #F5F5F5;
     }
        
</style>