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
          component: () => import('@/views/home')
        }
      ]
    },
    {
      path: '*',
      component: () => import('@/views/Main.vue')
    }
  ]
})
