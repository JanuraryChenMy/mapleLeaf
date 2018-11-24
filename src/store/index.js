import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		show:true,
		msgType:1,
		isLog:'',
		list:[],
	    changeResult:'onShelfTime',
	    datalist2:[],
        currend:0,
        cartCount:0
	},
	actions:{
       getimg(store,payload){
           store.state.currend++
       	   var id = window.encodeURIComponent(payload)
           axios.get(`/product/search?keyword=${id}&sort=${store.state.changeResult}&order=desc&currentPage=${store.state.currend}&_=${new Date().getTime()}`).then(res=>{
                console.log(res.data.data.products)
                store.commit('getimgMutations',res.data.data.products)
           })
       }
	},
	mutations:{
		changeNavbar(state,payload){
			if(payload === 0){
				state.show = false;
			} else{
				state.show = true;
			}
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
             
		}
	}
})

export default store;