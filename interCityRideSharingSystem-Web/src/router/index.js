import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import InspectUser from '@/components/InspectUser'
import InspectDriver from '@/components/InspectDriver'
import InspectPassenger from '@/components/InspectPassenger'
import InspectRoutes from '@/components/InspectRoutes'
import Driver from '@/components/Driver'
import EventRegistration from '@/components/EventRegistration'
import Home from '@/components/Home'
import DriverRanking from '@/components/DriverRanking'
import PassengerRanking from '@/components/PassengerRanking'
import RouteRanking from '@/components/RouteRanking'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/status',
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
    },
    {
      path: '/driver',
      name: 'Driver',
      component: Driver
    },
	   {
      path: '/ranking',
      name: 'Ranking',
      component: EventRegistration
    },
	  	   {
      path: '/passengerRanking',
      name: 'Ranking',
      component: PassengerRanking
    },
	  	   {
      path: '/driverRanking',
      name: 'Ranking',
      component: DriverRanking
    },
	  	   {
      path: '/routeRanking',
      name: 'Ranking',
      component: RouteRanking
    },


  ]
})
