<template>
  <div v-html="content.content"></div>
</template>

<script>
export default {
  data () {
    return {
      id: '',
      content: ''
    }
  },
  created () {
    this.content = this.$route.query.id
  }
}
</script>

<style>

</style>
