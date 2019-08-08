<template>
    <div class = "topic_list">
        <a class = "author" href="#1"><img :src="avatar_url" :title="loginname"></a>
        <span class = "replay_count">{{reply_count}}/{{visit_count}}</span>
        <a class = "last_time" href="#2">{{reply_time|dispalyreplytime}}</a>
        <div>
            <span>{{tag}}</span>
            <a class = "toptic_title" :href="title_url">{{title}}</a>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
function replaylasttime (time) {
  let now = new Date().getTime()
  let oldtime = new Date(time).getTime()
  // console.log(now, oldtime)
  let diff = now - oldtime // 计算回复和现在时间差
  var result = ''
  let min = 1000 * 60
  let hour = min * 60
  let day = hour * 24
  let month = day * 30
  let year = month * 12
  let _year = diff / year // 换算成时、天、月、年
  let _month = diff / month
  let _day = diff / day
  let _hour = diff / hour
  let _min = diff / min
  if (_year >= 1) {
    result = ~~(_year) + '年前' // 两个波浪号表示返回整数
  } else if (_month >= 1) {
    result = ~~(_month) + '月前'
  } else if (_day >= 1) {
    result = ~~(_day) + '天前'
  } else if (_hour >= 1) {
    result = ~~(_hour) + '小时前'
  } else if (_min >= 1) {
    result = ~~(_min) + '分钟前'
  } else result = '刚刚'
  return result
}
Vue.filter('dispalyreplytime', function (value) {
  return replaylasttime(value)
})
export default {
  name: 'TopList',
  props: ['title', 'reply_count', 'visit_count',
    'tab', 'loginname', 'avatar_url', 'title_url', 'reply_time'],
  data () {
    return {
      st: this.tab
    }
  },
  computed: {
    tag: function () {
      // console.log(this.avatar_url)
      // console.log(this.reply_time)
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

<style lang="scss" socped>
    .topic_list {
        text-align: left;
        position: relative;
        padding: 10px;
        line-height: 2em;
        .author {
          display: inline-block;
          float: left;
            img {
              height: 30px;
              width: 30px;
              border-radius: 3px;
            }
        }
        .replay_count {
          display: inline-block;
          float: left;
          width: 70px;
          text-align: center;
          font-size: 14px;
          color: #b4b4b4;
          line-height: 2em;
        }
        .last_time {
          display: inline-block;
          float: right;
          font-size: 11px;
        }
        div {
          span {
            background-color: #e5e5e5;
            color: #999;
            padding: 2px 4px;
            border-radius: 3px;
            font-size: 12px;
          }
          .toptic_title {
            display: inline-block;
            font-size: 16px;
            color: #333;
            max-width: 70%;
            line-height: 30px;
            vertical-align: middle;
            white-space:nowrap; // 单行文本溢出以下三个结合使用，省略号代替
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .toptic_title:visited {
            color: #888;
          }
        }
    }
</style>
