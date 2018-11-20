import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '../components/home.vue'
import Classify from '../components/classify.vue'
import Car from '../components/car.vue'
import Message from '../components/message.vue'
import My from '../components/my.vue'

import Common from '../components/common.vue'
import Furniture from '../components/furniture.vue'
import House from '../components/house.vue'
import Active from '../components/active.vue'

import Catalog from '../components/catalog.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home,
      children:[
      	{
      		path:'common',
      		component:Common
      	},
      	{
      		path:'furniture',
      		component:Furniture
      	},
      	{
      		path:'house',
      		component:House
      	},
      	{
      		path:'active',
      		component:Active
      	},
      	{
      		path:'',
      		component:Common
      	}
      ]
    },
    {
      path: '/classify',
      component: Classify,
      children:[
      	{
      		path:'catalog',
      		component:Catalog
      	}
      ]
    },
    {
      path: '/car',
      component: Car
    },
    {
      path: '/message',
      component: Message
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '*',
      redirect:'/home'
    }
  ]
})
