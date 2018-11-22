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
          <ul class="ul"  v-infinite-scroll="loadMore"
                          infinite-scroll-disabled="loading"
                          infinite-scroll-immediate-check="false"
                           infinite-scroll-distance="0">
          	<li v-for="data,index in list">
          		<h3>{{data.moduleContent.name}}</h3>
          		<p class="p1">{{data.moduleDescription}}</p>
          		 <div v-if="bigImg(index)">
               <img :src="data.moduleContent.banners[0].bannerImgSrc" class="img2" @click="click(data.moduleContent.banners[0].bannerLinkTargetId)"> 
          		 </div>
              <div v-if="products(index)">
                  <div class="module02 swiper-container">
                      <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="item in list[index].moduleContent.products">
                          <img :src="item.productImg" alt="" class="img3" @click="click(item.productId)">
                          <span>{{item.productName}}....</span>
                          <p class="p2">￥{{item.sellPrice}}</p>
                        </div>
                        
                      </div>
                  </div>
              </div>
          	</li>
          </ul>
           <div>
               <button type="button" class="back-top small" @click="backTop()" v-show="backTopShow">返回顶部</button>
          </div> 
	</div>
</template>

<script>
    import { InfiniteScroll } from 'mint-ui';

    Vue.use(InfiniteScroll);

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
          list:[],
          loading:false,
          current:9,
          backTopShow:false
	  	 	}
	  	 },
       components: {},
	  	 mounted(){
              window.addEventListener('scroll', this.handleScroll),

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
              	  
                  this.datalist2 = res.data.data.modules
                  console.log(this.datalist2)
                  this.list = res.data.data.modules.slice(0,10)
              })
            
	  	 },
	  
    methods:{
         backTop() {
                 let back = setInterval(() => {
                   if(document.body.scrollTop||document.documentElement.scrollTop){
                     document.body.scrollTop-=100;
                     document.documentElement.scrollTop-=100;
                   }else {
                     clearInterval(back)
                   }
                 });
               },
          handleScroll(){
                 if (document.documentElement.scrollTop + document.body.scrollTop > 100) {
                   this.backTopShow=true;
                 }
                 else {
                   this.backTopShow=false;
                 }
         },
            
        

        bigImg(index){
            if(this.list[index].moduleContent.banners){
                return true
            }else{
                return false
            }
        },
            
        products(index){
               if(this.list[index].moduleContent.products){
                     // console.log(this.list[index].moduleContent.products)
                 
                   return true
               }else{
                   return false
               } 
        },
        click(id){
             this.$router.push('/detail/'+id)
        },
        click2(id){
             this.$router.push('/detail/'+id)
        },
        loadMore(){
             
              if(this.list.length >= this.datalist2.length){
                      return
              }
              for(var i=0;i<11;i++){
               this.current++
               this.list.push(this.datalist2[this.current])
                                       
              }
             
               console.log(this.list)
               this.$nextTick(()=>{
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
                         }
                   })
                })
          }
        }  

    }
                 
                
   
  


</script>

<style lang="scss" scoped>

	  .img{
	  	 width:100%;
       z-index: -1;
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
         margin-top: 0.02rem;
     }
     .ul{
        margin-bottom: 0.3rem;
     }   
     .back-top {

         width:0.35rem;
         height:0.35rem;
         background:#F5F5F5;
         z-index:100;
         border-radius: 100%;
         position: fixed;
         right:0.3rem;
         bottom: 1rem;
         outline:none;
     }
</style>