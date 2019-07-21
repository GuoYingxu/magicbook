import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      // component: require('@/components/LandingPage').default
      // component:require('@/components/MainPage').default
      component:require('@/components/unitgridApp').default
    },
    {
      path: '/menu',
      name: 'menu',
      // component: require('@/components/LandingPage').default
      // component:require('@/components/MainPage').default
      component:require('@/components/unitgridMenu').default
    },
    {
      path: '/menu1',
      name: 'menu1',
      // component: require('@/components/LandingPage').default
      // component:require('@/components/MainPage').default
      component:require('@/components/unitgridFpage').default
    },
    {
      path: '/menu2',
      name: 'menu2',
      // component: require('@/components/LandingPage').default
      // component:require('@/components/MainPage').default
      component:require('@/components/unitgridSpage').default
    },
    
  ]
})
