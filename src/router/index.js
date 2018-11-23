import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '../components/home.vue'
import Search from '../components/search.vue'
import Result from '../components/result.vue'
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

import Orderall from '../components/orderall.vue'
import Ordercomment from '../components/ordercomment.vue'
import Orderdelivery from '../components/orderdelivery.vue'
import Orderpay from '../components/orderpay.vue'
import Orderreceived from '../components/orderreceived.vue'

import Exitgood from '../components/exitgood.vue'

import Address from '../components/address.vue'

import Information from '../components/information.vue'

import Common from '../components/common.vue'
import Furniture from '../components/furniture.vue'
import House from '../components/house.vue'
import detail from '../components/detail.vue'

import Active from '../components/active.vue'

import Catalog from '../components/catalog.vue'

import MessageList from '../components/messageList.vue'
import MsgTitle from '../components/msgTitle.vue'

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
      path: '/search:id',
      component: Search,
    },
    {
      path:'/result',
      component:Result 
    },      
    {
      path: '/classify',
      component: Classify,
    },
    {
      path: '/detail/:id',
      component: detail,
    },
    {
      path: '/car',
      component: Car
    },
    {
      path: '/message',
      component: Message,
      children:[
        {
          path:'msglist',
          component:MessageList
        },
        {
          path:'msg',
          component:MsgTitle
        },
        {
          path:'',
          component:MsgTitle
        }
      ]
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
          component:Order,
          children:[
            {
              path:'orderall',
              component:Orderall,
            },
            {
              path:'ordercomment',
              component:Ordercomment,
            },
            {
              path:'orderdelivery',
              component:Orderdelivery,
            },
            {
              path:'orderpay',
              component:Orderpay,
            },
            {
              path:'orderreceived',
              component:Orderreceived,
            }
          ]
        },
        {
          path:'exitgood',
          component:Exitgood
        },
        {
          path:'address',
          component:Address
        },
        {
          path:'',
          component:Login
        },
      ]
    },
    {
      path:'/catalog/:productId',
      component:Catalog
    },
    {
      path: '*',
      redirect:'/home'
    }
  ]
})
