<template>
  <div>
    <TopicNavbar/>
    <!-- 左侧 -->
    <div>
      <!-- 主题列表 -->
      <Topic/>
      <div class = "inner">
        <TopList
         v-for = "item in list"
         :key = "item.id"
         :title = "item.title"
         :reply_count = "item.reply_count"
         :visit_count = "item.visit_count"
         :tab = "item.tab"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Topic from '@/components/Topic'
import TopicNavbar from '@/components/TopicNavbar'
import TopList from '@/components/Topic/TopList.vue'
import { getTopic } from '@/api'

export default {
  components: { Topic, TopicNavbar, TopList },
  data () {
    return {
      list: [] // 数据列表
    }
  },
  computed: {
    // 搜索内容
    searchText () {
      return this.$store.state.searchText
    }
  },
  created () {
    getTopic({ page: 1, tab: '', limit: 20 }).then((res) => {
      console.log(res) // 打印原数据
      this.list = res.data.data
      console.log(this.list) // 打印数据中data对象
    })
  },
  watch: {
    searchText (newVal) {
      this.search()
    }
  },
  methods: {
    search () {
      // TODO: 数据请求，获取数据
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
