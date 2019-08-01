<template>
  <div>
    home
    <div>
      <!-- 主题列表 -->
      <Topic/>
    </div>
    <div></div>
  </div>
</template>

<script>
import Topic from '@/components/Topic'
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
  methods: {
    search () {
      // 数据请求，获取数据
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
