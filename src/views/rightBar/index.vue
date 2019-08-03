<template>
  <div>
    <!-- 公共 -->
    <div>个人信息</div>

    <div v-if="publish()">发布话题</div>

    <div v-if="adList()">广告栏</div>
  </div>
</template>

<script>
// 右侧栏，根据不同到路由，显示不同到模块
import { oneOf } from '@/utils'
import List from './config'
export default {
  computed: {
    routeName () {
      return this.$route.name
    }
  },
  methods: {
    publish () {
      return oneOf(this.routeName, List.pubList)
    },
    adList () {
      return oneOf(this.routeName, List.adList)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
