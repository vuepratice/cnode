// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import '@/styles/reset.css'

Vue.config.productionTip = false

// 定义全局的变量和方法，使用时，直接this.xxx
Vue.prototype.$name = 'test'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
