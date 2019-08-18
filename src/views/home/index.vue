<template>
  <div>
    home
    <!-- 左侧 -->
      <!-- 主题列表 -->
      <Topic/>
      <!-- 方法一 -->
      <!-- <button @click="toDetail">详情</button> -->
      <!-- 方法二 -->
        <router-link :to="{path: '/detail', query: {id: 123}}">详情</router-link>
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
    },
    toDetail () {
      this.$router.push({path: '/detail', query: {id: 123}}) // 注意是router，path是路由，query就是传递什么参数
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
