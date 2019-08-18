<template>
  <pager
    :total-page="totalPage"
    :init-page="page"
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
  methods: {
    goPage (data) {
      console.log(data)
      this.$emit('clickPage', data) // 向父组件传递点击的页数
    }
  }
}
</script>
