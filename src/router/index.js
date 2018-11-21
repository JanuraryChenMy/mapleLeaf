import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '../components/home.vue'
import Classify from '../components/classify.vue'
import Car from '../components/car.vue'
import Message from '../components/message.vue'
import My from '../components/my.vue'
import Myself from '../components/myself.vue'
import Collection from '../components/collection.vue'
import Coupons from '../components/coupons.vue'
 

import Login from '../components/login.vue'
import Register from '../components/register.vue'
import Forgetpass from '../components/forgetpass.vue'

import Order from '../components/order.vue'
import Information from '../components/information.vue'

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
      		path:'information',
      		component:Information
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
      		path:'catalog/:id',
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
      component: My,
      children:[
        {
          path:'login',
          component:Login,
        },
        {
          path:'register',
          component:Register
        },
        {
          path:'forgetpass',
          component:Forgetpass
        },
        {
          path:'myself',
          component:Myself
        },
        {
          path:'information',
          component:Information
        },
        {
          path:'collection',
          component:Collection
        },
        {
          path:'coupons',
          component:Coupons
        },
        {
          path:'order',
          component:Order
        },
        {
          path:'',
          component:Login
        },
      ]
    },
    
    {
      path: '*',
      redirect:'/home'
    }
  ]
})
