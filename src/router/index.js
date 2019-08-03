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
        }
      ]
    },
    {
      path: '*',
      component: () => import('@/views/Main.vue')
    }
  ]
})
