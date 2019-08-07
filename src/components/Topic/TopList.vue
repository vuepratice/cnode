<template>
    <div class = "topic_list">
        <a href="#1"></a>
        <span>{{reply_count}}/{{visit_count}}</span>
        <a href="#2"></a>
        <div>
            <span>{{tag}}</span>
            <a href="#3">{{title}}</a>
            <span>{{st}}</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TopList',
  props: ['title', 'reply_count', 'visit_count', 'tab'],
  data () {
    return {
      st: this.tab
    }
  },
  computed: {
    tag: function () {
      if (this.tab === 'share') {
        this.tab = "分享"
        return this.tab
      }
    }
  }
}
</script>

<style>
    .topic_list {
        text-align: left;
    }
</style>
