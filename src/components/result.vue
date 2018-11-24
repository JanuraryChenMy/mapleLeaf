<template>
	<div>
		     <ul class="ul">
		     	<li class="li">
		     		<span class="tubiao"><i class="iconfont icon-originalimage"></i></span>
			 		<input class="input" type="text" placeholder="搜索我的尖叫好物" v-model="value" @keydown="keydown($event,value)">
		     	</li>
		     	<li>
		     	  <router-link to="/home">
		     		<span class="tubiao2"><i class="iconfont icon-store"></i></span>
		     	  </router-link>
		     	</li>	
		     </ul>
		     <ul class="ul2">
		          <li v-for="data,index in datalist" :class="timeindex === index?active:''"  @click="handclick(data,index)">{{data}}</li>
		     </ul>
		     <ul class="ul3">
		     	<li class="li2" v-for="data,index in $store.state.list" v-infinite-scroll="loadMore"
                      infinite-scroll-disabled="loading"
                      infinite-scroll-immediate-check="false"
                      infinite-scroll-distance="0">
		     		 <img :src="data.productImg" alt="" class="img" @click="clickk(data)">
		     		 <h3>{{data.productTitle}}</h3>
		     		 <p>￥{{data.originalPrice}}</p>
		     	</li>
		     </ul>
		     <!-- <div>您好，您搜索的商品不存在</div>	 -->
	</div>
</template>
<script>
  import axios from 'axios'


	 export default{
	 	  name:'result',
	 	  data(){
	 	  	 return {
	 	  	 	who:'xiaoliang',
	 	  	 	loading:false,
	 	  	 	id:null,
                value:'',
                timeindex:0,
                active:'active',
                datalist:['上新','销量','价格'],
                datalist2:['onShelfTime','sales','price']
	 	  	 }
	 	  },
	 	  methods:{
               clickk(data){
                   this.$router.push('/detail/'+data.productId)
                   
               },
                 handclick(data,index){
                     this.timeindex = index
                     this.$store.commit('changeResult',this.datalist2[index]) 
                     this.$store.dispatch("getimg",this.id)

                 },
                 keydown(evt,id){
                   if( evt.keyCode == 13){
                       this.$store.dispatch("getimg",this.id)  
                   }
                 },
                 loadMore(){
                 	  console.log(this.$store.state.currend)
                 	  if(this.$store.state.currend < 4 ){
                 	         console.log('aaa')
                 	         this.$store.dispatch("getimg",this.id)
                 	  }else{
                 	  	     return
                 	  }
                 	
                 }
	 	  },
          // computed:{
          // 	   panduan(){
          // 	   	  if(this.$store.state.list.length === 0){
          // 	   	  	  return false
          // 	   	  }else{
          // 	   	  	  return true
          // 	   	  }
          // 	   },
          // 	   panduan2(){
          // 	   	  if(this.$store.state.list.length === 0){
          // 	   	  	  return true
          // 	   	  }else{
          // 	   	  	  return false
          // 	   	  }
          // 	   },
          	   
          // },      
          	   	  	
	 	  mounted(){
              this.id = this.$route.params.id
	 	  	  
	 	  	  this.$store.dispatch("getimg",this.id)
	 	  } 
	 }
              
               
	 	  	  
	 	  	 
             
</script>
<style lang="scss" scoped>
		 $nav_Height:0.4rem;
		 .li{
		 	   margin-left: 0.2rem;
		 	   margin-top: 0.1rem;
	          .tubiao{
	          	position:absolute;
	          	left:0.26rem;
	          	top:0.12rem;
	          }
	          .input{
	          	height:0.26rem;
	          	width:2.4rem;
	          	padding-left: 0.3rem;
	          	background:#F5F5F5;
	          	outline:none;
	          	border:none;
	          	border-radius: 0.5rem;
	          }
		 }
		 .tubiao2{
		 	  position:absolute;
		 	  right:0.12rem;
		 	  top:0.12rem; 
		 	  i{
	               font-size: 0.2rem;
		 	  }
		 	
		 }
		 .ul{
		 	padding-bottom: 0.08rem;
		     border-bottom:0.05rem solid #F5F5F5;  	 
		 }
         .ul2{
         	display: flex;
         	 li{
         	 	flex:1;
         	 	text-align: center;
         	 }
         }
         .active{
         	 border-bottom:0.03rem black solid;
         }
         .img{
         	 width:100%;
         }
         .li2{
         	 float:left;
         	 width:40%;
         	 margin-left:0.25rem;
             h3{
             	font-size: 0.1rem;
             	color:#808080; 
             	text-align: center;
             	line-height: 0.2rem;
             	overflow: hidden;
             	text-overflow: ellipsis;
             	display: -webkit-box;
             	-webkit-line-clamp: 1;
             	-webkit-box-orient: vertical;
             	text-align: center;
             }
             p{
             	text-align: center;
             	margin-bottom: 1rem;
             }
         }

</style>
         	