import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      component: () => import('@/pages/one'),
      meta: {
        title: '',
      }
    },
    {
      path: '/sec',
      component: () => import('@/pages/sec'),
      meta: {
        title: '',
      }
    },
  ]
})
