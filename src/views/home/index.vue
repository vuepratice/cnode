<template>
  <div>
    home
    <!-- 左侧 -->
    <div>
      <!-- 主题列表 -->
      <Topic/>
    </div>
  </div>
</template>

<script>
import Topic from '@/components/Topic'
import { getTopic } from '@/api'
export default {
  components: { Topic },
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
