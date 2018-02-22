import Vue from 'vue'
import Router from 'vue-router'
import AqiTime from '@/components/AqiTime'
import Mazai from '@/components/Mazai'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Mazai
    },
    {
      path: '/aqitime',
      component: AqiTime
    }
  ]
})

router.beforeEach((to, from, next)=>{
  next()
})

export default router