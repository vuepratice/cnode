<template>
    <div class = "topic_list">
        <a class = "pull-left" href="#1"><img :src="avatar_url" :title="authorname"></a>
        <span class = "replay_count">{{reply_count}}/{{visit_count}}</span>
        <a class = "last_time" href="#2">1天前</a>
        <div>
            <span>{{tag}}</span>
            <a class = "topic_title" href="#3">{{title}}</a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TopList',
  props: ['title', 'reply_count', 'visit_count', 'tab', 'authorname', 'avatar_url'],
  data () {
    return {
      st: this.tab
    }
  },
  computed: {
    tag: function () {
      if (this.tab === 'share') {
        return '分享'
      } else if (this.tab === 'ask') {
        return '问答'
      } else if (this.tab === 'good') {
        return '精华'
      } else {
        return '其他'
      }
    }
  }
}
</script>

<style lang="scss" >
    .topic_list {
      position: relative;
      text-align: left;
      padding: 10px;
      font-size: 14px;
      background-color: #fff;
      overflow: hidden;
      line-height: 2em;
      .pull-left {
        float: left;
        cursor: pointer;
        img {
          width: 30px;
          height: 30px;
          border-radius: 3px;
          max-width: 100%;
          vertical-align: middle;
          border: 0;
        }
      }
      .replay_count {
        display: inline-block;
        width: 70px;
        text-align: center;
        float: left;
      }
      .last_time {
        color: #778087;
        display: inline-block;
        margin-right: 20px;
        font-size: 11px;
        float: right;
      }
      div {
        span {
          background-color: #e5e5e5;
          color: #999;
          padding: 2px 4px;
          border-radius: 3px;
          font-size: 12px;
        }
        .topic_title {
          color: #333;
          max-width: 70%;
          display: inline-block;
          vertical-align: middle;
          font-size: 16px;
          line-height: 30px;
          overflow: hidden;
        }
        .topic_title:visited {
          color: #888;
        }
      }
    }
</style>
