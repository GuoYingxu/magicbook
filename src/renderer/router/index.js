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
      component:require('@/components/unitgrid').default
    }
    
  ]
})
