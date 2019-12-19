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
      // component:require('@/components/ListPage').default
      component:require('@/components/xueji').default
      // component:require('@/components/Lichuli').default
    },
    {
      path:'/schoollist',
      name:'schoollist',
      component:require('@/components/schoollist').default
    },
    {
      path:'/item/:id',
      name:'professor',
      component:require('@/components/infoPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
