<template>
  <div>
    <TopicNavbar @clickTab="changeTabData"/>
    <!-- 左侧 -->
    <div>
      <!-- 主题列表 -->
      <div class="inner">
        <transition name="fade">
          <Loading class="loading" v-if="isLoading"></Loading>
        </transition>
        <TopList :list="list"/>
      </div>
      <TopicPage :total-page="totalPage" :page="page" @clickPage="getPageData"/>
    </div>
  </div>
</template>

<script>
import Topic from '@/components/Topic'
import TopicNavbar from '@/components/TopicNavbar'
import TopicPage from '@/components/TopicNavbar/TopicPage.vue'
import TopList from '@/components/Topic/TopList.vue'
import Loading from '@/components/Loading'
import { getTopic } from '@/api'

// let top

export default {
  components: { Topic, TopicNavbar, TopList, TopicPage, Loading },
  data () {
    return {
      list: [], // 数据列表
      page: 1,
      totalPage: 10,
      limit: 20,
      tabTag: '', // 接收tab
      isLoading: true
    }
  },
  computed: {
    // 搜索内容
    searchText () {
      return this.$store.state.searchText
    }
  },
  created () {
    this.getListData()
  },
  watch: {
    searchText (newVal) {
      this.search()
    }
  },
  methods: {
    search () {
      // TODO: 数据请求，获取数据
    },
    // 根据tab值获取相应的tab的topic数据
    changeTabData (tab) {
      this.isLoading = true
      console.log(tab)
      this.tabTag = tab // 保存该tab，为下面翻页使用
      // this.page = 1 // 复位翻页插件（不可行，该变量指向是初始页码值）
      this.getListData()
    },
    // 利用方法封装请求数据部分
    getListData () {
      this.$store.dispatch('goTop')
      getTopic({ page: this.page, tab: this.tabTag, limit: this.limit }).then((res) => {
        this.list = res.data.data
        console.log(this.list)
        this.isLoading = false
      })
    },
    // 根据page值获取相应page的topic数据
    getPageData (data) {
      this.isLoading = true
      console.log(data.page)
      this.page = data.page
      this.getListData()
    }
  }
}
</script>

<style lang="scss" scoped>
  .inner {
    position: relative;
    .loading {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
</style>
