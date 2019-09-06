import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/views/Main.vue'),
      children: [
        {
          path: '',
          name: 'home',
          components: {
            default: () => import('@/views/home'),
            rightBar: () => import('@/views/rightBar')
          }
        },
        {
          path: '/API',
          name: 'API',
          components: {
            default: () => import('@/views/API'),
            rightBar: () => import('@/views/rightBar')
          }
        },
        {
          path: '/datails',
          name: 'datails',
          components: {
            default: () => import('@/views/Datails'),
            rightBar: () => import('@/views/rightBar')
          }
        },
        {
          path: '/signin',
          name: 'signin',
          components: {
            default: () => import('@/components/SignIn'),
            rightBar: () => import('@/views/rightBar')
          }
        }
      ]
    },
    {
      path: '*',
      component: () => import('@/views/Main.vue')
    }
  ]
})
