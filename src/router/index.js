import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'
import Mazai from '@/components/Mazai'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Mazai',
      component: Mazai
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
