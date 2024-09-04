import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [

    {
      path: '/',
      name: 'main',
      component: () => import(/* webpackChunkName: "introduce" */ '../components/index/main.vue')
    },
    {
      path:'/BaseLocation',
      name:'BaseLocation',
      component:()=>import('../components/index/BaseLocation.vue')
    },
    {
      path:'/datian',
      name:'datian',
      component:()=>import('../components/index/crop/datian.vue')
    },  {
      path:'/guadou',
      name:'guadou',
      component:()=>import('../components/index/crop/guadou.vue')
    },  {
      path:'/qiegua',
      name:'qiegua',
      component:()=>import('../components/index/crop/qiegua.vue')
    },  {
      path:'/yecai',
      name:'yecai',
      component:()=>import('../components/index/crop/yecai.vue')
    },
    {
      path:'/kuaigen',
      name:'kuaigen',
      component:()=>import('../components/index/crop/kuaigen.vue')
    },
    {
      path:'/guoshu',
      name:'guoshu',
      component:()=>import('../components/index/crop/guoshu.vue')
    },
    {
      path:'/baseland',
      name:'baseland',
      component:()=>import('../components/baseland/baselandinfo.vue')
    },
    {
      path:'/organization',
      name:'organization',
      component:()=>import('../components/organization/organization.vue')
    },
    {
      path:'/device',
      name:'device',
      component:()=>import('../components/device/device.vue')
    },
  ]
})

export default router
