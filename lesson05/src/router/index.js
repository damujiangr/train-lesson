import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TC1 from '@/components/TC1'
import TC2 from '@/components/TC2'
import TC3 from '@/components/TC3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/tc1',
      name: 'TC1',
      component: TC1
    },
    {
      path: '/tc2',
      name: 'TC2',
      component: TC2
    },
    {
      path: '/tc3',
      name: 'TC3',
      component: TC3
    }
  ]
})
