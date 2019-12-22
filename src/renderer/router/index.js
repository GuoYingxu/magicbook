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
      component:()=>import('@/components/xueji')
      // component:require('@/components/Lichuli').default
    },
    {
      path:'/schoollist',
      name:'schoollist',
      component:()=>import('@/components/schoollist')
    },
    {
      path:'/xuejilist/:id',
      name:'xuejilist',
      component:()=>import('@/components/xuejilist')
    },
    {
      path:'/xj/:guid',
      name:'xj',
      component:()=>import('@/components/xjinfoPage')
    },
    {
      path:'/item/:id',
      name:'professor',
      component:()=>import('@/components/infoPage')
    },
    {
      path:'/v',
      name:'video',
      component: ()=>import('@/components/vi')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
