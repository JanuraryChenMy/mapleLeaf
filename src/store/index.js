import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		show:true,
		msgType:1,
		isLog:''
	},
	actions:{

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
		}
	}
})

export default store;