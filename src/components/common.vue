<template>
	<div>
		<div class="swiper-container">
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
          		<p>{{data.moduleDescription}}</p>
          		<div v-if="bigImg(index)">
          			<img :src="data.moduleContent.banners[0].bannerImgSrc" class="img2"> 
          		</div>
              <div v-if="products(index)">
                  bbbbb
              </div>
          	</li>
          </ul>
	</div>
</template>

<script>
    import Swiper from "swiper";
    import "swiper/dist/css/swiper.css";
    
    
    import axios from 'axios'


	  export default{
	  	 name:'common',
	  	 data(){
	  	 	return {
	  	 		isShow:true, 
	  	 		datalist:[],
	  	 		datalist2:[]
	  	 	}
	  	 },
	  	 mounted(){
              axios.get('/v2/page?pageId=1&tabId=1&_=1542764728181').then(res=>{
              	  // console.log(res.data.data.modules[2].moduleContent.banners)
              	  this.datalist = res.data.data.modules[0].moduleContent.banners
                  this.$nextTick(()=>{
                    new Swiper('.swiper-container',{
                          pagination: {
                            el: '.swiper-pagination',
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
                  })

                  res.data.data.modules.splice(0,1)
              	  console.log(res.data.data.modules)
                  this.datalist2 = res.data.data.modules
              
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
</style>