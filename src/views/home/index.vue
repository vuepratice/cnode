<template>
  <div>
    <TopicNavbar/>
    <!-- 左侧 -->
    <div>
      <!-- 主题列表 -->
      <Topic/>
    </div>
  </div>
</template>

<script>
import Topic from '@/components/Topic'
import TopicNavbar from '@/components/TopicNavbar'
import { getTopic } from '@/api'

export default {
  components: { Topic, TopicNavbar },
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
      console.log(res)
      this.list = res
      console.log(this.list.data.data)
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
