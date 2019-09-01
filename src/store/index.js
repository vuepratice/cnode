
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    searchText: '' // 顶部导航搜索内容
  },
  mutations: {
    // 设置搜索内容
    SET_SEARCHTEXT (state, text) {
      state.searchText = text
    }
  },
  actions: {
    goTop ({ state }, target) {
      let targetElm = document.querySelector(target || '#mainContainer')
      if (targetElm) {
        targetElm.scrollTop = 0
      }
    }
  },
  modules: {}
})

export default store
