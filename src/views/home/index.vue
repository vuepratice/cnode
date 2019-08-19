<template>
  <div>
    <TopicNavbar @clickTab="getTabData"/>
    <!-- 左侧 -->
    <div>
      <!-- 主题列表 -->
      <div class="inner">
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
import { getTopic } from '@/api'

export default {
  components: { Topic, TopicNavbar, TopList, TopicPage },
  data () {
    return {
      list: [], // 数据列表
      page: 1,
      totalPage: 10,
      limit: 20,
      tabTag: '' // 接收tab
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
    getTabData (tab) {
      console.log(tab)
      this.tabTag = tab // 保存该tab，为下面翻页使用
      this.page = 1 // 复位翻页插件（不可行，该变量指向是初始页码值）
      this.getListData()
    },
    getListData () {
      getTopic({ page: this.page, tab: this.tabTag, limit: this.limit }).then((res) => {
        this.list = res.data.data
        console.log(this.list)
      })
    },
    // 根据page值获取相应page的topic数据
    getPageData (data) {
      console.log(data.page)
      this.page = data.page
      this.getListData()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
