<template>
  <pager
    :total-page="totalPage"
    :init-page="page"
    :show-jump="showJump"
    @go-page="goPage"></pager>
    <!-- s -->
</template>
<script>
import pager from 'vue-simple-pager'
export default {
  name: 'TopicPage',
  components: {'pager': pager},
  props: {
    totalPage: Number,
    page: Number
  },
  data () {
    return {
      showJump: false // 去掉插件page的go部分
    }
  },
  methods: {
    goPage (data) {
      console.log(data)
      this.$emit('clickPage', data) // 向父组件传递点击的页数
    }
  }
}
</script>
