import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		show:true,
		furnitureList:[
			{
				name:'沙发',
				id:20
			},{
				name:'椅凳',
				id:21
			},{
				name:'桌几',
				id:22
			},{
				name:'床',
				id:2310
			},{
				name:'柜架',
				id:24
			},{
				name:'餐桌',
				id:2210
			},{
				name:'茶几和边桌',
				id:2211
			},{
				name:'书桌',
				id:2212
			},{
				name:'隔断',
				id:2414
			},
		],
		catalogList:[],
		orderBy:'onShelfTime',
		id:null,
		sort:'desc',
		pageNumber:1,
		showList:[],
		msgType:1,
		isLog:'',
		list:[],
	    changeResult:'onShelfTime',
	    datalist2:[],
        currend:0,
        cartCount:0
	},
	
	mutations:{
		changeNavbar(state,payload){

			if(payload === 0){
				state.show = false;
			} else{
				state.show = true;
			}
		},
		changeCatalog(state,payload){
			state.catalogList = payload
			if (!payload) {
				state.catalogList = [{productName:'啥特么也没有'}]
			}else{
				state.catalogList = payload
			}
			state.showList.push(...payload)
		},
		changeShowList(state){
			state.showList = []
		},

		changeSort(state){
			state.sort = state.sort === 'desc'?'asc':'desc'
		},
		changeOrderBy(state,payload){
			state.orderBy=payload
		},
		changeId(state,payload){
			state.id = payload
		},
		changePage(state,payload){
			state.pageNumber = payload
		},
		changeMessage(state,payload){
			state.msgType = payload;
		},
		changeLog(state,payload){
			state.isLog = payload;
		},
		changeCartCount(state,payload){
			state.cartCount = payload;
		},
		changeResult(state,payload){
             state.changeResult = payload
             state.currend = 0
             state.list = []
		},
		datalist(state,payload){
			 state.datalist2.push(payload)
             state.list = []
		},
		datalist3(state,payload){
			 state.datalist2 = []
		},
		getimgMutations(state,payload){
			 state.list = [...state.list,...payload]
		},
	},
	actions:{
		changeCatalog({state},payload){
			return axios.get(`/pages/category/${state.id}?pageNumber=${state.pageNumber}&orderBy=${state.orderBy}&sort=${state.sort}&_=154`).then((res)=>{
				store.commit('changeCatalog',res.data.data.products)
				return res.data.data.products
			}).catch(err=>{
				console.log(err);
			})
		},
		getimg(store,payload){
		    store.state.currend++
			   var id = window.encodeURIComponent(payload)
		    axios.get(`/product/search?keyword=${id}&sort=${store.state.changeResult}&order=desc&currentPage=${store.state.currend}&_=${new Date().getTime()}`).then(res=>{
		     	store.commit('getimgMutations',res.data.data.products)
		         return res.data.data.products
		    })
		}

	}
})

export default store;