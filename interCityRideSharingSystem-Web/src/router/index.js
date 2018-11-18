import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import InspectUser from '@/components/InspectUser'
import InspectDriver from '@/components/InspectDriver'
import InspectPassenger from '@/components/InspectPassenger'
import InspectRoutes from '@/components/InspectRoutes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/app',
      name: 'InspectUser',
      component: InspectUser
    }, 
    {
      path: '/driver',
      name: 'InspectDriver',
      component: InspectDriver
    }, 
    {
      path: '/passenger',
      name: 'InspectPassenger',
      component: InspectPassenger
    }, 
    {
      path: '/route',
      name: 'InspectRoutes',
      component: InspectRoutes
    }
  ]
})
